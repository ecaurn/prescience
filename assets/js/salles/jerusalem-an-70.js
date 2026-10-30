(function(){
  var curseur=document.getElementById("s11-curseur"); if(!curseur) return;
  var elA=document.getElementById("s11-annee"), elT=document.getElementById("s11-texte");
  var ETAPES={
   "66":{titre:"An 66 — le signal, puis la fenêtre",texte:"L'armée de Cestius Gallus arrive devant Jérusalem, s'empare d'une partie de la ville, puis, sans raison militaire claire, sonne la retraite. Josèphe lui-même s'en étonne (Guerre des Juifs, II.19.7). Pour les chrétiens de la ville, le signal de Luc 21 vient de se réaliser.",p:0},
   "67":{titre:"An 67 — l'accalmie",texte:"Rome réprime la révolte méthodiquement, de la Galilée vers le sud. Jérusalem n'est pas encore encerclée : ceux qui ont reçu la consigne quittent la ville et gagnent Pella, au-delà du Jourdain, dans les montagnes de Galaad.",p:.45},
   "68":{titre:"An 68 — le sursis continue",texte:"L'empereur Néron meurt ; la guerre civile à Rome fige les opérations en Judée pendant des mois. La fenêtre ouverte en 66 reste ouverte — pour ceux qui restent, elle se refermera bientôt.",p:.6},
   "69":{titre:"An 69 — le compte à rebours",texte:"Vespasien, proclamé empereur, laisse à son fils Titus le soin d'en finir. Les armées romaines convergent de nouveau vers Jérusalem. La consigne de fuir n'a plus d'objet : l'encerclement final approche.",p:.8},
   "70":{titre:"An 70 — la fenêtre s'est refermée",texte:"Siège de printemps, mur de circonvallation élevé en trois jours, famine, incendie du temple en août, ville rasée, captifs dispersés parmi les nations. Tout ce qui avait été annoncé se produit — pour une ville dont la communauté chrétienne était partie.",p:1}
  };
  var cv=document.getElementById("s11-carte"), ctx=cv.getContext("2d");
  function carte(p){
    ctx.clearRect(0,0,880,360);
    ctx.fillStyle="#121c30"; ctx.fillRect(0,0,880,360);
    ctx.fillStyle="#1e3a8a"; ctx.font="600 18px Inter, sans-serif";
    ctx.beginPath(); ctx.moveTo(560,0); ctx.bezierCurveTo(520,90,600,180,560,360); ctx.lineTo(880,360); ctx.lineTo(880,0); ctx.closePath(); ctx.fillStyle="#0d2f4a"; ctx.fill();
    ctx.fillStyle="#7fc4bd"; ctx.fillText("LA VALLÉE DU JOURDAIN",600,330);
    ctx.fillStyle="#8aa0c8"; ctx.font="600 17px Inter, sans-serif"; ctx.fillText("les montagnes de Judée",60,330);
    ctx.strokeStyle="#3fa7a0"; ctx.lineWidth=3; ctx.setLineDash([8,7]); ctx.beginPath();
    ctx.moveTo(240,255); ctx.bezierCurveTo(400,190,560,130,690,80); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle="#a2482b"; ctx.beginPath(); ctx.arc(240,255,13,0,7); ctx.fill();
    ctx.fillStyle="#f7f3ea"; ctx.font="700 22px Inter, sans-serif"; ctx.fillText("Jérusalem",165,300);
    ctx.fillStyle="#3fa7a0"; ctx.beginPath(); ctx.arc(690,80,13,0,7); ctx.fill();
    ctx.fillStyle="#f7f3ea"; ctx.fillText("Pella",712,74);
    var x=240+(690-240)*p, y=255+(80-255)*p + Math.sin(p*3.1)*-28;
    ctx.fillStyle="#d4af37"; ctx.beginPath(); ctx.arc(x,y,10,0,7); ctx.fill();
    ctx.strokeStyle="#d4af37"; ctx.lineWidth=2; ctx.beginPath(); ctx.arc(x,y,16,0,7); ctx.stroke();
    ctx.fillStyle="#e8d9b5"; ctx.font="600 17px Inter, sans-serif";
    ctx.fillText(p===0?"le signal est donné":(p===1?"trop tard pour fuir":"la fuite vers Pella"), Math.min(x+18,640), y-18);
  }
  function maj(){
    var e=ETAPES[curseur.value]; if(!e) return;
    elA.textContent=e.titre; elT.textContent=e.texte; carte(e.p);
  }
  curseur.addEventListener("input", maj); maj();
  document.querySelectorAll(".s11-preuve").forEach(function(c){
    var b=c.querySelector(".s11-retourne"); b.addEventListener("click", function(){ var o=c.classList.toggle("ouverte"); b.setAttribute("aria-expanded", o); });
  });
})();
