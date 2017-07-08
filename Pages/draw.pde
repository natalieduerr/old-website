ArrayList<PShape> pshapes;

//dragging shape
float easing = 1.00;
float x;
float y;

//variables for size and radius
int size;
int radius = 50;
 
//colors
color col;
color gray = #afafaf;
color red = #f45c41;
color blue = #4286f4;
color green = #70FF33;
color white = (255);
 
int slide = 1; //defining slide #

//button variables
int rectX = 615;
int rectY = 615; 
int rectSizeX = 100; 
int rectSizeY = 50; 

//button 2 variables
int rectX2 = 1100;
int rectY2 = 615;

//title slide text box restrictions 
int textX = 390; 
int textY = 150;
int textX2 = 500;
int textY2 = 300;
int space2 = 25;
int textY3 = textY + 65;

//instructions text box restrictions
int textA = 1020; 
int textB = 425;
int textA2 = 115;
int textB2 = 225;
int space = 20;

//colors for hover
color rectColor;
color rectHover;

//hover setup for boxes
boolean rectOver = false; 
boolean rectOver2 = false;

//shapes
boolean square1 = false;
boolean circle1 = false;
boolean triangle1 = false;


//Instructions text strings
String c = "c/C  = Circle";
String s = "s/S = Square";
String t = "t/T = Triangle";
String n = "n/N = No Shape";
String larger = "+ = Larger";
String smaller = "- - Smaller";
String gra = "1 = Gray";
String r = "2 = Red";
String b = "3 = Blue";
String gre = "4 = Green";
String w = "5 = White";

void setup(){
//PShape ArrayList
 pshapes = new ArrayList<PShape>();
  
//Sets recctangle hover colors
 rectColor = color(blue);
 rectHover = color(red);

//Sets up screen/canvas
 size(1280,720);
}

void draw(){
  update(mouseX, mouseY); //tracks mouse coordinates
  background(white);
  //Using switch function to go between directions and canvas.
  switch(slide){
  case 1:
  titleText();
  break;

  case 2:
   for (int i = pshapes.size()-1; i>=0; i--){
    shape(pshapes.get(i));
   }
   
   case2();

    break;
  }
  
//general rectangle  
  rectOver();  
  fill(white);
  rect(rectX, rectY, rectSizeX, rectSizeY);
  textButton();
  noStroke();
}

boolean overRect(int x, int y, int width, int height)  {
  if (mouseX >= x && mouseX <= x+width && 
      mouseY >= y && mouseY <= y+height) {
    return true;
  } else {
    return false;
  }
}

void update(int x, int y) {
  if (overRect(rectX, rectY, rectSizeX, rectSizeY) ) {
    rectOver = true;}
  else {
    rectOver = false;}
  if (overRect(rectX2, rectY2, rectSizeX, rectSizeY)){
    rectOver2 = true;}
  else {
    rectOver2 = false;}
}

void mousePressed(){
  if (rectOver) {
    if(slide < 2){
    slide++;
    }
  else {
    slide = 1;
    pshapes.clear();
    square1 = false;
    circle1 = false;
    triangle1 = false;
    }
}

  if (circle1 == true) {
   PShape circ = (createShape(ELLIPSE, mouseX, mouseY, radius+size, radius+size));
   circ.setFill(color(col));
   pshapes.add(0, circ);

 }
  else if (square1 == true) {
   PShape rec = (createShape(RECT, mouseX, mouseY, radius+size, radius+size));
   rec.setFill(color(col));
   pshapes.add(0, rec);
  }
  else if (triangle1 == true) {
    float tris = sqrt(sq(radius+size)/3);
    int tri2 = (int) tris;
    PShape tri = (createShape(TRIANGLE, mouseX, mouseY, mouseX+tri2, mouseY+radius+size, mouseX-tri2, mouseY+radius+size));
    tri.setFill(color(col));
    pshapes.add(0,tri);
}

}

void keyPressed() {
if (slide == 2){
  if (key == '-' || key == '_'){
   size-=10;
  }
  else if (key == '+' || key == '='){
   size+=10;
  }
  else{
  }
  if (key == 'c' || key == 'C') {
   circle1 = true;
   square1 = false;
   triangle1 = false;
   col = gray;
   size = 0;
  }
  else if (key == 's' || key =='S') {
   circle1 = false;
   square1 = true;
   triangle1 = false;
   col = gray;
   size = 0;
  }
  else if (key == 't' || key == 'T'){
   circle1 = false;
   square1 = false;
   triangle1 = true;
   col = gray;
   size = 0;
 }
 else if (key == 'n' || key =='N'){
   circle1 = false;
   square1 = false;
   triangle1 = false;
 }
 else{
 }

 if (key =='1'){
  col = gray;
 }
 else if (key =='2'){
  col = red;
 }
 else if (key =='3'){
  col = blue;
 }
 else if (key =='4'){
  col = green;
 }
 
 else if (key=='5'){
  col = white;
 }
 
}
}

