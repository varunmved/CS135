#recursive descent recognizer psuedocode
#Python styled psuedocode

def start():
    exp = raw_input()
    if token <>:
        throw Error

def exp():
    term()
    while token == '+' or token == '-':
        lex
        term()

def term():
    factor()
    while token == '*' or token == '/':
        lex
        factor()

def factor():
    if token = '(':
        lex
        exp()
        if token == ')':
            lex
        else:
            throw error
    else:
        digit()

def digit():
    if token in [0,1,2,3]:
        lex
    else:
        throw error



