$(document).ready(function(){
        let colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', 
        '#e74c3c', '#95a5a6' ,'#1e3799' ,'#78e08f' ,'#6a89cc','#3c6382','#40407a','#227093','#b33939','#1B9CFC','#D6A2E8','#3B3B98']
        let randomColor = Math.floor(Math.random() * colors.length)
        $('#random-quote').css({
            color: colors[randomColor],
            transition: 'all 1s ease 0s'
        })
        $('#random-author').css({
            color: colors[randomColor],
            transition: 'all 1s ease 0s'
        })
        $('#btn').css({
            background: colors[randomColor],
            transition: 'all 1s ease 0s'
        })
        $('#container').css({
            background: colors[randomColor],
            transition: 'all 1s ease 0s'
        })
        $('#btn').click(function(){
        $.ajax({
            url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
            success: function(result){
                let quotes = JSON.parse(result)
                let quoteRandom = Math.floor(Math.random() * quotes.quotes.length)

                let quote = quotes.quotes[quoteRandom].quote
                let author = quotes.quotes[quoteRandom].author

                randomColor = Math.floor(Math.random() * colors.length)
                console.log(colors[randomColor])

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
                $('#random-quote').css({
                    color: colors[randomColor],
                    transition: 'all 1s ease 0s'
                })
                $('#random-author').css({
                    color: colors[randomColor],
                    transition: 'all 1s ease 0s'
                })
                $('#btn').css({
                    background: colors[randomColor],
                    transition: 'all 1s ease 0s'
                })
                $('#container').css({
                    background: colors[randomColor],
                    transition: 'all 1s ease 0s'
                })
            }
        })
    })
})