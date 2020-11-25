def binary_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high:

        mid = (high + low) // 2

        if arr[mid] < x:
            low = mid + 1

        elif arr[mid] > x:
            high = mid - 1

        else:
            return mid

    return -1


# Test array
arr = [2, 4, 10, 14, 40]
x = 10

# Function call
result = binary_search(arr, x)
print(f"{x} at index {result}")
