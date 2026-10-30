(function(){
  var TETES=[
   {n:"L'Égypte",s:"déjà tombée au temps de Jean",t:"Première puissance à tenir le peuple hébreu sous sa main : l'esclavage, puis des siècles d'influence sur le pays promis. Au temps de Jean, elle n'est plus qu'une province."},
   {n:"L'Assyrie",s:"déjà tombée au temps de Jean",t:"L'empire qui déporte les dix tribus du Nord en 740-722 av. n. è. et manque de peu Jérusalem sous Ézéchias (voir Isaïe 36-37)."},
   {n:"Babylone",s:"déjà tombée au temps de Jean",t:"La tête d'or de la statue (salle 07) : destruction de Jérusalem et exil de soixante-dix ans (salle 06)."},
   {n:"La Médo-Perse",s:"déjà tombée au temps de Jean",t:"La poitrine d'argent : Cyrus autorise le retour des exilés, mais l'empire domine encore le peuple de Dieu pendant deux siècles."},
   {n:"La Grèce",s:"déjà tombée au temps de Jean",t:"Le ventre de bronze : Alexandre, ses quatre héritages et la profanation d'Antiochos IV (salles 07 et 08)."},
   {n:"Rome",s:"« un existe » — celle du temps de Jean",t:"Les jambes de fer : la puissance en place quand Jean écrit. C'est elle qui a détruit Jérusalem en 70 (salle 11) et qui exécutera le Messie sous Ponce Pilate."},
   {n:"La puissance anglo-américaine",s:"« l'autre n'est pas encore venu » — et doit rester peu de temps",t:"Dernier tête : le royaume divisé de fer et d'argile de Daniel 2 (salle 07), héritier de Rome par la langue du droit, les institutions et la domination mondiale. Au temps de Jean, elle n'existe pas encore."}
  ];
  var boite=document.querySelector(".s14-tetes"), elE=document.getElementById("s14-etape"),
      elT=document.getElementById("s14-titre"), elX=document.getElementById("s14-texte");
  if(boite){
    var btns=TETES.map(function(tete, idx){
      var b=document.createElement("button"); b.type="button"; b.textContent=(idx+1)+". "+tete.n;
      b.setAttribute("aria-pressed", idx===0?"true":"false");
      b.addEventListener("click", function(){
        btns.forEach(function(x){ x.setAttribute("aria-pressed","false"); }); b.setAttribute("aria-pressed","true");
        elE.textContent="Tête "+(idx+1)+" sur 7 — "+tete.s; elT.textContent=tete.n; elX.textContent=tete.t;
      });
      boite.appendChild(b); return b;
    });
  }
  var ETATS={
   etait:{t:"« Était » : la Société des Nations (1920)",x:"Le Pacte de la Société des Nations entre en vigueur le 10 janvier 1920 ; sa première Assemblée en réunit 42 états à Genève en novembre 1920. Pour la première fois, une organisation permanente prétend garantir la paix du monde entier. C'est un fait d'histoire ; l'identifier à la bête « qui était » est la lecture proposée ici."},
   nestpas:{t:"« N'est pas » : l'éclipse de la Seconde Guerre mondiale",x:"À partir de 1939, la Société des Nations cesse de fait d'exister : elle ne se réunit plus en assemblée, ne peut rien empêcher, et le monde se déchire sans elle. Elle survit sur le papier jusqu'à sa dissolution formelle en 1946, remplacée — mais pendant la guerre, exactement comme le dit le texte, « elle n'est pas »."},
   monte:{t:"« Monte de l'abîme » : les Nations unies (1945)",x:"La Charte des Nations unies est signée à San Francisco le 26 juin 1945 par 50 états et entre en vigueur le 24 octobre 1945, après ratification. L'organisation renaît, plus large (193 états membres aujourd'hui selon l'ONU), avec siège à New York. « Huitième roi » issu des sept, elle accompagne la dernière tête — sans jamais apporter la paix définitive qu'elle promet."}
  };
  var imgs=document.querySelectorAll(".s14-img"), eT=document.getElementById("s14-etat-titre"), eX=document.getElementById("s14-etat-texte");
  document.querySelectorAll(".s14-etats button").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s14-etats button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true"); var cle=b.getAttribute("data-etat");
      imgs.forEach(function(im){ im.classList.toggle("actif", im.getAttribute("data-etat")===cle); });
      eT.textContent=ETATS[cle].t; eX.textContent=ETATS[cle].x;
    });
  });
})();
