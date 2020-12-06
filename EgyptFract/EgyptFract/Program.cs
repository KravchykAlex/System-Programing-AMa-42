using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EgyptFract
{
    class Program
    {
        static void Main(string[] fract)
        {
            
            AutomateTestRun();
        }

        static List<string> GetEgyptianFraction(string input)
        {
            var unitFractions = new List<string>();

            var fraction = input.Split('/');
            var numerator = Convert.ToDecimal(fraction[0]);
            var denominator = Convert.ToDecimal(fraction[1]);

            while (numerator >= 1)
            {
                var largestUnit = Math.Ceiling(denominator / numerator);

                unitFractions.Add(string.Concat(1, "/", largestUnit));

                // PENDING: Optimization with LCM
                numerator = largestUnit * numerator - denominator;
                denominator *= largestUnit;
            }

            return unitFractions;
        }

        static void PromptUserInput()
        {
            var input = "7/9"; //Console.ReadLine();

            Console.Write($"{ input } = ");
            Console.Write($"{ string.Join(" + ", GetEgyptianFraction(input)) }");
            Console.WriteLine(Environment.NewLine);
        }

        static void AutomateTestRun()
        {
            foreach (var fraction in new string[]
            {
                "2/7",
                "1/2",
                "3/179",
                "2/3",
                "2/5",
                "2/9",
                "2/11",
                "3/4",
                "3/5",
                "3/7",
                "3/8",
            })
            {
                Console.Write($"{ fraction } = ");
                Console.Write($"{ string.Join(" + ", GetEgyptianFraction(fraction)) }");
                Console.WriteLine(Environment.NewLine);
            }
        }
    }

    }
