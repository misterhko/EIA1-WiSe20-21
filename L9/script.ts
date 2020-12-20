// Vorgabe Eingabefeld
    const inputField: HTMLInputElement = (document.getElementById("text") as HTMLInputElement);

// Enter als Eingabe definieren
    inputField.addEventListener("keypress", function (event: KeyboardEvent): void {
        if (event.key == "Enter") {
            AufgabeErstellen();
            inputField.value = "";
        }
    });

// Aufgaben Zähler
    let aufgaben: number = 0;
    function Gesamtaufgaben(): void {
        document.getElementById("Gesamtaufgaben").innerText = aufgaben + " : 0 für die Faulheit!";
    }

// Aufgabe hinzufügen
    function AufgabeErstellen(): void {
        let myCheckbox: HTMLInputElement = document.createElement("input");
        myCheckbox.type = "checkbox";
        myCheckbox.className = "checkbox";

        let myLabel: HTMLLabelElement = document.createElement("label");
        myLabel.innerHTML = inputField.value;
        myLabel.className = "text";

        let deleteBtn: HTMLElement = document.createElement ("i");
        deleteBtn.className = "fas fa-trash-alt";

        let wrapper: HTMLDivElement = document.createElement ("div");

        document.getElementById("form").appendChild(wrapper);
        wrapper.appendChild(myCheckbox);
        wrapper.appendChild(myLabel);
        wrapper.appendChild(deleteBtn);

// Tasks löschen
        deleteBtn.addEventListener("click", function(): void {
            deleteText(deleteBtn, wrapper);
        });     
        aufgaben++;
        Gesamtaufgaben();
        }
    
// Funktion für Deletebutton
    function deleteText(deleteBtn: HTMLElement, wrapper: HTMLDivElement): void {
        wrapper.remove();
        aufgaben--;
        Gesamtaufgaben();
    }   