package com.lnu.home;

public class Fibonacci {

    public int[] fiboRow;
    public int fiboIndex;

    public Fibonacci(int rowElementIndex) {
        this.fiboRow = new int[rowElementIndex];
        this.fiboIndex = rowElementIndex;
    }

    public void findFiboNumber() {
        if (fiboIndex < 0) {
            System.out.println("Man STOP doing that shit!");
        } else if (fiboIndex == 0) {
            System.out.println("Your number is " + 0);
        } else if (fiboIndex == 1) {
            fiboRow[0] = 1;
            System.out.println("your number is " + fiboRow[0]);
        } else if (fiboIndex == 2) {
            fiboRow[1] = 1;
            System.out.println("your number is " + fiboRow[1]);
        } else {
            fiboRow[0] = 1;
            fiboRow[1] = 1;
            for (int i = 2; i < fiboIndex; i++) {
                fiboRow[i] = fiboRow[i - 1] + fiboRow[i - 2];
            }
            System.out.println("your number is " + fiboRow[fiboIndex - 1]);
        }
        System.out.println();
        for (int i = 0; i < fiboIndex; i++) {
            System.out.print(fiboRow[i]+ " ");
        }
    }
}
