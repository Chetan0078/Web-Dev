document.addEventListener("DOMContentLoaded", () => {
    let noteText = document.getElementById("note-text");
    let addNoteButton = document.getElementById("add-note");
    let notesList = document.getElementById("notes-list");

    let createNoteElement = (text, pinned = false) => {
        let noteDiv = document.createElement("div");
        noteDiv.className = "note";
        if (pinned) {
            noteDiv.classList.add("pinned");
        }

        let noteP = document.createElement("p");
        noteP.textContent = text;

        let noteButtonsDiv = document.createElement("div");
        noteButtonsDiv.className = "note-buttons";

        let pinButton = document.createElement("button");
        pinButton.className = "pin";
        pinButton.textContent = "Pin";
        pinButton.addEventListener("click", () => {
            noteDiv.classList.toggle("pinned");
            notesList.prepend(noteDiv);
        });

        let editButton = document.createElement("button");
        editButton.className = "edit";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            let newText = prompt("Edit your note:", text);
            if (newText) {
                noteP.textContent = newText;
            }
        });

        let deleteButton = document.createElement("button");
        deleteButton.className = "delete";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            notesList.removeChild(noteDiv);
        });

        noteButtonsDiv.appendChild(pinButton);
        noteButtonsDiv.appendChild(editButton);
        noteButtonsDiv.appendChild(deleteButton);

        noteDiv.appendChild(noteP);
        noteDiv.appendChild(noteButtonsDiv);

        return noteDiv;
    };

    addNoteButton.addEventListener("click", () => {
        let text = noteText.value.trim();
        if (text) {
            let noteElement = createNoteElement(text);
            notesList.appendChild(noteElement);
            noteText.value = "";
        }
    });
});