let cart = JSON.parse(
localStorage.getItem("cart")
) || [];

// UPDATE CART COUNT

updateCartCount();

// ADD TO CART

function addToCart(name,price,image){

    let product = {

        name: name,
        price: price,
        image: image,
        quantity: 1
    };

    cart.push(product);

    localStorage.setItem(
    "cart",
    JSON.stringify(cart)
    );

    updateCartCount();

    showToast();
}

// UPDATE COUNT

function updateCartCount(){

    let cartCount =
    document.getElementById(
    "cart-count"
    );

    if(cartCount){

        cartCount.innerText =
        cart.length;
    }
}

// DARK MODE

function darkMode(){

    document.body.classList.toggle(
    "dark"
    );
}

// SEARCH PRODUCT

function searchProduct(){

    let input =
    document.getElementById(
    "search"
    ).value.toLowerCase();

    let products =
    document.querySelectorAll(
    ".product"
    );

    products.forEach(product => {

        let name =
        product.querySelector(
        "h2"
        ).innerText.toLowerCase();

        if(name.includes(input)){

            product.style.display =
            "block";
        }

        else{

            product.style.display =
            "none";
        }
    });
}

// OPEN POPUP

function openPopup(
image,
title,
desc,
price
){

    document.getElementById(
    "popup"
    ).style.display = "flex";

    document.getElementById(
    "popup-img"
    ).src = image;

    document.getElementById(
    "popup-title"
    ).innerText = title;

    document.getElementById(
    "popup-desc"
    ).innerText = desc;

    document.getElementById(
    "popup-price"
    ).innerText = "₹" + price;

    document.getElementById(
    "popup-cart-btn"
    ).onclick = function(){

        addToCart(
            title,
            price,
            image
        );

        showToast();
    };
}

// CLOSE POPUP

function closePopup(){

    document.getElementById(
    "popup"
    ).style.display = "none";
}

// TOAST MESSAGE

function filterProducts(category){

    let products =
    document.querySelectorAll(
    ".product"
    );

    products.forEach(product => {

        let productCategory =
        product.getAttribute(
        "data-category"
        );

        if(
        category === "all" ||
        productCategory === category
        ){

            product.style.display =
            "block";
        }

        else{

            product.style.display =
            "none";
        }
    });
}

function showToast(){

    let toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

}

function toggleMenu(){
    document.querySelector(".nav-links")
    .classList.toggle("show");
}