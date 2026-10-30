(function(){
  var ELEMENTS={
   canne:{t:"La canne à mesurer — 6 coudées longues (Ézéchiel 40:5)",x:"L'unité de toute la vision : une canne de six coudées, mais des coudées « longues » — chacune vaut une coudée ordinaire plus une largeur de main, soit environ 52,5 cm. La canne approche donc 3,15 mètres. Toutes les conversions de cette salle reposent sur cette estimation, affichée comme telle.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Conversion estimée (coudée longue ≈ 52,5 cm)."},
   cour:{t:"La cour intérieure — 100 × 100 coudées (40:47)",x:"Un carré parfait d'environ 52 mètres de côté, au centre duquel se dresse l'autel. La géométrie de la vision est d'une régularité que le temple historique, contraint par la topographie de la colline, n'a jamais eue : ici, tout est carré, aligné, mesuré.",b:"<span class=\"badge\">LECTURE PROPHÉTIQUE</span> Le plan de la vision, non un relevé du temple historique."},
   sanctuaire:{t:"Le sanctuaire — 40 × 20, puis 20 × 20 (41:1-4)",x:"Le lieu saint mesure 40 coudées sur 20 (environ 21 × 10,5 m), et le saint des saints 20 sur 20 (environ 10,5 m de côté) : des proportions qui rappellent le temple de Salomon, en plus grand. Le guide n'y fait entrer qu'Ézéchiel seul : « C'est le saint des saints. »",b:"<span class=\"badge\">LECTURE PROPHÉTIQUE</span> Dimensions du texte, conversion estimée."},
   enceinte:{t:"L'enceinte totale — 500… mais 500 quoi ? (42:15-20)",x:"Le guide mesure les quatre côtés de l'enceinte : 500 chacun. Coudées ? Environ 260 mètres de côté. Cannes à mesurer ? Environ 1,5 kilomètre — plus que la vieille ville de Jérusalem. Les manuscrits et les traductions ne parlent pas d'une seule voix, et le choix change radicalement le plan. C'est le point de vigilance majeur de la salle.",b:"<span class=\"badge avenir\">DÉBATTU</span> Unité de mesure discutée (coudées contre cannes)."},
   autel:{t:"L'autel — une montagne de Dieu en degrés (43:13-17)",x:"L'autel monte par paliers : une base, deux degrés, et le foyer au sommet, dans une architecture d'environ 10 mètres de côté à la base. Le texte l'appelle par un nom imagé, parfois traduit « montagne de Dieu ». C'est là, au centre de la cour intérieure, que la vision replace le culte — alors même que le temple historique d'après l'exil fonctionnera autrement.",b:"<span class=\"badge\">LECTURE PROPHÉTIQUE</span> Description de la vision (43:13-17)."}
  };
  var ti=document.getElementById("s26-titre"), tx=document.getElementById("s26-texte"), bd=document.getElementById("s26-badge");
  var boutons=document.querySelectorAll(".s26-onglets button");
  function montrerEl(cle){
    var e=ELEMENTS[cle]; if(!e) return;
    ti.textContent=e.t; tx.textContent=e.x; bd.innerHTML=e.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-el")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click", function(){ montrerEl(b.getAttribute("data-el")); }); });
  montrerEl("canne");

  var FLEUVE=[
   {n:"l'eau aux chevilles",x:"Mille coudées mesurées (environ 525 m) : le guide entre dans l'eau, elle lui couvre les chevilles. Un filet sorti du seuil est déjà devenu un ruisseau que l'on traverse à pied (47:3)."},
   {n:"l'eau aux genoux",x:"Mille coudées de plus : l'eau monte aux genoux. Le fleuve grossit sans affluent visible — le texte insiste : cette eau vient du sanctuaire, et elle grandit en s'en éloignant (47:4)."},
   {n:"l'eau jusqu'aux reins",x:"Mille coudées encore : l'eau atteint les reins. Le guide ne touche presque plus le fond ; la progression régulière — chevilles, genoux, reins — prépare le renversement final."},
   {n:"un fleuve infranchissable",x:"Mille coudées plus loin, c'est « un fleuve qu'on ne pouvait traverser » : il faut nager. Ses rives portent des arbres aux fruits mensuels, et il descend assainir la mer Morte, où les pêcheurs étendront leurs filets (47:5-10). Aucun fleuve de ce type n'existe aujourd'hui sur ce parcours : la salle le classe À VENIR, sans date."}];
  var rg=document.getElementById("s26-profondeur"), lec=document.getElementById("s26-lecture"), tf=document.getElementById("s26-texte-fleuve");
  function montrerFleuve(){
    var e=FLEUVE[Number(rg.value)-1]; lec.textContent=e.n; tf.textContent=e.x;
  }
  rg.addEventListener("input", montrerFleuve); montrerFleuve();
})();

(function(){
  var img=document.getElementById("s26-zoom-img"); if(!img) return;
  var niveau=document.getElementById("s26-zoom-niveau");
  var boutons=document.querySelectorAll(".s26-zoom-commandes button");
  var CIBLES={ensemble:[1,"50% 50%"],sanctuaire:[2.3,"68% 30%"],cours:[2.2,"35% 62%"],porte:[2.6,"22% 78%"]};
  function appliquer(echelle, origine){ img.style.transformOrigin=origine; img.style.transform="scale("+echelle+")"; niveau.value=echelle; }
  boutons.forEach(function(b){ b.addEventListener("click", function(){
    var c=CIBLES[b.getAttribute("data-cible")]; if(!c) return;
    boutons.forEach(function(x){ x.classList.toggle("actif", x===b); });
    appliquer(c[0], c[1]);
  }); });
  niveau.addEventListener("input", function(){ img.style.transform="scale("+niveau.value+")"; });
})();
