/*
Quick overview of the canvases

Canvas 1 - Start screen
Canvas 2-  Laboratory
Canvas 3.1 - Airplane
Canvas 3.2 - Train car
Canvas 3.3 - Barn (canvas 3.1-3.3 loops on a 10 second timer for each canvas )
Canvas 4 - Beachhouse
Canvas 5 - End screen

*/


//This is where all the variables are named and created as global variables so that they are recognized as variables.

//Universal variables 

var canvas; //Grants the ability to create canvases that can act as different "stages" for the escape room



var lock; // lock  for canvas change 



//Puzzle 1: Lab
var stateofBeaker //Needed for movement of beaker in puzzle 1 to help change its "state"
var stateofClipboard//Needed for movement of the clipboard in puzzle 1 to help change its "state" by enlarging it


//Puzzle 2: Train
var stateofairvent//Needed for change in state of the airvent in puzzle 2 to change in between its attached and deattached state

//Puzzle 2: Barn


var lock4;// lock variables for the lock combination inside the barn in puzzle. This helps to check if the player selected the right number combination for each digit or not.
var lock3; 
var lock2;
var lock1;



// variables for the combination changing in puzzle 2, allowing the players to chagne the numbers and hopefully find the correct lock combo
var lockcombo;
var lockcombo2; 
var lockcombo3;
var lockcombo4;

//lock varibables for sizes 
var px1 = 160; 
var px2 = 183; 
var px3 = 206; 
var px4 = 229; 
var py = 450;

//Puzzle 3

var hourhandorientation // Needed to indicate the direction the hour clock hand is pointed towards.


var searchLight//In order to have the "searchlight" function to find the number to work

var stateofflashlight//Needed for movement of beaker in puzzle 1 to help change its "state" from being stationary to being able to be moved with the player's cursor


var clockmove//Timer for the ending visuals


