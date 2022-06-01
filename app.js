const loadBooks = () => {
  const searchTextInput = document.getElementById("search-input");
  const searchText = searchTextInput.value;
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayBooks(data.docs));
};

const displayBooks = (books) => {
  const booksContainer = document.getElementById("books-container");
  for (const book of books) {
    console.log(book);
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="col">
          <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title fw-bold">${book.title}</h5>
              <p class="card-text">Author: ${book.author_name}</p>
              <p class="card-text">Publisher: ${book.publisher}</p>
              <p class="card-text">Publish Year: ${book.publish_year}</p>
            </div>
          </div>
    </div>
    `;
    booksContainer.appendChild(div);
  }
};
