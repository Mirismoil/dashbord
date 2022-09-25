import dataBase from './data.js'

let data = dataBase;


const body = document.body;
const trBody = body.querySelector(".tr__body");
let searchInput = document.body.querySelector(".search1");

if (data.length > 0) {
  render(data)
}

function render(data) {
  trBody.textContent = "";

  for (let i = 0; i < data.length; i++) {
    let newTr = document.createElement("tr");
    let newTd = document.createElement("td");

    newTd.className = "table-body";

    // 1
    let newImg = document.createElement("img");
    newImg.src = data[i].ava;
    newImg.className = "table-body__img";

    // 2
    let newDiv = document.createElement("div");
    newDiv.className = "span1";

    // 3
    let newspan = document.createElement("span");
    newspan.className = "span1-span1";
    newspan.textContent = data[i].name;
    // 4
    let newspan1 = document.createElement("span");
    newspan1.className = "tablet2__span1";
    newspan1.textContent = data[i].address;
    // 5<div class="span1"></div>
    let newTd2 = document.createElement("td");
    // 6
    let newTablet2 = document.createElement("div");
    newTablet2.className = "tablet2";
    // 7
    let newSpan = document.createElement("span");
    newSpan.className = "tablet2__span";
    newSpan.textContent = data[i].date_of_onliine;

    let newSpan1 = document.createElement("span");
    newSpan1.textContent = data[i].date_of_register;
    newSpan1.className = "tablet2__span1";
    // let div = document.createElement("div");
    // div.classList =(`d-flex justify-content-between`)
    let newTabl = document.createElement("td");
    let newDiv1 = document.createElement("div");
    newDiv1.className = "tablet2";

    let spanTop = document.createElement("span");
    spanTop.className = "tablet2__span";
    spanTop.textContent = data[i].company;
    let spanTop1 = document.createElement("span");
    spanTop1.className = "tablet2__span1";
    spanTop1.textContent = data[i].time;

    let newtd3 = document.createElement("td");
    let buttun1 = document.createElement("button");

    // buttun1.className = "btn btn-outline-danger";
    buttun1.textContent = data[i].priority;
    if (data[i].priority === "high") {
      buttun1.classList.add("btn", "btn-outline-danger");
    } else if (data[i].priority === "normal") {
      buttun1.classList.add("btn", "btn-outline-success");
    } else {
      buttun1.classList.add("btn", "btn-outline-warning");
    }
    let newtd4 = document.createElement("td");

    newTd.append(newImg, newDiv);
    newDiv.append(newspan, newspan1);
    newTd2.append(newTablet2);
    newTablet2.append(newSpan, newSpan1);
    newTabl.append(newDiv1);
    newDiv1.append(spanTop, spanTop1);
    newtd3.append(buttun1);
    newTr.append(newTd, newTd2, newTabl, newtd3);

    trBody.append(newTr);
  }

  // seorch
}
render(data);


const sorted = body.querySelector('#sort');

sorted.addEventListener('change', (e) => {
  const sortingType = e.target.value;
  let newData;
  if (sortingType == 'a-z') {
    console.log('A->Z');
    newData = [...data].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
      return 0;
    })
  } else if (sortingType == 'z-a') {
    console.log('Z->A');
    newData = [...data].sort((b, a) => {
      if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase())
        return 1;
      return 0;
    })
  } else {
    newData = data;
  }

  render(newData)
})

let filtir = body.querySelector(".filtir");
filtir.addEventListener("change", (e) => {
  const filterType = e.target.value;
  let newData;
  if (filterType === "high") {
    newData = [...data].filter((el) => {
      return el.priority === "high";
    });
  } else if (filterType === "normal") {
    newData = [...data].filter((el) => {
      return el.priority === "normal";
    });
  } else if (filterType === "low") {
    newData = [...data].filter((el) => {
      return el.priority === "low";
    });
  } else {
    newData = data;
  }

  render(newData)
});

// searchInput.addEventListener("input", (event) => {
//   let keyword = event.target.value.trim().toLowerCase();

//   let foundTasks = data.filter((element) => {
//     if (element.task.toLowerCase().includes(keyword)) {
//       return element;
//     }
//   });
//   render(foundTasks);
// });
searchInput.addEventListener('input', (e) => {
  const searchType = e.target.value.trim().toLowerCase();

  let newData;

  newData = [...data].filter((el) => {
    if (el.name.toLowerCase().includes(searchType)) return el;
  })

  render(newData)
})

