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

$(document).ready(function(){
    $('#btn-find-book').click(function(){
        let bookName = $('#input-wrapper').val().trim()
        for(let book of books){
            let author = book.author
            let title = book.title
    
            if(bookName == author || bookName == title){
                alert(`This book written by ${author} is ${title}`)
                break
            } else{
                alert('Not exist')
                break
            }
        }
    })    
})