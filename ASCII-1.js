// //JS for importing and turning an image into an ASCII image 
// //All the Characters we will use to display images in density order(Dense - Least Dense)
// //Bringing in the canvas from the html file that we will display all our work on and getting the contents of it
// const canvas = document.getElementById('canvas1')
// const canvas2 = document.getElementById('canvas2')
// const container = document.getElementById('container')
// const ctx = canvas.getContext('2d')
// const ctx2 = canvas2.getContext('2d')
// const slider = document.getElementById('slider')
// const sliderlabel = document.getElementById("slider-value")
// sliderlabel.innerHTML=slider.value +"px"
// window.addEventListener("resize",()=>{displayImage("./me.jpg",5)})
// // displayVideo("./vid.mp4")
// displayImage("./me.jpg",5)
// function displayVideo(video){
//   const importedImage = document.createElement("video")
//   importedImage.src=video
//   importedImage.muted="muted"
//   importedImage.loop="true"
//   importedImage.clientHeight=container.clientHeight
//   importedImage.clientWidth=container.clientWidth
//   importedImage.height=container.clientHeight
//   importedImage.width=container.clientWidth
//   importedImage.play()
//   updateCanvasSize(importedImage)
//   scale = 5
//   function handleSlider(){sliderlabel.innerHTML=slider.value +"px";scale=parseInt(slider.value);}
//   slider.addEventListener('change',handleSlider)
//   canvasInterval = window.setInterval(() => {ctx.drawImage(importedImage,0,0,canvas.width,canvas.height);}, 1000/60);
//   canvasInterval2 = window.setInterval(() => {draw(scale);}, 1000/30);
// }

//  function displayImage(image,scale){
//   function handleSlider(){sliderlabel.innerHTML=slider.value +"px"; draw(parseInt(slider.value))}
//   slider.addEventListener('change',handleSlider)
//   ctx2.clearRect(0,0,canvas.width,canvas.height)
//   let scaleValue = scale
//   const importedImage = new Image()
//   importedImage.src=image
//   importedImage.onload = function (){
//     //Aspect ratio
//     updateCanvasSize(importedImage)
//     //Drawing image on canvas 
//     ctx.drawImage(importedImage,0,0,canvas.width,canvas.height)
//     draw(scale)
//     }
    
//  }
// //New image item with the src of our image we are converting to ASCII and inserting it into canvas 
// function draw(size){
//   ctx2.clearRect(0,0,canvas.width,canvas.height)
//   const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imgData.data;
//     //Scale used to change resolution 
//   const scale = size
//   for(let j=0;j<canvas.height;j+=scale){
//     for(let i = 0; i < canvas.width; i += scale) {
//         // multiplied by 4 because in the array there are 4 values for each pixel (R,G,B,A)
//         const posX = i*4
//         const posY = j*4
//         // used to find the pixel of the image that we'll use inside the data array we created 
//         // startng from zero going to data array length
//         const pixelndex =(posY * canvas.width)+ posX
//         const red = data[pixelndex];
//         const green = data[pixelndex + 1];
//         const blue = data[pixelndex + 2];
//         const alpha = data[pixelndex + 3];
//         const average = (red+green+blue)/3
//         ctx2.fillStyle = `rgb(${red},${green},${blue})`;
        
//         if(0<=average && average<1){ctx2.fillText("@",i,j)}
//         else if(1<=average && average<20){ctx2.fillText("#",i,j)}
//         else if(20<=average && average<30){ctx2.fillText("W",i,j)}
//         else if(30<=average && average<40){ctx2.fillText("$",i,j)}
//         else if(40<=average && average<50){ctx2.fillText("9",i,j)}
//         else if(50<=average && average<60){ctx2.fillText("8",i,j)}
//         else if(60<=average && average<70){ctx2.fillText("7",i,j)}
//         else if(70<=average && average<80){ctx2.fillText("6",i,j)}
//         else if(80<=average && average<90){ctx2.fillText("5",i,j)}
//         else if(90<=average && average<100){ctx2.fillText("4",i,j)}
//         else if(100<=average && average<110){ctx2.fillText("3",i,j)}
//         else if(110<=average && average<120){ctx2.fillText("2",i,j)}
//         else if(120<=average && average<130){ctx2.fillText("1",i,j)}
//         else if(130<=average && average<150){ctx2.fillText("0",i,j)}
//         else if(140<=average && average<150){ctx2.fillText("?",i,j)}
//         else if(150<=average && average<160){ctx2.fillText("a",i,j)}
//         else if(160<=average && average<170){ctx2.fillText("b",i,j)}
//         else if(170<=average && average<180){ctx2.fillText("c",i,j)}
//         else if(180<=average && average<190){ctx2.fillText("d",i,j)}
//         else if(190<=average && average<200){ctx2.fillText("=",i,j)}
//         else if(200<=average && average<210){ctx2.fillText("+",i,j)}
//         else if(210<=average && average<220){ctx2.fillText("-",i,j)}
//         else if(220<=average && average<225){ctx2.fillText(";",i,j)}
//         else if(225<=average && average<230){ctx2.fillText(";",i,j)}
//         else if(230<=average && average<235){ctx2.fillText(",",i,j)}
//         else if(235<=average && average<240){ctx2.fillText("_",i,j)}
//         else if(240<=average && average<245){ctx2.fillText(".",i,j)}
//         else if(245<=average){ctx2.fillText(".",i,j)}
//         }   
//       }
// }
// function updateCanvasSize(importedImage){
//   let ratio = Math.min(container.clientHeight/importedImage.height,container.clientWidth/importedImage.width)
//   canvas.width=importedImage.width*ratio
//   canvas.height=importedImage.height*ratio
//   canvas2.width=importedImage.width*ratio
//   canvas2.height=importedImage.height*ratio
//   }