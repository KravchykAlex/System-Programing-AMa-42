package com.lnu.home;

public class BinarySearch {

    public int[] numbers;

    public BinarySearch(int[] numbers) {
        this.numbers = numbers;
    }

    public int findElement(int key, int left, int right) {

        int middle = (right + left) / 2;
        if (middle % 1 != 0)//int check
            middle -= 0.5;

        if (numbers[middle] == key) {
            return middle;
        }
        if (numbers[middle] < key) {
            return findElement(key, middle, right);
        }
        if (numbers[middle] > key) {
            return findElement(key, left, middle);
        }

        return -1;
    }

}
