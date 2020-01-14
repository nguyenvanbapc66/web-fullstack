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

let input = document.getElementById('input-wrapper')
input.onkeyup = enterSearch

function enterSearch(e){
    let enter = e.keyCode
    if(enter == 13){
        document.getElementById('btn-find-book').click()
    }
}

function findBook(book){
    book = ''
    book = input.value
    let check = false
    let num = -1

    for(let i = 0; i < books.length; i++){
        if(books[i].author == book || books[i].title == book){
            check = true
            num = i
        }
    }
    
    if(check == true){
        alert(`This book ${books[num].title} was written by ${books[num].author}`)
    } else{
        alert(`This book doesn't exist`)
    }
}