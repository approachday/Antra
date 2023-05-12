const API = (() => {
  const URL = "http://localhost:3000";
  const getCart = () => {
    // define your method to get cart data
    return fetch(`${URL}/cart`).then((response) => response.json());
  };

  const getInventory = () => {
    // define your method to get inventory data
    return fetch(`${URL}/inventory`).then((response) => response.json());
  };

  const addToCart = (inventoryItem) => {
    // define your method to add an item to cart
    return fetch(`${URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inventoryItem),
    }).then((response) => response.json());
  };

  const updateCart = (id, newAmount) => {
    // define your method to update an item in cart
    return fetch(`${URL}/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: newAmount }),
    }).then((response) => response.json());
  };

  const deleteFromCart = (id) => {
    // define your method to delete an item in cart
    return fetch(`${URL}/cart/${id}`, {
      method: "DELETE",
    }).then((response) => response.json());
  };

  const checkout = () => {
    // you don't need to add anything here
    return getCart().then((data) =>
      Promise.all(data.map((item) => deleteFromCart(item.id)))
    );
  };

  return {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const Model = (() => {
  // implement your logic for Model
  class State {
    #onChange;
    #inventory;
    #cart;
    constructor() {
      this.#inventory = [];
      this.#cart = [];
    }
    get cart() {
      return this.#cart;
    }

    get inventory() {
      return this.#inventory;
    }

    set cart(newCart) {
      this.#cart = newCart;
      this.#onChange();
    }
    set inventory(newInventory) {
      this.#inventory = newInventory;
      this.#onChange();
    }

    subscribe(cb) {
      this.#onChange = cb;
    }
  }
  const {
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  } = API;
  return {
    State,
    getCart,
    updateCart,
    getInventory,
    addToCart,
    deleteFromCart,
    checkout,
  };
})();

const View = (() => {

  const inventoryContainer = document.querySelector(".inventory-container ul");
  const cartContainer = document.querySelector(".cart-container ul");
  const checkoutButton = document.querySelector(".checkout-btn");

  const renderInventory = (inventory) => {
    let inventoryList = "";
    inventory.forEach((item) => {
      const listItem = `<li>
          <span>${item.name}</span>
          <button class="addCart" data-id="${item.id}">Add to Cart</button>
        </li>`;
      inventoryList += listItem;
    });
    inventoryContainer.innerHTML = inventoryList;
  };

  const renderCart = (cart) => {
    let cartList = "";
    cart.forEach((item) => {
      const listItem = `<li>
          <span>${item.name}</span>
          <button class="delete" data-id="${item.id}">Remove</button>
        </li>`;
      cartList += listItem;
    });
    cartContainer.innerHTML = cartList;
  };
  return {
    renderInventory,
    renderCart,
    checkoutButton,};
})();

const Controller = ((model, view) => {
  // implement your logic for Controller
  const state = new model.State();

  const init = () => {
    model.getInventory().then((inventory) => {
      state.inventory = inventory;
    });

    model.getCart().then((cart) => {
      state.cart = cart;
    });
  };
  const handleUpdateAmount = () => {
    const inventoryContainer = document.querySelector(".inventory-container ul");

    inventoryContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("minus")) {
        const amountEl = event.target.nextElementSibling;
        const newAmount = parseInt(amountEl.textContent) - 1;
        if (newAmount >= 0) {
          amountEl.textContent = newAmount;
        }
      }

      if (event.target.classList.contains("plus")) {
        const amountEl = event.target.previousElementSibling;
        const newAmount = parseInt(amountEl.textContent) + 1;
        amountEl.textContent = newAmount;
      }
    });
  };

  const handleAddToCart = () => {
    const inventoryContainer = document.querySelector(".inventory-container ul");
    inventoryContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("addCart")) {
        const listItem = event.target.parentNode;
        const itemName = listItem.firstChild.textContent;
        const itemAmount = parseInt(listItem.childNodes[3].textContent);
  
        const cartItem = {
          name: itemName,
          amount: itemAmount
        };
  
        model.addToCart(cartItem).then((addedItem) => {
          state.cart = [...state.cart, addedItem];
        });
      }
    });
  };

  const handleDelete = () => {
    const cartContainer = document.querySelector(".cart-container ul");

    cartContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete")) {
        const listItem = event.target.parentNode;
        listItem.remove();
      }
    });
  };

  const handleCheckout = () => {
    const checkoutButton = document.querySelector(".cart-wrapper .checkout-btn");

    checkoutButton.addEventListener("click", () => {
      const cartList = document.querySelector(".cart-container ul");
      cartList.innerHTML = "";
    });
  };
  
  const bootstrap = () => {
    handleUpdateAmount();
    handleAddToCart();
    handleDelete();
    handleCheckout();
  };
  return {
    bootstrap,
  };
})(Model, View);

Controller.bootstrap();
