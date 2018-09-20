function setup() {
	// define artboard size
	createCanvas(500,500);
	ellipseMode(CENTER);
	// Set here the values that are not changing all over the sketch

}

function draw() {
	background(0);
stroke(255,0,0);
strokeWeight(4);
	//Neck
//	line(250, 285, 250, 345);
	//Wheel
//	ellipse(250, 465, 70, 70);
	//Body
	//rect(200, 325, 100, 140);

	//Head

	beginShape();//gamba sx
 vertex(200, 380);//punto basso sx
 vertex(240, 380);//punto basso dx
 vertex(245, 310);//punto alto dx
 vertex(215, 310);//punto alto sx
 endShape(CLOSE);
 translate(225,340);
 rotate(radians(10));
 ellipse(0,0,30,15);//ginocchio sx
rotate(radians(-10));
 translate(-225,-340);
 beginShape();//gamba dx
vertex(260, 380);//punto basso sx
vertex(300, 380);//punto basso dx
vertex(285, 310);//punto alto dx
vertex(255, 310);//punto alto sx
endShape(CLOSE);
translate(275,340);
rotate(radians(-10));
ellipse(0,0,30,15);//ginocchio dx
rotate(radians(10));
translate(-275,-340);
ellipse(250, 150, 125);//testa
	ellipse(220, 235, 50);//spalla sx
	ellipse(280, 235, 50);//spalla dx
	ellipse(250, 280, 95);//pancia
	//ellipse(220, 310, 50);//ginocchio sx
	arc(280, 380, 50, 50, -PI, 0, CHORD);//piede dx
	arc(220, 380, 50, 50, -PI, 0, CHORD);//piede sx
	//rotateY(radians(90));
	//ellipse(225,340,30,15);//ginocchio sx
	translate(185,270);
  rotate(radians(-65));
	ellipse(0, 0, 95,35);//braccio sx
	rotate(radians(65));
	translate(-185,-270);
	translate(315,270);
	rotate(radians(65));
	ellipse(0, 0, 95,35);//braccio dx
	rotate(radians(-65));
	translate(-315,-270);
	//mano sx 5 ellissi per fare le mani
	  translate(183,310);
  	rotate(radians(55));
		ellipse(0, 0, 30,10);//pollice
		rotate(radians(-55));
		translate(-183,-310);
		translate(168,315);
	  rotate(radians(10));
		ellipse(0, 0, 10,30);//1falange
		rotate(radians(-10));
		translate(-168,-315);

		translate(173,334);
		rotate(radians(40));
		ellipse(0, 0, 23,10);//falange dietro
		rotate(radians(-40));
		translate(-173,-334);

		translate(170,327);
		rotate(radians(50));
    ellipse(0, 0, 20,10);//2 falange
		rotate(radians(-50));
		translate(-170,-327);

	translate(177,331);
		rotate(radians(20));
		ellipse(0, 0, 20,10);//3 falange
		rotate(radians(-20));
		translate(-177,-331);




}
