package pack;

import java.util.Dictionary;
import java.util.Enumeration;
import java.util.Hashtable;

public class DictionaryExample {

    public static void printDictionary(){
        Dictionary geek = new Hashtable();

        geek.put("123", "Code");
        geek.put("456", "Program");

        for (Enumeration i = geek.elements(); i.hasMoreElements();)
        {
            System.out.println("\nValue in Dictionary : " + i.nextElement());
        }

        System.out.println("\nValue at key = 6 : " + geek.get("6"));
        System.out.println("Value at key = 456 : " + geek.get("123"));

        System.out.println("\nRemove : " + geek.remove("123"));
        System.out.println("Check the value of removed key : " + geek.get("123"));
    }
}
