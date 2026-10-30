(function(){
  document.querySelectorAll(".s02-preuve").forEach(function(carte){
    var btn=carte.querySelector(".s02-retourne");
    btn.addEventListener("click", function(){ var o=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); });
  });
  var canvas=document.getElementById("s02-canvas"); if(!canvas) return;
  var ctx=canvas.getContext("2d"), curseur=document.getElementById("s02-etape");
  var titre=document.getElementById("s02-titre-etape"), texte=document.getElementById("s02-texte-etape");
  var etapes=[
    ["1. Le fleuve protège la ville","L'Euphrate traverse Babylone de part en part : impossible de franchir ses murs sans franchir ses eaux. Annonce : « C'est moi qui dis à l'abîme : Dessèche-toi, je tarirai tes fleuves. » — Isaïe 44:27 (d'après Crampon 1904)"],
    ["2. Les ingénieurs détournent le fleuve","En amont, les Perses creusent un canal vers un bassin : le fleuve change de route. (Hérodote, Histoires, I.191 ; Xénophon, Cyropédie, VII.5 — récits antiques)"],
    ["3. Le lit baisse, les portes sont ouvertes","Devant la ville, l'eau ne monte plus qu'aux genoux. À l'intérieur, c'est nuit de fête — et les portes du quai ne sont pas fermées. « Je briserai les barres de fer (…) et j'ouvrirai les portes à deux battants. » — Isaïe 45:1, 2 (d'après Crampon 1904, adapté)"],
    ["4. La ville tombe sans bataille","Les soldats entrent par le lit du fleuve et la garnison cesse le combat (Jérémie 51:30). La Chronique de Nabonide, babylonienne, le confirme sobrement : entrée « sans bataille », en 539."]
  ];
  function dessine(e){
    var W=canvas.width,H=canvas.height; ctx.clearRect(0,0,W,H);
    ctx.fillStyle="#0B1020"; ctx.fillRect(0,0,W,H);
    // fleuve d'abord, ville par-dessus : largeur selon étape
    var largeur=[150,120,55,40][e];
    ctx.fillStyle="#3FA7A0"; ctx.fillRect(470-largeur/2,0,largeur,H);
    // ville
    ctx.strokeStyle="#D4AF37"; ctx.lineWidth=10; ctx.strokeRect(360,90,300,380);
    ctx.strokeStyle="#A2482B"; ctx.lineWidth=4; ctx.strokeRect(600,240,60,110);
    if(e>=1){ ctx.save(); ctx.translate(470,60); ctx.rotate(-0.6); ctx.fillRect(0,-18,420,36); ctx.restore(); ctx.fillStyle="#E8D9B5"; ctx.font="21px serif"; ctx.fillText("canal de dérivation",640,40); }
    if(e>=2){ ctx.fillStyle="#070A12"; for(var i=0;i<26;i++){ ctx.beginPath(); ctx.arc(445+(i%6)*16, 120+Math.floor(i/6)*70, 7, 0, 7); ctx.fill(); } }
    if(e>=3){ ctx.fillStyle="#F7F3EA"; for(var j=0;j<9;j++){ ctx.beginPath(); ctx.arc(468, 40+j*55, 6, 0, 7); ctx.fill(); } ctx.fillStyle="#E8D9B5"; ctx.font="21px serif"; ctx.fillText("soldats dans le lit du fleuve",520,520); }
    ctx.fillStyle="#E8D9B5"; ctx.font="22px serif"; ctx.fillText("Euphrate",250,280); ctx.font="26px serif"; ctx.fillText("BABYLONE",505,130); ctx.font="20px serif"; ctx.fillText("porte",596,380);
  }
  function maj(){ var e=+curseur.value; dessine(e); titre.textContent=etapes[e][0]; texte.textContent=etapes[e][1]; }
  curseur.addEventListener("input", maj); maj();
  var lecture=document.getElementById("s02-lecture"), minuteur=null;
  lecture.addEventListener("click", function(){
    if(minuteur){ clearInterval(minuteur); minuteur=null; lecture.textContent="Lancer l'animation"; return; }
    lecture.textContent="Arrêter l'animation";
    minuteur=setInterval(function(){ var v=(+curseur.value+1)%4; curseur.value=v; maj(); if(v===3){ clearInterval(minuteur); minuteur=null; lecture.textContent="Lancer l'animation"; } },1800);
  });
})();
