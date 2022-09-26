import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Ball here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Ball extends Actor
{
    /**
     * Act - do whatever the Ball wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public int speed = 5;
    
    public int leftOrRight = Greenfoot.getRandomNumber(2);
    public int turn = Greenfoot.getRandomNumber(90);
    
    MyWorld world;
    
    public void act()
    {
       if (!isTouching(Bee.class)) {
            move(speed);
        }
       if (isTouching(Bee.class)) {
           //speed = speed * -1;
           move(-speed);
           if (Greenfoot.isKeyDown("w")) {
               setLocation(getX(), getY() - 5);
            }
           if (Greenfoot.isKeyDown("s")) {
               setLocation(getX(), getY() + 5);
            }
           if (Greenfoot.isKeyDown("d")) {
               speed = speed * -1;
               move(speed);
               setRotation(0);
            } 
       }
       if (isTouching(Person.class)) {
           //speed = speed * -1;
           move(-speed);
           if (Greenfoot.isKeyDown("Up")) {
               setLocation(getX(), getY() - 5);
            }
           if (Greenfoot.isKeyDown("Down")) {
               setLocation(getX(), getY() + 5);
            }
           if (Greenfoot.isKeyDown("Left")) {
               speed = speed * -1;
               move(speed);
               setRotation(0);
            } 
       }
       if (isAtEdge()) {
           turn(turn);
           move(2);
       }
       if (getX() >= 580)  {
           world.rightScore++;
           //world.UpdateScore();
           setLocation(300, 200);
           if (speed < 0) {
               speed -= 1;
           }
           if (speed > 0) {
               speed++;
           }
           speed = speed * -1;
       }
       if (getX() <= 30) {
           world.leftScore++;
           //world.UpdateScore();
           setLocation(300, 200);
           if (speed < 0) {
               speed -= 1;
           }
           if (speed > 0) {
               speed++;
           }
           speed = speed * -1;
       }
    }
}
