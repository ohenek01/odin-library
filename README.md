# odin-library
# Library Project

## Description
The Library Project is a simple web application built in **vanilla JavaScript** as part of the Odin Project curriculum.  
It allows users to keep track of their books by adding, displaying, deleting, and marking them as read or unread. The app dynamically updates the display whenever changes are made.

---

## Features
- Add new books to your library via a form.
- Display all books in a card layout.
- Toggle read/unread status using a checkbox.
- Delete books from the library.
- Each book has a unique ID to manage updates and deletion reliably.

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation

---

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
```
2. Open index.html in your browser.

---

## How it Works
1. Data Storage: All books are stored in the myLibrary array in JavaScript
2. Book Objects: Each book is an instance of the Book constructor with properties title, author, pages, read, and a unique id
3. Rendering: The renderLibrary function dynamically creates HTML elements for each book and updates the DOM whenever the library changes
4. Read Status: The read/unread checkbox updates the read property of the book object
5. Deletion: Each book card has a delete button that removes the corresponding book from myLibrary and re-renders the library
