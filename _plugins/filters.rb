module LiquidFilters

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

end

Liquid::Template.register_filter(LiquidFilters)
