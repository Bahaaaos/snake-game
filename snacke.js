let bod=document.body;
/*bod.onkeypress=function(e){

  //  console.log(e.keyCode);
}
/*let key=document.getElementById("key");
key.onkeyup=function(){

    console.log('hello');
}*/
let span=document.querySelectorAll("#key span");
let l=span.length;

span.forEach((el,i)=>{
    el.style.width="5%";
    let w=5;
    let l=span.length;
    el.style.left=((l-i+1)*5).toString()+'%';
    el.style.top='100px';
    el.style.height='50px';
    el.style.diplay="inline";


});
let key=document.querySelector("#key");
let rand=Math.ceil((Math.random())*11);
console.log(rand*50);
function creat(){
    'use strict';
    var randLeft=Math.ceil((Math.random())*19)*5;
    var randTop=Math.ceil(Math.random()*11)*50;
    console.log(randLeft);
    console.log(randTop);
    let span=document.querySelectorAll("#key span");
    let left=[];
    let top=[];
    for (let i;i<span.length;i++){
        if (el.className!=="food"){
         left[i]=parseInt(span[i].style.left);
         top[i]=parseInt(span[i].style.top);

        }}
     for (let i=0;i<left.length;i++){
         if (randLeft==left[i] && randTop==top[i]){
             creat();
         }

     }

     let key=document.querySelector("#key");
     

     var food=document.createElement("span");
     food.className="food";
     
     key.appendChild(food);
     food.style.left=randLeft.toString()+"%";
     food.style.top=randTop.toString()+"px";
     food.style.height="50px";
     food.style.width="5%";
     console.log("gjhhg")
        
    

}
let x=[0,0,2]
if (x[1]==0 && x[0]==0){
    console.log("fwadkfj")
}
creat();
function eat(){
    let span=document.querySelectorAll("#key span");
    let l=span.length;
     var  food=document.getElementsByClassName("food");
        //console.log(span[l-2]);
    if (food.length==1){
       /* console.log(span[l-2].style.left);
        console.log(food[0].style.left);
        console.log(span[l-2].style.top);
        console.log(food[0].style.top);*/



    if (food[0].style.left==span[l-2].style.left &&food[0].style.top==span[l-2].style.top) {
        console.log(span[l-2].style.left);
        console.log(food[0].style.left);
        console.log(span[l-2].style.top);
        console.log(food[0].style.top)
        creat();

        
            if (span[l-2].className=="toright"){
                food[0].className="toright";
                let lft=parseFloat(span[l-2].style.left)-10;
                food[0].style.left=`${lft}%`;
                console.log(parseInt(span[l-2].style.left))
                console.log(lft)
                food[0].style.top=parseInt(span[l-2].style.top).toString();+"px";

            }else  if (span[l-2].className=="tobottom"){
                food[0].className="tobottom";
                food[0].style.left=parseInt(span[l-2].style.left).toString()+"%";
                food[0].style.top=(parseInt(span[l-2].style.top)-50).toString();+"px";

            }else if (span[l-2].className=="toleft"){
                food[0].className="toleft"
                food[0].style.left=(parseInt(span[l-2].style.left)+10).toString()+"%";
                food[0].style.top=parseInt(span[l-2].style.top).toString();+"px";

            }else if (span[l-2].className=="toup"){
                food[0].className="toup"
                food[0].style.left=parseInt(span[l-2].style.left).toString()+"%";
                food[0].style.top=(parseInt(span[l-2].style.top)+50).toString();+"px";

            }


        }
        

    }
}
//var eatit=setInterval(eat,1000);
let n=-1;
function fail(){
    'use strict';
  let  span=document.querySelectorAll("span");
    for (let i=1;i<span.length;i++){
        if (span[i].className!=="food"){
        if (span[0].style.left==span[i].style.left && span[0].style.top==span[i].style.top){
            clearInterval(toright);
            span.forEach(el=>{
                el.style.backgroundColor="#f00"
            })
            if (n==-1){
                span.forEach(el=>{
                    el.style.display="none";
                    n=1
                })
            }else if (n==1){
                span.forEach(el=>{
                    el.style.display="block";
                    n=-1
                })
            }
           
                   
                   
      

       // },1000)
        
        
    }}
        
}
}
setInterval(fail,1000);
/*setInterval(function(){
    let fall=document.querySelectorAll(".fail");
    if (fall.length>0){
    fall.forEach(el=>{
        if (n==-1){
            el.style.display="none";
        }else if(n==1){
            el.style.diplay="inline";
            console.log(n)
        }
    });
    n*=-1
    
    }
},1000)*/

