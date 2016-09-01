package problem1;


public class Main {

    public static void main(String[] args) {

        public void addAllMultiples(int a, int b, int top){
            int total=0;
            for (int i = 1; i < top; i++) {
                if (i%a==0||i%b==0){
                    total += i;
                }
            }
            System.out.printf("The sum of all the multiples of %d and %d under %d are: %d",a,b,top,total);
        }
        addAllMultiples(3, 5, 1000);
    }
}
