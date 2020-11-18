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

        //5
        System.out.println("--(5)---Bracket Balancing----------");
        String inputLine = "[]][][";
        System.out.println("Inputted line:"+ inputLine);
        BracketBalancing bb = new BracketBalancing(inputLine);
        bb.balancer();
    }
}
