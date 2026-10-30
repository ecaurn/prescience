(function(){
  var ETAPES=[
   {t:"L'arrivée — par l'Ophel, vers la Triple Porte",x:"Le pèlerin arrive du sud, par la Cité de David et la pente de l'Ophel. Devant lui, les murs du mont du Temple et la Triple Porte, l'une des grandes entrées. Aux fêtes, la foule est immense : il faut des installations à la mesure des foules, et c'est ce que les fouilles de 2026 ont retrouvé, à quelques pas des portes."},
   {t:"L'immersion — se purifier avant de monter",x:"Il descend les marches de Pierre du bain rituel et s'immerge entièrement dans l'eau. La Loi exigeait la pureté rituelle pour entrer dans les cours du temple (Lévitique 15). L'un des bains retrouvés est conservé jusqu'à sa voûte : on y descend encore, marche après marche, comme il y a deux mille ans."},
   {t:"La montée — purifié, vers les cours",x:"Il ressort, se rhabille et monte vers les portes. L'eau qui l'a purifié venait de loin : l'aqueduc inférieur l'acheminait par gravité depuis les Piscines de Salomon, à environ 21 kilomètres, avec une pente infime tenue d'un bout à l'autre. Toute une hydraulique au service d'un geste rituel."},
   {t:"L'été 70 — la fin, sous les cendres",x:"En 70, les armées de Rome prennent Jérusalem et brûlent le temple. Dans le complexe de l'Ophel, la couche de destruction contient des dizaines de monnaies de la révolte juive : le lieu des purifications des foules devient, en quelques semaines, une ruine scellée — exactement le monde que fermait l'annonce examinée en salle 11."}];
  var i=0, ti=document.getElementById("s25-titre"), tx=document.getElementById("s25-texte"),
      num=document.getElementById("s25-num"), barre=document.getElementById("s25-barre-i"),
      prec=document.getElementById("s25-prec"), suiv=document.getElementById("s25-suiv");
  function montrer(){
    ti.textContent=ETAPES[i].t; tx.textContent=ETAPES[i].x; num.textContent=i+1;
    barre.style.width=((i+1)/ETAPES.length*100)+"%";
    prec.disabled = i===0; suiv.disabled = i===ETAPES.length-1;
  }
  prec.addEventListener("click", function(){ if(i>0){ i--; montrer(); } });
  suiv.addEventListener("click", function(){ if(i<ETAPES.length-1){ i++; montrer(); } });
  montrer();
})();

(function(){
  var img=document.getElementById("s25-zoom-img"); if(!img) return;
  var niveau=document.getElementById("s25-zoom-niveau");
  var boutons=document.querySelectorAll(".s25-zoom-commandes button");
  var CIBLES={ensemble:[1,"50% 50%"],voute:[2.2,"50% 18%"],escalier:[2.4,"50% 55%"],eau:[2.8,"50% 88%"]};
  function appliquer(echelle, origine){ img.style.transformOrigin=origine; img.style.transform="scale("+echelle+")"; niveau.value=echelle; }
  boutons.forEach(function(b){ b.addEventListener("click", function(){
    var c=CIBLES[b.getAttribute("data-cible")]; if(!c) return;
    boutons.forEach(function(x){ x.classList.toggle("actif", x===b); });
    appliquer(c[0], c[1]);
  }); });
  niveau.addEventListener("input", function(){ img.style.transform="scale("+niveau.value+")"; });
})();
