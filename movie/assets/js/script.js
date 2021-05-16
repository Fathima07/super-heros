load_heroes();
document.getElementById("super-hero-select").addEventListener("change",function(){
  load_hero_details(this.value);
});
document.getElementById("add-fav").addEventListener("click",function(){
  addFavourite();
});

function load_heroes() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json_response = JSON.parse(this.responseText);
      json_response.forEach(function(element) {
        var option = document.createElement("option");
        option.value = element.id;
        option.innerHTML = element.name;

        document.getElementById("super-hero-select").append(option);
      });
    }
  };
  xhttp.open("GET", "assets/json/heros.json", true);
  xhttp.send();
}

function load_hero_details(id){
    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var json_response = JSON.parse(this.responseText);
      document.getElementById("hero-img").src   =   json_response["image"]['url'];
      document.getElementById("hero-name").innerHTML   =   json_response["name"];
      document.getElementById("hero-birth-place").innerHTML   =   json_response["biography"]['place-of-birth'];
      document.getElementById("hero-publisher").innerHTML   =   json_response["biography"]['publisher'];
      document.getElementById("hero-weight").innerHTML   =   json_response["appearance"]['weight'][0];
      document.getElementById("hero-height").innerHTML   =   json_response["appearance"]['height'][0];
      document.getElementById("hero-gender").innerHTML   =   json_response["appearance"]['gender'];
      document.getElementById("hero-occupation").innerHTML = json_response["work"]["occupation"];
    }
  };
  xhttp.open("GET", "https://www.superheroapi.com/api.php/101572862123239/"+id, true);
  xhttp.send();
}

//add favourite button//

function addFavourite(){
  var heroName =document.getElementById("hero-name").innerHTML;

  localStorage.setItem(heroName, "fav");
  alert("Successfully Added Favorite");
}