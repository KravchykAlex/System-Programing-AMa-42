﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FriendPair
{
    class Program

    {
        static int countFriendsPairings(int n)
        {
            int[] dp = new int[n + 1];

           
            for (int i = 0; i <= n; i++)
            {
                if (i <= 2)
                    dp[i] = i;
                else
                    dp[i] = dp[i - 1] + (i - 1) * dp[i - 2];
            }

            return dp[n];
        }
        static void Main(string[] args)
        {
            int n = 4;
            Console.Write(countFriendsPairings(n));
        }
    }
}