function preload()
{



  //This is all the music Will Ha from the music tech side of things has provided for me to implement as background music for each of the puzzles. They have all been named correspondingly to their respective areas and puzzles under the name of the variables associated with them 
  intro = loadSound('https://dl.dropboxusercontent.com/s/o11p87r4pzcvb0b/Introduction.m4a?dl=0')

  room1music = loadSound('https://dl.dropboxusercontent.com/s/83o0z304ngife0r/Room%20No.1.m4a?dl=0')

  room2music = loadSound('https://dl.dropboxusercontent.com/s/sxqzvkyljpugmkj/Room%202.m4a?dl=0')


  room3music = loadSound('https://dl.dropboxusercontent.com/s/oy8tfu4e4cxpdry/Room%203.m4a?dl=0')
  
  success = loadSound('https://dl.dropboxusercontent.com/s/a15qvomw2xwb976/Success%20Music.m4a?dl=0')




  
//Puzzle 1 Sound effects   

clocksound = loadSound('https://dl.dropboxusercontent.com/s/h3hyhr90tod8hph/21938111.mp3?dl=0') //A Short track that says "The time is now 8 pm."


beep = loadSound('https://dl.dropboxusercontent.com/s/s2q8y7xylozfxdi/Sci%20Fi%20Button%20Beep%20SOUND%20Effect.mp3?dl=0')//Beep whenever a key is pressed for the keypad that moves from the player from the first room to the seocnd room. 


  //Puzzle 2 sound effects
  
  clockticking = loadSound('https://dl.dropboxusercontent.com/s/jfx7a6du3vprh2c/pocket%20watch%20sound%20effect%20clock%20ticking%20fast%20sounds.mp3?dl=0') //Switching canvas sound with the automatically rotating canvases 


  screwin = loadSound('https://dl.dropboxusercontent.com/s/1offj9ao6il0wba/Screw%20In%20Sound%20Effect.mp3?dl=0') //Screw in sound for a screwdriver 

  bombexplosion = loadSound('https://dl.dropboxusercontent.com/s/xzxjalohyvk4jic/Bomb%20Exploding%20Sound%20Effect.mp3?dl=0') //A bomb explosion









//Images
  
  

  Startscreen = loadImage('https://dl.dropbox.com/s/51erxr5uqzpj84k/z1.jpg?dl=0');
  //Start Screen



  //First Puzzle
  Labratory  = loadImage('https://dl.dropbox.com/s/48dzcmzyhpmb9bl/Room%201%20a%20shot.png?dl=0'); //Background for first puzzle

  Clock = loadImage('https://dl.dropbox.com/s/ry0s5a13d1xb232/maxresdefault.jpg?dl=0')//Analog clock that can be clicked on



  Keypad = loadImage('https://dl.dropbox.com/s/cj8xxsxgo3hsfi0/Phone_keypad_layout%2C_grayscale.png?dl=0'); //The picture of the keypad that the player can click on and interact with

  Beaker = loadImage('https://dl.dropbox.com/s/20zq3j3ayqtsq9u/Beaker.png?dl=0');//A picture of a beaker that can be moved

  Number1 = loadImage('https://dl.dropbox.com/s/p1a1ejvsnkbgjah/1-Number-PNG.png?dl=0');//A number one that is required for the players to figure is part of the code for the keypad to move on

  Testtubes = loadImage('https://dl.dropbox.com/s/ur7pe63k4wjn05r/testubes.png?dl=0');//A rack of seven test tubes with the amount of test tubes, in this case seven, being one of the digits for the escape combo for the key pad

  Clipboard = loadImage('https://dl.dropbox.com/s/ck6p4pl419j2n1j/CLIPBOARD.png?dl=0')//A clipboard that can be hovered over to enlarged to give the players a riddle that they must use in order to figure how to find the numbers for the combination key pad lock for them to move on and what order to have the numbers in

  blackscreen = loadImage('https://dl.dropbox.com/s/1unlz6qygp43waw/blackscreen.png?dl=0')//A black screen that will display a clue if a corresponding button is clicked upon

  RedButton = loadImage('https://dl.dropbox.com/s/ntdhc96qwwzvv9q/generic-button-1357003_960_720.png?dl=0')// A butoon that is used to display a number on the black screen to show one of the key pad combos

  Number3 = loadImage('https://dl.dropbox.com/s/urzxwg3h8juorbk/85263ce4-f562-486f-9728-4b4571a11ed8_1.45432d5c9761171e2d67b0496c8671dd.png?dl=0')// One of the lock comb numbers that is displayed on the black screen when the red button is clicked upon.


  Dummykeypad = loadImage('https://dl.dropbox.com/s/j4go5m6p0ltlo4v/DUMMY%20KEY.png?dl=0')//An image that players can click to go into the keypad screen in order to input the correct combination to move on 


  //Second Puzzle: Airplane

  cargoplane = loadImage('https://dl.dropbox.com/s/pcitatzxh8mtpvu/Room%203%20a.png?dl=0')//The background image of the second puzzle's first room

  openhatch = loadImage('https://dl.dropbox.com/s/so3rb2b8zt09j16/Opened%20hatch.png?dl=0')//This is an image of an open hatch that if a player clicks on it, it will move them to puzzle 3

  closedhatch = loadImage('https://dl.dropbox.com/s/xtn5fkvvi1894xe/closed%20hatch.png?dl=0')//In order for this closed air hatch to be opened, the player must find a bomb to open it


  //Train
  traincar = loadImage(' https://dl.dropbox.com/s/36bkza99dy9nbpg/traincar.jpg?dl=0')//Background for puzzle 2, room 2
  
 
  screwdriver = loadImage('https://dl.dropbox.com/s/dev5xn3sfnnehfl/screwdriver_PNG9512.png?dl=0')//Screwdriver that the player must pick up and unscrew the airvent screws with 
  
  airvent = loadImage('https://dl.dropbox.com/s/rhardb91fpnrflg/airvent.png?dl=0')//An airvent that if a player unscrews the screws off, it will reveal the code behind it
  
  codeairvent = loadImage('https://dl.dropbox.com/s/amsyrs2wt1ycbjw/code.png?dl=0')//The code for the next room once the airvent is removed


  //Barn

  barn = loadImage('https://dl.dropbox.com/s/kdp75n2pjejghm8/Webp.net-resizeimage.jpg?dl=0')//Background for puzzle 2, room 3    

  violin = loadImage('https://dl.dropbox.com/s/n2wgx3oct9ftdc1/violin.png?dl=0')//Locked violin case that requires tbe code from behind airvent to open. Will have the bomb inside. I chose to use a violin case as it was a part of the movie "Predestination", a movie I drew inspiration from when designing this project.

  openviolin = loadImage('https://dl.dropbox.com/s/0hggf60oecdec0p/opencase.png?dl=0')//An open violin case that will be opened once the right code is inputted. Will have the bomb be clickable and will be added to the player's inventory

  bomb = 
    loadImage('https://dl.dropbox.com/s/fy6oij5q5q11trk/StickyBomb-GTAV.png?dl=0')//A bomb that be retrieved from the open violin case and used to open the escape hatch once the canvas is swapped to the first room of puzzle 2



  //Puzzle 3

  beachhouse = loadImage('https://dl.dropbox.com/s/a01mn6vjroinfl0/Room%202%20a.png?dl=0')//The background for puzzle 3

  //Four different pictures of an hour hand in four different positions: up,down,left and right, with them corresponding to the hours of 12, 6, 9, and 3 respectively. 

  hourhandwest = loadImage('https://dl.dropbox.com/s/nu9io89axto886i/hour%20hand%20west.png?dl=0')

  hourhandsouth = loadImage('https://dl.dropbox.com/s/g8la21xt31zqud7/hour%20hand%20south.png?dl=0')

  hourhandeast = loadImage('https://dl.dropbox.com/s/lokjarkaiuvxsdq/hour%20hand%20east.png?dl=0')

  hourhandnorth = loadImage('https://dl.dropbox.com/s/a4m7okrvmf90rxg/hour%20hand%20north.png?dl=0')


  
  searchLight = loadImage('https://dl.dropboxusercontent.com/s/ft355wfbdhajopd/searchlight.png'); //A flashlight-esque function that the players must use in order to locate a number to set the clock to. The player's vision is limited to a small circle with the outer parts of the circle being dark, in order to simulate having a flashlight in a dark room.
  
  flashlight = loadImage('https://dl.dropboxusercontent.com/s/55ycjcs5n1wkjji/asdfadsfadsfasd.png?dl=0')//A flashlight that players can use in order to search for clues.
  
  six = loadImage('https://dl.dropboxusercontent.com/s/b6w3e8s4j509aml/six.png?dl=0')// The number six
  
  analogclock = loadImage('https://dl.dropboxusercontent.com/s/wj0p84nurtuisf1/2000px-Modern_clock_chris_kemps_01.svg.png?dl=0')//An analog clock that players must use to set the hour hand correctly in order to stop time traveling.
  
  
  
  //Arrows that the players must use to set the hour hand in the correct position
  uparrow = loadImage('https://dl.dropboxusercontent.com/s/1ecu9f6ijar608i/uparrow.png?dl=0')
  
  downarrow = loadImage('https://dl.dropboxusercontent.com/s/2h03dstyt087c5i/downarrow.png?dl=0')
  
  rightarrow = loadImage('https://dl.dropboxusercontent.com/s/i4f3h713uzwsepm/leftarrow.png?dl=0')
  
  leftarrow = loadImage('https://dl.dropboxusercontent.com/s/jxzecrq1noc69ty/rightarrow.png?dl=0')
  
  
  //End screen: Congratulates the players for beating the game
  endscreen = loadImage('https://dl.dropboxusercontent.com/s/afpjmnx2vtlzyq9/end%20screen.jpg?dl=0')

}

