var prediction1=""
var prediction2=""
Webcam.set({
    width:350,height:300,image_format:'png',png_quality:90
})
camera=document.getElementById("camera")
Webcam.attach('#camera')
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieimage" src=" '+data_uri+' ">'
    })
}
