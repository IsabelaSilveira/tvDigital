//função que verifica se o vídeo foi carregado 
var objVideo = document.querySelector('video'); 
var loadAnimation = document.getElementById('loader');

objVideo.addEventListener('loadeddata', function() {

    if(objVideo.readyState >= 3) {
        setTimeout(function(){
            loadAnimation.style.display='none'; 
            objVideo.style.display='block'; 
            objVideo.play();
        },300);
    }else{
        loadAnimation.style.display='block'; 
        objVideo.style.display='none';
    }

});

var vid = document.querySelector('video');

//tempo
var time_inicial = new Date();
time_inicial = time_inicial.getTime();


//volume
var btnUp = document.getElementById('up_volume');
var btnDown = document.getElementById('down_volume');

btnUp.onclick = function(){
    if(vid.volume<1){ vid.volume += 0.1; }
}
btnDown.onclick = function(){
    if(vid.volume>0){ vid.volume -= 0.1; }
}

//lista de vídeos

var vid1, vid2, vid3;
//canal 1
vid1 = 'video/video1_big_buck_bunny.webm';
vid2 = 'video/video2_toystory.webm';
vid3 = 'video/video1_big_buck_bunny.webm';

//canal 2
vid4 = 'video/video1_big_buck_bunny.webm';
vid5 = 'video/video2_toystory.webm';
vid6 = 'video/video1_big_buck_bunny.webm';

//canal 3
vid7 = 'video/video1_big_buck_bunny.webm';
vid8 = 'video/video2_toystory.webm';
vid9 = 'video/video1_big_buck_bunny.webm';

//troca de vídeos
var thumbVideo = document.getElementsByClassName('thumbvideo');
//percorre todas as div com a classe desejada e cria um evento de click
for(var count=0; count < thumbVideo.length; count++){    
    thumbVideo[count].onclick = function(){
        var numberVideo = this.getAttribute('data-video');
        console.log("Número do vídeo atual: ",numberVideo);
        if(numberVideo=='video1'){ objVideo.src=vid1; console.log("Trocando para o primeiro vídeo"); }
        if(numberVideo=='video2'){ objVideo.src=vid2; console.log("Trocando para o segundo vídeo"); }
        if(numberVideo=='video3'){ objVideo.src=vid3; console.log("Trocando para o terceiro vídeo"); }
    }
}