function setup()  //This is to start the important functions once the program is loaded or refreshed. It sets up what the variables are equal to and is an integral part of setting up and starting the program
{



//The default states of variables that exist in the puzzle. They will be changed over time as the players interacts more and more with the rooms and as time goes on as the game itself changes some varaibles according to time on a timer as well. 
  
  hourhandorientation = 0;
  minutehandorientation = 0;
  hourhandX = 100;
  hourhandY = 100;
  minutehandX2 = 500;
  minutehandY2 = 100;

  hourhandDistance = 1000;
  minutehandDistance = 1000;
  hourhandlock = false;
  minutehandlock = false;
  lockhourhandOrientation = false;
  lockminutehandOrientation  = false;


  //Default
  createCanvas(830,600);
  //Creates a canvas that is 830 pixels wide and 1500 pixels long

  canvas = 1;//Sets the canvas and what canvas it starts on and is on, which is one in this case. Whatever this value is, the program will swap to the canvas that corresponds to the assigned value that it is changed to in the program, due to a function that is written further down that helps the change.  As the player progresses throughout the rooms, the canvas will be swapped by functions that overide this value and changes it, effectively swapping canvases and allowing more to be done throughtout the program. It allows different perspectives and close ups on props and allows the player to progress from room to room.
  
  lock = false;// Helps to keep the canvas to be locked onto the selected canvas until the canvas changes. 




  //Canvas 2. The default positions for the beakers
  moveBeakerX = 543;
  moveBeakerY = 140;
  endBeakerX = 543;
  endBeakerY = 100;
  stateofBeaker = 1;


  //Default state for the passwords before the correct input is placed 
  a = false;
  b = false;
  c = false;
  d = false;




  //Canvas 3. Puzzle 2.
  frameRate(30);

  timer = 0 //Timer for switching canvases. Every second, the program refreshed 30 frames a second. With the timer, I have set it so that every 10 seconds, as 300 frames pass, the canvases swap. This is how I created a timer within this program, in order to fit in with the theme of time traveling in the story.

  time = 0

  //Default states of props in puzzle 2 that will be changed as the escape room progresses
  cargohatch = 0

  
  //Airvent
  stateofairvent = 0
//Screwdriver
  stateofscrewdriver = 0

  
  //Screws for the airvent 
  screw1 = 0
  screw2 = 0
  screw3 = 0
  screw4 = 0

  //Barn
  
  //Default state for the combo lock on the violin case. When the player switches the numbers to the right combo,each combo will be set to true  
  lock = false; 
  lock1 = false;
  lock2 = false; 
  lock3 = false;
  lock4 = false

  
  //Starting numbers for the lock combo. As the player cycles through the numbers on the lock, these values will change 
  lockcombo = 1;
  lockcombo2 = 1; 
  lockcombo3 = 1; 
  lockcombo4 = 1;

  //Violin case
  stateofviolincase = 0

  
  //Bomb
  stateofbomb = 0
  
  
  //Puzzle 3
  
  //Flashlight 
  stateofflashlight = 0


  //First orietnation for the hour hand 
  hourhandorientation = 0
  
  
  minutehandorientation = 0
  
  
  //Analog clock's starting position 
  stateofanalogclock = 0
  //hour hand that has to collected 
  stateofhourhand = 0
  //Whether the hour hand is collected or not 
  hourhandiscollected = 0
  
  
  //Starting position and size for the analog clock
  startinganalogx = 600
  startinganalogy = 320
  startinganalogsizewidth = 80
  startinganalogsizeheight = 100
  //Ending position and size for the analog clock as it is moved and expanded in size. 
  endinganalogx= 400
  endinganalogy=  175
  endinganalogsizewidth=250
  endinganalogsizeheight=300   
  
  
  //Timer for the ending visual for the escape room 
  clockmove = 0
  

  

}

