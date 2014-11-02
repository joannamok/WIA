/*
     Name:
     Date:
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/
window.onload = function(){

//Draw Rectangle here

	var theCanvas1 = document.getElementById('canvas1');

	if(theCanvas1 && theCanvas1.getContext){

		var ctx1 = theCanvas1.getContext('2d');

		if(ctx1){
			//color
			ctx1.strokeStyle = "black";
			//strokewidth
			ctx1.lineWidth = 5;
			//Stroke Rectangle
			ctx1.strokeRect(0,0,50,100);
			//color of fill
			ctx1.fillStyle = "blue";
			//fill the color of rectangle
			ctx1.fillRect(0,0,50,100);
		}
	}



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

	var theCanvas2 = document.getElementById('canvas2');

	if(theCanvas2 && theCanvas2.getContext){

		var ctx2 = theCanvas2.getContext('2d');

		if(ctx2){
			//stroke color
			ctx2.strokeStyle="black";
			//fill color
			ctx2.fillStyle = "rgba(185,18,27,.5)";
			//stroke width 
			ctx2.lineWidth = 2;

			//sets degrees
			var degrees = 360;
			var radians=(degrees/180)*Math.PI;

			//drawing circle
			ctx2.beginPath();
			ctx2.arc(50,50,30,0,radians);
			ctx2.fill();
			ctx2.stroke();
			
		}
	}

	
/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here

	var theCanvas3 = document.getElementById('canvas3');
	if (theCanvas3 && theCanvas3.getContext){
	var ctx3 = theCanvas3.getContext("2d");
	if (ctx3){
		//style
		ctx3.fillStyle="green";
		ctx3.strokeStyle="red";
		ctx3.lineWidth=3;
		//draw star
		ctx3.beginPath();
		ctx3.moveTo(100,100);
		ctx3.lineTo(150,100);
		ctx3.lineTo(175,50);
		ctx3.lineTo(200,100);
		ctx3.lineTo(250,100);
		ctx3.lineTo(210,135);
		ctx3.lineTo(230,185);
		ctx3.lineTo(175,150);
		ctx3.lineTo(120,185);
		ctx3.lineTo(140,135);
		ctx3.closePath();
		ctx3.stroke();
		ctx3.fill();
		}
	}
		




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/
var theCanvas4 = document.getElementById('canvas4');
	if (theCanvas4 && theCanvas4.getContext){
	var ctx4 = theCanvas4.getContext("2d");
	if (ctx4){
		//style
		ctx4.strokeStyle="black";
		ctx4.fillStyle="blue";
		ctx4.lineWidth=4;
		ctx4.beginPath();
		ctx4.arc(400,250,200,0,(Math.PI/180)*180,true);
		ctx4.bezierCurveTo(200,225,250,225,250,250);
		ctx4.bezierCurveTo(250,225,300,225,300,250);
		ctx4.bezierCurveTo(300,225,350,225,350,250);
		ctx4.bezierCurveTo(350,225,400,225,400,250);
		ctx4.bezierCurveTo(400,225,450,225,450,250);
		ctx4.bezierCurveTo(450,225,500,225,500,250);
		ctx4.bezierCurveTo(500,225,550,225,550,250);
		ctx4.bezierCurveTo(550,225,600,225,600,250);
		ctx4.stroke();
		ctx4.fill();
	}
}

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.


********************************************/

//Draw text here
var theCanvas5 = document.getElementById('canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
	var ctx5 = theCanvas5.getContext("2d");
	if (ctx5) {
			var theString = "Joanna Lacey";

			//stroke and fill text
			ctx5.font ="48pt Sans-Serif";
			ctx5.fillStyle = "#8C2786";
			ctx5.strokeStyle = "rgba(217,30,186,.6)";
			//baseline-shifts text down
			ctx5.textBaseline = "middle";
			ctx5.fillText(theString, 100,100);
			ctx5.strokeText(theString,100,100);

			
						
		}
	}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImag method for all 3 of the ways.

********************************************/

//Draw images here
//Draw text here
var theCanvas6 = document.getElementById('canvas6');
	if (theCanvas6 && theCanvas6.getContext) {
	var ctx6 = theCanvas6.getContext("2d");
	if (ctx6) {

			//var for image
			var image = document.getElementById('img1');

			//draws image as it is
			ctx6.drawImage(image, -300,500);
			//draws a shrunk by 50% image
			ctx6.drawImage(image,0,0,1650,544);
			//slices out a portion of image x1110 y975
			ctx6.drawImage(image, 1110, 450, 555, 225, 0, 1650, 200, 100);
		}
	}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
var theCanvas7 = document.getElementById('canvas7');
	if (theCanvas7 && theCanvas7.getContext) {
	var ctx7 = theCanvas7.getContext("2d");
	if (ctx7) {

			
			//Sky
			ctx7.save();
			//color of fill
			ctx7.fillStyle = "cyan";
			//fill the color of rectangle
			ctx7.fillRect(0,0,700,300);
			ctx7.restore();
			
			
			//water
			ctx7.fillStyle = "blue";
			//fill the color of rectangle
			ctx7.fillRect(0,200,700,100);

			//sunbursts
			ctx7.save();
			ctx7.strokeStyle="orange";
			ctx7.lineWidth=5;
			var radians=(Math.PI/180)*20;
			ctx7.translate(0, 0);
			
			
			for(var degrees=0; degrees<=360; degrees+=20){
			ctx7.beginPath();
			ctx7.moveTo(0,0); 
			ctx7.lineTo(0, 200);
			ctx7.stroke();
			ctx7.rotate(radians);
			}
			ctx7.restore();

			//sun circle
			ctx7.save();
			ctx7.fillStyle = "yellow";
			
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
						
			ctx7.beginPath();
			ctx7.arc(0, 50, 100, 0, radians);
			ctx7.fill();
			ctx7.restore();

			//cloud1
			ctx7.save();
			ctx7.fillStyle = "white";
			
			var degrees = 360;
			var radians = (degrees/180)*Math.PI;
						
			ctx7.beginPath();
			ctx7.arc(400, 80, 30, 0, radians);
			ctx7.fill();

			ctx7.beginPath();
			ctx7.arc(450, 80, 40, 0, radians);
			ctx7.fill();

			ctx7.beginPath();
			ctx7.arc(425, 50, 30, 0, radians);
			ctx7.fill();

			//cloud2
			ctx7.beginPath();
			ctx7.arc(625, 100, 30, 0, radians);
			ctx7.fill();

			ctx7.beginPath();
			ctx7.arc(675, 100, 40, 0, radians);
			ctx7.fill();

			ctx7.beginPath();
			ctx7.arc(650, 70, 45, 0, radians);
			ctx7.fill();
			ctx7.restore();

			//text The Beach
			var theString = "theBeach";

			//stroke and fill text
			ctx7.font ="48pt Sans-Serif";
			ctx7.fillStyle = "rgba(217,30,186,.5)";
			//baseline-shifts text down
			ctx7.textBaseline = "middle";
			ctx7.fillText(theString, 350,130);
		
		}
	}

}//end onload function