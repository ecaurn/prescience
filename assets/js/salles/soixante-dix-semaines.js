(function(){
  var curseur=document.getElementById("s10-curseur"); if(!curseur) return;
  var elAns=document.getElementById("s10-ans"), elAnnee=document.getElementById("s10-annee"), elTexte=document.getElementById("s10-texte");
  var boite=document.getElementById("s10-semaines"), cases=[];
  for(var k=0;k<70;k++){ var c=document.createElement("i"); if(k===69) c.className="derniere"; boite.appendChild(c); cases.push(c); }
  var JALONS=[
    {max:0, txt:"L'ordre de rebâtir Jérusalem est donné à Néhémie (Néhémie 2:1-8). Le compte des 70 semaines commence."},
    {max:48.5, txt:"Les sept premières semaines (49 ans) : la ville est rebâtie « avec places et fossés, dans des temps d'angoisse » (Daniel 9:25)."},
    {max:49, txt:"49 ans accomplis (406 av. n. è.) : Jérusalem est rebâtie. Restent 62 semaines avant le Messie."},
    {max:482.5, txt:"Les 62 semaines s'écoulent : empires perse, grec et romain se succèdent (salles 07 et 08) pendant que le compte avance."},
    {max:483, txt:"483 ans accomplis : le Messie est oint à son baptême (29 de n. è.). « Le peuple était dans l'attente » (Luc 3:15)."},
    {max:486, txt:"La soixante-dixième semaine commence : trois ans et demi de ministère."},
    {max:486.5, txt:"Milieu de la semaine (printemps 33) : le Messie est retranché ; sacrifice et offrande cessent (Daniel 9:26, 27)."},
    {max:489.5, txt:"La faveur exclusive envers Israël court jusqu'au terme des 490 ans."},
    {max:490, txt:"490 ans accomplis (36 de n. è.) : la bonne nouvelle s'ouvre aux nations (Actes 10). Le calendrier est clos."}
  ];
  function convertir(v){
    if(v<455) return (455-Math.floor(v))+" av. n. è.";
    if(v===455) return "1 av. n. è.";
    return Math.floor(v-454)+" de n. è.";
  }
  function maj(){
    var v=parseFloat(curseur.value);
    elAns.textContent=(v%1===0? v : v.toFixed(1)).toString().replace(".", ",");
    elAnnee.textContent=convertir(v);
    var j=JALONS.find(function(x){ return v<=x.max; }) || JALONS[JALONS.length-1];
    elTexte.textContent=j.txt;
    var pleines=Math.floor(v/7);
    cases.forEach(function(c,idx){ c.classList.toggle("pleine", idx<pleines || (idx===69 && v>=490)); });
  }
  curseur.addEventListener("input", maj);
  document.querySelectorAll(".s10-jalons button").forEach(function(b){
    b.addEventListener("click", function(){ curseur.value=b.getAttribute("data-v"); maj(); });
  });
  maj();
})();