function draw() /* This is an important function and will allow for the drawings and functions to happen and be update in real-time. Since this function refreshed itself rapidly every second, this is where a majority of the code will be executed, and therefore will be how the functions for the drawings on the program will be executed. The use of the refreshing is essential for the timer function, the moving of objects, switching of canvases and audio files. */
{



  
//The function that swaps between canvases as the player progresses through the puzzle. This is made possible through having different indepenedent functions for each canvas, allowing for the cavanses to exist. Each canvas has its own use and puzzles and intricacies within them. 
  if (canvas == 1)
  {
    canvas1();
  }
  else if (canvas == 2)
  {
    canvas2();
  }
  else if (canvas == 2.1)
  {
    canvas2_1();
  }
  else if (canvas == 3)
  {
    canvas3();
  }
  else if (canvas == 3.1)
  {
    canvas3_1();
  }
  else if (canvas == 3.2)
  {
    canvas3_2();
  }
  else if (canvas == 5)
  {
    canvas5();
  }
  else if (canvas == 6)
  {
    canvas6();
  }
  else
  {
    canvas = 1;
  }

  fill(0,0,0)



  if (timer == 1) //The timer I have created for puzzle 2. Once the player enters puzzle 2, the timer starts and relies on the framerate of the program. With the framerate fo the program being 30 frames a second, I have used this fact and made it into a pseudo-timer. Once the program passes 300 frames, which is 10 seconds, the timer automatticaly recognizes this fact and swaps to the next canvas. I have also made it where every five seconds, a ticking clock sound effect plays to warn players when the canvases will swap. So for every 10 seconds, the canvases swap. There are three canvases and I have made it where every 10 seconds, it will cycle through one canvas until the third canvas at which it return to the original canvas and start all over in a loop. I have made this in order to challenge the players with a time constraint and immerse the players with the time travel theme a lot more. 
  {
    fill(255,0,0);
    time = time + 1

    if(time == 300)
    {
      clockticking.play()  
    }
    if(time == 450)
    {
      canvas = 3.1
    }
    if(time == 750)
    {
      clockticking.play()  
    }
    if(time == 900)
    {
      canvas = 3.2
    }
    if(time == 1200)
    {
      clockticking.play()   
    }
    if(time == 1350)
    {
      canvas = 3;
      time = 0;
    }
  }

  
  if (time==900)// Once the player leaves the second room of the second puzzle, I had the room be reset so that it will not cause problems.
  {
    stateofairvent = 0;

    stateofscrewdriver = 0;

    screw1 = 0;
    screw2 = 0;
    screw3 = 0;
    screw4 = 0;
  }

  
  
  
  if(hourhandorientation==3)    //I have created a little visual once the player beats the game. Once the player aligns the hour hand to the correct position, the hour hand will continue to circle around and move faster and faster until the end screen is shown. I have created this in order to make a quick visual to indicate a victory. 
    {
      
      clockmove = clockmove +1
      
      if(clockmove>1 && clockmove <100)
        
        {
          image(hourhandsouth, 495,310,55,130)

        }

      if(clockmove>100 && clockmove <180)
        {
          image(hourhandwest, 420,295,130,55)
          
        }
      if(clockmove> 180 && clockmove <260)
        {
          image(hourhandnorth, 495,210,55,130)
          
        }
      if(clockmove>260 && clockmove < 300)
        {
          image(hourhandeast, 510,295,130,55)
        }
      
      if(clockmove>300 && clockmove <330)
        {
          image(hourhandsouth, 495,310,55,130)
        }
      
      if(clockmove>330 && clockmove <350)
        {
          image(hourhandwest, 420,295,130,55)
        }
      if(clockmove>350 && clockmove < 365)
        {
          image(hourhandnorth, 495,210,55,130)
        }
      if(clockmove>365 && clockmove < 375)
        {
          image(hourhandeast, 510,295,130,55)
        }
      if(clockmove>375 && clockmove <385)
      {
        image(hourhandsouth, 495,310,55,130)
      }
      if(clockmove>385 && clockmove <395)
      {
        image(hourhandwest, 420,295,130,55)
      }
      if(clockmove>405 && clockmove<415)
      {
        image(hourhandnorth, 495,210,55,130)
      }
      if(clockmove>425&& clockmove <435)
      {
        image(hourhandeast, 510,295,130,55)
      }
      if(clockmove==435)
        {
          clockmove=0
          hourhandorientation = 0
          
          canvas = 6
          
        }
      
      
      
      
    }
  
  
  

  //barn


  if(canvas == 3.2 && stateofviolincase == 0) //If the player is on the barn room and has not opened the violin case, a lock combo code is created
  {
  passCode1();
  }


  if(lockcombo == 1 && lockcombo2 == 9 && lockcombo3 == 10 && lockcombo4 == 1)// Once the player enters the correct combination of "1901", the code goes away, the violin case opens and the bomb becomes collectable
  {
    stateofviolincase = 1
  }


  if (stateofbomb == 1)//The bomb is collected by the player and is placed in their inventory 
  {
    image(bomb, 107,533,54,44)

  }



  
  //This is where all the background music is played. For each puzzle, there is a song just that room. Once the song ends, it loops.
  
  
  if(canvas == 1) 
  {
  if (intro.isPlaying() == false)
  {
    intro.play()  
    intro.loop()

    intro.setVolume(0.25)
  }
  }
  else 
  {
    intro.stop()
  }



  if(canvas == 2 || canvas == 2.1)
  {  
    if (room1music.isPlaying() == false)
    {
      room1music.play() 
      room1music.loop()

      room1music.setVolume(0.15)
    }
  }
  else 
  {
    room1music.stop()
  }



  if (canvas == 3 || canvas ==3.1 || canvas == 3.2)
  {
    if (room2music.isPlaying() == false)
    {
      room2music.play() 
      room2music.loop()

      room2music.setVolume(0.15)
    }
  }
  else 
  {
    room2music.stop()
  }
  
  
  
  if (canvas == 5)
  {
    if (room3music.isPlaying() == false)
    {
        room3music.play() 
        room3music.loop()

        room3music.setVolume(0.15)
    }
  }
  else 
  {
      room3music.stop()
  }

  
  if (canvas == 6)
  {
    if (success.isPlaying() == false)
    {
      success.play() 
      success.loop()

      success.setVolume(0.15)
    }
  }
  else 
  {
    success.stop()
  }
  
  
       

  
  
  

  
  if(stateofflashlight == 1) //This is the searchlight function where if the flashlight is picked up, there is only a small circle where the player can see the canvas and everything outside the circle is darkened. As the flashlight is attached to the person's cursor, the circle where the canvas can be seen moves as the player moves their cursor. The player must move around and search for the clue relating to the puzzle. Once the player presses 'q' on their keyboard, the player exits this mode and regains full vision of the canvas again.
{
  image(six,700,100,60,60)
  
  image(searchLight,mouseX-1600,mouseY-1500);
  noCursor()
  fill(255,255,255)
  text("Press 'q' to exit",10,55);
  image(flashlight,mouseX-25,mouseY-25,200,100);
 
  
  if (key=='q')

  {
    stateofflashlight = 0
    cursor()
    
  }
   
}
  
 

  
 
  

}

function canvas1() // Startscreen
{
  image(Startscreen,0,0,830,600); //Background image for the starting screen 




  fill(255,0,0);
  rect(330,370,120,70);
  fill(0,0,0);
  textSize(40);
  text("Start",345,420); 
  if(mouseX > 330 && mouseX < 450 && mouseY > 370 && mouseY < 440)
  {
    fill(204,0,0);
    rect(330,370,120,70);
    fill(0,0,0);
    textSize(40);
    text("Start",345,420);
    if (mouseIsPressed == true)
    {
      fill(255,51,51);
      rect(330,370,120,70);
      fill(0,0,0);
      textSize(40);
      text("Start",345,420);
      canvas = 2;
    }
  }
//Creates a start button that starts the game off and transfers the player from the start screen to the first puzzle. 



}

