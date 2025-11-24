// Seleccionamos elementos
const btnUpdate = document.getElementById("btnUpdate");
const tableBody = document.querySelector("#bookTable tbody");
const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputYear = document.getElementById("year");
const inputCategory = document.getElementById("category");

// Variable para guardar el índice del libro seleccionado
let selectedIndex = null;

// Función para seleccionar un libro de la tabla
tableBody.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    if (!row) return;

    const cells = row.querySelectorAll("td");
    if (cells.length === 0) return;

    // Llenamos el formulario con los datos de la fila
    inputTitle.value = cells[0].textContent;
    inputAuthor.value = cells[1].textContent;
    inputYear.value = cells[2].textContent;
    inputCategory.value = cells[3].textContent;

    // Guardamos el índice del libro en el array
    selectedIndex = Array.from(tableBody.rows).indexOf(row);
});

// Función para editar libro
function editarLibro() {
    if (selectedIndex === null) {
        alert("Selecciona primero un libro de la tabla para editar.");
        return;
    }

    // Actualizamos el libro en el array
    books[selectedIndex].title = inputTitle.value.trim() || books[selectedIndex].title;
    books[selectedIndex].author = inputAuthor.value.trim() || books[selectedIndex].author;
    books[selectedIndex].year = inputYear.value.trim() || books[selectedIndex].year;
    books[selectedIndex].category = inputCategory.value.trim() || books[selectedIndex].category;

    // Refrescamos la tabla (usando la función mostrarLibros() de la rama anterior)
    mostrarLibros();

    // Limpiamos selección y formulario
    selectedIndex = null;
    inputTitle.value = "";
    inputAuthor.value = "";
    inputYear.value = "";
    inputCategory.value = "";
}

// Evento para el botón Editar
btnUpdate.addEventListener("click", editarLibro);
