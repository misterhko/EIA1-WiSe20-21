namespace Aufgabe11 {

    // Interface für die Arrays
    interface TodoInterface {
        text: string;
        checked: boolean;
    }

    // Variable: alle Objekte werden hier erstellt (Interface)
    let todosArray: TodoInterface[] = [
        {
            text: "EIA machen",
            checked: true
        },
        {
            text: "Rick Rolls verbreiten",
            checked: false
        },
        {
            text: "FFP2 Masken kaufen",
            checked: false
        }

    ];

    // Variablen für HTMLElemente
    let inputDOMElement: HTMLInputElement;
    let addButtonDOMElement: HTMLElement;
    let todosDOMElement: HTMLElement;
    let counterDOMElement: HTMLElement;
    // Aufgabe 11 Variablen
    let doneDOMElement: HTMLElement;
    let openDOMElement: HTMLElement;

    //Spracheingabe Artyom
    declare var Artyom: any;

    window.addEventListener("load", function (): void {
        const artyom: any = new Artyom();

        function startContinuousArtyom(): void {
            artyom.fatality();

            setTimeout(
                function (): void {
                    artyom.initialize({
                        lang: "de-DE",
                        continuous: true,
                        listen: true,
                        interimResults: true,
                        debug: true
                    }).then(function (): void {
                        console.log("Bereit!");
                    });
                },
                250);
        }

        startContinuousArtyom();

        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i: any, wildcard: string): void { //wildcard: Spracheingabe als Todo-Aufgabe
                todosArray.unshift({
                    text: wildcard,
                    checked: false
                });

                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
            }
        });
        document.querySelector("#record").addEventListener("click", function (): void {
            console.log("EventListener geht");
            artyom.say("Spracheingabe aktiviert");
            startContinuousArtyom();
        });
        });

    window.addEventListener("load", function (): void {

        /**
         * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
         * in ihre Variablen gespeichert werden, um später auf sie 
         * zugreifen zu können
         */
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        // Aufgabe 11: neue HTMLElemente für done/open Event-Listener
        doneDOMElement = document.querySelector("#done");
        openDOMElement = document.querySelector("#open");
        /**
         * Event Listener für DOM
         */
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });

    function drawListToDOM(): void {
        // Todos löschen
        todosDOMElement.innerHTML = "";

        // ToDo-Array starten
        for (let index: number = 0; index < todosArray.length; index++) {

            /**
             * Neues DIV-Element erstellen 
             */
            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");

            /**
             * Alle HTML Elemente als HTML Zeichenkette anlegen.
             */
            todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosArray[index].text +
                "<span class='trash fas fa-trash-alt'></span>";

            //Event Listener für Check und Trash
            todo.querySelector(".check").addEventListener("click", function (): void {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function (): void {
                deleteTodo(index);
            });

            // Todo in DOM rendern
            todosDOMElement.appendChild(todo);
        }

        updateCounter();
    }

    function updateCounter(): void {
        //If-Else für Zähler
        let openNumber: number = 0;
        let doneNumber: number = 0;

        for (let index: number = 0; index < todosArray.length; index++) {
            if (todosArray[index].checked == false) {
                openNumber++;
            }
            else {
                doneNumber++;
            }
        }

        openDOMElement.innerHTML = openNumber + " open";
        doneDOMElement.innerHTML = doneNumber + " done";

        counterDOMElement.innerHTML = todosArray.length + " in total";
    }


    function addTodo(): void {

        if (inputDOMElement.value != "") {
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }

    function toggleCheckState(index: number): void {
        todosArray[index].checked = !todosArray[index].checked;
        drawListToDOM();
    }

    function deleteTodo(index: number): void {
        todosArray.splice(index, 1);
        drawListToDOM();
    }
}