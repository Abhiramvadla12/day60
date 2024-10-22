let btn = document.getElementById("btn");
let output = document.getElementById("output");
btn.onclick = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    alert("Data Fetched");
    localStorage.setItem("data", JSON.stringify(data));
    displayData();
}
function displayData() {
    output.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length === 0) {
        output.innerHTML = "No Data Available";
    } else {
        data.forEach(obj => {
            let information = document.createElement("div");
            information.className = "cards"
            information.innerHTML =
                `<p><b>Title : </b>${obj["title"]}</p>
                <p><b>Price : </b>${obj["price"]}</p>
                <p><b>Description : </b>${obj["description"]}</p>
                <p><b>Category : </b>${obj["category"]}</p>`;
            output.appendChild(information);
        });
    }
}