export function DisplayLive(){

   function goLive(){
    return new Promise(function(fulfill, reject){
      if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video: true})
         .then((stream)=>{
           let container = document.getElementById("container1")
           let canvas = document.getElementById("canvas");
           let ctx = canvas.getContext("2d");
           let canvas2 = document.getElementById("canvas2");
           let ctx2 = canvas2.getContext("2d");
           const vid = document.createElement("video")
           const slider = document.getElementById('slider')
           const sliderlabel = document.getElementById("slider-value")
           sliderlabel.innerHTML=slider.value +"px"
           function handleSlider(){
             if(parseInt(slider.value)<3){
               sliderlabel.innerHTML="Original";
               ctx.drawImage(vid,0,0,canvas2.width,canvas2.height)
             }
             else{sliderlabel.innerHTML=slider.value +"px"; draw(parseInt(slider.value))}
             }
           slider.addEventListener('change',handleSlider)
           window.addEventListener("resize",()=>{updateCanvasSize(vid)})
           vid.srcObject = stream;
           vid.muted="muted"
           vid.autoplay = true
           vid.onloadedmetadata=()=>updateCanvasSize(vid)
           let canvasInterval = window.setInterval(() => {
             ctx.drawImage(vid,0,0,canvas.width,canvas.height)
             if(slider.value<3){
               ctx2.drawImage(vid,0,0,canvas2.width,canvas2.height)}
             else{draw(parseInt(slider.value))}
             },1000/30)
             fulfill([canvasInterval,stream])
           } 
             )
         .catch(function(error){
             console.log(error)
         })
     
   }
   else{
     reject(console.log("getMediaUser not supported"))
   }
    })
}

function stopLive(canvasInterval,stream){
    console.log(stream);
    console.log(canvasInterval); // Make sure you're seeing the correct interval ID
    window.clearInterval(canvasInterval); // Clear the interval using the existing interval ID
    // Also, stop the media tracks (video stream)
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => {
            track.stop();
        });
    }
}

  // stream = navigator.mediaDevices.getUserMedia({video: true})
  //       .then((stream)=>{
  //         console.log(global.canvasInterval)
  //         window.clearInterval(canvasInterval)
  //         const tracks = stream.getTracks();
  //         tracks.forEach(track => {
  //           track.stop()
  //         });
  //       })
  //       .catch(function(error){
  //           console.log("Something went wrong")
  //       })
   
  //Drawing image on canvas
  function draw(size){
    let canvas = document.getElementById("canvas")
    let canvas2 = document.getElementById("canvas2")
    let ctx2 = canvas2.getContext("2d")
    let ctx = canvas.getContext("2d")
    ctx2.clearRect(0,0,canvas2.width,canvas2.height)
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imgData.data;
      //Scale used to change resolution 
    const scale = size
    for(let j=0;j<canvas2.height;j+=scale){
      for(let i = 0; i < canvas2.width; i += scale) {
          // multiplied by 4 because in the array there are 4 values for each pixel (R,G,B,A)
          const posX = i*4
          const posY = j*4
          // used to find the pixel of the image that we'll use inside the data array we created 
          // startng from zero going to data array length
          const pixelndex =(posY * canvas.width)+ posX
          const red = data[pixelndex];
          const green = data[pixelndex + 1];
          const blue = data[pixelndex + 2];
          const alpha = data[pixelndex + 3];
          const average = (red+green+blue)/3
          ctx2.fillStyle = `rgb(${red},${green},${blue})`;
          
          if(0<=average && average<1){ctx2.fillText("@",i,j)}
          else if(1<=average && average<20){ctx2.fillText("#",i,j)}
          else if(20<=average && average<30){ctx2.fillText("W",i,j)}
          else if(30<=average && average<40){ctx2.fillText("$",i,j)}
          else if(40<=average && average<50){ctx2.fillText("9",i,j)}
          else if(50<=average && average<60){ctx2.fillText("8",i,j)}
          else if(60<=average && average<70){ctx2.fillText("7",i,j)}
          else if(70<=average && average<80){ctx2.fillText("6",i,j)}
          else if(80<=average && average<90){ctx2.fillText("5",i,j)}
          else if(90<=average && average<100){ctx2.fillText("4",i,j)}
          else if(100<=average && average<110){ctx2.fillText("3",i,j)}
          else if(110<=average && average<120){ctx2.fillText("2",i,j)}
          else if(120<=average && average<130){ctx2.fillText("1",i,j)}
          else if(130<=average && average<150){ctx2.fillText("0",i,j)}
          else if(140<=average && average<150){ctx2.fillText("?",i,j)}
          else if(150<=average && average<160){ctx2.fillText("a",i,j)}
          else if(160<=average && average<170){ctx2.fillText("b",i,j)}
          else if(170<=average && average<180){ctx2.fillText("c",i,j)}
          else if(180<=average && average<190){ctx2.fillText("d",i,j)}
          else if(190<=average && average<200){ctx2.fillText("=",i,j)}
          else if(200<=average && average<210){ctx2.fillText("+",i,j)}
          else if(210<=average && average<220){ctx2.fillText("-",i,j)}
          else if(220<=average && average<225){ctx2.fillText(";",i,j)}
          else if(225<=average && average<230){ctx2.fillText(";",i,j)}
          else if(230<=average && average<235){ctx2.fillText(",",i,j)}
          else if(235<=average && average<240){ctx2.fillText("_",i,j)}
          else if(240<=average && average<245){ctx2.fillText(".",i,j)}
          else if(245<=average){ctx2.fillText(".",i,j)}
          }   
        }
  }

  function updateCanvasSize(vid){
      const container = document.getElementById("container1")
      const canvas2 = document.getElementById("canvas2")
      const canvas = document.getElementById("canvas")
      let ratio = Math.min(container.clientHeight/vid.videoHeight,container.clientWidth/vid.videoWidth)
      canvas.width=vid.videoWidth*ratio
      canvas.height=vid.videoHeight*ratio
      canvas2.width=vid.videoWidth*ratio
      canvas2.height=vid.videoHeight*ratio
      }

return [goLive,stopLive]
    
}
