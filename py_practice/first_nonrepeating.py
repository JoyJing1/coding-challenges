def first_nonrepeating(arr):
    seen = {}

    for el in arr:
        if el in seen:
            seen[el] += 1
        else:
            seen[el] = 1

    for el in arr:
        if seen[el] == 1:
            return el
    return "All characters repeat"

print(first_nonrepeating([1,2,3,1]))
print(first_nonrepeating([1,2,3,1,2,3]))
print(first_nonrepeating([1,2,3,3,2]))
