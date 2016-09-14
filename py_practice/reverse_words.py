def reverse(sentence):
    words = sentence.split(" ")
    words.reverse()
    return " ".join(words)

print(reverse("Hello Mr. Darcy, my name is Jane"))
