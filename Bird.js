class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage= loadImage("sprites/smoke.png")
    this.trajec= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x>200){
var position=[this.body.position.x,this.body.position.y];
this.trajec.push(position);
    }
for (var i=0;i<this.trajec.length;i++){
  image(this.smokeImage,this.trajec[i][0],this.trajec[i][1])
  
}
  


    super.display();
}
}