function canvas2() // Lab: Puzzle 1
{
  image(Labratory,0,0,830,600); //Background image
  
  
  image(Testtubes, 50,380,180,150);//Test tube rack with seven test tubes, which is a clue towards the code for the keypad lock 

  image(Clock,270,200,130,80);//An analog clock that reads 8 PM, which is a part of the keypad combo 
  
  image(blackscreen,720,270,80,60)   //A blank computer screen that will display the  number three if the player clicks on the red button 
  image(RedButton,750,420, 50,50) // A red button that will show a number three on the computer screen if the button is held.


  C1 = sqrt((mouseX - 775)*(mouseX - 775) + (mouseY - 445) * (mouseY - 445)); //Calculates the area of the red button and if the player is within it, the calculation will recognize it and give an output, with the use of the distance formula.

  image(Number1,550,150,30,40)//Draws the number one behind the beaker that will be raised in order to reveal the number

  image(Dummykeypad,230,200,30,40);//A keypad that players click on in order to expand and use as a useable keypad combo. Once the player clicks on the keypad, the player can use the key pad. 


  
  if(mouseX > 50 && mouseX < 230 && mouseY > 380 && mouseY < 530)
  { 
    text("There are SEVEN test tubes in the rack",10,55);
  }//If the player hovers over the test tube rack, it will display a hint that will help the player solve one of the digits for the keypad combo. 8
  
 
  var cursorishand = false;//Sets the default state of the cursor to be the arrow. Once a condition is met, this statement becomes true and the cursor becomes an arrow. This process will be done by a if and else statement later in the program.




  itemGrid();//Draws the item grid that represents the inventory of the player 






//Moves the beaker from its default state to upwards revealing the one, and can return to its default state if clicked upon again
  
  // if state of beaker is 1 then the beaker is stationary and covers the number one
  if (stateofBeaker == 1)
  {
    // draw box at default location
    image(Beaker,moveBeakerX,moveBeakerY,40,60)
  }
  // if the beaker is clicked upon, it moves upwards
  else if (stateofBeaker == 2)
  {
    // draws the beaker as it moves
    image(Beaker, moveBeakerX,moveBeakerY,40,60)
    // The beakers moves upward by increasing the y value for its drawing 

    // As the beaker moves upwards, once the y value reaches a certain threshold, it will draw itself as stationary and will stop moving upwards. 
    if (moveBeakerY > endBeakerY)
    {
      moveBeakerY = moveBeakerY + 2;
    }
    if (!(moveBeakerY > moveBeakerY))
    {
      stateofBeaker = 3;
    }
  }
  else if (stateofBeaker == 3) // The beaker is at its destination location 
  {

    image(Beaker,endBeakerX,endBeakerY,40,60); //End position
    
    if (mouseX > endBeakerX && mouseX < endBeakerX + 40 && mouseY > endBeakerY && mouseY < endBeakerY + 60)
    {
      cursorishand = true;
      if (mouseIsPressed == true)
      {
     stateofBeaker = 1
      }
    } //If the player clicks upon the beaker when it reaches its end destination, it will return to its default state and go back down. 

    
    
  
  }

  
  //If the player clicks upon the clock, a voice will read "The time is now 8 PM". The use of the number eight is clue for the keypad combo 


  if(mouseX > 270 && mouseX < 400 && mouseY > 200 && mouseY < 280)
    
  {
    cursorishand = true
    
    if (mouseIsPressed == true)
    {
      clocksound.play()
    }
  }

 



//If the player's cursor is on the red button, within the circle, and they click on it, a number three will be displayed upon the computer screen. 

  if (C1 < 25)
  {
    cursorishand = true
    
    if (mouseIsPressed == true)
    {
      image(Number3,750,280,20, 40)
    }
  }


  //If the player clicks on the beaker in the default state, it will start to move to its end destination above the starting position 
  if (mouseX > moveBeakerX && mouseX < moveBeakerX + 40 && mouseY > moveBeakerY && mouseY < moveBeakerY + 60)
  {
    cursorishand = true
    if (mouseIsPressed == true)
    {
      stateofBeaker = 2;
    }
  }



  //Clipboard that has the riddle that will be used in order to find the numbers for the keypad combo and the order for the numbers. If the player hovers their cursor over the clipboard, the clipboard will be expanded and enalrged for ease of visibility and if the player moves their cursor off the clipboard, it will return to its default state. 

  if (mouseX > 450 && mouseX < 500 && mouseY > 200 && mouseY < 280)
  {
    image(Clipboard, 350,120,250,350);
  }
  else
  {
    image(Clipboard, 450,200,50,80);
    
  }

  //If the player clicks on the keypad, they will enter the keypad screen and have the chance to enter the correct combination to move on. 

  if (mouseX > 230 && mouseX < 260 && mouseY > 200 && mouseY < 240)
  {
    cursorishand = true
    if (mouseIsPressed == true)
    {
      canvas = 2.1
    }
  }

//By default, the cursor is an arrow, but if a change happens, in this case hovering a prop, the cursor will change into a hand in order to hint to the players that they have to interact with the object. 
  if (cursorishand == true)
    {
     cursor(HAND) 
      
    }
  else
{
  cursor(ARROW)
}


}

function canvas2_1() //The nine-digit keypad itself. If the player enters the correct keypad combination, they will move onto the next puzzle. If not, the keypad will boot them back to the first puzzle. 
{
  cursor(ARROW);
  image(Keypad,250,80,300,400);
  //1
  if (mouseX > 250 && mouseX < 350 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,85,90,90);
      textSize(50);
      text("1",570,120);
      a = true;
      beep.play()

    }
  }
  //4
  else if (mouseX > 250 && mouseX < 350 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //7
  else if (mouseX > 250 && mouseX < 350 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,285,90,90);
      textSize(50);
      text("7",570+50,120);
      beep.play()
      if (a == true && b == true)
      {
        c = true;
      }
    }
  }
  //*
  else if (mouseX > 250 && mouseX < 350 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(255,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //2
  else if (mouseX > 350 && mouseX < 450 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,85,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //5
  else if (mouseX > 350 && mouseX < 450 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //8
  else if (mouseX > 350 && mouseX < 450 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,285,90,90);
      textSize(50);
      text("8",570+25,120);
      beep.play()
      if (a == true)
      {
        b = true;
      }
    }
  }
  //0
  else if (mouseX > 350 && mouseX < 450 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(355,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //3
  else if (mouseX > 450 && mouseX < 550 && mouseY > 80 && mouseY < 180)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,85,90,90);
      textSize(50);
      text("3",570+75,120);
      if (c == true && a == true && b == true)
      {
        d = true;
      }
      beep.play()
    }
  }
  //6
  else if (mouseX > 450 && mouseX < 550 && mouseY > 180 && mouseY < 280)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,185,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //9
  else if (mouseX > 450 && mouseX < 550 && mouseY > 280 && mouseY < 380)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,285,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  //#
  else if (mouseX > 450 && mouseX < 550 && mouseY > 380 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      rect(455,385,90,90);
      textSize(70);
      text("ERROR!",250,70);
      canvas = 2;
      beep.play()
    }
  }
  if (d == true)
  {
    canvas = 3;
  }
}  //The player must punch in the right code of "1", "8", "7",  and "3" in order to move on. If the player does not input those numbers in that order, the program will boot them back to the first puzzle. If the player does input that combo, they move onto the second puzzle. Whenever the player clicks on a button, a beep sound effect is played. 


