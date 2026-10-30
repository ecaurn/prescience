(function(){
  document.querySelectorAll(".s04-preuve").forEach(function(carte){
    var btn=carte.querySelector(".s04-retourne");
    btn.addEventListener("click", function(){ var o=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); });
  });
  var curseur=document.getElementById("s04-curseur");
  if(curseur){ var dessus=document.querySelector(".s04-dessus"); function maj(){ dessus.style.clipPath="inset(0 0 0 "+curseur.value+"%)"; } curseur.addEventListener("input", maj); maj(); }
})();
