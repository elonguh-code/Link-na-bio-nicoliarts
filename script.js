const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(!prefersDark){
document.body.classList.add("light");
}

function toggleMode(){
document.body.classList.toggle("light");
}