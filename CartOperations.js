// import Cart from "./project/Cart";
import CartPage from "./components/CartPage";

let CartArray = [
    // {
    //     image: "https://th.bing.com/th?id=OIP.H8fX5eBqf9HU3EROcTUbzQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    //     title: "Margheereta Pizza",
    //     about: "Regular | Veg Pizza",
    //     price: 299.00,
    //     quantity: 1,
    // },
    // {
    //     image: "https://th.bing.com/th/id/OIP.ns_RnegqBIM6OPzYDoOpSAHaLH?w=178&h=267&c=7&r=0&o=5&pid=1.7",
    //     title: "Cup Cake",
    //     about: "100gm | Vanilla",
    //     price: 99.00,
    //     quantity: 2,
    // },

];


//function to add items to cart
export function addToCart(item) {
    CartArray.push(item);
    
}

//function to get Cart
export function getCart() {
    return CartArray;
}

//function to update Cart
export function updateCart(newItem, newQuantity) {
    CartArray.forEach((item) => {
        if (item.title == newItem) {
            item.quantity = newQuantity;
        }
    });
    console.log(CartArray);
}




//fucntion to setCartEmpty
export function setCartEmpty() {
    CartArray = [];
}


//function to remove items from cart
export function removeCart(title) {
    CartArray = CartArray.filter((item) => (item.title != title))
}