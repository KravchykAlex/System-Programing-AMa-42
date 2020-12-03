from collections import deque
queue = []
n = int(input("Enter number of elements : "))
for i in range(0, n):
    ele = input()
    queue.append(ele)
print("Initial queue")
print(queue)
print("\nElements dequeued from the queue")
for i in range(0, n):
    print(queue.pop(0))
print("\nQueue after removing elements")
print(queue)