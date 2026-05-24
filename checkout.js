let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

let checkoutItems =
document.getElementById(
"checkout-items"
);

let totalElement =
document.getElementById(
"checkout-total"
);

let total = 0;

// SHOW PRODUCTS

cart.forEach(product => {

    total +=
    product.price * product.quantity;

    checkoutItems.innerHTML += `

    <div class="checkout-item">

        <img src="${product.image}">

        <div>

            <h4>${product.name}</h4>

            <p>
            ₹${product.price}
            </p>

            <p>
            Quantity :
            ${product.quantity}
            </p>

        </div>

    </div>
    `;
});

// TOTAL

totalElement.innerText =
`Total : ₹${total}`;

// PLACE ORDER

function placeOrder(){

    alert(
    "Order Placed Successfully 🎉"
    );

    localStorage.removeItem(
    "cart"
    );

    window.location.href =
    "index.html";
}