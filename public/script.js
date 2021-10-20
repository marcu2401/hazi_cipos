$(document).ready(function () {
    async function start() {
        const response = await fetch('/cipo.json');
        const shoes = await response.json();

        let shoesHTML = "<h1>Cipők</h1>";
        for (shoe of shoes) {
            if (shoe.tipus === "noi")
                shoesHTML += `<div class="card" style="width: 240;">
                <img class="card-img-top" src="../images/noicipo.jpg" alt="${shoe.tipus}">
                <div class="card-body">
                  <h5 class="card-title">${shoe.leiras}</h5>
                  <p class="card-text">${shoe.gyarto}</p>
                  <a href="${shoe.honlap}" class="btn btn-primary">A gyártó honlapja</a>
                </div>
              </div>`;
            else {
                shoesHTML += `<div class="card" style="width: 240;">
                <img class="card-img-top" src="../images/ferficipo.jpg" alt="${shoe.tipus}">
                <div class="card-body">
                  <h5 class="card-title">${shoe.leiras}</h5>
                  <p class="card-text">${shoe.gyarto}</p>
                  <a href="${shoe.honlap}" class="btn btn-primary">A gyártó honlapja</a>
                </div>
              </div>`;

            }
        }
        document.getElementsByClassName("container").innerHTML = shoesHTML;
    }
    start();
});