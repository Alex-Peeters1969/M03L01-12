let button=document.getElementById('mybutton');
let button2=document.getElementById('secondbutton')

button.addEventListener("click", function(){
    alert('button clicked');
})
 button2.addEventListener("click", function(){
    document.body.classList.toggle("red-background");
     
 });