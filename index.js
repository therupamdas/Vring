document.querySelector("#logg").addEventListener('click',function(){
    document.querySelector(".logbox").classList.add("active");    
});
document.querySelector(".cross").addEventListener('click',function(){
    document.querySelector(".logbox").classList.remove("active");   
});
let a = document.getElementById("user");
console.log(a);