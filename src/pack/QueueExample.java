package pack;


import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

    public static void printQueue()
    {
        Queue<Integer> numbers = new LinkedList<>();

        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(3);
        System.out.println("Queue: " + numbers);

        int accessedNumber = numbers.peek();
        System.out.println("Accessed Element: " + accessedNumber);

        int removedNumber = numbers.poll();
        System.out.println("Removed Element: " + removedNumber);

        System.out.println("Updated Queue: " + numbers);
    }
}
