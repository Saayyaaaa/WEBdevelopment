def min(a, b, c, d):
    if a<=b and a<=c and a<=d:
        return a
    elif b<=a and b<=c and b<=d:
        return b
    elif c<=a and c<=b and c<=d:
        return b
    else:
        return d

a, b, c, d = map(int, input().split())
print(min(a, b, c, d))