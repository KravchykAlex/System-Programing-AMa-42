package com.lnu.home;

import java.util.PriorityQueue;

public class Queue {

    public int[] queue;
    public int size =0;
    public Queue(){
        this.queue=new int[this.size];
    }

    public void add(int number) {
        int[] tempArr = new int[queue.length+1];

        for(int i=0;i<queue.length;i++)
        {
            tempArr[i]=queue[i];
        }
        tempArr[tempArr.length-1] = number;
        queue = tempArr;


    }

    public void pop() {

        if(!isEmpty()) {
            int[] tempArr = new int[queue.length - 1];
            for (int i = 1; i < queue.length; i++) {
                tempArr[i - 1] = queue[i];
            }
            queue = tempArr;

        }
        else{
            System.out.println("Queue is empty! U can not pop any element");
        }

    }

    public void peek()
    {
        System.out.println();
        if(!isEmpty())
            System.out.println("Head of Queue is "+queue[0]);
        else
            System.out.println("Empty Queue");
    }


    public void print()
    {
        System.out.println();
        System.out.print("Queue: ");
        for(int i=0;i<queue.length;i++){
            System.out.print(queue[i]+" ");
        }
    }

    public boolean isEmpty()
    {
        if(queue.length == 0)
        {
            return true;
        }
        else{return false;}
    }

}