void reg(){
  textSize(14);
  textAlign(LEFT);
  fill(1);
}

void bold(){
  textSize(16);
  textAlign(LEFT);
  fill(1);
}

void big(){
  textSize(16);
  textAlign(LEFT);
  fill(0);
}

void small(){
  textSize(12);
  textAlign(LEFT);
  fill(1);
}

void button(){
  textSize(16);
  textAlign (CENTER);
  if (rectOver) {
    fill(rectHover); 
  } 
  else {
    fill(rectColor);
  }
}

void buttonSmall(){
  textSize(12);
  textAlign (CENTER);
  if (rectOver2) {
    fill(rectHover); 
  } 
  else {
    fill(rectColor);
  }
}

void whichSlide(){
  if (slide == 1) {
   textSize(16);
  }
  else if (slide == 2){
    textSize(14);
  }
  else{
  }
}

void textGray(){
  whichSlide();
  textAlign(LEFT);
  fill(gray);
}

void textRed(){
  whichSlide();
  textAlign(LEFT);
  fill(red);
}

void textBlue(){
  whichSlide();
  textAlign(LEFT);
  fill(blue);
}

void textGreen(){
  whichSlide();
  textAlign(LEFT);
  fill(green);
}

void textButton(){
   if (slide == 1){
   button();
   text("NEXT",rectX+50,rectY+30);
  }
  else if (slide == 2){ 
   button();
   text("RESET",rectX+50,rectY+30);
  } 
}

void theShapes(){
   if (circle1==true){
    fill(col);
    ellipse(x, y, radius+size, radius+size);
   }
   else if (square1==true){
    fill(col);
    rect(x, y, radius+size, radius+size);
   }
   else if (triangle1==true){
     fill(col);
     float tris = sqrt(sq(radius+size)/3);
     int tri2 = (int) tris;
     triangle(mouseX, mouseY, mouseX+tri2, mouseY+radius+size, mouseX-tri2, mouseY+radius+size);
   }
   else {}
 }
 
void titleText(){
  big();
   text("This program will allow you to draw circles, squares, and triangles of different sizes and colors across the canvas. In order to call and manipulate the shapes, use the following keys... ",textX,textY,textX2, textY2);
   text(c, textX, textY3, textX2, textY2);
   text(s, textX, textY3+space2, textX2, textY2);   text("t/T = Triangle", textX, textY3+space2*2, textX2, textY2); 
   text(n, textX, textY3+space2*3, textX2, textY2);
  bold();
   text(larger, textX, textY3+4*space2, textX2, textY2);
  small();
   text(smaller, textX, textY3+5*space2, textX2, textY2);
  textGray();
   text(gra, textX, textY3+6*space2, textX2, textY2);
  textRed();
   text(r, textX, textY3+7*space2, textX2, textB2);
  textBlue();
   text(b, textX, textY3+8*space2, textX2, textY2);
  textGreen();
   text(gre, textX, textY3+9*space2, textX2, textY2);
  big();
   text(w, textX, textY3+10*space2, textX2, textY2);
 }
 
void instructions(){
  if (rectOver2) {
   stroke(rectHover);
   fill(white);
   rect(textA-space, textB-space, textA2 + space, textB2 + space);
   reg();
    text(c, textA, textB, textA2, textB2);
    text(s, textA, textB+space, textA2, textB2);
    text(t, textA, textB+space*2, textA2, textB2); 
    text(n, textA,textB+space*3, textA2, textB2);
   bold();
    text(larger, textA, textB+4*space, textA2, textB2);
   small();
    text(smaller, textA, textB+5*space, textA2, textB2);
   textGray();
    text(gra, textA, textB+6*space, textA2, textB2);
   textRed();
    text(r, textA, textB+7*space, textA2, textB2);
   textBlue();
    text(b, textA, textB+8*space, textA2, textB2);
   textGreen();
    text(gre, textA, textB+9*space, textA2, textB2);
   reg();
    text(w, textA, textB+10*space, textA2, textB2);
   fill(white); 
  } 
  else {
   fill(white);
   stroke(rectColor);
  }
  
  rect(rectX2, rectY2, rectSizeX, rectSizeY);
  
  buttonSmall();
  text("INSTRUCTIONS",rectX2+50,rectY2+30);
}

void rectOver() {
  if (rectOver) {
    stroke(rectHover);} 
  else {
    stroke(rectColor);}
}

void mouseShape(){
   float targetX = mouseX;
   float dx = targetX - x;
   x += dx * easing;
  
   float targetY = mouseY;
   float dy = targetY - y;
   y += dy * easing;
}

void case2(){
   mouseShape();
   theShapes();
   instructions();
 }