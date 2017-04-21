// v3
var stateofBeaker
var stateofClipboard
var stateofairvent


var canvas;

// lock variables for canvas 2 lock combination
var lock4;
var lock3; 
var lock2;
var lock1;

// lock  for canvas change 
var lock; 

// variables for the combination changing in canvas 2 (moving the numbers from 1 to 9)
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


function preload()
{
  
  
 clocksound = loadSound('https://dl.dropboxusercontent.com/s/h3hyhr90tod8hph/21938111.mp3?dl=0')
  
  
  clockticking = loadSound('https://dl.dropboxusercontent.com/s/jfx7a6du3vprh2c/pocket%20watch%20sound%20effect%20clock%20ticking%20fast%20sounds.mp3?dl=0') //Switching canvas sound
  
  

  Startscreen = loadImage('https://dl.dropbox.com/s/51erxr5uqzpj84k/z1.jpg?dl=0');
  //Start Screen


  
  //First Puzzle
  Labratory  = loadImage('https://dl.dropbox.com/s/lc41ud2kda6ppje/01_30_14brblablg.jpg?dl=0'); //Background for first puzzle
  
  Clock = loadImage('https://dl.dropbox.com/s/ry0s5a13d1xb232/maxresdefault.jpg?dl=0')
  


  Keypad = loadImage('https://dl.dropbox.com/s/cj8xxsxgo3hsfi0/Phone_keypad_layout%2C_grayscale.png?dl=0');

  Beaker = loadImage('https://dl.dropbox.com/s/20zq3j3ayqtsq9u/Beaker.png?dl=0');

  Number1 = loadImage('https://dl.dropbox.com/s/p1a1ejvsnkbgjah/1-Number-PNG.png?dl=0');
  
  Testtubes = loadImage('https://dl.dropbox.com/s/ur7pe63k4wjn05r/testubes.png?dl=0');

  Clipboard = loadImage('https://dl.dropbox.com/s/ck6p4pl419j2n1j/CLIPBOARD.png?dl=0')
  
  blackscreen = loadImage('https://dl.dropbox.com/s/1unlz6qygp43waw/blackscreen.png?dl=0')
  
  RedButton = loadImage('https://dl.dropbox.com/s/ntdhc96qwwzvv9q/generic-button-1357003_960_720.png?dl=0')
  
  Number3 = loadImage('https://dl.dropbox.com/s/urzxwg3h8juorbk/85263ce4-f562-486f-9728-4b4571a11ed8_1.45432d5c9761171e2d67b0496c8671dd.png?dl=0')
  
  
  Dummykeypad = loadImage('https://dl.dropbox.com/s/j4go5m6p0ltlo4v/DUMMY%20KEY.png?dl=0')
  
  
  //Second Puzzle
  
 cargoplane = loadImage('https://dl.dropbox.com/s/97j9l986zpjierz/Movie-Cargo-Plane-Interior.jpg?dl=0')
  
 openhatch = loadImage('https://dl.dropbox.com/s/so3rb2b8zt09j16/Opened%20hatch.png?dl=0')
 
 closedhatch = loadImage('https://dl.dropbox.com/s/xtn5fkvvi1894xe/closed%20hatch.png?dl=0')
 
 
 //Train
 traincar = loadImage('https://dl.dropbox.com/s/5hg1qd41enlm9mz/027-wes-anderson-theredlist.jpeg?dl=0')
 screwdriver = loadImage('https://dl.dropbox.com/s/dev5xn3sfnnehfl/screwdriver_PNG9512.png?dl=0')
 airvent = loadImage('https://dl.dropbox.com/s/rhardb91fpnrflg/airvent.png?dl=0')
 codeairvent = loadImage('https://dl.dropbox.com/s/amsyrs2wt1ycbjw/code.png?dl=0')
 
 
 //Barn
 
 barn = loadImage('https://dl.dropbox.com/s/8kguz5qsaru9dp4/2951584808_4ab1eacfab_b.jpg?dl=0')
 
 violin = loadImage('https://dl.dropbox.com/s/n2wgx3oct9ftdc1/violin.png?dl=0')
 
 openviolin = loadImage('https://dl.dropbox.com/s/0hggf60oecdec0p/opencase.png?dl=0')
 
 bomb = 
   loadImage('https://dl.dropbox.com/s/fy6oij5q5q11trk/StickyBomb-GTAV.png?dl=0')
 
 
 screwin = loadSound('https://dl.dropboxusercontent.com/s/1offj9ao6il0wba/Screw%20In%20Sound%20Effect.mp3?dl=0') 
 
 bombexplosion = loadSound('https://dl.dropboxusercontent.com/s/xzxjalohyvk4jic/Bomb%20Exploding%20Sound%20Effect.mp3?dl=0')
 
 
}

