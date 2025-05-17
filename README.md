# dynamic_shopping_list
A dynamic shopping list to practice DOM manipulation with events and methods
# Components of the shopping list and Functionality
* Inside the function body, start off by storing the current value of the input element in a variable.
* Next, empty the input element by setting its value to an empty string — ''.
* Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
* Append the span and the button as children of the list item.
* Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
* Append the list item as a child of the list
* Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
* Finally, use the focus() method to focus the input element ready for entering the next shopping list item.