module LiquidFilters

  # Returns the tail of the array
  def tail(input)
    input[1..-1]
  end

  # Takes at most max elements from array
  def take(input, max)
    if max > 0
      input[0..(max - 1)]
    else
      []
    end
  end

  def min_of(input, other)
    [input, other].min
  end

end

Liquid::Template.register_filter(LiquidFilters)