function setup()
{
  
  //Default
  createCanvas(830,600);
  canvas = 1;
  lock = false;
 

  
  
  //Canvas 2
  moveBeakerX = 543;
  moveBeakerY = 350;
  endBeakerX = 543;
  endBeakerY = 300;
  stateofBeaker = 1;

  
    //passwords
    a = false;
    b = false;
    c = false;
    d = false;
  
  
  
  
  //Canvas 3
  frameRate(30);
  
  timer = 0
  
  time = 0
  
  cargohatch = 0
  
  stateofairvent = 0
  
  stateofscrewdriver = 0
  
  screw1 = 0
  screw2 = 0
  screw3 = 0
  screw4 = 0
  
  //barn 
  lock = false; 
  lock1 = false;
  lock2 = false; 
  lock3 = false;
  lock4 = false

  lockcombo = 1;
  lockcombo2 = 1; 
  lockcombo3 = 1; 
  lockcombo4 = 1;
  
  stateofviolincase = 1

  stateofbomb = 0

}

function draw()
{
  
  
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
  else if (canvas == 3.5)
  {
    canvas3_1_1();
  }
  else if (canvas == 5)
  {
    canvas5();
  }
  else
  {
    canvas = 1;
  }
  
  
  
  if (timer == 0)
  {
  }
  else if (timer == 1) //Timer
  {
    fill(255,0,0);
    time = time + 1
    
    if(time == 150)
    {
      clockticking.play()  
    }
    if(time == 300)
    {
      canvas = 3.1
    }
    if(time == 450)
    {
      clockticking.play()  
    }
    if(time == 600)
    {
      canvas = 3.2
    }
    if(time == 750)
    {
      clockticking.play()   
    }
    if(time >= 900)
    {
      canvas = 3;
      time = 0;
    }
  }
  
  if (time==599)
  {
    stateofairvent = 0;

    stateofscrewdriver = 0;

    screw1 = 0;
    screw2 = 0;
    screw3 = 0;
    screw4 = 0;
  }
  
  text(time,10,10);
  text(mouseX,50,10);
  text(mouseY,50,30);
  
  
  
  //barn
  
  
  if(canvas == 3.2 && stateofviolincase == 0)
  {
  passCode1();
  }
  
  
  if(lockcombo == 1 && lockcombo2 == 9 && lockcombo3 == 10 && lockcombo4 == 1)
  {
    stateofviolincase = 1
  }
  
  
}

function canvas1() // Startscreen
{
  image(Startscreen,0,0,830,600);

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
}

