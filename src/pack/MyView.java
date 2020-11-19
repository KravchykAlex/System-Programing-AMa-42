package pack;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

import static pack.BracketBalancing.swapCount;
import static pack.BucketSort.bucketSort;
import static pack.Fibonacci.fib;
import static pack.JumpSearch.jumpSearch;
import static pack.QueueExample.printQueue;

public class MyView {
    private Map<String, String> menu;
    private Map<String, Printable> methodsMenu;
    private static Scanner input = new Scanner(System.in);

    public MyView() {
        setMenu();

        methodsMenu = new LinkedHashMap<>();
        methodsMenu.put("1", this::pressButton1);
        methodsMenu.put("2", this::pressButton2);
        methodsMenu.put("3", this::pressButton3);
        methodsMenu.put("4", this::pressButton4);
        methodsMenu.put("5", this::pressButton5);
    }

    private void setMenu(){
        menu = new LinkedHashMap<>();

        menu.put("1", "  1 - Bucket sort");
        menu.put("2", "  2 - Jump search");
        menu.put("3", "  3 - Fibonacci");
        menu.put("4", "  4 - Queue");
        menu.put("5", "  5 - Bracket balancing");
        menu.put("Q", "  Q - exit");
    }

    private void pressButton1() {
        float arr[] = {(float) 0.897, (float) 0.565,
                (float) 0.656, (float) 0.1234,
                (float) 0.665, (float) 0.3434};

        int n = arr.length;
        System.out.println("\nInput array: "+ Arrays.toString(arr));
        bucketSort(arr, n);

        System.out.print("\nSorted array: ");
        for (float el : arr) {
            System.out.print(el + " ");
        }
    }

    private void pressButton2() {
        int arr[] = {0, 1, 1, 2, 3, 5, 8, 13, 21,
                34, 55, 89, 144, 233, 377, 610};
        int x = 55;
        System.out.println("\nInput: "+Arrays.toString(arr));

        int index = jumpSearch(arr, x);

        System.out.println("\nNumber " + x +
                " is at index " + index);
    }

    private void pressButton3() {
        int arr[] = {0,1,1,2,3,5,8,13,21,34,55};
        System.out.println("\nFibonacci: "+Arrays.toString(arr));

        int n = 3;
        System.out.println("Input position: "+ n);

        System.out.println("Number "+fib(n)+" is at index "+n);
    }

    private void pressButton4() {
        printQueue();
    }

    private void pressButton5(){
        String s = "[]][][";
        System.out.println(s);
        System.out.println(swapCount(s) );

        s = "[[][]]";
        System.out.println(s);
        System.out.println(swapCount(s) );
    }

    //-------------------------------------------------------------------------

    private void outputMenu() {
        System.out.println("\nMENU:");
        for (String str : menu.values()) {
            System.out.println(str);
        }
    }

    public void show() {
        String keyMenu;
        do {
            outputMenu();
            System.out.print("Please, select menu point: ");
            keyMenu = input.nextLine().toUpperCase();
            try {
                methodsMenu.get(keyMenu).print();
            } catch (Exception e) {
            }
        } while (!keyMenu.equals("Q"));
    }
}
