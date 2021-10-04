let numX = 4;
let numY = 7;
let nbs = [];

function setup() {
  createCanvas(400, 400);
  

   // for loop
  for (let i=0;i<numX;i=i+1){
  for (let j=0;j<numY;j=j+1){
    nbs.push(new ourBall(i*width/numX/2+width/numX/2,j*height/numY+height/numY/2,50));
  }
  }
               
}

function draw() {
  background(220);
  // 稱 list 裡面的每個東西為 v ，然後執行所擁有的能力
  
  nbs.forEach((v) => {
   v.display();
  })
    
    
  
}
 //物件導向模式
class ourBall{
  //建構類別需要的參數
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.size = s;
    this.dx = 4
    this.dy = -5
    this.color = (255,204,0)
  
}
 //能力 method()
  display(){
    this.run();
    this.bounce();
    fill(this.color);
    circle(this.x, this.y, this.size);
    this.checkmouse();
    
  }
  run(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy; 
  }
  bounce(){
    if(this.y - this.size/2 < 0){this.dy = -1*this.dy;this.color=color(255, 0, 0)}
    if(this.x - this.size/2 < 0){this.dx = -1*this.dx;this.color=color(255, 0, 255)}
    if(this.y + this.size/2 > height){this.dy = -1*this.dy;this.color=color(255, 255, 0)}
    if(this.x + this.size/2 > width){this.dx = -1*this.dx;this.color=color(255, 255, 255)}
}

  checkmouse(){
    line(this.x, this.y, mouseX, mouseY)
    if(mouseX < this.x + this.size/2 &&
       mouseX > this.x - this.size/2 &&
       mouseY < this.Y + this.size/2 &&
       mouseY > this.Y - this.size/2 ){
      circle(this.x, this.y, this.size*1.5) }
  }
}