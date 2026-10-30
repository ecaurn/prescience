(function(){
  var NOMS={
   gog:{t:"Gog, du pays de Magog, « prince de Mèshek et de Tubal » (38:2-3)",x:"Gog est le chef ; Magog, son pays « des confins du nord » (38:15). Dans la table des peuples (Genèse 10), Magog, Gomer, Tubal et Mèshek sont des fils de Japhet, associés aux horizons du nord. L'hypothèse Gygès de Lydie (« Gugu » chez Assurbanipal) donne au nom un ancrage du VIIe siècle, débattu. Talon d'Achille de toutes les identifications modernes : le texte décrit les alliés par leurs noms anciens, et aucun de ces noms ne désigne sans conteste un État d'aujourd'hui.",b:"<span class=\"badge avenir\">DÉBATTU</span> Prototype historique possible, accomplissement à venir."},
   anatolie:{t:"Mèshek, Tubal, Gomer, Togarma — l'Anatolie et la mer Noire",x:"Quatre noms du plateau anatolien et des pourtours de la mer Noire : Mèshek et Tubal (Moushki et Tabal des textes assyriens, Anatolie centrale et orientale), Gomer (les Cimmériens), Togarma (Anatolie du sud-est). C'est le « nord » géographique du chapitre, celui d'où venaient historiquement les invasions (Jérémie 1:13-15). Josèphe, au Ier siècle, associait Magog aux Scythes des steppes.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Localisations anciennes établies dans leurs grandes lignes."},
   lointains:{t:"Perse, Koush, Pout — l'orient et le midi (38:5)",x:"La coalition déborde le nord : la Perse (l'orient), Koush (le haut Nil, au sud de l'Égypte) et Pout (souvent situé vers la Libye ou la Corne de l'Afrique) l'entourent « tous avec boucliers et casques ». La géographie devient rhétorique : les confins du monde connu d'alors convergent. C'est l'un des indices qui font lire la scène comme une coalition sans frontières plutôt qu'une campagne régionale.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ampleur « aux confins » : lecture symbolique de la liste."},
   marchands:{t:"Saba, Dedan, Tarsis — les marchands qui questionnent (38:13)",x:"Fait remarquable : tout le monde ne marche pas. Les commerçants de Saba et Dedan (Arabie) et de Tarsis (occident méditerranéen) interpellent Gog : « Est-ce pour piller que tu viens ? » Le chapitre distingue donc les assaillants des spectateurs intéressés — un détail que la salle relève, car il interdit de peindre le monde entier en ennemi uniforme.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Nuance interne du texte, souvent oubliée des lectures sommaires."}
  };
  var ti=document.getElementById("s31-titre"), tx=document.getElementById("s31-texte"), bd=document.getElementById("s31-badge");
  var boutons=document.querySelectorAll(".s31-onglets button");
  function montrerNom(cle){
    var n=NOMS[cle]; if(!n) return;
    ti.textContent=n.t; tx.textContent=n.x; bd.innerHTML=n.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-nom")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click", function(){ montrerNom(b.getAttribute("data-nom")); }); });
  montrerNom("gog");

  var TEMPS=[
   {t:"Le dessein — piller un peuple sans murailles (38:10-13)",x:"« Je monterai contre un pays sans murailles (…) pour enlever un grand butin » : Gog prépare son plan contre un peuple rassemblé « d'entre beaucoup de peuples », vivant en sécurité, riche de bétail et de biens, « au centre de la terre ». Les marchands de Saba, Dedan et Tarsis posent la question que le lecteur se pose : est-ce pour piller ?"},
   {t:"La montée — « comme une nuée » (38:15-16)",x:"« Tu monteras de ton lieu, des confins du nord, toi et beaucoup de peuples avec toi (…) comme une nuée qui couvre le pays. » La date est délibérément ouverte : « dans la suite des années », « dans les derniers jours ». Le musée ne remplit pas ce blanc : aucun calendrier, aucune manchette d'actualité n'est accrochée à cette nuée."},
   {t:"L'intervention — la terre tremble (38:19-23)",x:"Ce n'est ni une armée ni une alliance qui répond : « il y aura un grand tremblement de terre (…), une pluie torrentielle et des pierres de grêle, du feu et du soufre ». Les montagnes s'écroulent, les épées se retournent les unes contre les autres. Le récit attribue la délivrance à Jéhovah seul — c'est, théologiquement, le cœur de la vision."},
   {t:"Le nettoyage — sept ans, sept mois (39:9-16)",x:"Après la chute de Gog, le pays entreprend un immense ménage : les armes brûlées comme combustible pendant sept ans, les morts enterrés pendant sept mois dans la vallée qui prend nom de la foule de Gog. L'hyperbole des chiffres (sept et sept) dit l'ampleur de la purification voulue : jusqu'au bout, le pays est rendu à la vie ordinaire."},
   {t:"La conclusion — « ils sauront que je suis Jéhovah » (39:21-29)",x:"La vision se referme sur le motif qui court dans tout le livre d'Ézéchiel, répété des dizaines de fois : les nations et Israël « sauront que je suis Jéhovah ». Le dernier mot n'est pas la coalition, mais la restauration : « Je ne cacherai plus ma face (…), car j'aurai répandu mon esprit sur la maison d'Israël » (39:29)."}];
  var i=0, t2=document.getElementById("s31-titre2"), x2=document.getElementById("s31-texte2"),
      num=document.getElementById("s31-num"), barre=document.getElementById("s31-barre-i"),
      prec=document.getElementById("s31-prec"), suiv=document.getElementById("s31-suiv");
  function montrerTemps(){
    t2.textContent=TEMPS[i].t; x2.textContent=TEMPS[i].x; num.textContent=i+1;
    barre.style.width=((i+1)/TEMPS.length*100)+"%";
    prec.disabled = i===0; suiv.disabled = i===TEMPS.length-1;
  }
  prec.addEventListener("click", function(){ if(i>0){ i--; montrerTemps(); } });
  suiv.addEventListener("click", function(){ if(i<TEMPS.length-1){ i++; montrerTemps(); } });
  montrerTemps();
})();