function canvas2() // Lab
{
  image(Labratory,0,0,830,600);
  image(Testtubes, 160,380,180,150);
  image(Clock,350,50,150,100);
  image(blackscreen,720,270,80,60)   
  image(RedButton,750,420, 50,50)
  
  
  C1 = sqrt((mouseX - 775)*(mouseX - 775) + (mouseY - 445) * (mouseY - 445)); // button
  
  image(Number1,550,350,30,40)
  
  image(Dummykeypad,280,300,30,40);
  


  itemGrid();
  
  





  // if state of beaker is 1 then the box is stationary
  if (stateofBeaker == 1)
  {
    // draw box at default location
    image(Beaker,moveBeakerX,moveBeakerY,40,40)
  }
  // if state of box is 2 then the box is moving from left to right
  else if (stateofBeaker == 2)
  {
    // draw box
    image(Beaker, moveBeakerX,moveBeakerY,40,40)
    // move box to the right by increasing the x value of it

    // if the x value is beyond a domain change the state of the box
    // to stationary
    if (moveBeakerY > endBeakerY)
    {
      moveBeakerY = moveBeakerY + 2;
    }
    if (!(moveBeakerY > moveBeakerY))
    {
      stateofBeaker = 3;
    }
  }
  else if (stateofBeaker == 3)
  {
    // draw box at destination location
    image(Beaker,endBeakerX,endBeakerY,40,40);
  }
  

  //Time

  
  if (mouseX > 350 && mouseX < 500 && mouseY > 50 && mouseY < 150)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      clocksound.play()
    }
  }

  
  
  if (C1 < 25)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      image(Number3,750,280,20, 40)
    }
  }
  
  
  //Time
  if (mouseX > 543 && mouseX < 583 && mouseY > 350 && mouseY < 390)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofBeaker = 2;
    }
  }
  else
  {
    cursor(ARROW);
  }
  
  
  //Clipboard
  
  if (mouseX > 450 && mouseX < 500 && mouseY > 300 && mouseY < 380)
  {
    image(Clipboard, 350,120,250,350);
  }
  else
  {
    image(Clipboard, 450,300,50,80);
  }

  //Dummy Keycode

  if (mouseX > 280 && mouseX < 320 && mouseY > 300 && mouseY < 340)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      canvas = 2.1
    }
  }


  
  

}

function canvas2_1() // Password Codes
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
      if (b == true && a == true)
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
    }
  }
  if (d == true)
  {
    canvas = 3;
  }
}

function canvas3() // Airplane
{
  timer = 1
  cursor(ARROW);
  image(cargoplane,0,0,830,600)
  itemGrid();
  
  if (cargohatch == 0) //Closed hatch
  {
    image(closedhatch,60,260,130,130) 
    
  }
  
  if (cargohatch == 1) //Opened hatch
  {
    timer = 0
    image(openhatch,60,260,130,130) 
    
    if(mouseX > 60 && mouseX < 190 && mouseY > 260 && mouseY < 390 && mouseIsPressed == true)
    {
      canvas = 3.5
    }
  }
  
  

  if (stateofbomb == 1)
  {
    image(bomb, 107,533,54,44)

  }
  

  if(mouseX > 107 && mouseX < 180 && mouseY > 533 && mouseY < 580)
  {
    cursor(HAND);
    if (mouseIsPressed == true)
    {
      stateofbomb = 2
    }

  }
  
  
}



function canvas3_1_1() // Violin case
{

  cursor(ARROW);
  background(25,51,52)
  itemGrid();
}


function canvas3_1() //Train car
{
  cursor(ARROW);
  image(traincar,0,0,830,520)
  itemGrid();
  
  
  if (stateofairvent==0)
  {
    image(airvent, 620,405,200,105)
    
  }
  if (stateofairvent==1)
  {
    
    image(codeairvent, 620,405,200,105)

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
    
    

    if(mouseX > 620 && mouseX < 641 && mouseY > 407 && mouseY < 422)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw1 = 1
        screwin.play() 
      }

    }

    if(mouseX > 620 && mouseX < 641 && mouseY > 494 && mouseY < 509)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw2 = 1
        screwin.play() 
      }

    }

    if(mouseX > 791 && mouseX < 818 && mouseY > 407 && mouseY < 422)
    {
      cursor(HAND);
      if (mouseIsPressed == true)
      {
        screw3 = 1
        screwin.play() 
      }

    }

    if(mouseX > 791 && mouseX < 818 && mouseY > 494 && mouseY < 509)
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
        
    
    
  if (stateofbomb == 1)
  {
    image(bomb, 107,533,54,44)
    
  }
   
    
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
}

