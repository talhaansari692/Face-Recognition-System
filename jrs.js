var vidElement=null;
function start(){
  var camAvailable=navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
  if(camAvailable){
    vidElement=document.getElementById("vid");
    navigator.mediaDevices.getUserMedia({video:true}).then(function(stream){
        vidElement.srcObject=stream;
        vidElement.play();
    });
  }
}
