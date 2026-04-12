console.log("JS WORKING ✅");

var dogs = [];


function fetchDogs() {
  document.getElementById("loading").style.display = "block";

  fetch("https://api.thedogapi.com/v1/breeds", {
    method: "GET",
    headers: {
      "x-api-key": "live_TVeYmw8FlCe5Sm5z9nKLUIbt9S0Xf1TrHfCB8A0uTBvFgaDS8ITKibiImMcuN2oz"
    }
  })
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Network problem");
      }
      return response.json();
    })
    .then(function(data) {
      console.log("DATA:", data);

      dogs = data.slice(0, 100);

      document.getElementById("loading").style.display = "none";

      displayDogs(dogs);
    })
    .catch(function(error) {
      console.log("ERROR:", error);

      document.getElementById("dog-container").innerHTML =
        "<h2>⚠️ Failed to load dogs</h2>";
    });
}

fetchDogs();



function displayDogs(data) {
  var container = document.getElementById("dog-container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<h2>No breeds found 🐶</h2>";
    return;
  }

  data.map(function(dog) {

    var card = document.createElement("div");
    card.className = "card";

    var img = document.createElement("img");

    if (dog.image && dog.image.url) {
      img.src = dog.image.url;
    } else {
      img.src = "https://via.placeholder.com/300";
    }

    var name = document.createElement("h3");
    name.innerText = dog.name;

    var life = document.createElement("p");
    life.innerText = "Life: " + dog.life_span;

    var weight = document.createElement("p");
    weight.innerText = "Weight: " + dog.weight.metric;

    var temp = document.createElement("p");
    temp.innerText = "Temperament: " + (dog.temperament || "N/A");

    var btn = document.createElement("button");
    btn.innerText = "Adopt 🐾";
    btn.className = "btn";

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(life);
    card.appendChild(weight);
    card.appendChild(temp);
    card.appendChild(btn);

    container.appendChild(card);
  });
}


document.getElementById("search").addEventListener("input", function(e) {
  var value = e.target.value.toLowerCase();

  var result = dogs.filter(function(dog) {
    return dog.name.toLowerCase().includes(value);
  });

  displayDogs(result);
});



document.getElementById("filter").addEventListener("change", function(e) {
  var value = e.target.value;

  if (value === "") {
    displayDogs(dogs);
    return;
  }

  var result = dogs.filter(function(dog) {
    if (!dog.temperament) return false;

    return dog.temperament.includes(value);
  });

  displayDogs(result);
});



document.getElementById("sort").addEventListener("change", function(e) {

  var sorted = dogs.slice();

  if (e.target.value === "az") {
    sorted.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    });
  }

  displayDogs(sorted);
});



document.getElementById("darkToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    this.innerText = "☀️";
  } else {
    this.innerText = "🌙";
  }
});