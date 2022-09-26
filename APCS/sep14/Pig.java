import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)


public class Pig extends Actor
{
    //maybe usefull booleans
    //used to flip the image so its not constantly flipping
    private boolean flip = false;
    
    //useless booleans
    //previously used for only allowing the move method 
    //to run once when clicked
    private boolean isUp = false;
    private boolean isDown = false;
    private boolean isRight = false;
    private boolean isLeft = false;
  
    //setting an image to be used for flipping
    GreenfootImage img = getImage();
    public void act()
    {
        keyboardMovement("w", "s", "a", "d", "Shift");
        setImage(img);
    }
    
    private void keyboardMovement(String up, String down, String left, String right, String turbo) {
      boolean fast = Greenfoot.isKeyDown(turbo);
      //checking boolean for fast then setting speed
      
      int speed = fast ? 15 : 5;
      if (Greenfoot.isKeyDown(up)) {
          setLocation(getX(), getY() - speed);
          isUp = true;
      }
      if (Greenfoot.isKeyDown(down)) {
          setLocation(getX(), getY() + speed);
          isDown = true;
      }
      if (Greenfoot.isKeyDown(left)) {
          setLocation(getX() - speed, getY());
          flip();
      }
      if (Greenfoot.isKeyDown(right)) {
          setLocation(getX() + speed, getY());
          flip();
      }
    }
    private void flip() {
      
    if (!isLeft && Greenfoot.isKeyDown("a")) {
        img.mirrorHorizontally();
        flip = true;
      } 
    if (isLeft && !Greenfoot.isKeyDown("a")) {
        isLeft = false;
    }
    }
}
