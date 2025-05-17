//Create three variables that hold references to the list (<ul>), <input>, and <button> elements.

const mainList = document.querySelector("ul");
const inputElement = document.querySelector("input");
const btn = document.querySelector("button");


// Create a function that will run in response to the button being clicked.

btn.addEventListener('click', () => {
    const inputValue = inputElement.value;
    inputElement.value = '';

    const listItem = document.createElement("li");
    const listSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";

    listItem.appendChild(listSpan);
    listItem.appendChild(deleteButton);
    listSpan.textContent = inputValue;
    mainList.appendChild(listItem);
    deleteButton.addEventListener("click", () => {
        mainList.removeChild(listItem);
    });
})

btn.addEventListener("click", () => {
    inputElement.focus();
});

btn.addEventListener("click", populateList());
