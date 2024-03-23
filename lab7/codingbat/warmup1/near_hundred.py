def near_hundred(n):
    return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

res = near_hundred(93)
print(res)