import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class MyWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MyWorld extends World
{
    public static int leftScore = 0;
    public static int rightScore = 0;
    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    public MyWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(600, 400, 1); 
        
        //Making variables for actors
        Bee bee = new Bee();
        Person person = new Person();
        Ball ball = new Ball();
        //Adding objects to field
        addObject(bee, 70, 200);
        addObject(person, 550, 200);
        addObject(ball, 300, 200);
        //Score
        showText("Score: " + leftScore, 75, 25);
        showText("Score: " + rightScore, 550, 25);
        
        //System.out.println(leftScore + rightScore);
    } 
    
    public void UpdateScore() {
        leftScore++;
        rightScore++;
    }
}
