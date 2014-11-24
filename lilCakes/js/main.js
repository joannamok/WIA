window.onload = function() {
	//cupcake border under main article
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

			//Create a var to hold image
			//three cupcakes img
			var srcImg = document.getElementById("img4");
			//green cupcakes img
			var srcImg1 = document.getElementById("img1");
			//pink cupcakes img
			var srcImg2 = document.getElementById("img2");
			//light pink cupcakes img
			var srcImg3 = document.getElementById("img3");


			//Draw image to canvas1 cupcakes
			// 3 cupcakes img
			ctx.drawImage(srcImg,0,0,150,90);
			// green cupcakes img
			ctx.drawImage(srcImg1,125,19,100,70);
			// pink cupcakes img
			ctx.drawImage(srcImg2,0,75,100,70);
			// pale pink cupcakes img
			ctx.drawImage(srcImg3,200,60,100,70);
			// 3 cupcakes img
			ctx.drawImage(srcImg,70,60,150,90);
			


     						
		}
	}


		//cupcake border in footer 
		var theCanvas2 = document.getElementById('Canvas2');
		if (theCanvas2 && theCanvas2.getContext) {
		var ctx = theCanvas2.getContext("2d");
		if (ctx) {

			//Create a var to hold image
			//three cupcakes img
			var srcImg = document.getElementById("img4");
			//green cupcakes img
			var srcImg1 = document.getElementById("img1");
			//pink cupcakes img
			var srcImg2 = document.getElementById("img2");
			//light pink cupcakes img
			var srcImg3 = document.getElementById("img3");

			//Draw image to canvas1 cupcakes
			// 3 cupcakes img
			ctx.drawImage(srcImg,0,0,150,90);
			// green cupcakes img
			ctx.drawImage(srcImg1,140,13,100,70);
				
				


	     						
			}
		}
}

