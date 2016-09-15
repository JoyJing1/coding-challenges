# Find and print peak element (assume all elements
# before and after array are -Infinity)
# If there ae multiple local peaks, print one

def peak_element(arr):
    if len(arr) == 0:
        return "No elements in array"
    elif len(arr) == 1:
        return len(arr) - 1
    else:
        if arr[0] > arr[1]:
            return 0
        elif arr[-1] > arr[-2]:
            return len(arr) - 1
        else:
            for i in xrange(len(arr)-2):
                if arr[i+1] > arr[i] and arr[i+1] > arr[i+2]:
                    return i+1
    return "No peak element"

print(peak_element([1,2,3,2]))
print(peak_element([1,2,1,2]))
print(peak_element([1,2,1,-1]))
