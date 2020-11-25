
DICTIONARY = {

}


def add_word(w, t_r):
    DICTIONARY[w] = t_r


def del_word(w):
    del DICTIONARY[w]


def del_translation(w):
    DICTIONARY[w] = ''


add_word("add", "додати")
add_word("remove", "прибрати")
print(DICTIONARY)

del_word("remove")
print(DICTIONARY)

del_translation("add")
print(DICTIONARY)