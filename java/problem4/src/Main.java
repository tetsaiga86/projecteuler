public class Main {

    public static void main(String[] args) {
        System.out.printf("The largest palindrome product is: %d", makeNum());
    }

    public static int mul;

    public static int makeNum(){
        int max = 0;
        for (int i = 999; i > 100 ; i--) {
            for (int j = i; j >100 ; j--) {
                mul = j*i;
                if (checkNum(mul) && mul>max){
                    max=i*j;
                }
            }
        }

        return max;
    }

    private static int reverseNum(int num){
        int reverse=0;
        while( num != 0 )
        {
            reverse = reverse * 10;
            reverse = reverse + num%10;
            num = num/10;
        }
        return reverse;
    }

    private static boolean checkNum(int mul) {
        if (mul==reverseNum(mul)){
            return true;
        }else{
            return false;
        }
    }
}
