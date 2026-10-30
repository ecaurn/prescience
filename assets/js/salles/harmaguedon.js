(function(){
  var RECIT={
   nom:{t:"« Montagne de Megiddo », sans montagne",x:"Le nom hébreu désigne la colline-forteresse qui verrouille la plaine de Jizréel et la grande route Égypte-Mésopotamie. Pour l’auditeur biblique, Megiddo évoque les journées où l’histoire a basculé : la victoire chantée par Déborah, la mort de Josias. Choisir ce nom, c’est annoncer un affrontement décisif — avec un lieu réel pour ancrage, et toute la terre pour horizon.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 16:16 ; Juges 5:19 ; 2 Rois 23:29."},
   rassemblement:{t:"Les rois de toute la terre habitée",x:"Des esprits impurs, « semblables à des grenouilles », sortent de la bouche du dragon, de la bête et du faux prophète et rassemblent les rois pour la guerre du grand jour de Dieu. Le musée y lit une propagande mondiale trompeuse qui coalise les pouvoirs humains contre le Royaume — sans nommer aucun gouvernement actuel : le texte vise une posture, pas une carte d’état-major.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 16:13-14."},
   veille:{t:"Une béatitude au milieu de la menace",x:"Entre le rassemblement et le nom d’Harmaguédon, une phrase interrompt la vision : « Voici, je viens comme un voleur. Heureux celui qui veille et qui garde ses vêtements. » L’insertion est délibérée : au moment le plus sombre, le texte ne donne ni plan de bataille ni date, mais une félicité pour qui reste éveillé et ne se laisse pas dépouiller de sa conduite.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 16:15."},
   ciel:{t:"Le ciel ouvert, un Roi non figuré",x:"Le chapitre 19 montre le ciel ouvert et un cavalier appelé « Fidèle et Véridique », qui « juge et combat avec justice » ; l’épée qui sort de sa bouche dit que son arme est la parole qui juge. Cette salle ne le représente pas : aucun portrait, aucune auréole — seulement le ciel qui s’écarte au-dessus de la plaine, laissant au texte le soin de nommer celui que l’image ne doit pas figer.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 19:11-16."},
   fin:{t:"La bête et le faux prophète captifs",x:"La guerre annoncée tient en quelques versets : la bête et le faux prophète sont saisis, les armées rebelles cessent de combattre, et la terre est dégagée pour la suite — Satan enchaîné mille ans (salle 32), la résurrection, puis le grand trône blanc (salle 33). Harmaguédon n’ouvre pas une ère de ruines : il ferme la rébellion pour ouvrir le règne.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 19:19-21 ; 20:1-3."}
  };
  var cle="nom";
  var ti=document.getElementById("s37-titre"), tx=document.getElementById("s37-texte"), bd=document.getElementById("s37-badge");
  var boutons=document.querySelectorAll(".s37-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
