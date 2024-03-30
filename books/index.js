// Example about books via user
const userBooks = [
    {title: "The Great Gatsby", author: "Scott Fitzgerald", rating: 3.93},
    {title: "White Noise", author: "Don DeLillo", rating: 3.86},
    {title: "American Psycho", author: "Bret Easton Ellis", rating: 3.81},
];

// Function for display user books
function displayUserBooks() {
    const bookList = document.getElementById("bookList");
    if (bookList) {
        bookList.innerHTML = ''; // Clear list before update

        userBooks.forEach(book => {
            const li = document.createElement("li"); // Create new <li> element
            li.textContent = `${book.title} by ${book.author} (Rating: ${book.rating})`;
            bookList.appendChild(li);
        });
    }
}

// Func for display books whenn page loading
document.addEventListener("DOMContentLoaded", function() {
    displayUserBooks();
});
