module LiquidFilters
  require 'date'

  # Returns the tail of the array
  def tail(input)
    input[1..-1]
  end

  # Takes at most max elements from array
  def take(input, max)
    if input!= nil and max > 0
      input[0..(max - 1)]
    else
      []
    end
  end

  def min_of(input, other)
    [input, other].min
  end

  # Sorts array of objects by surname, requires field name that
  # contains the full name
  def sort_by_surname(input, fullname_field)
    input.sort_by { |i| i[fullname_field].downcase.split(/ /)[1] }
  end

  # Converts an integer to a string containing commas every three digits.
  # Optionally supports a delimiter override for commas.
  def intcomma(value, delimiter=".")
      begin
        orig = value.to_s
        delimiter = delimiter.to_s
      rescue Exception => e
        puts "#{e.class} #{e}"
        return value
      end
      
      copy = orig.gsub(/(\d)(?=(\d{3})+(?!\d))/, "\\1#{delimiter}")
      orig == copy ? copy : intcomma(copy, delimiter)
    end

  def last_modified_sort(collection)
    collection.sort_by do |el|
      Date.parse(el.data['last_modified_at'].to_s, '%d-%m-%Y')
    end
  end

end
Liquid::Template.register_filter(LiquidFilters)
