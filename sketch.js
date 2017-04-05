// noan

var stateofBeaker
var stateofClipboard
var stateofairvent


function preload()
{
  
  
 //clocksound = loadSound('https://dl.dropboxusercontent.com/s/h3hyhr90tod8hph/21938111.mp3?dl=0')
  
  
  //lockticking = loadSound('https://dl.dropboxusercontent.com/s/jfx7a6du3vprh2c/pocket%20watch%20sound%20effect%20clock%20ticking%20fast%20sounds.mp3?dl=0') //Switching canvas sound
  
  

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
 
 
}

function setup()
{
  
  //Default
  createCanvas(830,600);
  canvas = 3.1;
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
  time = 0
  
  timer = 0 
  
  cargohatch = 0
  
  stateofairvent = 0
  

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
  else if (canvas == 3.3)
  {
    canvas3_3();
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
  
  
  if (timer == 1) //Timer
  {
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
    if(time == 900)
    {
      canvas = 3.3
    }
    if(time == 1050)
    {
      clockticking.play()  
    }
    if(time == 1200)
    {
      canvas = 3
      time = 0
    }
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
    image(openhatch,60,260,130,130) 
    
    if(mouseX > 60 && mouseX < 190 && mouseY > 260 && mouseY < 390 && mouseIsPressed == true)
    {
      canvas = 3.5
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
  
  if (stateofairvent==0)
  {
    image(airvent, 620,405,200,105)
  }
  
  
  itemGrid();

}


function canvas3_2() // Prison Courtyard -> Cell
{
  cursor(ARROW);
  background(2,11,152)
  itemGrid();
}

function canvas3_3() // Prison Courtyard -> Cell
{
  cursor(ARROW);
  background(55,33,200)
  itemGrid();
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
  if (lock)
  {
    lock = false;
  }
}

