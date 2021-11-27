

var icons=document.querySelectorAll(".section-1-icons i");
i=2;
setInterval(function(){
    var icon=document.querySelector(".section-1-icons i.change");   
icon.classList.remove('change');

if(i<=icons.length){
    icon.nextElementSibling.classList.add('change');
}else{
    icons[0].classList.add('change');
    i=2;
}
i++;
    


},2400);


 



