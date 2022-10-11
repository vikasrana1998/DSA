package DSA.InJava;

import java.util.Scanner;

// KADANE'S ALGORITHM IS USED TO FIND THE MAX SUM ARRAY SUM.
// USEFUL ONLY WHEN ARRAY HAS NEGATIVE VALUES ALSO.

public class KadaneAlgo {
    static int MaxSubArraySum(int[] arr, int n) {
        int maxSoFar = Integer.MIN_VALUE;
        int maxEndhere = 0;
        for (int i = 0; i < n; i++) {
            maxEndhere = maxEndhere + arr[i];
            if (maxEndhere > maxSoFar) {
                maxSoFar = maxEndhere;
            }
            if (maxEndhere < 0) { // as soon as value get into
                maxEndhere = 0; // negative no point of
                                // retain the sum so put 0
            }
        }
        return maxSoFar;
    }

    public static void main(String[] args) {
        // Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();
        // int arr[] = new int[n];
        // for (int i = 0; i < n; i++) {
        // arr[i] = sc.nextInt();
        // } //FOR USER INPUT

        // SAMPLE TEST CASE ANS SHOULD BE 12 sum of 5 and 7.
        int n = 7;
        int[] arr = { 5, 7, -6, -3, 6, -9, 10 };
        System.out.println(MaxSubArraySum(arr, n));
    }
}
