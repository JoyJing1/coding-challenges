# Given a sorted integer array without duplicates,
# return the summary of its ranges for consecutive numbers.

def range(arr):
    ranges = []
    start = null
    last = null

    for el in arr:
        if start == null:
            start = el
            last = el
        elif el - last == 1:
            last = el
        else:
            result = start
            if last > start:
                result += "->" + last
            ranges.append(result)
            start = el
            last = el

    if start != null:
        result = start
        if last > start:
            result += "->" + last
        ranges.append(result)
        
    return result

print(range([0,1,2,4,5,7]))
