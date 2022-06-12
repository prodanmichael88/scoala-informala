
let myNav = document.querySelector('nav');
myNav.onclick = function() {
    window.location.hash = '#food';
    myNav.style.backgroundColor='blue';
   // console.log(url.hash);
    
}
console.log(url.href);