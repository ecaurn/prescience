(function(){
  var RECIT={
   agneau:{t:"Choisi le dixième jour, gardé jusqu’au quatorzième",x:"L’agneau — « sans défaut, mâle, âgé d’un an » — est mis à part quatre jours avant la nuit. Le délai n’est pas un détail de calendrier : il fait entrer l’animal dans la maison, sous les yeux des enfants, avant qu’il ne devienne le centre du repas. Le récit construit une mémoire familiale, pas seulement un rite.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 12:3-6."},
   portes:{t:"« Je verrai le sang, et je passerai par-dessus vous »",x:"Avec un bouquet d’hysope, le sang est mis sur les deux montants et le linteau. Le signe n’est pas destiné aux Égyptiens mais à Dieu lui-même — et aux habitants de la maison, qui savent pourquoi ils veillent. « Pâque » (Pessa’h) gardera ce sens : le passage qui épargne ceux qui ont répondu à l’annonce.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 12:13, 22-23."},
   repas:{t:"Ceinture aux reins, bâton à la main",x:"On mange rôti au feu, avec des pains sans levain et des herbes amères, habillé pour partir : le repas est un départ déguisé en dîner. Les herbes disent l’amertume de l’esclavage, le pain plat dit la hâte — et les restes sont brûlés avant le matin, car rien ne doit rester d’une nuit qui ne reviendra pas.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 12:8-11."},
   nuit:{t:"Un cri dans la nuit, une porte qui s’ouvre",x:"« Au milieu de la nuit », le premier-né d’Égypte est frappé, et Pharaon, qui avait dix fois durci son cœur, presse les Hébreux de partir — les Égyptiens eux-mêmes leur prêtent objets et vêtements. Le récit ne célèbre pas la mort des enfants d’Égypte : il la raconte comme le prix terrible d’un endurcissement annoncé à Pharaon dès le début.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 12:29-36 ; 7:3-4."},
   sortie:{t:"En plein jour, devant toute l’Égypte",x:"La sortie se fait en plein jour, en ordre, avec les troupeaux — puis vient la mer des Roseaux, l’armée lancée aux trousses, et le passage entre les eaux. De cette nuit naît le calendrier d’Israël (« ce mois sera pour vous le premier des mois », 12:2) et la fête qui, quinze siècles plus tard, formera le décor de la mort de Jésus, un 14 Nissan (salle 44).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 12:2, 41-42 ; 13:17-14:31."}
  };
  var cle="agneau";
  var ti=document.getElementById("s46-titre"), tx=document.getElementById("s46-texte"), bd=document.getElementById("s46-badge");
  var boutons=document.querySelectorAll(".s46-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
