class ShoppingList {
  constructor(
    itemsSelector,
    addItemButtonSelector,
    newItemTextSelector,
    storageKey = "shoppingList"
  ) {
    this.storageKey = storageKey;
    this.itemsElement = document.querySelector(itemsSelector);
    this.addItemButtonElement = document.querySelector(addItemButtonSelector);
    this.newItemTextElement = document.querySelector(newItemTextSelector);

    this.items = JSON.parse(localStorage.getItem(this.storageKey)) || [];

    this.initialise();
  }

  initialise() {
    this.addItemButtonElement.addEventListener("click", () => {
      const value = this.newItemTextElement.value;
      this.addItem(value);
      this.newItemTextElement.value = "";
      this.renderItems();
      this.storeItems();
    });
  }

  renderItems() {
    this.itemsElement.innerHTML = "";
    if (this.items.length === 0) {
      const itemElement = document.createElement("li");
      itemElement.textContent = "No Items";
      this.itemsElement.appendChild(itemElement);
    }

    this.items.forEach((item, index) => {
      const itemElement = document.createElement("li");
      itemElement.textContent = item[0].toUpperCase() + item.slice(1);

      const removeItem = document.createElement("span");
      removeItem.textContent = "Remove";
      removeItem.classList.add("remove-item");

      itemElement.appendChild(removeItem);
      this.itemsElement.appendChild(itemElement);

      removeItem.onclick = () => {
        this.removeItemAt(index);
        this.renderItems();
        this.storeItems();
      };
    });
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItemAt(indexToRemove) {
    this.items = this.items.filter((item, index) => indexToRemove != index);
  }

  storeItems() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }
}

const myShoppingList = new ShoppingList(
  "#shoppingListItems",
  "#addItem",
  "#newItemText"
);

myShoppingList.renderItems();