function canvas3() // Puzzle 2, Room 1: Airplane 
{


  timer = 1// The timer function starts and will start to switch canvases each 10 seconds. 
  cursor(ARROW);
  image(cargoplane,0,0,830,600)//Background image
  itemGrid();

  if (cargohatch == 0) //Closed hatch. This is the default state of the cargo hatch, until the player collects the bomb and opens it. 
  {
    image(closedhatch,650,260,130,130) 

  }

  if (cargohatch == 1) //Opened hatch
  {
    timer = 0
    image(openhatch,650,260,130,130) 

    if(mouseX > 650 && mouseX < 780 && mouseY > 260 && mouseY < 390 && mouseIsPressed == true)
    {
      canvas = 5
    }
  }// Once the player blows up the hatch, the timer stops and the player can click on the hatch to move onto puzzle 3 






  if(mouseX > 107 && mouseX < 180 && mouseY > 533 && mouseY < 580)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofbomb = 2
    }

  }//Once the player clicks on the bomb in their inventory, the bomb follows their cursor 

  
  if (stateofbomb == 2)
  {
    noCursor();
    image(bomb,mouseX-25,mouseY-25,50,50);
    if(mouseX > 650 && mouseX < 780 && mouseY > 260 && mouseY < 390)    
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        bombexplosion.play()
        stateofbomb = 0
        cargohatch = 1
      }
    }

  }//Once the bomb follows the player's cursor, when the player clicks on the cargo hatch with the bomb, the cargo hatch opens and an explosion sound effect is played. 







}



function canvas3_1() //Puzzle 2, Room 2: Train car. After ten seconds in the first room, the canvas swaps to this. The player has ten seconds to pick up the screwdriver, unscrew all four screws and find the code for the combo lock in the next room. 
{
  textSize(30);
  cursor(ARROW);
  image(traincar,0,0,830,520)//Background image of a train car based off the movie The Darjeeling Limited 
  itemGrid();


  if (stateofairvent==0)//Default state of the airvent where it covers the code for the violin case lock. 
  {
    image(airvent, 580,320,200,105)

  }
  if (stateofairvent==1)
  {

    image(codeairvent, 580,320,200,105)

  }



  if(mouseX > 60 && mouseX < 140 && mouseY > 430 && mouseY < 490)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofscrewdriver = 1
    }

  }


  if(mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofscrewdriver = 2
    }

  }

  if (stateofscrewdriver==0)
  {
    image(screwdriver,60,430,80,60)
  }
  if (stateofscrewdriver==1)
  {
    image(screwdriver,29,530,60,48)

  }
  if (stateofscrewdriver==2)
  {

    noCursor();
    image(screwdriver,mouseX-25,mouseY-25,50,50);



    if(mouseX > 580 && mouseX < 600 && mouseY > 320 && mouseY < 340)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw1 = 1
        screwin.play() 
      }

    }

    if(mouseX > 580 && mouseX < 600 && mouseY > 400 && mouseY < 425)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw2 = 1
        screwin.play() 
      }

    }

    if(mouseX > 760 && mouseX < 780 && mouseY > 320 && mouseY < 340)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw3 = 1
        screwin.play() 
      }

    }

    if(mouseX > 760 && mouseX < 780 && mouseY > 400 && mouseY < 425)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw4 = 1
        screwin.play() 
      }

    }


    if(screw1==1 && screw2==1 && screw3==1 && screw4==1)
    {
      stateofscrewdriver=3
    }


  }


  if (stateofscrewdriver==3)
  {
    stateofairvent=1
  }




}


function canvas3_2() // barn
{
  textSize(15);
  cursor(ARROW);
  image(barn,0,0,830,520)
  itemGrid();


  if (stateofviolincase == 0)
  {
    image(violin,100,320,400,250)
  }



  if (stateofviolincase == 1)
  {
    image(openviolin,100,270,400,250)

    if (stateofbomb == 0) 
    {
      image(bomb, 335,380,100,70)
    }

    if(mouseX > 345 && mouseX < 425 && mouseY > 380 && mouseY < 440)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {

        stateofbomb = 1


        //bomb moves
      }
    }





  }














}



function itemGrid()
{
  fill(50,50,50);
  rect(0,510,830,620);

  fill(125,125,125);
  rect(20,520,70,70);

  fill(125,125,125);
  rect(100,520,70,70);

  fill(125,125,125);
  rect(180,520,70,70);

  fill(125,125,125);
  rect(260,520,70,70);

  fill(125,125,125);
  rect(340,520,70,70);

  fill(125,125,125);
  rect(420,520,70,70);

  fill(125,125,125);
  rect(500,520,70,70);

  fill(125,125,125);
  rect(580,520,70,70);

  fill(125,125,125);
  rect(660,520,70,70);

  fill(125,125,125);
  rect(740,520,70,70);
}

function mouseReleased()
{


  if(lock1== true)
  {
    lock1 = false; 
  }

  if(lock2== true)
  {
    lock2 = false; 
  }

  if(lock3 == true)
  {
    lock3 = false; 
  }

  if(lock4 ==true)
  {
    lock4 = false;
  }
}

