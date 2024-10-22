let btn = document.getElementById("btn");
let output = document.getElementById("output");
let filterData = document.getElementById("btn-2");

btn.onclick = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    alert("Data Fetched");
    localStorage.setItem("data", JSON.stringify(data));
    displayData(data);
}
filterData.onclick = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    let data1;
    if (data.length > 0) {
        data1 = data.filter(obj => obj["category"] === "electronics");
        displayData(data1);
    } else {
        output.innerHTML = "No Data Available";
    }
}

function displayData(data) {
    output.innerHTML = "";
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
window.onload = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}