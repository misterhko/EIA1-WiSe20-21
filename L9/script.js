// Vorgabe Eingabefeld
var inputField = document.getElementById("text");
// Enter als Eingabe definieren
inputField.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        AufgabeErstellen();
        inputField.value = "";
    }
});
// Aufgaben Zähler
var aufgaben = 0;
function total() {
    document.getElementById("total").innerText = aufgaben + " : 0 für die Faulheit!";
}
// Aufgabe hinzufügen
function AufgabeErstellen() {
    var myCheckbox = document.createElement("input");
    myCheckbox.type = "checkbox";
    myCheckbox.className = "checkbox";
    var myLabel = document.createElement("label");
    myLabel.innerHTML = inputField.value;
    myLabel.className = "text";
    var deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash-alt";
    var wrapper = document.createElement("div");
    document.getElementById("form").appendChild(wrapper);
    wrapper.appendChild(myCheckbox);
    wrapper.appendChild(myLabel);
    wrapper.appendChild(deleteBtn);
    // Tasks löschen
    deleteBtn.addEventListener("click", function () {
        deleteText(deleteBtn, wrapper);
    });
    aufgaben++;
    total();
}
// Funktion für Deletebutton
function deleteText(deleteBtn, wrapper) {
    wrapper.remove();
    aufgaben--;
    total();
}
//# sourceMappingURL=script.js.map