# REGEX
# MATCH REPEAT OCCURRENCES OF SAME SUBSTRING

# def song_decoder(song)
#   song.gsub!(/WUB/, " ")
#   puts song.gsub!(/\s+/, " ").strip
# end
#
# def song_decoder(song)
#   song.gsub(/(WUB)+/, ' ').strip
# end
#
# song_decoder("AWUBBWUBC")
# # , "A B C","WUB should be replaced by 1 space");
# song_decoder("AWUBWUBWUBBWUBWUBWUBC")
# # , "A B C","multiples WUB should be replaced by only 1 space");
# song_decoder("WUBAWUBBWUBCWUB")
# # , "A B C", "heading or trailing spaces should be removed");

#
# def sum_consecutives(s)
#     sums = [s.first]
#     curr_num = s.first
#
#     s.drop(1).each do |num|
#       if num == curr_num
#         sums[-1] += num
#       else
#         sums.push(num)
#         curr_num = num
#       end
#     end
#
#     sums
# end
#
# def sum_consecutives(s)
#   s.chunk {|n| n}.map(&:last).map {|group| group.reduce(:+)}
# end
#
# p sum_consecutives([1,4,4,4,0,4,3,3,1])
# # ),[1,12,0,4,6,1], "on list [1,4,4,0,4,3,3,1] you get ")
# p sum_consecutives([1,1,7,7,3])
# # ),[2,14,3], "on list [1,1,7,7,3] you get ")
# p sum_consecutives([-5,-5,7,7,12,0])
# # ),[-10,14,12,0], "on list [-5,-5,7,7,12,0] you get ")


# def goodVsEvil(good, evil)
#   good = good.split(" ").map { |el| el.to_i }
#   evil = evil.split(" ").map { |el| el.to_i }
#   good_val = [1, 2, 3, 3, 4, 10]
#   evil_val = [1, 2, 2, 2, 3, 5, 10]
#
#   good_sum = (0...good.length).inject(0) { |sum, i| sum + good[i]*good_val[i] }
#   evil_sum = (0...evil.length).inject(0) { |sum, i| sum + evil[i]*evil_val[i] }
#
#   if good_sum == evil_sum
#     p 'Battle Result: No victor on this battle field'
#   elsif good_sum > evil_sum
#     p 'Battle Result: Good triumphs over Evil'
#   else
#     p 'Battle Result: Good triumphs over Evil'
#   end
# end
#
# goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')
#  # == 'Battle Result: No victor on this battle field', 'Should be a tie' )
# goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
#  # == 'Battle Result: Good triumphs over Evil', 'Good should triumph' )
# goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
#  # == 'Battle Result: Good triumphs over Evil', 'Good should triumph' )

# LEAST COMMON MULTIPLE - CALC NUMBER OF LAPS EACH JOGGER
# MUST RUN BEFORE THEY MEET UP
# SAME RUNNING SPEED

# def nbr_of_laps(x, y)
#   #your code here
#   total = x.lcm(y)
#   [total/x, total/y]
# end

# BUILD PASCAL'S TRIANGLE

# def pascal(depth)
#   return [[1], [1, 1]].take(depth) if depth <= 2
#
#   prev = pascal(depth-1)
#   new_row = [1]
#
#   (1...prev.last.length).each do |i|
#     new_row.push(prev.last[i-1] + prev.last[i])
#   end
#
#   new_row.push(1)
#   prev.push(new_row)
# end
#
#
# p pascal(1)
# # , [[1]]);
# p pascal(5)
# # , [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);

# TODO: complete this class

class PaginationHelper

  # The constructor takes in an array of items and a integer indicating how many
  # items fit within a single page
  def initialize(collection, items_per_page)
    @collection = collection
    @items_per_page = items_per_page
  end

  # returns the number of items within the entire collection
  def item_count
    @collection.count
  end

  # returns the number of pages
  def page_count
    if item_count % @items_per_page == 0
      item_count / @items_per_page
    else
      1 + (item_count / @items_per_page)
    end
  end

  # returns the number of items on the current page. page_index is zero based.
  # this method should return -1 for page_index values that are out of range
  def page_item_count(page_index)
    return -1 if page_index < 0
    return -1 if page_index >= page_count
    if page_index < (page_count-1)
      @items_per_page
    else
      this_page = item_count % @items_per_page
      this_page == 0 ? @items_per_page : this_page
    end
  end

  # determines what page an item is on. Zero based indexes.
  # this method should return -1 for item_index values that are out of range
  def page_index(item_index)
    return -1 if item_index < 0
    return -1 if item_index >= item_count
    item_index / @items_per_page
  end
end

helper = PaginationHelper.new(['a','b','c','d','e','f'], 4)
p helper.page_count # should == 2
p helper.item_count # should == 6
p helper.page_item_count(0)  # should == 4
p helper.page_item_count(1) # last page - should == 2
p helper.page_item_count(2) # should == -1 since the page is invalid

# page_index takes an item index and returns the page that it belongs on
p helper.page_index(5) # should == 1 (zero based index)
p helper.page_index(2) # should == 0
p helper.page_index(20) # should == -1
p helper.page_index(-10) # should == -1 because negative indexes are invalid
