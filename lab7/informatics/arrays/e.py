n = int(input())
arr = list(map(int, input().split()))
res = False
for i in range(1, len(arr)):
    if arr[i-1] == arr[i]:
        res = True
        break
print("Yes" if res else "NO")
