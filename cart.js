let cartContainer =
document.getElementById("cart-container");

let totalElement =
document.getElementById("total");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

    cartContainer.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartContainer.innerHTML =
        "<h1>Cart is Empty 😢</h1>";

        totalElement.innerText =
        "Total : ₹0";

        return;
    }

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartContainer.innerHTML += `

        <div class="cart-card">

            <img src="${item.image}">

            <h2>${item.name}</h2>

            <h3>₹${item.price}</h3>

            <p>Quantity : ${item.quantity}</p>

            <button onclick="increase(${index})">
            +
            </button>

            <button onclick="decrease(${index})">
            -
            </button>

            <button onclick="removeItem(${index})">
            Remove
            </button>

        </div>

        `;
    });

    totalElement.innerText =
    "Total : ₹" + total;
}

function increase(index){

    cart[index].quantity++;

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    displayCart();
}

function decrease(index){

    if(cart[index].quantity > 1){

        cart[index].quantity--;
    }

    else{

        cart.splice(index,1);
    }

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    displayCart();
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    displayCart();
}

displayCart();