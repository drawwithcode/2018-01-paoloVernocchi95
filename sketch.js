function setup() {
	// define artboard size
	createCanvas(500,500);
	ellipseMode(CENTER);
	rectMode(CENTER);
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

translate(185,270);
rotate(radians(-65));
ellipse(0, 0, 95,35);//braccio sx
ellipse(0, 0, 7,35);//braccio sx
rotate(radians(65));
translate(-185,-270);
translate(315,270);
rotate(radians(65));
ellipse(0, 0, 95,35);//braccio dx
ellipse(0, 0, 7,35);//braccio sx
rotate(radians(-65));
translate(-315,-270);

	//ellipse(220, 235, 50);//spalla sx
	//ellipse(280, 235, 50);//spalla dx
	//ellipse(250, 280, 95);//pancia
	//busto nuovo
	stroke(0,255,0);
	arc(250, 280, 95, 95, radians(-60),radians(240));//pancia
	stroke(0,0,255);
	arc(250, 280, 95, 95, radians(97),radians(140));//giunto ginocchio sx
	arc(250, 280, 95, 95, radians(40),radians(85));//giunto ginocchio dx  
	noStroke();
	rect(250, 250, 80, 78);
  stroke(0,255,0);
	line(215, 210, 285, 212)
	arc(280, 237, 50, 50, radians(-90),radians(60));//spalla dx
	arc(220, 235, 50, 50, radians(120),radians(270));//spalla sx
	arc(250, 210, 40, 40, 0, PI, CHORD);//collo
	ellipse(250, 150, 125);//testa
	arc(270, 180, 125, 50, radians(190),radians(310),OPEN);//sopracciglia
	beginShape();//occhio sx
 vertex(220, 165);//1
 vertex(240, 160);//2
 vertex(228, 175);//3
 endShape(CLOSE);

 beginShape();//occhio sx
 vertex(280, 157);//1
 vertex(300, 160);//2
 vertex(290, 170);//3
 endShape(CLOSE);


	beginShape();//pezzo nero petto
 vertex(210, 255);//punto basso sx
 vertex(290, 255);//punto basso dx
 vertex(270, 242);//punto alto dx
 vertex(230, 242);//punto alto sx
 endShape(CLOSE);

 beginShape();//triangolo spalla sx
vertex(215, 212);//1
vertex(220, 210);//2
vertex(215, 225);//3
endShape(CLOSE);

beginShape();//triangolo spalla sx
vertex(285, 212);//1
vertex(280, 212);//2
vertex(285, 225);//3
endShape(CLOSE);




	stroke(255,0,0);
	//ellipse(220, 310, 50);//ginocchio sx
	arc(280, 380, 50, 50, -PI, 0, CHORD);//piede dx
	arc(220, 380, 50, 50, -PI, 0, CHORD);//piede sx
	//rotateY(radians(90));
	//ellipse(225,340,30,15);//ginocchio sx

	//mano dx 5 ellissi per fare le mani

	  translate(317,310);
  	rotate(radians(-55));
		ellipse(0, 0, 30,10);//pollice
		rotate(radians(55));
		translate(-317,-310);

		translate(332,315);
	  rotate(radians(-10));
		ellipse(0, 0, 10,30);//1falange
		rotate(radians(10));
		translate(-332,-315);

		translate(327,334);
		rotate(radians(-40));
		ellipse(0, 0, 23,10);//falange dietro
		rotate(radians(40));
		translate(-327,-334);

		translate(330,327);
		rotate(radians(-50));
    ellipse(0, 0, 20,10);//2 falange
		rotate(radians(50));
		translate(-330,-327);

	translate(323,331);
		rotate(radians(-20));
		ellipse(0, 0, 20,10);//3 falange
		rotate(radians(20));
		translate(-323,-331);

//mano sx
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
