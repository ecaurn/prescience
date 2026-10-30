(function(){
  var cartes=Array.prototype.slice.call(document.querySelectorAll(".s09-carte"));
  var explores=new Set(), elE=document.getElementById("s09-explores"), elV=document.getElementById("s09-visibles");
  cartes.forEach(function(carte, idx){
    var btn=carte.querySelector(".s09-ouvre");
    btn.addEventListener("click", function(){
      var ouvert=carte.classList.toggle("ouvert"); btn.setAttribute("aria-expanded", ouvert);
      if(ouvert){ explores.add(idx); } elE.textContent=explores.size;
    });
  });
  document.querySelectorAll(".s09-filtres button").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s09-filtres button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true"); var f=b.getAttribute("data-filtre"), n=0;
      cartes.forEach(function(c){ var vis = f==="tous" || c.getAttribute("data-cat")===f; c.classList.toggle("cache", !vis); if(vis) n++; });
      elV.textContent=n;
    });
  });
  var preuve=document.querySelector(".s09-preuve");
  if(preuve){ var btn=preuve.querySelector(".s09-retourne"); btn.addEventListener("click", function(){ var o=preuve.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); }); }
})();
