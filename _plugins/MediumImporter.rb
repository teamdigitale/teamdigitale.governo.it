#
# Custom generator for exposing the archived Medium posts as a Jekyll
# collection. The metadata was recovered from the gh-pages history through
# commit f30b13b9362b6ccf62a671e78bee979816317b55 and is committed to
# _data/medium_posts.json, so builds do not depend on Medium's discontinued
# JSON endpoint.

class MediumImporter < Jekyll::Generator
  safe true
  priority :high
  def generate(site)
    posts = site.data['medium_posts'] || []
    raise "No archived Medium posts found in _data/medium_posts.json" if posts.empty?

    puts "[*] Loading " + posts.size.to_s + " archived Medium posts"

    # Create a new on-the-fly Jekyll collection called "medium_feed"
    jekyll_coll = Jekyll::Collection.new(site, 'medium_feed')
    site.collections['medium_feed'] = jekyll_coll

    # Add fake virtual documents to the collection
    posts.each do |item|

      path = "_rss/" + item['medium_post_id']
      path = site.in_source_dir(path)
      doc = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll
      })

      item.each { |key, value| doc.data[key] = value }

      jekyll_coll.docs << doc
    end
  end
end
