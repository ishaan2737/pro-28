class rocklauncher{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.rocklauncher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.rocklauncher.bodyA=body;
	}

	fly()
	{
		this.rocklauncher.bodyA=null;
	}

	display()
	{
		if(this.rocklauncher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}