function passCode1()
{
  textSize(15);
  pass1Button();
  pass2Button();
  pass3Button();
  pass4Button();

  fill(255);
  rect(px1-2,455,20,20);
  rect(px2-3,455,20,20);
  rect(px3-3,455,20,20);
  rect(px4-3,455,20,20);

  //grey button which is the combination options for the key lock. 
  fill(155);
  rect(px1,py,15,6);
  rect(px2,py,15,6);
  rect(px3,py,15,6);
  rect(px4,py,15,6);

  fill(0);
  strokeWeight(0);

  if(lockcombo == 1)
  {
    text("1",px1,py+25);
  }
  else if(lockcombo == 2)
  {
    text ("2",px1,py+25);
  }
  else if(lockcombo ==3)
  {
    text("3",px1,py+25);
  }
  else if(lockcombo == 4)
  {
    text("4",px1,py+25);
  }
  else if(lockcombo == 5)
  {
    text("5",px1,py+25);
  }
  else if(lockcombo ==6)
  {
    text("6",px1,py+25);
  }
  else if(lockcombo == 7)
  {
    text("7",px1,py+25);
  }
  else if(lockcombo ==8)
  {
    text("8",px1,py+25);
  }
  else if(lockcombo == 9)
  {
    text("9",px1,py+25);
  }
  else if(lockcombo == 10)
  {
    text("0",px1,py+25);
  }

  if(lockcombo2 == 1)
  {
    text("1",px2,py+25);
  }
  else if(lockcombo2 == 2)
  {
    text ("2",px2,py+25);
  }
  else if(lockcombo2==3)
  {
    text("3",px2,py+25);
  }
  else if(lockcombo2 == 4)
  {
    text("4",px2,py+25);
  }
  else if(lockcombo2 == 5)
  {
    text("5",px2,py+25);
  }
  else if(lockcombo2 ==6)
  {
    text("6",px2,py+25);
  }
  else if(lockcombo2 == 7)
  {
    text("7",px2,py+25);
  }
  else if(lockcombo2 ==8)
  {
    text("8",px2,py+25);
  }
  else if(lockcombo2 == 9)
  {
    text("9",px2,py+25);
  }
  else if(lockcombo2 == 10)
  {
    text("0",px2,py+25);
  }

  if(lockcombo3 == 1)
  {
    text("1",px3,py+25);
  }
  else if(lockcombo3 == 2)
  {
    text ("2",px3,py+25);
  }
  else if(lockcombo3 ==3)
  {
    text("3",px3,py+25);
  }
  else if(lockcombo3 == 4)
  {
    text("4",px3,py+25);
  }
  else if(lockcombo3 == 5)
  {
    text("5",px3,py+25);
  }
  else if(lockcombo3 ==6)
  {
    text("6",px3,py+25);
  }
  else if(lockcombo3 == 7)
  {
    text("7",px3,py+25);
  }
  else if(lockcombo3 ==8)
  {
    text("8",px3,py+25);
  }
  else if(lockcombo3 == 9)
  {
    text("9",px3,py+25);
  }
  else if(lockcombo3 == 10)
  {
    text("0",px3,py+25);
  }



  if(lockcombo4 == 1)
  {
    text("1",px4,py+25);
  }
  else if(lockcombo4 == 2)
  {
    text ("2",px4,py+25);
  }
  else if(lockcombo4 ==3)
  {
    text("3",px4,py+25);
  }
  else if(lockcombo4 == 4)
  {
    text("4",px4,py+25);
  }
  else if(lockcombo4 == 5)
  {
    text("5",px4,py+25);
  }
  else if(lockcombo4 ==6)
  {
    text("6",px4,py+25);
  }
  else if(lockcombo4 == 7)
  {
    text("7",px4,py+25);
  }
  else if(lockcombo4 ==8)
  {
    text("8",px4,py+25);
  }
  else if(lockcombo4 == 9)
  {
    text("9",px4,py+25);
  }
  else if(lockcombo4 == 10)
  {
    text("0",px4,py+25);
  }


}

function pass1Button()
{
  textSize(30);
  if (lock1 == false && mouseX > px1 && mouseX < px1+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo == 1)
    {
      lockcombo = 2;
      lock1 = true; 
    }
    else if(lockcombo == 2)
    {
      lockcombo = 3;
      lock1 = true;
    }
    else if(lockcombo == 3) 
    {
      lockcombo = 4;
      lock1 = true;
    }
    else if(lockcombo == 4)
    {
      lockcombo = 5;
      lock1 = true;
    }
    else if(lockcombo == 5) 
    {
      lockcombo = 6;
      lock1 = true;
    }
    else if(lockcombo == 6)
    {
      lockcombo = 7;
      lock1 = true;
    }
    else if(lockcombo == 7) 
    {
      lockcombo = 8;
      lock1 = true;
    }
    else if(lockcombo == 8)
    {
      lockcombo = 9;
      lock1 = true;
    }
    else if(lockcombo == 9) 
    {
      lockcombo = 10; 
      lock1 = true; 
    }
    else if(lockcombo == 10)
    {
      lockcombo = 1;
      lock1 = true; 
    }
  }
}

function pass2Button()
{
  if (lock2 == false && mouseX > px2 && mouseX < px2+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo2 == 1)
    {
      lockcombo2 = 2;
      lock2 = true; 
    }
    else if(lockcombo2 == 2)
    {
      lockcombo2 = 3;
      lock2 = true;
    }
    else if(lockcombo2 == 3) 
    {
      lockcombo2 = 4; 
      lock2 = true; 
    }
    else if(lockcombo2 == 4)
    {
      lockcombo2 = 5;
      lock2 = true; 
    }
    else if(lockcombo2 == 5) 
    {
      lockcombo2 = 6; 
      lock2 = true; 
    }
    else if(lockcombo2 == 6)
    {
      lockcombo2 = 7;
      lock2 = true; 
    }
    else if(lockcombo2 == 7) 
    {
      lockcombo2 = 8; 
      lock2 = true; 
    }
    else if(lockcombo2 == 8)
    {
      lockcombo2 = 9;
      lock2 = true; 
    }
    else if(lockcombo2 == 9) 
    {
      lockcombo2 = 10; 
      lock2 = true; 
    }
    else if(lockcombo2 == 10)
    {
      lockcombo2 = 1;
      lock2 = true; 
    }
  }
}

function pass3Button()
{
  if (lock3 == false && mouseX > px3 && mouseX < px3+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo3 == 1)
    {
      lockcombo3 = 2;
      lock3 = true; 
    }
    else if(lockcombo3 == 2)
    {
      lockcombo3 = 3;
      lock3 = true;
    }
    else if(lockcombo3 == 3) 
    {
      lockcombo3 = 4; 
      lock3 = true; 
    }
    else if(lockcombo3 == 4)
    {
      lockcombo3 = 5;
      lock3 = true; 
    }
    else if(lockcombo3 == 5) 
    {
      lockcombo3 = 6; 
      lock3 = true; 
    }
    else if(lockcombo3 == 6)
    {
      lockcombo3 = 7;
      lock3 = true; 
    }
    else if(lockcombo3 == 7) 
    {
      lockcombo3 = 8; 
      lock3 = true; 
    }
    else if(lockcombo3 == 8)
    {
      lockcombo3 = 9;
      lock3 = true; 
    }
    else if(lockcombo3 == 9) 
    {
      lockcombo3 = 10; 
      lock3 = true; 
    }
    else if(lockcombo3 == 10)
    {
      lockcombo3 = 1;
      lock3 = true; 
    }
  }

}


