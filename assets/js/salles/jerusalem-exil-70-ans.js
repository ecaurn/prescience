(function(){
  var curseur=document.getElementById("s06-curseur");
  if(curseur){
    var num=document.querySelector(".s06-num"), annee=document.querySelector(".s06-annee"),
        texte=document.querySelector(".s06-texte"), imgs=document.querySelectorAll(".s06-img");
    var etapes=[
      {max:0, phase:"exil", txt:"Jérusalem tombe ; le temple est brûlé, les murailles abattues, la population déportée à Babylone. Le pays se vide."},
      {max:66, phase:"terre", txt:"Le pays reste sans ses habitants : villages abandonnés, terrasses en friche. « Le pays jouira de ses sabbats pendant tout le temps de sa désolation. »"},
      {max:68, phase:"terre", txt:"68 ans écoulés : Babylone tombe aux mains de Cyrus (539). L'empire qui retenait les exilés s'effondre, comme la salle 02 l'a montré."},
      {max:69, phase:"terre", txt:"Cyrus ordonne le retour et la reconstruction de la maison de Jéhovah à Jérusalem (2 Chroniques 36:22, 23). Les exilés se mettent en route."},
      {max:70, phase:"retour", txt:"70 ans accomplis : les premiers exilés sont de retour (537). À l'aube, les premières pierres de fondation sont alignées là où tout était ruines."}
    ];
    function maj(){
      var v=parseInt(curseur.value,10);
      num.textContent=v; annee.textContent=(607-v)+" av. n. è.";
      var e=etapes.find(function(x){return v<=x.max;})||etapes[etapes.length-1];
      texte.textContent=e.txt;
      imgs.forEach(function(im){ im.classList.toggle("actif", im.getAttribute("data-phase")===e.phase); });
    }
    curseur.addEventListener("input", maj); maj();
  }
  document.querySelectorAll(".s06-preuve").forEach(function(carte){
    var btn=carte.querySelector(".s06-retourne");
    btn.addEventListener("click", function(){ var o=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); });
  });
})();
