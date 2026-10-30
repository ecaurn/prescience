(function(){
  var RECIT={
   abime:{t:"Une clé, une chaîne, un abîme scellé",x:"Un ange descend avec « la clé de l’abîme et une grande chaîne » : Satan est lié et enfermé, « afin qu’il ne séduise plus les nations jusqu’à ce que les mille ans soient accomplis ». La salle ne figure ni l’ange ni le dragon : elle retient la mécanique du texte — le Séducteur est mis hors d’état d’influencer la terre entière pendant que le Royaume fait son œuvre.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:1-3."},
   paix:{t:"Le chantier des mille ans",x:"Pendant l’enchaînement, la terre devient un chantier de guérison : les morts reviennent par rangs (salle 39), sont logés, nourris, instruits ; les vivants vieillissent sans la peur ; les générations nouvelles naissent sans jamais avoir connu le mensonge. C’est ce monde-là — éduqué, comblé, averti — que l’épreuve finale viendra visiter.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:4-6 ; Isaïe 65:20-23 (salle 41)."},
   relache:{t:"« Pour un peu de temps »",x:"La libération est écrite dans le décret même de l’enfermement : « après cela, il faut qu’il soit délié pour un peu de temps ». Le Séducteur ressort tel qu’il était entré — le temps ne l’a pas corrigé. Il reprend son unique métier, séduire, mais devant une humanité qui, cette fois, sait tout de lui et de l’alternative.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:3, 7."},
   sable:{t:"Le dernier rassemblement reprend de vieux noms",x:"« Gog et Magog » : la vision recycle les noms d’Ézéchiel 38-39 (salle 31) pour désigner la multitude finale, « comme le sable de la mer », qui monte sur la largeur de la terre et entoure « le camp des saints et la ville bien-aimée ». Le nombre impressionne ; la durée, non : il n’y aura ni siège ni bataille rangée.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:8-9."},
   fin:{t:"Le feu du ciel, puis plus de Séducteur",x:"« Un feu descendit du ciel et les dévora. Et le diable, qui les séduisait, fut jeté dans l’étang de feu et de soufre » — avec la bête et le faux prophète, pour toujours. Il ne reste alors que les morts devant le grand trône blanc (salle 33) : la rébellion, sous toutes ses formes, a quitté l’univers.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:9-10."}
  };
  var cle="abime";
  var ti=document.getElementById("s43-titre"), tx=document.getElementById("s43-texte"), bd=document.getElementById("s43-badge");
  var boutons=document.querySelectorAll(".s43-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
