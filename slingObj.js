class SlingObj extends BaseClass {
    constructor(x,y){
      var options1 = {
         density:1
      }
      super(x,y,50,50,options1);
      this.image = loadImage("polygon.png");
      
      //this.smokeImage = loadImage("sprites/smoke.png");
      // this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y, this.width+40, this.height+40);
  
     /* if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }*/
    }
  }