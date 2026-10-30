(function(){
  document.querySelectorAll(".s12-panneau").forEach(function(p){
    var b=p.querySelector(".s12-ouvre");
    b.addEventListener("click", function(){ var o=p.classList.toggle("ouvert"); b.setAttribute("aria-expanded", o); b.textContent=o?"Refermer le panneau":"Ouvrir le panneau"; });
  });
})();
