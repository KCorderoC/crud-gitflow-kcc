// Seleccionamos el botón "Mostrar"
const btnRead = document.getElementById("btnRead");
const tableBody = document.querySelector("#bookTable tbody");

// Función para mostrar libros
function mostrarLibros() {
    tableBody.innerHTML = ""; // Limpiamos la tabla
    if (books.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center;">No hay libros registrados</td></tr>`;
        return;
    }
    books.forEach(book => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.category}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Asignamos la función al botón
btnRead.addEventListener("click", mostrarLibros);
