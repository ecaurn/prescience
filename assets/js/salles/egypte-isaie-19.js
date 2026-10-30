(function(){
  var ETAPES=[
   {t:"L'effondrement — « L'Égypte contre l'Égypte » (19:1-15)",x:"Le chapitre s'ouvre sur le chaos : guerre civile (« J'armerai l'Égypte contre l'Égypte »), idoles qui tremblent, conseillers devenus insensés, Nil qui baisse et pêche qui s'effondre. L'Égypte du VIIIe siècle, affaiblie et divisée entre dynastes rivaux, va au-devant de l'Assyrie : Memphis tombera en 671, Thèbes sera pillée en 663 — la catastrophe que Nahoum 3:8-10 rappellera encore un demi-siècle plus tard.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Écho assyrien débattu dans son échelle (voir les cartes ci-dessous)."},
   {t:"La frayeur — « le pays de Juda sera l'effroi de l'Égypte » (19:16-17)",x:"Retournement psychologique : la petite Juda, que l'Égypte écrasait depuis des siècles, devient pour elle un nom qui fait trembler, « à cause du dessein que Jéhovah a formé contre elle ». Dans le récit biblique, c'est le prélude du retournement : la crainte précède la connaissance (comparez 19:21 : « Jéhovah se fera connaître de l'Égypte »).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Lecture du mouvement du chapitre."},
   {t:"Cinq villes, un autel, une stèle (19:18-19)",x:"« Cinq villes au pays d'Égypte parleront la langue de Canaan et jureront par Jéhovah » ; un autel « au milieu du pays », une stèle « à sa frontière ». Des cultes de Jéhovah en Égypte sont documentés : le petit temple d'Éléphantine (Ve siècle, au sud) et, vers 160, le temple d'Onias à Léontopolis, fondé en citant ce verset même. Un nom de ville du verset 18 fait débat entre manuscrits : voir la salle 28.",b:"<span class=\"badge\">FAIT ARCHÉOLOGIQUE</span> Éléphantine ; <span class=\"badge encours\">DONNÉE HISTORIQUE</span> Léontopolis selon Josèphe."},
   {t:"Le sauveur et la guérison (19:20-22)",x:"L'Égypte crie vers Jéhovah « à cause des oppresseurs » ; il lui envoie « un sauveur et un champion » ; elle se convertit, offre des sacrifices, fait des vœux — et « Jéhovah frappera l'Égypte : il la frappera et la guérira ». Qui est ce sauveur ? Les commentateurs ont proposé des libérateurs historiques ; le chapitre, lui, enchaîne directement sur la scène finale, encore ouverte.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Identité du « sauveur » discutée."},
   {t:"La route des trois peuples (19:23-25)",x:"« Il y aura une route d'Égypte en Assyrie » : les deux anciens empires ennemis et Israël, « le troisième », sont bénis ensemble — « Béni soit l'Égypte, mon peuple, l'Assyrie, œuvre de mes mains, et Israël, mon héritage ». Aucune réalisation complète n'en est revendiquée ; la salle la classe à venir, sans date et sans identification moderne.",b:"<span class=\"badge avenir\">À VENIR</span> Sans date, sans rattachement politique moderne."}];
  var i=0, ti=document.getElementById("s27-titre"), tx=document.getElementById("s27-texte"), bd=document.getElementById("s27-badge"),
      num=document.getElementById("s27-num"), barre=document.getElementById("s27-barre-i"),
      prec=document.getElementById("s27-prec"), suiv=document.getElementById("s27-suiv");
  function montrer(){
    ti.textContent=ETAPES[i].t; tx.textContent=ETAPES[i].x; bd.innerHTML=ETAPES[i].b; num.textContent=i+1;
    barre.style.width=((i+1)/ETAPES.length*100)+"%";
    prec.disabled = i===0; suiv.disabled = i===ETAPES.length-1;
  }
  prec.addEventListener("click", function(){ if(i>0){ i--; montrer(); } });
  suiv.addEventListener("click", function(){ if(i<ETAPES.length-1){ i++; montrer(); } });
  montrer();
})();
