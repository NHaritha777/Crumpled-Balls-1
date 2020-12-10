class dustbin
{
	constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.width= width;
		this.height= height;
	    this.angle=0;	
		
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, {isStatic:true})
		Matter.Body.setAngle(this.body, this.angle);
		
		World.add(world, this.body)
		

	}
	display()
	{
			var pos=this.body.position;
			
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill("red")
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.width, this.height);
			pop()

			
			
	}

}