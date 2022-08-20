let elForm = document.querySelector(".js-form");
let elFormName = elForm.querySelector(".js-name-input");
let elFormLastName = elForm.querySelector(".js-lastname-input");
let elFormRelative = elForm.querySelector(".js-relative-input");
let elFormPhone = elForm.querySelector(".js-phone-input");

let elFormContentList = document.querySelector(".fs-form-text-list");

let formTextListArr = [];

function createObject(name, lastName, relative, phone) {
    return {
        name,
        lastName,
        relative,
        phone
    }
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    formTextListArr.push(createObject(elFormName.value, elFormLastName.value, elFormRelative.value, elFormPhone.value))
        
    elFormName.value = "";
    elFormLastName.value = "";
    elFormRelative.value = "";
    elFormPhone.value = "";

    elFormContentList.innerHTML = "";
    for (let i = 0; i < formTextListArr.length; i++) {
        let elItem = document.createElement("li");
        elItem.setAttribute("class", "list-group-item list-group-item-info text-secondary d-flex justify-content-between align-items-center js-list-item");

        let elItemNameSpan = document.createElement("span");
        elItemNameSpan.setAttribute("class", "name-span");
        elItemNameSpan.textContent = formTextListArr[i].name;

        let elItemLastNameSpan = document.createElement("span");
        elItemLastNameSpan.setAttribute("class", "lastname-span");
        elItemLastNameSpan.textContent = formTextListArr[i].lastName;

        let elItemRelativeSpan = document.createElement("span");
        elItemRelativeSpan.setAttribute("class", "relative-span");
        elItemRelativeSpan.textContent = formTextListArr[i].relative;

        let elItemlink = document.createElement("a");
        elItemlink.setAttribute("class", "phone-link");
        elItemlink.href = "tel: +998901824946";
        elItemlink.textContent = formTextListArr[i].phone;

        let elItemDelete = document.createElement("button");
        elItemDelete.setAttribute("class", "btn btn-danger js-delete-btn");
        elItemDelete.type = "button"
        elItemDelete.textContent = "DELETE"

        elItem.append(elItemNameSpan, elItemLastNameSpan, elItemRelativeSpan, elItemlink, elItemDelete)
        elFormContentList.appendChild(elItem);

    }

    let elDeleteItems = document.querySelectorAll(".js-delete-btn");
    let elListItems = document.querySelectorAll(".js-list-item"); 
    
    function removeItem() {
    
        for(let i = 0; i < elDeleteItems.length; i++) {
            elDeleteItems[i].addEventListener("click", function () {
                elFormContentList.removeChild(elListItems[i]);
                let arrIndex = formTextListArr.indexOf(formTextListArr[i]);
                
                formTextListArr.splice(arrIndex,1)
                console.log(formTextListArr);
            })
        }
        
        console.log(elListItems);
        console.log(formTextListArr);
    }
    
    removeItem()

});









