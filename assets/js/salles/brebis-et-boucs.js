(function(){
  var RECIT={
   venue:{t:"Le trône de sa gloire, les nations assemblées",x:"La scène s’ouvre sur la venue du Fils de l’homme « dans sa gloire, avec tous les anges », assis sur son trône, et toutes les nations rassemblées devant lui. Ce n’est pas le procès des morts (salle 33) : ce sont les vivants de la terre entière, au moment où la grande tribulation touche à son dénouement — et chacun est là pour ce qu’il a fait, ou refusé de faire.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 25:31-32."},
   separation:{t:"Droite et gauche, sans intermédiaire",x:"L’image vient du soir des bergers : on trie le troupeau rentré à l’enclos, les brebis d’un côté, les boucs de l’autre, pour la nuit. La parabole ne prévoit pas de troisième groupe ni de zone d’attente : deux postures seulement face au message — l’avoir soutenu concrètement, ou l’avoir laissé passer. Le tri est l’affaire du berger, pas celle des bêtes entre elles.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 25:32-33."},
   actions:{t:"Six gestes ordinaires",x:"Faim, soif, exil, nudité, maladie, prison : les six situations énumérées sont celles des envoyés malmenés pendant la tribulation. Le Roi ne comptabilise ni discours ni appartenances, mais des verres d’eau et des portes ouvertes. Les brebis, surprises, n’avaient pas conscience de servir le Roi lui-même : « quand t’avons-nous vu ? »",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 25:35-40."},
   freres:{t:"« Vous l’avez fait à moi »",x:"La clé est donnée à la fin, aux deux groupes : « dans la mesure où vous avez fait ces choses à l’un de ces plus petits, de mes frères, c’est à moi que vous les avez faites » — et, aux autres, la phrase en miroir. Recevoir le messager, c’est recevoir l’envoyeur (Matthieu 10:40) : l’attitude envers les frères du Christ décide, parce qu’elle révèle l’attitude envers le Christ lui-même.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 25:40, 45 ; Matthieu 10:40-42."},
   issues:{t:"« Ceux-ci iront au retranchement éternel, mais les justes à la vie éternelle »",x:"La parabole se referme sur deux issues symétriques. Les boucs s’en vont à la destruction — le feu « préparé pour le diable et ses anges », non pour des humains à l’origine (25:41) — ; les brebis entrent dans la vie du Royaume sur la terre, qu’Harmaguédon vient de dégager (salle 37) et que les mille ans vont déployer (salle 32).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 25:34, 41, 46."}
  };
  var cle="venue";
  var ti=document.getElementById("s42-titre"), tx=document.getElementById("s42-texte"), bd=document.getElementById("s42-badge");
  var boutons=document.querySelectorAll(".s42-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
