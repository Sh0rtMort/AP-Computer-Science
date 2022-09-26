import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class WonkyBear here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class WonkyBear extends Actor
{
    private int vertSpeed = Greenfoot.getRandomNumber(15);
    private int horezSpeed = Greenfoot.getRandomNumber(15);
    private int squigglyWiggly = Greenfoot.getRandomNumber(90);
    
    public void act()
    {
        move();
        if (isAtEdge()) {
            bounce();
        }
    }
    
    public void move() {
        //setLocation(getX() + horezSpeed, getY() + vertSpeed);
        move(horezSpeed);
    }
    
    public void bounce() {
        squigglyWiggly = Greenfoot.getRandomNumber(90);
        horezSpeed = Greenfoot.getRandomNumber(15);
        horezSpeed = horezSpeed * -1;
        setRotation(squigglyWiggly);
    }
}