var dir='horizontal';
let toBottom=document.querySelectorAll('#key .tobottom');

 key=document.getElementById("key");
let input=document.querySelector("input");
input.onkeypress=function(e){
    'use strict';

    let span=document.querySelectorAll("#key span");
    let l=span.length;
    

    if ( span[0].className=="toright" ||span[0].className=="toleft"){

        if (e.keyCode==102 ||e.keyCode==115){
            console.log("fuck");
        }else if (e.keyCode==100){   
            console.log("bahaa");
    
            span[0].className="tobottom"
            let i=1;
           let resetbottom= setInterval(function(){
    
           
               
                  
            if (span[i].classList.contains("stop")){
                span[i].className="tobottom"; 
                clearInterval(resetbottom); 
      

            }else{
            span[i].className="tobottom";           
            i+=1;
            if (i>l-2){
                clearInterval(resetbottom)
            }
            } 
                
            },700);    
        }else if (e.keyCode==101){
            span[0].className="toup";
            let i=1;
         let   resettoup=setInterval(function(){
           // let food=document.querySelectorAll(".food");

           /* if (food.length>1){
                l=l-1
            }*/
                
            if (span[i].classList.contains("stop")){
                span[i].className="toup"; 
                clearInterval(resettoup); 
      

            }else{
            span[i].className="toup";           
            i+=1;
            if (i>l-2){
                clearInterval(resettoup)
            }
            } 
         },700)
        }
    }else if (span[0].className=="tobottom" || span[0].className=="toup"){
        if(e.keyCode==100 || e.keyCode==101){
        
        }else if(e.keyCode==102){
    
          span[0].className='toright';
            let i=1;
            let resettoright= setInterval(function(){
             /*   let food=document.querySelectorAll(".food");

                if (food.length>1){
                    l=l-1
                }*/
                if (span[i].classList.contains("stop")){
                    span[i].className="toright"; 
                    clearInterval(resettoright); 
          

                }else{
                span[i].className="toright";           
                i+=1;
                if  (i>l-2){
                    clearInterval(resettoright)
                }
                }                 
             },700);        
        }else if (e.keyCode==115){
            span[0].className='toleft';
            let i=1;
            let resettoleft= setInterval(function(){ 
               /* let food=document.querySelectorAll(".food");

                if (food.length>1){
                    l=l-1
                }*/
            
            if (span[i].classList.contains("stop")){
                span[i].className="toleft"; 
                clearInterval(resettoleft); 
      

            }else{
            span[i].className="toleft";           
            i+=1;
            if (i>l-2){
                clearInterval(resettoleft)
            }
            }  
               
                 
             },700);

        }
    }

}
function eat(){
    let food=document.querySelectorAll('.food')
    if (food.length>1){
    if (food[0].previousElementSibling.className=="tobottom"){

        if (food[0].style.left==food[0].previousElementSibling.style.left &&parseInt(food[0].style.top)==parseInt(food[0].previousElementSibling.style.top)-50 ) {
          console.log(food[0].previousElementSibling.style.top)
          console.log(food[0].style.top)


            food[0].className="tobottom";
            
          
    
        }
       
    }else if (food[0].previousElementSibling.className=="toright"){

        if (parseInt(food[0].style.left)==parseInt(food[0].previousElementSibling.style.left)-5 &&parseInt(food[0].style.top)==parseInt(food[0].previousElementSibling.style.top) ) {
        
            food[0].className="toright";
            
        

        }
    }else if (food[0].previousElementSibling.className=="toleft"){

        if (parseInt(food[0].style.left)==parseInt(food[0].previousElementSibling.style.left)+5 &&parseInt(food[0].style.top)==parseInt(food[0].previousElementSibling.style.top) ) {
            console.log(food[0].previousElementSibling.style.top)
            console.log(food[0].style.top)
            food[0].className="toleft";
            
          
    
        }
    }else if (food[0].previousElementSibling.className=="toup"){

        if (food[0].style.left==food[0].previousElementSibling.style.left &&parseInt(food[0].style.top)==parseInt(food[0].previousElementSibling.style.top)+50 ) {
          
            food[0].className="toup";
            
          
    
        }}}
}
let eatit=setInterval(eat,0);

 function movetobottom(){
     
     let span=document.querySelectorAll("span");
     let food=document.querySelectorAll(".food");
     let l=span.length;
     food.forEach((el)=>{
         if (el.style.left==span[0].style.left &&el.style.top==span[0].style.top){
            creat();
            food[0].classList.add("stop");


         }
     })
    

    /* if (food[0].previousElementSibling.className=="tobottom"){

    if (food[0].style.left==food[0].previousElementSibling.style.left &&parseInt(food[0].style.top)==parseInt(food[0].previousElementSibling.style.top)+50 ) {
      
        food[0].className="tobottom";
        
      

    }}*/
    

   let  toBottom=document.querySelectorAll("#key .tobottom");
   
     toBottom.forEach((el,i)=>{
         let top=[];
         top[i]=parseInt(el.style.top);
         if (top[i]==550){
             top[i]=-50;
         }
         console.log(top[i])
         el.style.top=((top[i]+50)*1).toString()+"px"

     });
    }

 function movetoright(){
    let span=document.querySelectorAll("span");
    let food=document.querySelectorAll(".food");
    let l=span.length;
   
   
   let  toRight=document.querySelectorAll("#key .toright");


     toRight.forEach((el,i)=>{
         let left=[]
        left[i]=parseInt(el.style.left);
       if(left[i]==95){
           left[i]=-5
       }
         el.style.left=((left[i]+5)*1).toString()+"%";
     });
 }
 function movetoup(){
    let span=document.querySelectorAll("span");
    let food=document.querySelectorAll(".food");
    let l=span.length;
    

    let toUp=document.querySelectorAll("#key .toup");
    
    toUp.forEach((el,i)=>{
        let top=[];
        top[i]=parseInt(el.style.top);
        if (top[i]==0) {
            top[i]=600;
        }
        console.log(top[i])

        el.style.top=((top[i]-50)*1).toString()+"px";
    });
 }
 function movetoleft(){
    let span=document.querySelectorAll("span");
    let food=document.querySelectorAll(".food");
    let l=span.length;
   
    
  
    let toLeft=document.querySelectorAll("#key .toleft");
    
    toLeft.forEach((el,i)=>{
      let  left=parseInt(el.style.left);
      if(left==0){
        left=100
        }
        
        el.style.left=((left-5)*1).toString()+"%";
    });
 }
 var toright=setInterval(function(){
     
     
     movetobottom();
     movetoleft();

     movetoright();
     movetoup();
 } ,700);
 /*var tobottom=setInterval(movetobottom,1000);
 var toleft =setInterval(movetoleft,1000);
 var toup=setInterval(movetoup,1000);*/
