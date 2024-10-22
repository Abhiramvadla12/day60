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
    displayData(students);
}
function displayData(data) {
    if (typeof data === 'object') {
        let temp = data.join("- ");
        output.innerHTML = temp;
    } else {
        output.innerHTML = data;
    }
}
window.onload = () => {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    if (students.length === 0) {
        displayData('No Data Available');
    } else {
        displayData(students);
    }
}