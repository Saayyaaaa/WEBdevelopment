n = int(input())
arr = list(map(int, input().split()))
cnt = 0
for i in range(1, len(arr)):
    if arr[i-1] < arr[i]:
        cnt+=1
print(cnt)
