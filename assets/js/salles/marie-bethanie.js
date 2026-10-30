(function(){
  var RECIT={
   souper:{t:"« Là, on lui fit un souper »",x:"Six jours avant la Pâque, Jésus revient à Béthanie, dans la maison où Lazare — qu'il a relevé d'entre les morts — est des convives ; Marthe sert, comme à son habitude. La foule, elle aussi, accourt au village, non seulement pour Jésus mais pour voir Lazare, au point que les principaux sacrificateurs songent à le faire mourir aussi. C'est dans cette maison pleine, entre service et menace, que Marie va agir sans un mot.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 12:1-2, 9-11 (résumé sobre)."},
   nard:{t:"La maison remplie de l'odeur du parfum",x:"Marie prend une livre de parfum de nard pur et de grand prix — l'essence d'une racine des vallées himalayennes, parmi les plus chères du monde ancien —, oint les pieds de Jésus et les essuie avec ses cheveux dénoués. Jean ne rapporte aucune parole d'elle : seulement l'odeur qui remplit la maison entière, comme si le récit voulait qu'on respire la scène avant de la juger. Le musée montre ce moment des genoux aux pieds, sans portrait de l'hôte.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 12:3."},
   calcul:{t:"« Pourquoi ce parfum n'a-t-il pas été vendu ? »",x:"L'objection vient avec un prix : trois cents deniers, environ le salaire annuel d'un ouvrier agricole. Matthieu la met dans la bouche des disciples, Jean dans celle de Judas le trésorier — et il ajoute, en aparté, que celui-ci puisait dans la bourse commune. Jésus ne discute pas l'arithmétique : « vous avez toujours les pauvres avec vous » — le devoir envers eux demeure ; ce qui ne reviendra pas, c'est sa présence à lui.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 12:4-8 ; Matthieu 26:8-11 (résumé sobre)."},
   sepulture:{t:"« Elle a d'avance oint mon corps »",x:"Jésus donne au geste son sens que Marie elle-même n'a peut-être pas mesuré : un embaumement par avance, « pour le jour de ma sépulture ». Marc place la même parole à Béthanie, pour l'onction de la tête chez Simon le lépreux ; la salle expose ces variantes au banc des preuves sans les fondre. Dans les deux lectures, l'onction devient la première onction funèbre du récit — avant celle que les femmes prépareront trop tard, au matin de la résurrection (salle 39).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 12:7 ; Marc 14:8 ; Luc 23:56-24:1."},
   monde:{t:"« On racontera aussi ce qu'elle a fait »",x:"La promesse qui clôt la scène dépasse la maison de Béthanie : partout où la bonne nouvelle sera prêchée dans le monde entier, le geste de cette femme sera raconté « en mémoire d'elle ». Vingt siècles de prédication, de manuscrits et de récits l'ont vérifiée — et ce musée s'inscrit sciemment dans la série, en lui donnant une salle. Aucune date n'était fixée pour cette diffusion ; elle continue de s'accomplir chaque fois qu'un visiteur s'arrête devant le flacon d'albâtre.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 26:13 ; Marc 14:9."}
  };
  var cle="souper";
  var ti=document.getElementById("s53-titre"), tx=document.getElementById("s53-texte"), bd=document.getElementById("s53-badge");
  var boutons=document.querySelectorAll(".s53-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
