for (var a in localStorage) {
  if (localStorage[a] != "fav") {
    continue; //Skip if value not fav
  }
  var ptag = document.createElement("p");
  ptag.innerHTML = a;
  document.getElementsByClassName("fav-list")[0].appendChild(ptag);
}
