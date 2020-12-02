using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace SysProgrTasks
{
    class Program
    {
        public static void PrintArray(IEnumerable<int> array)
        {
            foreach(var i in array)
            {
                Console.Write($"{i}, ");
            }
            Console.WriteLine();
        }

        public static void PrintArray(IEnumerable<string> array)
        {
            foreach (var i in array)
            {
                Console.Write($"{i} ");
            }
            Console.WriteLine();
        }

        public static List<int> BucketSort(List<int> x)
        {
            List<int> sortedArray = new List<int>();

            int numOfBuckets = 10;

            List<int>[] buckets = new List<int>[numOfBuckets];
            for (int i = 0; i < numOfBuckets; i++)
            {
                buckets[i] = new List<int>();
            }

            for (int i = 0; i < x.Count; i++)
            {
                int bucket = (x[i] / numOfBuckets);
                buckets[bucket].Add(x[i]);
            }

            for (int i = 0; i < numOfBuckets; i++)
            {
                List<int> temp = InsertionSort(buckets[i]);
                sortedArray.AddRange(temp);
            }
            return sortedArray;
        }

        public static List<int> InsertionSort(List<int> input)
        {
            for (int i = 1; i < input.Count; i++)
            {
                int currentValue = input[i];
                int pointer = i - 1;

                while (pointer >= 0)
                {
                    if (currentValue < input[pointer])
                    {
                        input[pointer + 1] = input[pointer];
                        input[pointer] = currentValue;
                        pointer--;
                    }
                    else break;
                }
            }
            return input;
        }

        public static List<string> SeparateBracket(string brakets)
        {
            List<string> splitedBraketsList = new List<string>();
            var splitedBrakets = brakets.Split(' ');
            foreach (var item in splitedBrakets)
                splitedBraketsList.Add(item);
            return splitedBraketsList;
        }

        public static int SortBracket(List<string> brakets)
        {
            int counter = 0;
            int open = 0;
            int index = 0;
            while(open >= 0 || index == brakets.Count)
            {
                if(brakets[index] == "[")
                {
                    open++;
                } else
                {
                    open--;
                }
                index++;
            }

            if (open != 0)
            {
                for (int i = 1; i < brakets.Count; i++)
                {
                    string currentValue = brakets[i];
                    int pointer = i - 1;

                    while (pointer >= 0)
                    {
                        if (currentValue == brakets[pointer])
                        {
                            counter++;
                            brakets[pointer + 1] = brakets[pointer + 2];
                            brakets[pointer + 2] = currentValue;
                            pointer--;
                        }
                        else break;
                    }
                }
            }

            return counter;
        }

        public static int JumpSearch(List<int> arr, int x)
        {
            int n = arr.Count;

            int step = (int)Math.Floor(Math.Sqrt(n));

            int prev = 0;
            while (arr[Math.Min(step, n) - 1] < x)
            {
                prev = step;
                step += (int)Math.Floor(Math.Sqrt(n));
                if (prev >= n)
                    return -1;
            }

            while (arr[prev] < x)
            {
                prev++;
                if (prev == Math.Min(step, n))
                    return -1;
            }

            if (arr[prev] == x)
                return prev;

            return -1;
        }

        public static int InterestingRow(List<int> array, int p)
        {
            if (p < 1 || p > array.Count)
                return -1;

            return array[p - 1];
        }

        public static List<int> Push(List<int> array, int val)
        {
            array.Add(val);
            return array;
        }

        public static List<int> Pop(List<int> array)
        {
            array.RemoveAt(array.Count - 1);
            return array;
        }

        public static int Peek(List<int> array)
        {
            return array[array.Count - 1];
        }

        static void Main(string[] args)
        {

            List<int> array = new List<int> { 43, 17, 87, 92, 31, 4, 6, 96, 17, 12, 66, 62, 17, 4 };

            Console.WriteLine("Bucket Sort");
            PrintArray(array);
            List<int> sorted = BucketSort(array);
            PrintArray(sorted);

            Console.WriteLine("Jump Search");
            PrintArray(sorted);
            int element = 31;
            int index = JumpSearch(sorted, element);
            Console.WriteLine($"Element {element} at index {index}");

            Console.WriteLine("Interesting Row");
            PrintArray(array);
            index = 9;
            element = InterestingRow(array, index);
            Console.WriteLine($"Element {element} at position {index}");

            Console.WriteLine("Queue\nPush");
            PrintArray(array);
            List<int> push = Push(array, 67);
            PrintArray(push);
            Console.WriteLine("Pop");
            PrintArray(array);
            List<int> pop = Pop(array);
            PrintArray(pop);
            Console.WriteLine("Peek");
            PrintArray(array);
            int peek = Peek(array);
            Console.WriteLine(peek);

            Console.WriteLine("Bracket Balancing");
            string str = "[ ] ] [ ] [";
            Console.WriteLine(str);
            var strArray = SeparateBracket(str);
            int counter = SortBracket(strArray);
            PrintArray(strArray);
            Console.WriteLine($"swap count:{ counter }");

            Console.ReadLine();
        }
    }
}
