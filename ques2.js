function addItem() {

    const input = document.getElementById("itemInput");
    const value = input.value;

    if (value.trim() === "") {
        alert("Please enter an item");
        return;
    }

    const li = document.createElement("li");
    li.textContent = value;

    document.getElementById("itemList").appendChild(li);

    input.value = "";
}

function removeItem() {

    const list = document.getElementById("itemList");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }

}