/*function reset(){
    let toRight=document.querySelectorAll("#key span.toright"),
        toLeft=document.querySelectorAll("#key span.toleft"),
        toUp=document.querySelectorAll("#key span.toup"),
        toBottom=document.querySelectorAll("#key span.tobottom");
        
        if(toRight.length>1){
            for (let i=1;i<toRight.length;i++){
                if(toRight[i].previousElementSibling.className=="toright"){
                    movetoright(i);
                }else if(toRight[i].previousElementSibling.className=='tobottom'){
                    toRight[i].className='tobottom';

                }else if(toBottom[i].previousElementSibling.className=='toup'){
                    toRight[i].className='toup';

                }
            }
        
        }
       
        
        toLeft.forEach((el,i)=>{
            if(el.previousElementSibling.className==el.className){
                movetoleft(i)
            }else if(el.previousElementSibling.className=="tobottom"){
                setTimeout(function(){
                el.classList.add("tobottom");
                el.classList.remove('toleft');
                },1000)
            }else{
                el.classList.add('toup');
                el.classList.remove('toleft');
            }

        });
            if(toBottom.length>1){
                for (let i=1;i<toBottom.length;i++){
                    if(toBottom[i].previousElementSibling.className=="tobottom"){
                        movetobottom(i);
                    }else if(toBottom[i].previousElementSibling.className=='toright'){
                        toBottom[i].className='toright';

                    }else if(toBottom[i].previousElementSibling.className=='toleft'){
                        toBottom[i].className='toleft';

                    }
                }
            
            }
        
        toUp.forEach((el,i)=>{
            if(el.previousElementSibling.className==el.className){
                movetoup(i);
            }else if(el.previousElementSibling.className=="toleft"){
                el.classList.add("toleft");
                el.classList.remove('toup');
            }else{
                el.classList.add('toright');
                el.classList.remove('toup');
            }
        });
        if(toRight.length==l){
            clearInterval(toright);
        };
        if(toUp.length==l){
            clearInterval(toup);

        }
        
        if(toLeft.length==l){
            clearInterval(toleft);
        }
}*/