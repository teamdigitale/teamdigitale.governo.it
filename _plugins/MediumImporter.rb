#
# Custom generator for importing Medium posts.
# This code runs during jekyll build step.
# Inspired by http://stackoverflow.com/questions/27828996/is-there-a-way-to-parse-external-rss-feeds-with-jekyll
#
# TODO replace RSS feed with JSON, see:
# http --json https://medium.com/team-per-la-trasformazione-digitale/archive
#

require 'rest_client'
require 'json'

class MediumImporter < Jekyll::Generator
  safe true
  priority :high
  def generate(site)

    feed_url = Jekyll.configuration({})['medium_archive_url']
    puts "[*] Fetching Medium feed from: " + feed_url
    # ENGLISH version
    feed_url_eng = Jekyll.configuration({})['medium_archive_url_eng']
    puts "[*] Fetching Medium feed from: " + feed_url_eng

    feed_res = RestClient.get feed_url, {:accept => :json}
    feed_res_eng = RestClient.get feed_url_eng, {:accept => :json}

    # removes anti json-hijacking prefix
    feed_json_str = "{" + feed_res.to_str.partition("{").last
    feed_json_str_eng = "{" + feed_res_eng.to_str.partition("{").last

    # parse json
    feed_json = JSON.parse(feed_json_str)
    feed_json_eng = JSON.parse(feed_json_str_eng)

    posts = feed_json['payload']['references']['Post'].values
    posts_eng = feed_json_eng['payload']['references']['Post'].values

    puts "Total italian posts fetched: " + posts.size.to_s
    puts "Total english posts fetched: " + posts_eng.size.to_s

    # Let's merge ita and eng posts
    posts.push(*posts_eng)

    posts.size > 0 or die("No posts fetched")

    posts = posts.sort_by { |item| item['latestPublishedAt'].to_i }.reverse

    post_url_base = "https://medium.com/" + feed_json['payload']['collection']['slug'] + "/"

    # Create a new on-the-fly Jekyll collection called "medium_feed"
    jekyll_coll = Jekyll::Collection.new(site, 'medium_feed')
    site.collections['medium_feed'] = jekyll_coll

    # Add fake virtual documents to the collection
    posts.each do |item|

      path = "_rss/" + item['id']
      path = site.in_source_dir(path)
      doc = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll
      })

      # Extract article attributes
      # TODO more sanity checks
      doc.data['medium_title'] = item['title']
      doc.data['medium_subtitle'] = item['content']['subtitle']
      doc.data['meta_description'] = item['content']['metaDescription']
      doc.data['medium_url'] = post_url_base + item['uniqueSlug']
      doc.data['medium_tags'] = item['virtuals']['tags']
      doc.data['medium_preview_image_id'] = item['virtuals']['previewImage']['imageId']
      doc.data['medium_post_id'] = item['id']
      doc.data['medium_detected_lang'] = item['detectedLanguage']
      doc.data['medium_slug'] = item['slug']
      doc.data['medium_published_at'] = item['latestPublishedAt']
      doc.data['medium_firstpublished_at'] = item['firstPublishedAt']
      doc.data['medium_created_at'] = item['createdAt']
      doc.data['medium_tagsarray'] = []
      if item['virtuals']['tags']!= nil
        item['virtuals']['tags'].each{ |x| doc.data['medium_tagsarray'].push(x['slug']) }
      end

      jekyll_coll.docs << doc
    end
  end
end
