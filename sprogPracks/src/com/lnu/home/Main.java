package com.lnu.home;

public class Main {

    public static void main(String[] args) {
	// write your code here

        //2
        System.out.println("--(2)---Binary Search----------");
        int key = 130;
        int[] array = {20,40,50,70,90,100,105,110,130,160};
        BinarySearch bs = new BinarySearch(array);
        int result = bs.findElement(key,0,array.length-1);
        if(result == -1) {
            System.out.println(" YOU got a trouble, cowboy =3");
        }
        else{
            System.out.println("We found "+key+" on index "+result);
        }
        System.out.println();

        //4
        System.out.println("--(4)---Queue------------");
        Queue q = new Queue();
        q.add(5);
        q.add(6);
        q.add(7);
        q.add(8);
        q.print();
        q.pop();
        q.pop();
        q.print();
        q.peek();
        System.out.println();

        //5
        System.out.println("--(5)---Bracket Balancing----------");
        String inputLine = "[]][][";
        System.out.println("Inputted line:"+ inputLine);
        BracketBalancing bb = new BracketBalancing(inputLine);
        bb.balancer();
        System.out.println();

    }
}
