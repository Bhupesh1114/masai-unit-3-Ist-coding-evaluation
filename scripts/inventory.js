
let products = JSON.parse(localStorage.getItem("products")) || [];

displayData(products);
function displayData(data) {
    data.map(function (elem, ind, arr) {
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", elem.image);
        let name = document.createElement("p");
        name.innerText = elem.name;
        let price = document.createElement("p");
        price.innerText = elem.price;
        let type = document.createElement("p");
        type.innerText = elem.type;
        let button = document.createElement("button");
        button.innerText = "Remove";
    
        button.addEventListener("click", function () {
            deleteItem(elem);
        })
        div.append(image, name, price, type,button);
        document.querySelector("#products_data").append(div);
    
    })
}


function deleteItem(value) {

    let newArr = products.filter(function (elem) {
        return elem !== value;
    })

    localStorage.setItem("products", JSON.stringify(newArr));
     
    document.querySelector("#products_data").innerHTML = "";
    displayData(newArr);
   products = newArr
}

document.querySelector("#add_product").addEventListener("click", function () {
    window.location.href = "./index.html"
})