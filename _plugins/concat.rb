module Jekyll
  module ConcatFilter
    # Public: Combines two arrays
    #
    # first_array - The initial Array to use
    # second_array - The Array to add
    #
    # Examples
    #
    #   {{ site.data.disney_movies | concat: site.data.pixar_movies }}
    #   # => ['Frozen', 'Up']
    #
    # Returns a new Array
    def concat(first_array, second_array)
      first_array + second_array
    end
  end
end

Liquid::Template.register_filter(Jekyll::ConcatFilter)