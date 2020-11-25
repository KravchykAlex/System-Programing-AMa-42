def Fibonacci(n):
    if n < 0:
        print("Incorrect input")

    elif n == 1:
        return 1

    elif n == 2:
        return 2

    else:
        return Fibonacci(n - 1) + Fibonacci(n - 2)
a = int(input("Enter number of element:"))

print(Fibonacci(a))