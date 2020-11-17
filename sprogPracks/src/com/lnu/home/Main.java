package com.lnu.home;

public class Main {

    public static void main(String[] args) {
	// write your code here
        int key = 130;
        System.out.println("Start======================================");
        int[] array = {20,40,50,70,90,100,105,110,130,160};
        BinarySearch bs = new BinarySearch(array);
        int result = bs.findElement(key,0,array.length-1);
        if(result == -1) {
            System.out.println(" YOU got a trouble, cowboy =3");
        }
        else{
            System.out.println("We found "+key+" on index "+result);
        }
    }
}
