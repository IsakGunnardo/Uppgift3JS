//
toDoMain();


/// använda BOOL för att checka av o an /////
function toDoMain() {
    let inputElem,
        category,
        addbtn,
        ulElem,
        ulDone,
        bool;
    getElements();
    getListeners();


    function getElements() {

        inputElem = document.getElementById("input");
        category = document.getElementById("category");
        addbtn = document.getElementById("addBtn");
        ulDo = document.getElementsByTagName("ul")[0];
        ulDone = document.getElementsByTagName("ul")[1];


    }

    function getListeners() {
        addbtn.addEventListener("click", onChange, false);
  
    }

    function onChange(event) {
        let inputValue = inputElem.value;


        let inputValue2 = category.value



        bool == true
        
        //// skapar List element ////


        let liElem = document.createElement("li");
        liElem.classList.add("liElem")
        ulDo.appendChild(liElem);
        
        if(inputValue === "" || inputValue2 === ""){
            
            liElem.style.display ="none"
            alert("Du måste skriva något")
        }
        
     
/// lägger till en checkbox ///
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        liElem.appendChild(checkbox)
/// lägger till en title ///
        let title = document.createElement("span");
        title.classList.add("title")
        title.innerText = inputValue
        liElem.appendChild(title)
/// lägger till en kategori ///
        let categorytxt = document.createElement("span");
        categorytxt.classList.add("description");
        categorytxt.innerText = "Kategori: " + inputValue2;
        liElem.appendChild(categorytxt)
/// lägger till tid och datum ///
        let timeStamp = document.createElement("span");
        timeStamp.classList.add("timeStamp")
        liElem.appendChild(timeStamp)
        timeStamp.innerHTML = "<strong>Uppgift skapad:</strong> <br> " + dateTime();



    
/// om checkbox är checkad blir utgångn följande ///
         checkbox.addEventListener("change",() =>{

            if(checkbox.checked){
                title.classList.toggle("checked");
                categorytxt.classList.toggle("checked");
              liElem.classList.toggle("checkedcolor")
                timeStamp.innerHTML = "<strong>Uppgift slutförd:</strong> <br>" + dateTime()
                bool !== true
                title.innerText = "Färdig:  " + inputValue
                ulDone.appendChild(liElem)

            }else{
                title.classList.toggle("checked");
                categorytxt.classList.toggle("checked");
              liElem.classList.toggle("checkedcolor")

        timeStamp.innerHTML = "<strong>Uppgift skapad:</strong> <br> " + dateTime();
                bool == true
                title.innerText = inputValue
                ulDo.appendChild(liElem)

            }
        });



        let deleteLi = document.createElement("span");// raderar LIelement
        deleteLi.classList.add("delete")
        deleteLi.innerText = "  🗑️";
        liElem.appendChild(deleteLi);


        deleteLi.addEventListener("click", onClick, false)

        function onClick() {
            liElem.remove();
        }

    }
    
        function dateTime() {
            const now = new Date()
            let day = now.getDate().toString();
            let month = now.getMonth() + 1;
            let month2 = month.toString();
            let year = now.getFullYear();
            let currentDate = `${day}-${month2}-${year}`;

            const hoursAndMinutes = now.getHours() + ':' + now.getMinutes().toString();

            return "Datum: " + currentDate + " Tid: " + hoursAndMinutes;
        }
        inputValue = "";
        inputValue2= "";
    }


