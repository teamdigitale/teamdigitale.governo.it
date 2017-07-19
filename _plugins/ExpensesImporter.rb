#
# Custom generator for importing team expenses.
# This code runs during jekyll build step.
# Inspired by http://stackoverflow.com/questions/27828996/is-there-a-way-to-parse-external-rss-feeds-with-jekyll
#

require 'rest_client'
require 'csv'

class ExpensesImporter < Jekyll::Generator
  safe true
  priority :high
  def generate(site)

    feed_url = ENV['TEAM_EXPENSES_CSV_URL']
    puts "[*] Fetching expenses feed"

    feed_res = RestClient.get feed_url

    # Create a new on-the-fly Jekyll collection called "team_expenses"
    jekyll_coll = Jekyll::Collection.new(site, 'team_expenses')
    site.collections['team_expenses'] = jekyll_coll

    doc_id = 1
    CSV.parse(
      feed_res,
      :headers => true
    ) do |item|

      path = "_rss/expenses-" + doc_id.to_s
      path = site.in_source_dir(path)

      doc = Jekyll::Document.new(path, {
        site: site,
        collection: jekyll_coll
      })

      item.each do |k, v|
        doc.data[k] = v
      end

      jekyll_coll.docs << doc

      doc_id = doc_id + 1
    end

  end
end
