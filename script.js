/*================== toggle icon =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}






let sections = document.querySelectorAll('section');
let nevlinks=document.querySelectorAll('header nav a');


window.onscroll =()=>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            nevlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    /*================sticky navbar==================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    /*==========================remove toggle icon navbar when clik navbar link(scroll)========*/
    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');

};


let name1=document.getElementById("name1");
let email1=document.getElementById("email1");
let textbox=document.getElementById("textbox");
let btn4=document.getElementById("sub-quary");


btn4.addEventListener('click',function valid(){
    if(name1.value==""){
        alert("name should not be empty");
    }
    if(email1.value==""){
        alert("email should not be empty");
    }
    return false;
}
)
let char1=document.getElementById("char1");
textbox.addEventListener('input',function(){
    let text=this.value;
    if(text.length<=1000){
        for(let i=0;i<=text.length;i++){
            document.getElementById("char1").innerHTML=i;
        }
    }
    else{
        alert("character must be less than or equal to 1000")
    }
})