function canvas4() // Cell -> Prison Corridor
{

  itemGrid();
}

function canvas5() // Outside
{

  itemGrid();
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
    text("1",px1+5,py+20);
  }
  else if(lockcombo == 2)
  {
    text ("2",px1+5,py+20);
  }
  else if(lockcombo ==3)
  {
    text("3",px1+5,py+20);
  }
  else if(lockcombo == 4)
  {
    text("4",px1+5,py+20);
  }
  else if(lockcombo == 5)
  {
    text("5",px1+5,py+20);
  }
  else if(lockcombo ==6)
  {
    text("6",px1+5,py+20);
  }
  else if(lockcombo == 7)
  {
    text("7",px1+5,py+20);
  }
  else if(lockcombo ==8)
  {
    text("8",px1+5,py+20);
  }
  else if(lockcombo == 9)
  {
    text("9",px1+5,py+20);
  }
  else if(lockcombo == 10)
  {
    text("0",px1+5,py+20);
  }

  if(lockcombo2 == 1)
  {
    text("1",px2+5,py+20);
  }
  else if(lockcombo2 == 2)
  {
    text ("2",px2+5,py+20);
  }
  else if(lockcombo2==3)
  {
    text("3",px2+5,py+20);
  }
  else if(lockcombo2 == 4)
  {
    text("4",px2+5,py+20);
  }
  else if(lockcombo2 == 5)
  {
    text("5",px2+5,py+20);
  }
  else if(lockcombo2 ==6)
  {
    text("6",px2+5,py+20);
  }
  else if(lockcombo2 == 7)
  {
    text("7",px2+5,py+20);
  }
  else if(lockcombo2 ==8)
  {
    text("8",px2+5,py+20);
  }
  else if(lockcombo2 == 9)
  {
    text("9",px2+5,py+20);
  }
  else if(lockcombo2 == 10)
  {
    text("0",px2+5,py+20);
  }

  if(lockcombo3 == 1)
  {
    text("1",px3+5,py+20);
  }
  else if(lockcombo3 == 2)
  {
    text ("2",px3+5,py+20);
  }
  else if(lockcombo3 ==3)
  {
    text("3",px3+5,py+20);
  }
  else if(lockcombo3 == 4)
  {
    text("4",px3+5,py+20);
  }
  else if(lockcombo3 == 5)
  {
    text("5",px3+5,py+20);
  }
  else if(lockcombo3 ==6)
  {
    text("6",px3+5,py+20);
  }
  else if(lockcombo3 == 7)
  {
    text("7",px3+5,py+20);
  }
  else if(lockcombo3 ==8)
  {
    text("8",px3+5,py+20);
  }
  else if(lockcombo3 == 9)
  {
    text("9",px3+5,py+20);
  }
  else if(lockcombo3 == 10)
  {
    text("0",px3+5,py+20);
  }
  
  
  
  if(lockcombo4 == 1)
  {
    text("1",px4+5,py+20);
  }
  else if(lockcombo4 == 2)
  {
    text ("2",px4+5,py+20);
  }
  else if(lockcombo4 ==3)
  {
    text("3",px4+5,py+20);
  }
  else if(lockcombo4 == 4)
  {
    text("4",px4+5,py+20);
  }
  else if(lockcombo4 == 5)
  {
    text("5",px4+5,py+20);
  }
  else if(lockcombo4 ==6)
  {
    text("6",px4+5,py+20);
  }
  else if(lockcombo4 == 7)
  {
    text("7",px4+5,py+20);
  }
  else if(lockcombo4 ==8)
  {
    text("8",px4+5,py+20);
  }
  else if(lockcombo4 == 9)
  {
    text("9",px4+5,py+20);
  }
  else if(lockcombo4 == 10)
  {
    text("0",px4+5,py+20);
  }


}

function pass1Button()
{
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





