// Function to create a new li element with delete and edit buttons
function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const deleteButton = createDeleteButton(li);
    const editButton = createEditButton(li);
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    return li;
}
// Function to create a delete button and its functionality
function createDeleteButton(listItem) {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        listItem.remove();
    });

    return deleteButton;
}
// Function to create an edit button and its functionality
function createEditButton(listItem) 
{
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
        const editText = prompt("Edit the text:", listItem.textContent);
        if (editText !== null) {
            listItem.textContent = editText;
        }
    });

    return editButton;
}
// Function to add a new list item on button click
function addNewItem() 
{
    const text = prompt("Enter the text for the new item:");
    if (text) 
    {
        const newListElement = createListItem(text);
        document.getElementById("myList").appendChild(newListElement);
    }
}
document.getElementById("addButton").addEventListener("click", addNewItem);
