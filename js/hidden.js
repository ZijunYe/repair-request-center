// var home = document.getElementById('home'); 
// var list = document.getElementById('list'); 
// var request = document.getElementById('request'); 
// var contact = document.getElementById('contact'); 

var section = ['home','list','staff','request','contact']; 


function show(value){

    console.log(value); 
    for(let i=0; i < section.length; i++){
        if(value == section[i]){
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