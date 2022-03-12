function preload() {
  img=loadImage('https://c.tenor.com/rKS8__SLDFkAAAAC/lights-border.gif');
  img1=loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWIGP07iCXTJg-sj-zvKbMVGbJym7mBcoUww&usqp=CAU')
  }
  
  function setup() {
  canvas=createCanvas(500,500);
    canvas.center();
  }
  
  function draw() {
  image(img,0,0,500,500);
    image(img1,25,26,450,450);
  }
    function take_snapshot(){
        save('pic.png');
    }