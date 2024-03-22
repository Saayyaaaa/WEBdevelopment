a = int(input())
b = int(input())

for i in range(a, b):
    if i**0.5 % 1.0 == 0:
        print(i)