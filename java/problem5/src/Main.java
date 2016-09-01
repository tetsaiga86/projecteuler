public class Main {

    public static void main(String[] args) {
        System.out.printf("The smallest number that is evenly divisible " +
                "by all numbers from 1 to 20 is: %d",
                smallestDivisbleNumber());
    }



    private static int smallestDivisbleNumber() {
        int num = 20;
        while (!check(num)){
            num+=20;
        }
        return num;
    }

    private static boolean check(int num) {
        int d20 = 0;
        for (int i = 1; i <= 20 ; i++) {
            if(num%i==0){
                d20++;
            }
            if(d20==20){
                return true;
            }
        }
        return false;
    }
}
