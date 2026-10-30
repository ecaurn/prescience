(function(){
  var RECIT={
   portes:{t:"« La paix soit avec vous »",x:"Le soir de ce premier dimanche, les disciples sont réunis derrière des portes verrouillées, par crainte des autorités qui viennent de faire exécuter leur maître. Jésus paraît au milieu d’eux, montre ses mains et son côté — les marques qui permettent de le reconnaître — et les envoie comme il a été envoyé, avant de souffler sur eux en annonçant l’esprit saint. La joie succède à la peur, mais un des Douze manque à l’appel.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 20:19-23 (résumé sobre)."},
   absent:{t:"Le seul qui n’y était pas",x:"Thomas, appelé Didyme, n’était pas avec les disciples lorsque Jésus vint. Le récit ne dit ni où il était ni pourquoi ; il se contente du contraste. À son retour, les autres lui annoncent, avec la formule des témoins : « nous avons vu le Seigneur. » Tout le reste de la scène naît de cette asymétrie : dix ont vu, un seul doit croire sur parole — exactement la situation que Jésus bénira huit jours plus tard.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 20:24-25."},
   condition:{t:"« Je ne croirai point »",x:"La condition de Thomas est célèbre par sa précision presque juridique : voir la marque des clous dans les mains, y mettre le doigt, mettre la main dans le côté. On y a lu tantôt de l’obstination, tantôt de la rigueur. Le récit invite à une lecture plus sobre : les dix autres ont cru après avoir vu les mêmes marques (20:20) ; Thomas demande le même dossier. La réponse de Jésus, huit jours plus tard, reprendra ses propres mots un à un, comme une réponse à un courrier.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 20:25 ; 20:20."},
   huitjours:{t:"Portes fermées, une semaine plus tard",x:"Huit jours après, les disciples sont de nouveau dans la maison, et Thomas est avec eux. Jésus vient, les portes étant fermées, se tient au milieu, puis s’adresse directement à l’absent de la semaine précédente : « avance ici ton doigt, et regarde mes mains ; avance aussi ta main, et mets-la dans mon côté ; et ne sois pas incrédule, mais crois. » Le texte ne dit pas que Thomas a touché : la vue et la parole semblent avoir suffi, comme si la condition posée avait été honorée par l’offre seule.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 20:26-27."},
   confession:{t:"« Mon Seigneur et mon Dieu ! »",x:"La réponse de Thomas tient en cinq mots dans le français de Segond : la confession la plus haute de l’évangile, prononcée par celui qui avait posé les conditions les plus strictes. Jésus la reçoit, puis la dépasse aussitôt : « parce que tu m’as vu, tu as cru ; heureux ceux qui n’ont pas vu, et qui ont cru. » L’évangile enchaîne par sa propre déclaration d’intention : ces signes ont été écrits pour que le lecteur — qui n’a rien vu — croie à son tour. La main tendue de l’image reste suspendue : la confession a remplacé l’examen.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 20:28-31."}
  };
  var cle="portes";
  var ti=document.getElementById("s57-titre"), tx=document.getElementById("s57-texte"), bd=document.getElementById("s57-badge");
  var boutons=document.querySelectorAll(".s57-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
