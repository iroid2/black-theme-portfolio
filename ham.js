const hamMen=document.querySelector(".ham");
const cancel=document.querySelector(".cancel");
const hiddenHamList=document.querySelector(".mobo-menu-list");


  hamMen.addEventListener(("click"),function(){
    hiddenHamList.classList.add("active");
});
  cancel.addEventListener(("click"),function(){
    hiddenHamList.classList.remove("active");
});
const drop=document.querySelector(".drop");
const cancelDrop=document.querySelector(".cancel-drop");
const homeMenList=document.querySelector(".home-men-list");


drop.addEventListener(("click"),function(){
    homeMenList.classList.add("active");
});

