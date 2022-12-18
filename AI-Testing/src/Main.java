import java.util.Scanner;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Random;
public class Main {

   private static final String[] greeting = {
            "Hello",
            "Hi",
            "Hey",
            "Howdy",
            "Greetings",
            "Salutations",
            "What's up",
            "Sup",
            "Yo",
            "Wassup",
            "Wazzup",
            "Good Day"
    };

   private static final String[] timeBasedGreeting = {
            "Good Morning",
            "Good Afternoon",
            "Good Evening",
            "Good Night"
    };
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("I am a chatbot. What is your name?");
        String ur1 = scanner.nextLine();

        respond1(ur1);

        System.out.println("What is your age?");
        String ur2 = scanner.nextLine();
        int age = Integer.parseInt(ur2);

        respond2(ur2);

        System.out.println("What is your favorite hobby?");
        String ur3 = scanner.nextLine();

        respond3(ur3);

        if (age < 18) {
            System.out.println("Since your young, are you good at " + ur3 + "?");
        } else {
            System.out.println("Are you good at " + ur3 + "?");
        }
        String ur4 = scanner.nextLine();

        respond4(ur4);
    }


    private static void respond1(String ur1) {
        double time = new Date().getTime();
        time = time / 1000 / 60 / 60;
        double greetSelect = (int)Math.floor(Math.random() * 2);
        double greetSelect2 = (int)Math.floor(Math.random() * 10);
//        double greetSelect = 1;


        if (greetSelect == 0) {

            if (time >= 0 && time < 12) {
                System.out.println(timeBasedGreeting[0] + " " + ur1 + "!");
            } else if (time >= 12 && time < 17) {
                System.out.println(timeBasedGreeting[1] + " " + ur1 + "!");
            } else if (time >= 17 && time < 24) {
                System.out.println(timeBasedGreeting[2] + " " + ur1 + "!");
            } else {
                System.out.println(greeting[10] + " " + ur1 + "!");
            }
        }

        if (greetSelect == 1) {
            System.out.println(greeting[(int) greetSelect2] + " " + ur1 + "!");
        }

        if (ur1.equals("your mom")) {
            System.out.println("No u");
        }

        if (ur1.equals("your dad")) {
            System.out.println("No u");
        }

        if (ur1.equals("ur mom")) {
            System.out.println("I had intercourse with your mom last night");
        }

        if (ur1.equals("ur dad")) {
            System.out.println("I had intercourse with your father");
        }

        if (ur1.equals("penis")) {
            System.out.println("suck my " + ur1);
        }


    }

    private static void respond2(String ur2) {
        int age = Integer.parseInt(ur2);
        if (age < 18) {
            System.out.println("Imagine being a child lol.");
        } else {
            System.out.println("Wow your old.");
        }
    }

    private static void respond3(String ur3) {
        //change ur3 to a boolean to compare
        boolean sw1 = ur3.equals("programming");
        boolean sw2 = ur3.equals("Programming");
        boolean sw3 = ur3.equals("i program");
        boolean sw4 = ur3.equals("I program");

        switch (ur3) {
            case "programming", "i program", "I program", "Programming" ->
                    System.out.println("That's the worse things ever and you should die");
        }

        if (!sw1 && !sw2 && !sw3 && !sw4) {
            System.out.println(ur3 + " " + "is pretty cool");
        }
    }

    private static void respond4(String ur4) {
        if (ur4.equals("yes")) {
            System.out.println("Wow your good at it");
        } else if (ur4.equals("no")) {
            System.out.println("L ratio Cope");
        } else {
            System.out.println("Its a yes or no question");

        }
    }
}


