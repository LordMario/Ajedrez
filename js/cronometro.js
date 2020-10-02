function iniciartiempo(){
    segundos=0;
    s=document.getElementById("seg");
    m=document.getElementById("min");
    cronometro= setInterval(
        function(){
            segundos++;
            seg=segundos;
            min=0;
            while(seg>=60){
                min++;
                seg-=60;     
            }
            if(seg<10){
                s.innerHTML="0"+seg;
            }else{
                s.innerHTML=seg;
            }
            if(min<10){
                m.innerHTML="0"+min; 
            }else{
                m.innerHTML=min; 
            }
        },1000);
}