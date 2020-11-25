def partition(arr, low, high):
    i = (low - 1)
    pivot = arr[high]

    for j in range(low, high):

        if arr[j] <= pivot:
            i = i + 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1


def quick_sort(arr, l, h):

    if l < h:
        pi = partition(arr, l, h)

        quick_sort(arr, l, pi-1)
        quick_sort(arr, pi+1, h)


arr = [10, 16, 8, 12, 15, 6, 3, 9, 5, 1]
n = len(arr)
quick_sort(arr, 0, n - 1)
print("Sorted array:")
print(arr)
