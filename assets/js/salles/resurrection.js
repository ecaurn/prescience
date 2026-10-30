(function(){
  var RECIT={
   heure:{t:"« Ne vous étonnez pas de cela »",x:"Jésus annonce une heure où « tous ceux qui sont dans les tombeaux entendront sa voix et en sortiront ». L’universalité frappe : pas seulement les fidèles, pas seulement les contemporains — tous les morts gardés dans les tombes de la terre. Le texte distingue dès l’annonce deux issues, vie ou jugement, sans fixer encore le moment de ce départage.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jean 5:28-29."},
   justes:{t:"« Des justes et des injustes »",x:"Devant le gouverneur Félix, Paul confesse « l’espérance en Dieu (…) qu’il y aura une résurrection des justes et des injustes ». Les injustes ne sont pas relevés pour être aussitôt condamnés : dans la séquence du musée, ils reviennent pendant les mille ans pour apprendre ce qu’ils n’ont jamais pu connaître, puis être jugés en connaissance de cause (salle 33).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Actes 24:15 ; Révélation 20:5-6, 12."},
   rang:{t:"« Chacun selon son rang »",x:"Paul ordonne sans dater : Christ les prémices, « ensuite ceux qui appartiennent à Christ, lors de son avènement », puis la suite au long du règne. La résurrection est pensée comme un processus ordonné à l’échelle des mille ans — des générations qui reviennent, sont accueillies, enseignées — et non comme un unique instant impossible à habiter.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Corinthiens 15:20-24 ; salle 32."},
   ennemi:{t:"« Le dernier ennemi, c’est la mort »",x:"Au centre du chapitre 15, la mort n’est pas traitée en alliée qui délivrerait les âmes, mais en ennemie à détruire. Elle règne « depuis Adam » sur des humains qui n’ont pas choisi de naître mortels ; le règne du Christ la défait par étapes, jusqu’à ce qu’elle soit « jetée dans l’étang de feu » avec l’Hadès lui-même (Révélation 20:14).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Corinthiens 15:21-26 ; Révélation 20:13-14."},
   retrouvailles:{t:"Des tables qui se redressent",x:"Les résurrections racontées par les Évangiles finissent à table ou en famille : le fils rendu à sa mère à Naïn, Lazare attablé avec les siens à Béthanie. À l’échelle de l’humanité relevée, la promesse garde ce visage : des maisons qui se rouvrent, des places retrouvées, et tout le temps des mille ans pour réapprendre à vivre — sans la mort au bout.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Luc 7:11-17 ; Jean 12:1-2 ; Révélation 21:3-4."}
  };
  var cle="heure";
  var ti=document.getElementById("s39-titre"), tx=document.getElementById("s39-texte"), bd=document.getElementById("s39-badge");
  var boutons=document.querySelectorAll(".s39-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
