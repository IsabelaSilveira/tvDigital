var allCH,                      //array com todos os canais
    ch1,                        //array com todos os vídeo do canal 1
    ch2,                        //array com todos os vídeo do canal 2
    ch3,                        //array com todos os vídeo do canal 3
    ch_current = 0,             //canal atual
    video_current = 0,          //vídeo atual
    chClick,                    //identificador do botão do canal
    time_initial = new Date(),  //tempo inicial
    time_current,               //tempo atual
    numberCanal,                //número do canal
    volume = 1,                 //volume inicial
    btnUp,                      //aumentar volume
    btnDown;                    //diminuir o volume


//função para mudança de canais
function changeCH(){
    video.src = allCH[ch_current+=1][video_current];
}

function main(){
    
    //evento de carregar video
    video.onloadeddata = function(){
        var delta_time = (time_current.getTime()-time_initial.getTime())/1000;
        if(video.duration > delta_time)
            video.currentTime = delta_time;
        else{
            delta_time-=video.duration;
            changeCH();
        }
    }

    //volume
    btnUp = $('#up_volume');
    btnDown = $('#down_volume');

    btnUp.click(function(){
        if(video.volume<1){ volume += 0.1; }
        video.volume = volume;
    });
    btnDown.click(function(){
        if(video.volume>0){ volume -= 0.1; }
        video.volume = volume;
    });
    
    //slide - customizado
    $( "#volume" ).slider({
        min: 1,
        max: 100,
        value: 100,
        range: "min",
        animate: true,
        slide: function(event, ui) {
          setVolume((ui.value) / 100);
        }
    });
    
    function setVolume(volumeAtual) {
        video.volume = volumeAtual;
    }
    
    //mudando de canal com o evento de click
    chClick = $(".btcanais").click(function(){
        //pegando o tempo atual
        time_current = new Date();
        
        numberCanal = $(this).attr('data-number');
        $('.canalTitle').text('Canal '+numberCanal);
        
        console.log('Número do canal ', numberCanal);
        
        //chamando a função de troca de canais
        changeCH();
        
        //deixando o botão ativo
        $(".bt-canais").removeClass('active');
        $(this).addClass('active');
    });
    
    //mudando de vídeo quando o vídeo atual chega ao fim
    video.onended = function(){
        video_current+=1
        
        //se o vídeo atual for o último a lista de vídeo, retorna para o primeiro vídeo
        if(video_current>=allCH[ch_current].length){
            video_current = 0;
        }
        //passa a url do vídeo
        video.src = allCH[ch_current][video_current];
    }
    
    //listando canais e vídeos
    allCH = new Array();
    
    //setando os vídeos de cada canal
    ch1 = [
            'https://ia601407.us.archive.org/32/items/ChronoTrigger_456/ChronoTrigger_456_part01.ogv',
            'https://ia800300.us.archive.org/24/items/MortalKombatSM_14337/MortalKombatSM_14337_HQ_part01.ogv',
            'https://ia801408.us.archive.org/11/items/GrandTheftAutoSA_746/GrandTheftAutoSA_746_LQ_part01.ogv'
          ];
    ch2 = [
            'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare.ogv',
            'https://ia800302.us.archive.org/31/items/woody_woodpecker_pantry_panic/woody_woodpecker_pantry_panic.ogv',
            'https://ia800303.us.archive.org/9/items/superman_1941/superman_1941.ogv'
          ];
    ch3 = [
            'https://ia601203.us.archive.org/7/items/2012Trailer/2012Trailer.ogv',
            'https://ia601401.us.archive.org/18/items/50FirstDatesTrailer/50FirstDatesTrailer.ogv',
            'https://ia601205.us.archive.org/22/items/ASeriesOfUnfortunateEventsTrailer/ASeriesOfUnfortunateEventsTrailer.ogv'
          ];
    
    //puxando o conteúdo de cada canal
    allCH.push(ch1);
    allCH.push(ch2);
    allCH.push(ch3);
} 
jQuery(document).ready(main);