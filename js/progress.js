var section = ['home','list','staff','request','contact']; 
var requestTimes = 0; 

function show(value){

    console.log(value); 
    for(let i=0; i < section.length; i++){
        if(value == section[i]){
            if(requestTimes > 0 ){
                let r = document.getElementById('progress'); 
                r.style.display ='flex'; 
            
                let f = document.getElementById('rform'); 
                

                f.style.display = 'block'; 
            
                let c = document.getElementById('confirmation'); 
                c.style.display ='none'; 
            }

            var x = document.getElementById(section[i]); 
            x.style.display ='block'; 
            if(value == 'home'){ 
                var x = document.getElementById('home-background'); 
                x.style.display ='block';
            }else{
                var x = document.getElementById('home-background'); 
                x.style.display ='none';
            }
        }else{
            var y = document.getElementById(section[i]);  
            y.style.display ='none'; 
        }
    }
}


var page = ['repairType', 'requestTime','residenceAddress','userInfo'];

function next(page){
   console.log(page); 
   let s = document.getElementById(page); 
   s.style.marginLeft = "-20%";
   var b; 
   if(page == 'repairType'){
      b = document.getElementById('bullet1');  
   }else if(page =='requestTime'){
     b = document.getElementById('bullet2'); 
   }else if(page =='residenceAddress'){
     b = document.getElementById('bullet3');
   }else{
     b = document.getElementById('bullet4');
   }
   let child = b.childNodes; 
      child[1].style.display="none"; 
      child[3].style.display="block";
   b.style.borderColor = "#840019"; 
   b.style.backgroundColor ="#840019"
   b.classList.add("active"); 
   b.style.color="#fff"; 
   console.log(s.style.marginLeft); 
}

function previous(page){
   console.log(page); 
   let s = document.getElementById(page); 
   s.style.marginLeft = "-25%"; 
   console.log(s.style.marginLeft); 

}

function displayConfirmation(){
    let r = document.getElementById('progress'); 
    r.style.display ='none'; 

    let f = document.getElementById('rform'); 
    f.style.display = 'none'; 

    let c = document.getElementById('confirmation'); 
    c.style.display ='block'; 

    requestTimes = requestTimes +1;  
    reset(); 
}

function reset(){
    for(let i=0; i < section.length; i++){
        let s = document.getElementById(page[i]); 
        s.style.marginLeft = "0%";
        console.log(s.style.marginLeft); 

        var b; 
        if(page[i] == 'repairType'){
            b = document.getElementById('bullet1');  
        }else if(page[i] =='requestTime'){
            b = document.getElementById('bullet2'); 
        }else if(page[i] =='residenceAddress'){
            b = document.getElementById('bullet3');
        }else{
            b = document.getElementById('bullet4');
        }
        let child = b.childNodes; 
        child[1].style.display="block"; 
        child[3].style.display="none";
        b.style.borderColor = "#000"; 
        b.style.backgroundColor ="";
        b.classList.remove("active"); 
        b.style.color="#757575"; 
        console.log(s.style.marginLeft); 
    }
}