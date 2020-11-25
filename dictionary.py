def add_word(w, t_r):
    DICTIONARY[w] = t_r


def del_word(w):
    del DICTIONARY[w]


def del_translation(w):
    DICTIONARY[w] = ''


DICTIONARY = {
}

answer = 0
while answer != '-1':

    print("1: Add word\n2: Delete word\n3: Delete translation\n4: Show dict\n-1: Exit")
    answer = input("Answer: ")
    if answer == '1':
        add_word(input("Add word:"), input("Add translation:"))
    if answer == '2':
        del_word(input("Delete word:"))
    if answer == '3':
        del_translation(input("Delete translation:"))
    if answer == '4':
        print(DICTIONARY)



