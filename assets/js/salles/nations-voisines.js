(function(){
  document.querySelectorAll(".s05-fiche").forEach(function(fiche){
    var btn=fiche.querySelector(".s05-bascule");
    btn.addEventListener("click", function(){ var o=fiche.classList.toggle("accomplie"); btn.setAttribute("aria-expanded", o); btn.textContent=o?"Refermer la fiche":"Lire l'accomplissement"; });
  });
  var carte=document.querySelector(".s05-preuve");
  if(carte){ var btn=carte.querySelector(".s05-retourne"); btn.addEventListener("click", function(){ var o=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); }); }
})();
