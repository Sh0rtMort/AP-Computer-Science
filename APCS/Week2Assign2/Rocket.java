import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Rocket here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Rocket extends Actor
{
    private int speed = 4;
    
    
    public void act()
    {
      move(speed);
      if (getX() >= 580) {
          turn(180);
      } else if (getX() <= 20) {
          turn(180);
      }
    }
    
    public void move(double speed) {
        move(speed);
    }
}
