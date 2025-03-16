
//kitaplarin depolanacagi alan
let books =[]

//kitap ekle
function addBook() {
    //degisgen olustur
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    //degiskenleri kontrol et
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {

        //gelen degerler dogru ise objeyi olustur
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        
        // book objesini books arrayine gonder
        books.push(book);

        // kitaplari goster
        showbooks();

        //girilen degerleri temizle
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.'); //girilen deger yok ise hata goster
    }
}

//kitap goster
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="deleteBook(${index})">Delete Book</button>
        `
    );

    document.getElementById('books').innerHTML = booksDiv.join('');
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function deleteBook(index){
  books.splice(index, 1);
 showbooks()
}