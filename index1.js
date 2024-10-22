let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
btn.onclick = () => {
    if (input.value === "") {
        alert("Enter the Value !!!");
        return;
    }
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(input.value);
    localStorage.setItem("students", JSON.stringify(students));
    input.value = "";
    displayData();
}

function displayData() {
    let students = JSON.parse(localStorage.getItem("students"));
    if (!students) {
        output.innerHTML = "No Data Available";
    } else {
        output.innerHTML = students.join(", ");
    }
}

window.onload = displayData