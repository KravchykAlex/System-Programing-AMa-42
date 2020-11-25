package com.lnu.home;

public class QuickSort {

    public int[] array;

    public QuickSort(int[] array) {
        this.array = array;
    }

    public int quickSort(int[] array, int first, int last) {
        if (first < last) {
            int point = partition(array, first, last);

            quickSort(array, first, point - 1);

            quickSort(array, point + 1, last);
        }
        return 0;
    }

    public int partition(int[] array, int first, int last) {
        int endOfArray = array[last];

        int swapIndex = first - 1;

        for (int i = first; i < last; i++) {
            if (array[i] < endOfArray) {
                swapIndex++;

                int tempPosition = array[swapIndex];
                array[swapIndex] = array[i];
                array[i] = tempPosition;
            }
        }
        int tempPosition = array[swapIndex + 1];
        array[swapIndex + 1] = array[last];
        array[last] = tempPosition;

        return swapIndex + 1;
    }

    public void printArray() {
        System.out.println();
        System.out.print("Sorted Array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
    }

}
