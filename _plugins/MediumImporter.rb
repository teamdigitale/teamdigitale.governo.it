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

    feed_res = RestClient.get feed_url, {:accept => :json}

    # removes anti json-hijacking prefix
    feed_json_str = "{" + feed_res.to_str.partition("{").last

    # parse json
    feed_json = JSON.parse(feed_json_str)

    posts = feed_json['payload']['references']['Post'].values
    puts "Total posts fetched: " + posts.size.to_s

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
      doc.data['medium_tags'] = item['tags']
      doc.data['medium_preview_image_id'] = item['virtuals']['previewImage']['imageId']
      doc.data['medium_post_id'] = item['id']
      doc.data['medium_detected_lang'] = item['detectedLanguage']
      doc.data['medium_slug'] = item['slug']
      doc.data['medium_published_at'] = item['latestPublishedAt']

      jekyll_coll.docs << doc
    end
  end
end
