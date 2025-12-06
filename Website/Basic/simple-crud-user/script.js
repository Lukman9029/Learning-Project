var modal = document.getElementById("modal");
var create = document.getElementById("create");
var cancel = document.getElementById("close");

create.onclick = function() {
    modal.style.display = "block";
}

cancel.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var save = document.getElementById("save");
var tablebody = document.querySelector("#usertable tbody");

save.onclick = function(e) {
    e.preventDefault(); // prevent form submission

    let name = document.getElementById("name").value.trim();
    let gender = document.querySelector("input[name='gender']:checked");
    let birth = document.getElementById("birth").value;
    let address = document.getElementById("address").value.trim();

    if (!name || !gender || !birth || !address) {
        alert("All fields are required!");
        return;
    }

    let row = tablebody.insertRow();
    let no = tablebody.rows.length;

    row.insertCell(0).textContent = no;
    row.insertCell(1).textContent = name;
    row.insertCell(2).textContent = gender.value;
    row.insertCell(3).textContent = birth;
    row.insertCell(4).textContent = address;
    row.insertCell(5).innerHTML = `<button class="delete">Delete</button>`;

    // delete row
    row.querySelector(".delete").onclick = function () {
        row.remove();
        updateNumbers();
    };

    modal.style.display = "none"; // close modal
    document.querySelector(".form").reset(); // clear form
};

function updateNumbers() {
    let rows = tablebody.querySelectorAll("tr");
    rows.forEach((r, i) => r.cells[0].textContent = i + 1);
}