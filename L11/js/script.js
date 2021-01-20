var Aufgabe11;
(function (Aufgabe11) {
    // Variable: alle Objekte werden hier erstellt (Interface)
    var todosArray = [
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
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    // Aufgabe 11 Variablen
    var doneDOMElement;
    var openDOMElement;
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        function startContinuousArtyom() {
            artyom.fatality();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function () {
                    console.log("Bereit!");
                });
            }, 250);
        }
        startContinuousArtyom();
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                todosArray.unshift({
                    text: wildcard,
                    checked: false
                });
                drawListToDOM();
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Deine Aufgabe" + wildcard + " wurde ergänzt");
            }
        });
        document.querySelector("#record").addEventListener("click", function () {
            console.log("EventListener geht");
            artyom.say("Spracheingabe aktiviert");
            startContinuousArtyom();
        });
    });
    window.addEventListener("load", function () {
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
    function drawListToDOM() {
        // Todos löschen
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            /**
             * Neues DIV-Element erstellen
             */
            var todo = document.createElement("div");
            todo.classList.add("todo");
            /**
             * Alle HTML Elemente als HTML Zeichenkette anlegen.
             */
            todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosArray[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            //Event Listener für Check und Trash
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            // Todo in DOM rendern
            todosDOMElement.appendChild(todo);
        };
        // ToDo-Array starten
        for (var index = 0; index < todosArray.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    function updateCounter() {
        //If-Else für Zähler
        var openNumber = 0;
        var doneNumber = 0;
        for (var index = 0; index < todosArray.length; index++) {
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
    function addTodo() {
        if (inputDOMElement.value != "") {
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        todosArray[index].checked = !todosArray[index].checked;
        drawListToDOM();
    }
    function deleteTodo(index) {
        todosArray.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map