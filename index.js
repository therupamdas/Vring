document.querySelector("#logg").addEventListener('click',function(){
    document.querySelector(".logbox").classList.add("active");    
});
document.querySelector(".cross").addEventListener('click',function(){
    document.querySelector(".logbox").classList.remove("active");   
});
