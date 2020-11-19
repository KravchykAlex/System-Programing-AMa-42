package pack;

import java.util.Arrays;
import java.util.Scanner;

import static pack.DictionaryExample.printDictionary;
import static pack.EgyptianFraction.printEgyptian;
import static pack.FriendPairs.countFriendsPairings;
import static pack.FriendPairs.dp;
import static pack.InterpolationSearch.interpolationSearch;
import static pack.MergeSort.printArray;

public class Main {
    private static Scanner input = new Scanner(System.in);

    private static void printMenu(){
        System.out.println("\nMenu:\n");
        System.out.println("'1' - MergeSort");
        System.out.println("'2' - InterpolationSearch");
        System.out.println("'3' - Friend pairs");
        System.out.println("'4' - Dictionary");
        System.out.println("'5' - Egyptian Fraction");
        System.out.println("'Q' - Exit");
        System.out.print("Please, select menu point: ");
    }

    private static void outputMenu(){
        boolean exit = true;
        while (exit) {
            printMenu();
            switch (input.next()) {
                case "1": {
                    printSort();
                    break;
                }
                case "2": {
                    printSort();
                    break;
                }
                case "3": {
                    printFriendPairs();
                    break;
                }
                case "4": {
                    printDict();
                    break;
                }
                case "5": {
                    printEgyptianFraction();
                    break;
                }
                case "Q": {
                    exit = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    private static void printSort(){
        int arr[] = { 12, 11, 13, 5, 6, 7 };

        System.out.println("\nGiven array is ");
        printArray(arr);

        MergeSort ob = new MergeSort();
        ob.sort(arr, 0, arr.length - 1);

        System.out.println("\nSorted array is ");
        printArray(arr);
    }

    private static void printSearch(){
        int arr[] = {2, 3, 4, 10, 40};

        System.out.println("\nInput array: " + Arrays.toString(arr));

        int n = arr.length;


        int x = 10;
        System.out.println("\nInput search element: " + x);
        int index = interpolationSearch(arr, 0, n - 1, x);

        if (index != -1)
            System.out.println("\nNumber " + x + " is at index " + index);
        else
            System.out.println("Element not found.");
    }

    private static void printFriendPairs(){
        for (int i = 0; i < 1000; i++)
            dp[i] = -1;
        int n = 3;
        System.out.println("\nInput: "+n);
        System.out.println("Output: "+countFriendsPairings(n));
    }

    private static void printDict(){
        printDictionary();
    }

    private static void printEgyptianFraction(){
        int nr = 6, dr = 14;
        System.out.print("\nEgyptian Fraction Representation of "
                + nr + "/" + dr + " is ");
        printEgyptian(nr, dr);
    }

    public static void main(String[] args) {
        outputMenu();
    }
}
