package com.lnu.home;

public class BracketBalancing {

    public char[] bracketLine;
    public int swapCount = 0;

    public BracketBalancing(String consoleLine) {
        this.bracketLine = consoleLine.toCharArray();
    }

    public void balancer() {

        swapper(this.bracketLine);
    }

    public void swapCountOutput(int count) {
        String output = "Swap numbers: " + count;
        System.out.println(output);
    }

    public char[] swapper(char[] bracketLine) {
        char[] workLine = bracketLine;
        char swapBracket = ' ';
        int leftCounter = 0;
        int rightCounter = 0;

        for (int i = 0; i < workLine.length; i++) {
            if (workLine[i] == '[') {
                leftCounter += 1;
            } else {
                rightCounter += 1;
            }

            if (leftCounter < rightCounter) {
                int j = i;

                while (true) {
                    swapBracket = workLine[j + 1];
                    workLine[j + 1] = workLine[j];
                    workLine[j] = swapBracket;
                    j++;

                    if (workLine[j - 1] == '[') {
                        swapCount++;
                        break;
                    }
                }
                return swapper(workLine);
            }

        }
        swapCountOutput(swapCount);
        if (swapCount == 0) {
            System.out.println("YOU need nothing IT IS PPPPPERFECT =3");
        } else {
            System.out.print("Output: ");
            System.out.println(workLine);
        }
        return workLine;
    }
}
