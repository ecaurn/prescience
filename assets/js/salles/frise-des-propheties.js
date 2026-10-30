(function(){
  var items=Array.prototype.slice.call(document.querySelectorAll(".s16-item"));
  var elC=document.getElementById("s16-compte");
  items.forEach(function(it){
    var btn=it.querySelector(".s16-ouvre");
    btn.addEventListener("click", function(){ var o=it.classList.toggle("ouvert"); btn.setAttribute("aria-expanded", o); });
  });
  var filtre="TOUT", recherche="";
  function maj(){
    var n=0;
    items.forEach(function(it){
      var okF = filtre==="TOUT" || it.getAttribute("data-statut")===filtre;
      var okR = !recherche || it.getAttribute("data-recherche").indexOf(recherche)>-1;
      var vis = okF && okR; it.classList.toggle("cache", !vis); if(vis) n++;
    });
    elC.textContent=n;
  }
  document.querySelectorAll(".s16-filtres button").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s16-filtres button").forEach(function(x){ x.setAttribute("aria-pressed","false"); });
      b.setAttribute("aria-pressed","true"); filtre=b.getAttribute("data-filtre"); maj();
    });
  });
  document.getElementById("s16-recherche").addEventListener("input", function(){ recherche=this.value.trim().toLocaleLowerCase("fr"); maj(); });
})();
