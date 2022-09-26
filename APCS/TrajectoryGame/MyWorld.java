import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class MyWorld here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class MyWorld extends World
{
    Plane plane = new Plane();
    boolean enterPressed = false;
    /**
     * Constructor for objects of class MyWorld.
     * 
     */
    public MyWorld()
    {    
        // Create a new world with 600x400 cells with a cell size of 1x1 pixels.
        super(1000, 600, 1);
    
        
        addObject(plane, 500, 400);
       
        
    }
    public void act() {
        
        
        if (!enterPressed && Greenfoot.isKeyDown("enter"))
        {
            enterPressed = true;
            addObject(new Rocket(65, 20), plane.getX(), plane.getY());
        }
        if (enterPressed && !Greenfoot.isKeyDown("enter")) 
        enterPressed = false;
    }
}
