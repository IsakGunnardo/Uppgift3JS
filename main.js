onload = todoMain;

function todoMain() {
  const DEFAULT_OPTION = "Välj en kategori";
  let inputElem,
    inputElem2,
    button,
    selectElem;




  getElements();
  addListeners();



  function getElements() {
    inputElem = document.getElementsByTagName("input")[0];//Kopplar inputen du skriver din to-do i
    inputElem2 = document.getElementsByTagName("input")[1]; // kopplar inputen du skriver kategori i 
    button = document.getElementById("addBtn"); // kopplar knappen till inputsen
    selectElem = document.getElementById("categoryFilter") //kategori filter där man kan välja kategori
    dateElem = document.getElementById("time");
  }

  function addListeners() {
    button.addEventListener("click", addEntry, false);//gör så att button lägger till innehållet i inputsen
    selectElem.addEventListener("change", filterEntries)//gör så att select knappen går att ändra kategori
  }

  function addEntry(event) {

    let inputValue = inputElem.value;//kopplar input för todo värdet
    inputElem.value = "";

    let inputValue2 = inputElem2.value;//kopplar input för kategori värdet
    inputElem2.value = "";

    // lägger till en ny rad

    let table = document.getElementById("todoTable");

    let trElem = document.createElement("tr");
    table.appendChild(trElem);





    // skapar checkbox cellen
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "checkbox";
    checkboxElem.addEventListener("click", done);
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);


        //skapar datum cell
        let dateElem = document.createElement("td");
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let datedisplay = month + '-' + day + '-' + year
        dateElem.innerText = datedisplay;
        trElem.appendChild(dateElem)
        console.log(currentDate)
    
        if(checkboxElem == dateElem){
          dateElem.innerText = datedisplay;
        }
    // to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);

    // kategori cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    trElem.appendChild(tdElem3);

    // "remove" cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem4 = document.createElement("td");
    tdElem4.appendChild(spanElem);
    trElem.appendChild(tdElem4);

      updateSelectOptions();

    function deleteItem() {
      trElem.remove();
      updateSelectOptions();

    }

    function done() {
      trElem.classList.toggle("strike");
    }

  }

  function filterEntries() {

    let rows = document.getElementsByTagName("tr");

    let selection = selectElem.value;
    if (selection == DEFAULT_OPTION) {
      let rows = document.getElementsByTagName("tr");

      Array.from(rows).forEach((row, index) => {
        row.style.display = "";

      });
    } else {
      Array.from(rows).forEach((row, index) => {
        if (index == 0) {
          return;
        }
        let category = row.getElementsByTagName("td")[2].innerText;
        if (category == selectElem.value) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    }



  }


    function updateSelectOptions(){

      let options = [];
    let rows = document.getElementsByTagName("tr");
    Array.from(rows).forEach((row, index) => {
      if (index == 0) {
        return;
      }
      let category = row.getElementsByTagName("td")[2].innerText;

      //if(!option.includes(category)){
        options.push(category)


      //}
    });

    let optionsSet = new Set(options);


      //empty the select options
      selectElem.innerHTML = "";

      let newOptionElem = document.createElement("option");
      newOptionElem.value = DEFAULT_OPTION;
      newOptionElem.innerText = DEFAULT_OPTION;
      selectElem.appendChild(newOptionElem);

      for(let option of optionsSet){
        let newOptionElem = document.createElement("option");
        newOptionElem.value = option;
        newOptionElem.innerText = option;
        selectElem.appendChild(newOptionElem);
      };
      }


       



    
}



