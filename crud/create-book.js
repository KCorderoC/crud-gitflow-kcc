// Arreglo para almacenar libros
let books = [];

// Capturamos elementos del DOM
const form = document.getElementById("createBookForm");
const tableBody = document.querySelector("#bookTable tbody");
const btnCreate = document.getElementById("btnCreate");

// Evento para agregar libro
btnCreate.addEventListener("click", function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const year = document.getElementById("year").value.trim();
    const category = document.getElementById("category").value.trim();

    if (!title || !author || !year || !category) return;

    const book = { title, author, year, category };
    books.push(book);

    renderTable();
    form.reset();
});

// Función para actualizar la tabla
function renderTable() {
    tableBody.innerHTML = "";
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
