console.log("JS WORKING ✅");

var dogs = [];


function fetchDogs() {
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

      dogs = data.slice(0, 200);
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
    container.innerHTML = "<h2>No breeds found</h2>";
    return;
  }

  for (var i = 0; i < data.length; i++) {
    var dog = data[i];

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
  }
}


document.getElementById("search").addEventListener("input", function(e) {
  var value = e.target.value.toLowerCase();
  var result = [];

  for (var i = 0; i < dogs.length; i++) {
    if (dogs[i].name.toLowerCase().includes(value)) {
      result.push(dogs[i]);
    }
  }

  displayDogs(result);
});


document.getElementById("darkToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    this.innerText = "☀️";
  } else {
    this.innerText = "🌙";
  }
});