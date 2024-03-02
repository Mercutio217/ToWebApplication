class ToDoList {
    #listElement = document.createElement("ul");
    #addButtonElement = document.createElement("button");
    #newItemTextElement = document.createElement("textarea");


    items;

    constructor(parent) {
        const mainWrapper = document.createElement("div");
        mainWrapper.classList.add("todo");

        this.#listElement.classList.add("todo-list");
        mainWrapper.appendChild(this.#listElement);

        const footerElement = document.createElement('div');
        footerElement.classList.add('todo-footer');

        footerElement.appendChild(this.#newItemTextElement);
        footerElement.appendChild(this.#addButtonElement);

        this.#addButtonElement.textContent = "Dodaj";
        mainWrapper.appendChild(footerElement);
        this.#addButtonElement.addEventListener("click", (event) => {
            this.add();
        })
        parent.appendChild(mainWrapper);


    }

    add() {
        const itemWrapper = document.createElement("li");
        itemWrapper.classList.add("todo-item");

        const check = document.createElement('input');
        check.type = "checkbox";

        check.addEventListener("change", () => {
            itemWrapper.classList.toggle("todo-item-done")
        })
        const text = document.createElement("div");
        text.textContent = this.#newItemTextElement.value;
        text.classList.add("todo-item-text");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Usuń";

        deleteButton.addEventListener("click", () => {
            this.#listElement.removeChild(itemWrapper);
        })
        const editButton = document.createElement("button");
        editButton.textContent = "Edycja";
        editButton.addEventListener("click", () => {
            const textEdit = document.createElement("textarea");
            textEdit.value = text.textContent;
            check.after(textEdit);
        })
        itemWrapper.appendChild(check);
        itemWrapper.appendChild(text);
        itemWrapper.appendChild(deleteButton);
        itemWrapper.appendChild(editButton);
        this.#listElement.appendChild(itemWrapper);        
    }
}

