import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Rocket here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Rocket extends Actor
{
    
    int initX, initY; // the starting location of the ball
    int time = 0;
    int xSpeed, ySpeed; // these are not current speeds, but initial speeds
    int maxY;
    Plane plane;
    /**
     * Act - do whatever the Rocket wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public void act()
    {
        time++; // increments time counter
        int newX = initX + xSpeed * time; // calculates the new x-coordinate value
        int timeDif = (int) Math.abs(time - ySpeed); // calculates the time difference to the apex of the trajectory
        int distDif = maxY - timeDif * (timeDif + 1) / 2; // calculates the vertical distance from its starting location
        int newY = initY - distDif; // calculates the new y-coordinate value 
        setLocation(newX, newY);
        //setLocation(plane.getX(), plane.getY());
        if (getX() == getWorld().getWidth() - 1) getWorld().removeObject(this);
    }
    public void addedToWorld(World w)
    {
        initX = getX();
        initY = getY();
    }
    public Rocket(int angle, int power)
    {
        xSpeed = (int) (power * Math.cos(angle * Math.PI / 180));
        ySpeed = (int) (power * Math.sin(angle * Math.PI / 180)); // also, the amount of time needed to reach the apex of the trajectory
        maxY = ySpeed * (ySpeed + 1) / 2; // vertical distance to apex determined by the time it takes to get there
        getImage().scale(50, 50);
        //rotation = (int) (-angle);
    }
}
