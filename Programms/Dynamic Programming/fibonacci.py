def fibonacci(n):
    if n < 1:
        return 0

    elif n == 1:
        return 1

    elif n == 2:
        return 1

    return fibonacci(n-1)+fibonacci(n-2)


n = 8
fib_number = fibonacci(n)
print(f"Fibonacci at {n} => {fib_number}")