function pass4Button()
{
  if (lock4 == false && mouseX > px4 && mouseX < px4+15 && mouseY > py && mouseY < py+6 && mouseIsPressed == true)
  {
    if(lockcombo4 == 1)
    {
      lockcombo4 = 2;
      lock4 = true; 
    }
    else if(lockcombo4 == 2)
    {
      lockcombo4 = 3;
      lock4 = true;
    }
    else if(lockcombo4 == 3) 
    {
      lockcombo4 = 4; 
      lock4 = true; 
    }
    else if(lockcombo4 == 4)
    {
      lockcombo4 = 5;
      lock4 = true; 
    }
    else if(lockcombo4 == 5) 
    {
      lockcombo4 = 6; 
      lock4 = true; 
    }
    else if(lockcombo4 == 6)
    {
      lockcombo4 = 7;
      lock4 = true; 
    }
    else if(lockcombo4 == 7) 
    {
      lockcombo4 = 8; 
      lock4 = true; 
    }
    else if(lockcombo4 == 8)
    {
      lockcombo4 = 9;
      lock4 = true; 
    }
    else if(lockcombo4 == 9) 
    {
      lockcombo4 = 10; 
      lock4 = true; 
    }
    else if(lockcombo4 == 10)
    {
      lockcombo4 = 1;
      lock4 = true; 
    }
  }

}








function canvas5() // Outside
{
  image(beachhouse,0,0,830,600)

  itemGrid();

  
  if(hourhandiscollected==0)
    {
  
  image(hourhandnorth,300,130,30,70)
      

      if (mouseX > 300 && mouseX < 330 && mouseY > 130 && mouseY < 200)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandiscollected = 1
        }
      }
      
    }
  
  if(hourhandiscollected == 1)
    {
      image(hourhandnorth,29,530,60,48)
     
      

      if (mouseX > 20 && mouseX < 90 && mouseY > 520 && mouseY < 590)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandiscollected = 2
        }
      }

    }
 
  
  
  if (stateofanalogclock == 0)
  
    {
  image(analogclock,600,320,80,100)
      
    
  if (hourhandiscollected== 1)
    {
      if (mouseX > 600 && mouseX < 680 && mouseY > 320 && mouseY < 420)
        {
          cursor(HAND);
          if (mouseIsPressed == true)
          {
          
          stateofanalogclock = 1
          }
        }
         else
         {
           cursor(ARROW)
         }
      }
    }
  
  if (stateofanalogclock == 1)
    {
      cursor(ARROW)
      
      image(analogclock,startinganalogx,startinganalogy,startinganalogsizewidth,startinganalogsizeheight)
      
      
      startinganalogx = startinganalogx - 10
      startinganalogy = startinganalogy - 7.25
      
      startinganalogsizewidth = startinganalogsizewidth + 8.5
      startinganalogsizeheight = startinganalogsizeheight + 10
      
      
      
      if(startinganalogx == 400)
      {
        stateofanalogclock = 2
        
        startinganalogx = 400
        startinganalogy = 175
        startinganalogsizewidth = 250  
        startinganalogsizeheight = 300
        
      }
      
      
      
      

      
      
      
    }
  
  if(stateofanalogclock==2)
    {
      cursor(ARROW)

      endinganalogx=400
      endinganalogy=175
      endinganalogsizewidth=250
      endinganalogsizeheight=300   

      
      image(analogclock,endinganalogx,endinganalogy,endinganalogsizewidth,endinganalogsizeheight)
      
    }
  
  if(stateofanalogclock==3)
    
    {
      //disapperas
      
    }
  
  if (stateofflashlight == 0)
    {
      image(flashlight,200,430,100,50)
    }
  

  if (mouseX > 200 && mouseX < 300 && mouseY > 430 && mouseY < 480)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofflashlight = 1
    }
  }
  
  if(hourhandiscollected == 2)
  {
    
    
    
    if(hourhandorientation==0)
    {
      image(hourhandnorth, 495,210,55,130)
      image(rightarrow,530,150,100,50)
      
      if (mouseX > 530 && mouseX < 630 && mouseY > 150 && mouseY < 200)
        {
          cursor(HAND);
          if (mouseIsPressed == true)
          {
          hourhandorientation=1
          }
        }
      
      image(leftarrow,420,150,100,50)
      if (mouseX > 420 && mouseX < 520 && mouseY > 150 && mouseY < 200)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
        hourhandorientation=2
        }
      }
    }


    if(hourhandorientation==1)
    {
      image(hourhandeast, 510,295,130,55)
      
      
      image(downarrow,630,330,55,100)
      
      if (mouseX > 630 && mouseX < 685 && mouseY > 330 && mouseY < 430)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandorientation=3
        }
      }
      
      image(uparrow,630,220,55,100)

      if (mouseX > 630 && mouseX < 685 && mouseY > 220 && mouseY < 320)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandorientation=0
        }
      }

      
      
    }

    if(hourhandorientation==2)
    {
      image(hourhandwest, 420,295,130,55)
      
      
      
      image(downarrow,330,330,55,100)

      if (mouseX > 330 && mouseX < 385 && mouseY > 330 && mouseY < 430)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandorientation=3
        }
      }

      image(uparrow,330,220,55,100)

      if (mouseX > 330 && mouseX < 385 && mouseY > 220 && mouseY < 320)
      {
        cursor(HAND);
        if (mouseIsPressed == true)
        {
          hourhandorientation=0
        }
      } 
      
      
    }

 
  
    
  

  }
  
  
}

function canvas6()
{
  
  
  image(endscreen, 0,0, 830, 600)
  
}



