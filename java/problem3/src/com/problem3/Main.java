package com.problem3;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
	    long num = 600851475143L;
        System.out.printf("The largest prime factor of %d is %d", num,largestPrimeFactor(num));
    }

    private static long largestPrimeFactor(long num) {
        List<Integer> primeFactors = new ArrayList<>();
        List<Integer> primes = new ArrayList<>();
        boolean numWasReduced = false;

        for (int i = 2; i <= num ; i++) {
            if(isPrime(i, primes)){
                primes.add(i);

                if(num%i==0){
                    primeFactors.add(i);
                    while (num%i==0){
                        num/=i;
                        numWasReduced = true;
                    }
                }
            }
        }

        long candidate1 = primeFactors.get(primeFactors.size()-1);
        long candidate2 = num;

        if (!numWasReduced){
            return candidate1;
        }
        return Math.max(candidate1, candidate2);
    }
    private static boolean isPrime(int n, List<Integer> primes){
        if (n<2){
            return false;
        }
        int q = (int) Math.floor(Math.sqrt(n));
        for (Integer prime : primes){
            if(n%prime==0){
                return false;
            }
            if(prime*prime>n){
                return true;
            }
        }
        return true;
    }
}
