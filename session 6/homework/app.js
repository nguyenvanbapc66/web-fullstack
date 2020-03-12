$(document).ready(function(){
        let letters = "0123456789ABCDEF"
        let colors = "#"
        for (let i = 0; i < 6; i++) {
            colors += letters[Math.floor(Math.random() * 16)]
        }
        changColor(colors)
        $('#btn').click(function(){
            $.ajax({
                url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
                success: function(result){
                    let quotes = JSON.parse(result)
                    let quoteRandom = Math.floor(Math.random() * quotes.quotes.length)

                    let quote = quotes.quotes[quoteRandom].quote
                    let author = quotes.quotes[quoteRandom].author

                    colors = '#'
                    for (let i = 0; i < 6; i++) {
                        colors += letters[Math.floor(Math.random() * 16)]
                    }

                    let modalQuote = `
                        <i class="fas fa-quote-left"></i>
                        ${quote}
                        <i class="fas fa-quote-right"></i>
                    `
                    let modalAuthor = `
                        - ${author} -
                    `
                    $('#random-quote').html(modalQuote)
                    $('#random-author').html(modalAuthor)
                    changColor(colors)
                }
            })
        })
})

function changColor(colors){
    $('#random-quote').css({
        color: colors,
        transition: 'all 1s ease 0s'
    })
    $('#random-author').css({
        color: colors,
        transition: 'all 1s ease 0s'
    })
    $('#btn').css({
        background: colors,
        transition: 'all 1s ease 0s'
    })
    $('#container').css({
        background: colors,
        transition: 'all 1s ease 0s'
    })
}