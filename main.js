todoMain();

function todoMain(){

  let inputElem,
      ulElem;

  getElements();
  addListeners();

  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    ulElem = document.getElementsByTagName("ul")[0];
  }

  function addListeners(){
      inputElem.addEventListener("change", onChange,
      false);
  }


  function onChange(){
    let inputValue = inputElem.value;


    inputElem.value = "";

    let liElem = document.createElement("li");

    liElem.innerHTML = inputValue + ' <i class="fa-sharp fa-solid fa-trash"></i>';

    liElem.addEventListener("dblclick", onDblclick, false);

    ulElem.appendChild(liElem)

    function onDblclick(){
        this.remove();
    }
  }

}