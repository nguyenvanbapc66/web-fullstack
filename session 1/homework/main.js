let books = [
    { 
        author: 'Bill Gates', 
        title: 'The Road Ahead' 
    },
    { 
        author: 'Steve Jobs', 
        title: 'Walter Isaacson' 
    },
    { 
        author: 'Suzanne Collins', 
        title: 'Mockingjay: The Final Book of The Hunger Games'
    }
]

let checkBookBtn = document.getElementById('btn-find-book')
checkBookBtn.addEventListener('click', (book) => {
    book = document.getElementById('input-wrapper')
    book.value = ''
    let check = false
    let num = -1

    for(let i = 0; i < books.length; i++){
        if(books[i].author === book.value || books[i].title === book.value){
            check = true
            num = i
        }
    }
    if(check == true){
        alert(`This book ${books[num].title} was written by ${books[num].author}`)
    } else{
        alert(`This book doesn't exist`)
    }
})