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
        
        parent.appendChild(mainWrapper);
    }

    add(item) {
        this.items.push(item);
    }
}

