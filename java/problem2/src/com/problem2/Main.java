package com.problem2;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static List<Integer> generateFibNums(){
        List<Integer> fib = new ArrayList<>();
        fib.add(1);
        fib.add(2);
        for (int i = 0; fib.get(i)+fib.get(i+1) <=4000000 ; i++) {
            fib.add(fib.get(i)+fib.get(i+1));
        }
        return fib;
    }



    public static List<Integer> generateEvenFibNums(){
        List<Integer>fibList=generateFibNums();
        List<Integer> even = new ArrayList<>();
        for (int i = 0; i < fibList.size() ; i++) {
            if (fibList.get(i)%2==0){
                even.add(fibList.get(i));
            }
        }
        return even;
    }

    public static void main(String[] args) {
        addEmUp();
    }

    private static void addEmUp() {
        int total = 0;
        List<Integer> evenFibs =  generateEvenFibNums();
        for (int i = 0; i < evenFibs.size(); i++) {
            total+=evenFibs.get(i);
        }
        System.out.printf("The sum of even fib numbers is %d%n", total);
    }
}
