toDoMain();


/// function med allt innehåll ///
function toDoMain() {
    let inputElem,
        category,
        addbtn,
        ulDone,
        bool;
    getElements();
    getListeners();




    //Hämtar element som är hårdkodade//
    function getElements() {

        inputElem = document.getElementById("input");
        category = document.getElementById("category");
        addbtn = document.getElementById("addBtn");
        ulDo = document.getElementsByTagName("ul")[0];
        ulDone = document.getElementsByTagName("ul")[1];

    }


    // där jag har listeners //
    function getListeners() {
        addbtn.addEventListener("click", onChange, false);
        inputElem.value = "";
        category.value = "";

    }



    //funktionen som skapar li element//
    function onChange(event) {

        let inputValue = inputElem.value;
        let inputValue2 = category.value

        inputElem.value = "";
        category.value = "";
        let allinput = inputValue + " " + inputValue2;//testar localStorage
        bool == true

        //// skapar List element ////


        let liElem = document.createElement("li");
        liElem.classList.add("liElem")
        ulDo.appendChild(liElem);

        if (inputValue === "" || inputValue2 === "") {

            liElem.style.display = "none"
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
        timeStamp.innerHTML = "<strong>Uppgift skapad:</strong> <br> " + dateTime();//Lägger till när uppgiften är skapad



        /// om checkbox är checkad blir utgångn följande ///
        checkbox.addEventListener("change", () => {

            if (checkbox.checked) {
                title.classList.toggle("checked");
                categorytxt.classList.toggle("checked");
                liElem.classList.toggle("checkedcolor")
                timeStamp.innerHTML = "<strong>Uppgift slutförd:</strong> <br>" + dateTime()//lägger till när uppgiften är slutförd
                bool !== true
                title.innerText = "Färdig:  " + inputValue
                ulDone.appendChild(liElem)

            } else {
                title.classList.toggle("checked");
                categorytxt.classList.toggle("checked");
                liElem.classList.toggle("checkedcolor")

                timeStamp.innerHTML = "<strong>Uppgift skapad:</strong> <br> " + dateTime();//lägger till när uppgiften är återskapad
                bool === true
                title.innerText = inputValue
                ulDo.appendChild(liElem)

            }
        });


        /// som lägger till en delete knapp ///

        let deleteLi = document.createElement("span");
        deleteLi.classList.add("delete")
        deleteLi.innerText = "  🗑️";
        liElem.appendChild(deleteLi);


        /// eventListener som raderar liElem ///
        deleteLi.addEventListener("click", onClick, false)

        function onClick() {
            liElem.remove();
        }


    }

    /// funktion som visar tid och datum //
    function dateTime() {
        const now = new Date()
        let day = now.getDate().toString().padStart(2, "0");
        let month = now.getMonth() + 1;
        let month2 = month.toString().padStart(2, "0");
        let year = now.getFullYear();
        let currentDate = `${day}-${month2}-${year}`;

        const hoursAndMinutes = now.getHours() + ':' + now.getMinutes().toString().padStart(2, "0");

        return "Datum: " + currentDate + " Tid: " + hoursAndMinutes;

    }


}

