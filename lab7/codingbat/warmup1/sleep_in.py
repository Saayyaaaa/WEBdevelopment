def sleep_in(weekday, vacation):
    return not weekday or vacation

res = sleep_in(False, False)
print(res)