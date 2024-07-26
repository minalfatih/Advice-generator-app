let btn = document.querySelector(".btn");

btn.onclick = function () {
  fetchData();
};

async function fetchData() {
  try {
    let dataFile = await fetch("https://api.adviceslip.com/advice")
    // let dataFile = await fetch("./data.json");
    let data = await dataFile.json();
    let id = document.getElementById("id");
    id.textContent = data.slip.id;
    let text = document.querySelector(".text p");
    text.textContent = `"${data.slip.advice}"`;
  } catch {
    console.log("data not found");
  }
}

fetchData();
