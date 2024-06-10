document.querySelector("#logg").addEventListener('click',function(){
    document.querySelector(".logbox").classList.add("active");    
});
document.querySelector("#logcross").addEventListener('click',function(){
    document.querySelector(".logbox").classList.remove("active");   
});

document.querySelector(".navbar").addEventListener('click',function(){
    document.querySelector(".alertbox").classList.add("active");    
});
document.querySelector("#alertcross").addEventListener('click',function(){
    document.querySelector(".alertbox").classList.remove("active");   
});