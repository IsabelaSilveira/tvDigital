//tempo
var time_inicial = new Date();
time_inicial = time_inicial.getTime();


function loader(){
    //função que verifica se o vídeo foi carregado 
    var videoAtivo = document.querySelector('.tabs.active video'); 
    //console.log(videoAtivo);
    var loadAnimation = document.getElementById('loader');

    videoAtivo.addEventListener('loadeddata', function() {

        if(videoAtivo.readyState >= 3) {
            setTimeout(function(){
                loadAnimation.style.display='none'; 
                videoAtivo.style.display='block'; 
                videoAtivo.play();
            },300);
        }else{
            loadAnimation.style.display='block'; 
            videoAtivo.style.display='none';
        }

    });
}
loader();

function opcoesTAB(){
    var vid = document.querySelector('.tabs.active video');
    
    //volume
    var btnUp = document.querySelector('.tabs.active #up_volume');
    btnUp.style.background='#F00';

    var btnDown = document.querySelector('.tabs.active #down_volume');
    btnDown.style.background='#00F';

    btnUp.onclick = function(){
        if(vid.volume<1){ vid.volume += 0.1; }
    }
    btnDown.onclick = function(){
        if(vid.volume>0){ vid.volume -= 0.1; }
    }
}
opcoesTAB();

function videoLoop(){
    var videoPlayer = document.querySelector('.tabs.active video');
    var videoSource = document.querySelector('.tabs.active source');
    var video_list = ['video/video1.webm','video/video2.webm','video/video1.webm'];   
    
    for(var videoCount = 1; videoCount <= 3; videoCount++){
        if(videoCount == 1){
            videoPlayer.onended = function(){
                videoSource.setAttribute("src", video_list[2]); 
                console.log("Acabou o primeiro vídeo. Trocando para o segundo");
                console.log(videoSource);
                videoPlayer.load();
            }  
            videoPlayer.play();
        }
        if( videoCount == 2){
            videoPlayer.onended = function(){
                videoSource.setAttribute("src", video_list[3]);  
                console.log("Acabou o segundo vídeo. Trocando para o terceiro");
                console.log(videoSource);
                videoPlayer.load();
            }  
            videoPlayer.play();
        }
        if( videoCount == 3){
            videoPlayer.onended = function(){
                videoSource.setAttribute("src", video_list[1]);  
                console.log("Acabou o terceiro vídeo. Trocando para o primeiro");
                console.log(videoSource);
                videoPlayer.load();
            }     
            videoPlayer.play();
        }
    }
}
videoLoop();

//canais
var canal = document.getElementsByClassName('btcanais');
var tabs = document.getElementsByClassName('tabs');
var tabAtiva;

//alternando a classe active nos botões
for(var x=0; x < canal.length; x++){
    canal[x].onclick = function(){
        //removendo a classe active dos outros botões
        for(var y=0; y < canal.length; y++){
            canal[y].className = 'btcanais';
        }
        //inserindo a classe active no botão clicado
        this.className = 'btcanais active';
        tabAtiva = this.getAttribute('data-tab');
        //console.log('Tab Ativa ID: ', tabAtiva);
        
        //mudança de canal
        for(var z=0; z < tabs.length; z++){
            var tabId = tabs[z].id;
            //console.log('Tab id: ',tabId);
            //adicionando a class active na tab que possui o id igual ao atributo data-tab do botão
            if(tabId == tabAtiva){
                tabs[z].className = 'tabs active';
                //console.log('Tab id: ',tabId,' Tab Ativa: ',tabAtiva);
                opcoesTAB();
                videoLoop();
            }else{
                tabs[z].className = 'tabs';    
            }
        }
    }
}


//lista de vídeos
var vid1, vid2, vid3;

vid1 = 'video/video1_big_buck_bunny.webm';
vid2 = 'video/video2_toystory.webm';
vid3 = 'video/video1_big_buck_bunny.webm';


//troca de vídeos
var thumbVideo = document.getElementsByClassName('thumbvideo');
//percorre todas as div com a classe desejada e cria um evento de click
for(var count=0; count < thumbVideo.length; count++){    
    thumbVideo[count].onclick = function(){
        var numberVideo = this.getAttribute('data-video');
        //console.log("Número do vídeo atual: ",numberVideo);
        if(numberVideo=='video1'){ 
            videoAtivo.src=vid1; 
            //console.log("Trocando para o primeiro vídeo"); 
        }
        if(numberVideo=='video2'){ 
            videoAtivo.src=vid2; 
            //console.log("Trocando para o segundo vídeo"); 
        }
        if(numberVideo=='video3'){ 
            videoAtivo.src=vid3; 
            //console.log("Trocando para o terceiro vídeo"); 
        }
    }
}