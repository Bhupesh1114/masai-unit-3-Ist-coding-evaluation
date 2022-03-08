//store the products array in localstorage as "products"
let products =JSON.parse(localStorage.getItem('products')) || [];

function makeObj(name,price,type,image) {
    this.name = name;
    this.price = price;
    this.type = type;
    this.image = image;
}

function addProduct(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let type = document.querySelector("#type").value;
    let image = document.querySelector("#image").value;

    let obj = new makeObj(name, price, type, image)
    products.push(obj);
    localStorage.setItem("products", JSON.stringify(products))
    
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#image").value = "";
}

document.querySelector("#show_products").addEventListener("click", function () {
    window.location.href = "./inventory.html";
})


