(function(){
  var RECIT={
   jardin:{t:"Une vie parfaite, et tout ce qui venait avec",x:"Adam n’a pas perdu qu’une existence : il a perdu une vie humaine parfaite, sans maladie ni mort, dans un jardin, pour lui et pour des enfants à naître. Sa désobéissance transmet à sa descendance l’imperfection et la mort — « par un seul homme le péché est entré dans le monde, et par le péché la mort » — sans que ses enfants aient eu voix au chapitre.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Genèse 3 ; Romains 5:12."},
   captivite:{t:"Une dette qu’aucun héritier ne peut solder",x:"Nés imparfaits, les humains ne possèdent pas de vie parfaite à offrir : « il n’existe pas de juste, pas même un seul ». Aucune somme de bonnes œuvres ne fabrique l’équivalent de ce qui a été perdu — c’est la définition d’une captivité : la porte ne s’ouvre que par un prix venu d’ailleurs, exactement mesuré à la perte.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Romains 3:10, 23 ; Psaume 49:8-9 (adapté)."},
   prix:{t:"« Donner sa vie comme la rançon de plusieurs »",x:"Jésus présente sa mort non comme un accident ni comme un simple exemple, mais comme le but de sa venue : servir « et donner sa vie comme la rançon de plusieurs ». Humain parfait, né sans la dette d’Adam, il possède précisément ce qu’aucun descendant d’Adam ne possède : une vie humaine parfaite à donner.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 20:28 ; 1 Pierre 1:18-19."},
   balance:{t:"Le mot grec dit : le prix équivalent",x:"Paul emploie un terme composé rare, antilytron : le prix « en échange de ». Ni un ange — sa vie vaudrait plus qu’une vie humaine —, ni un pécheur — sa vie vaudrait moins. Un homme parfait contre l’homme parfait perdu : la correspondance est la condition pour que justice et miséricorde se rencontrent sans tricher avec aucune des deux.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Timothée 2:5-6 ; Romains 5:18-19."},
   liberation:{t:"Résurrection, Royaume, vie éternelle",x:"Le prix payé rouvre tout le musée : les morts peuvent être rachetés de la tombe et relevés (salle 39) ; des humains imparfaits peuvent être pardonnés, instruits et amenés à la perfection sous le Royaume (salles 32 et 40) ; et la vie éternelle redevient un don proposé à chacun — à recevoir librement, « selon son rang » et en son temps.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Osée 13:14 ; 1 Corinthiens 15:21-22 ; Romains 6:23."}
  };
  var cle="jardin";
  var ti=document.getElementById("s44-titre"), tx=document.getElementById("s44-texte"), bd=document.getElementById("s44-badge");
  var boutons=document.querySelectorAll(".s44-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
