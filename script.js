function toggleMenu(){
  document.getElementById("menu").classList.toggle("open");

  document.body.style.overflow =
    document.getElementById("menu").classList.contains("open")
    ? "hidden"
    : "auto";
}

/* MODALS */

function openModal(id){

  document.getElementById("modal").style.display = "flex";

  document.querySelectorAll(".modal-content")
    .forEach(el=>el.style.display="none");

  document.getElementById(id).style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

/* ANIMATIONS */

const fadeElements = document.querySelectorAll(".fade");

function reveal(){

  const trigger = window.innerHeight * 0.88;

  fadeElements.forEach((el,i)=>{

    if(el.getBoundingClientRect().top < trigger){

      setTimeout(()=>{
        el.classList.add("show");
      },i*60);

    }

  });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);
