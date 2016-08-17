### SOLVE ME FIRST ###
# def solveMeFirst (a, b)
#   # Hint: Type return a+b below
#
# end
# val1 = gets.to_i
# val2 = gets.to_i
# sum = solveMeFirst(val1,val2)
# print (sum)


### SIMPLE ARRAY SUM
# n = gets.strip.to_i
# arr = gets.strip
# arr = arr.split(' ').map(&:to_i)

### COMPARE THE TRIPLETS
# a0,a1,a2 = gets.strip.split(' ')
# a0 = a0.to_i
# a1 = a1.to_i
# a2 = a2.to_i
# b0,b1,b2 = gets.strip.split(' ')
# b0 = b0.to_i
# b1 = b1.to_i
# b2 = b2.to_i


### A VERY BIG SUM
# n = gets.strip.to_i
# arr = gets.strip
# arr = arr.split(' ').map(&:to_i)
# sum = arr.inject { |sum, el| sum + el }
# puts sum


###DIAGONAL DIFFERENCE
# n = gets.strip.to_i
# a = Array.new(n)
# for a_i in (0..n-1)
#     a_t = gets.strip
#     a[a_i] = a_t.split(' ').map(&:to_i)
# end


### PLUS MINUS
# n = gets.strip.to_i
# arr = gets.strip
# arr = arr.split(' ').map(&:to_i)

### STAIRCASE
# n = gets.strip.to_i
# (1..n).each do |i|
#   print " "*(n-i)
#   puts "#"*i
# end


### TIME CONVERSION
# time = gets.strip
# time_of_day = time[-2]
# hour = time.slice(0,2).to_i
#
# if time_of_day == "A"
#     if hour == 12
#         puts "00" + time.slice(2, 6)
#     else
#         puts time.slice(0, 8)
#     end
# else
#     hour += 12 if hour < 12
#     puts hour.to_s + time.slice(2, 6)
# end

## MEANS YOU NEED TO CONVERT STRING --> INTEGER
# ': bad value for range (ArgumentError)

### CIRCULAR ARRAY ROTATION

# n, k, q = gets.strip.split(" ").map { |el| el.to_i }
# arr = gets.strip.split(" ")
#
# (1..q).each do |i|
#     m = gets.strip.to_i
#     puts arr[(m + k) % n]
# end
#
# 3 2 3
# 1 2 3
# 0
# 1
# 2


# PROFESSOR CANCEL CLASS IF < K STUDENTS ONTIME
# t = gets.strip.to_i
# for a0 in (0..t-1)
#     n,k = gets.strip.split(' ')
#     n = n.to_i
#     k = k.to_i
#     a = gets.strip
#     a = a.split(' ').map(&:to_i)
#
#     ontime = a.select { |time| time <= 0 }
#     puts (ontime.length) >= k ? "NO" : "YES"
# end



# EQUAL STACKS

# n1,n2,n3 = gets.strip.split(' ')
# n1 = n1.to_i
# n2 = n2.to_i
# n3 = n3.to_i
# h1 = gets.strip
# h1 = h1.split(' ').map(&:to_i)
# h2 = gets.strip
# h2 = h2.split(' ').map(&:to_i)
# h3 = gets.strip
# h3 = h3.split(' ').map(&:to_i)
#
# height1 = h1.inject(:+)
# height2 = h2.inject(:+)
# height3 = h3.inject(:+)
#
# until height1 == height2 && height1 == height3
#     if height1 == [height1, height2, height3].max
#         top1 = h1.shift()
#         height1 -= top1
#     elsif height2 == [height1, height2, height3].max
#         top2 = h2.shift()
#         height2 -= top2
#     else
#         top3 = h3.shift()
#         height3 -= top3
#     end
# end
#
# puts height1


# CUT THE STICKS

# n = gets.strip.to_i
# arr = gets.strip
# arr = arr.split(' ').map(&:to_i)
#
# until arr.empty?
#     puts arr.length
#     shortest = arr.min
#     arr = arr.map do |stick|
#         stick -= shortest
#     end
#     arr.delete_if {|el| el <= 0}
# end
#
#

# SUM OF NUMBERS
# def sum(numbers)
#     numbers.inject(:+)
# end


# INSERTION SORT - PART 1
# def  insertionSort( ar)
#     e = ar.last
#     (ar.length-2).downto(0) do |i|
#         if ar[i] > e
#             ar[i+1] = ar[i]
#             puts ar.join(" ")
#         else
#             ar[i+1] = e
#             puts ar.join(" ")
#             return
#         end
#     end
#     ar[0] = e
#     puts ar.join(" ")
# end
#
# # count = gets.to_i
# # ar = gets.strip.split.map {|i| i.to_i}
#
# ar = [1,3,6,0]
# insertionSort( ar )

# INSERTION SORT - PART 2
# def  insertionSort(ar)
#
#     ar.each_with_index do |el, i|
#         next if i == 0
#         puts ar.join(" ") if i > 1
#
#         found = false
#         (i-1).downto(0) do |n|
#             if ar[n] >= el
#                 ar[n+1] = ar[n]
#             else
#                 ar[n+1] = el
#                 found = true
#             end
#             break if found
#         end
#         ar[0] = el unless found
#
#     end
#     puts ar.join(" ")
# end
#
# # cnt = gets.to_i
# # ar = gets.strip.split(" ").map! {|i| i.to_i}
#
# ar = [1,4,3,5,6,2]
# # ar = [1,4,3,5,6,3]
# # ar = [1,4,3,5,6,0]
# insertionSort(ar)

#
#
# PRINT ARRAY IN REVERSE
# n = gets.strip.to_i
# arr = gets.strip
# arr = arr.split(' ').map(&:to_i)
#
# puts arr.reverse.join(" ")


# 2D ARRAY - DS -- HOURGLASS
arr = Array.new(6)
for arr_i in (0..6-1)
    arr_t = gets.strip
    arr[arr_i] = arr_t.split(' ').map(&:to_i)
end

max = nil
(1..4).each do |i|
    (1..4).each do |j|
        sum = arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j] + arr[i+1][j-1] + arr[i+1][j] + arr[i+1][j+1]
        max = sum if max.nil? || sum > max
    end
end

puts max
