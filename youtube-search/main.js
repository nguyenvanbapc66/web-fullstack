//Play youtube in modal style
$(document).ready(function() {
    // Gets the video src from the data-id on each img tag
    let $videoSrc;

    $(document).on('click', '.vungChon', function() {
        $videoSrc = $(this).data('id');
    });

    // when the modal is opened autoplay it  
    $('#myModal').on('shown.bs.modal', function(e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    // stop playing the youtube video when I close the modal
    $('#myModal').on('hide.bs.modal', function(e) {
        // a poor man's stop video
        $("#video").attr('src', $videoSrc);
    })
})

let nextPageToken
$(document).ready(function(){
    let form = $('#search')
    
    form.submit(function(e){
        e.preventDefault()

        let keyword = form[0].keyword.value
        let api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyCR-MWGP-Dk3TI4iKJDxwiOAuOa-j1PbEc`

        $('#result-list').html('')
        $.ajax({
            url: api,
            method: 'GET',
            success: function(result){
                console.log(result)
                nextPageToken = result.nextPageToken

                result.items.map(function(item){
                    let id = item.id.videoId
                    let image = item.snippet.thumbnails.high.url
                    let name = item.snippet.title
                    let listThumbnails = document.getElementById('result-list')
                    let modal = `
                        <div class="videothumbnail">
                            <span data-toggle="tooltip" data-placement="top" title="Click to listen on youtube">
                                <img class="thumbnail vungChon" data-toggle="modal" data-target="#myModal" src="${image}" alt="${name}" data-id="${id}">
                                <p class="desc vungChon title-thumbnail" target="_top" data-toggle="modal" data-target="#myModal" data-id="${id}">${name}</p>
                            </span>
                        </div>
                    `

                    listThumbnails.innerHTML += modal
                })
            }
        })
    })
})

// sau 1s thì mới trả về kết quả
// let lastTimeoutId
// $(document).ready(function(){
//     let input = document.getElementById('keyword')

//     input.oninput = function() {
//         clearTimeout(lastTimeoutId)
//         lastTimeoutId = setTimeout(() => {
//             let keyword = $('#keyword').value
            
//             let api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyCR-MWGP-Dk3TI4iKJDxwiOAuOa-j1PbEc`
    
//             $('#result-list').html('')
//             $.ajax({
//                 url: api,
//                 method: 'GET',
//                 success: function(result){
//                     console.log(result)
//                     nextPageToken = result.nextPageToken
//                     console.log(nextPageToken)
    
//                     result.items.map(function(item){
//                         let id = item.id.videoId
//                         let image = item.snippet.thumbnails.high.url
//                         let name = item.snippet.title
//                         let listThumbnails = document.getElementById('result-list')
//                         let modal = `
//                             <div class="videothumbnail">
//                                 <span data-toggle="tooltip" data-placement="top" title="Click to listen on youtube">
//                                     <img class="thumbnail vungChon" data-toggle="modal" data-target="#myModal" src="${image}" alt="${name}" data-id="${id}">
//                                     <p class="desc vungChon title-thumbnail" target="_top" data-toggle="modal" data-target="#myModal" data-id="${id}">${name}</p>
//                                 </span>
//                             </div>
//                         `
    
//                         listThumbnails.innerHTML += modal
//                     })
//                 }
//             })
//         }, 1000)
//     }
// })

let isLoadMore = false

$(document).on('scroll', function(e){
    if($(document).scrollTop() + 2 >= $(document).height() - $(window).height() && !isLoadMore){
        isLoadMore = true
        console.log(isLoadMore)
 
        let api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${nextPageToken}&type=video&key=AIzaSyCR-MWGP-Dk3TI4iKJDxwiOAuOa-j1PbEc`

        $.ajax({
            url: api,
            method: 'GET',
            success: function(result){

                console.log(nextPageToken)
                result.items.map(function(item){
                    let id = item.id.videoId
                    let image = item.snippet.thumbnails.high.url
                    let name = item.snippet.title
                    let listThumbnails = document.getElementById('result-list')
                    let modal = `
                        <div class="videothumbnail">
                            <span data-toggle="tooltip" data-placement="top" title="Click to listen on youtube">
                                <img class="thumbnail vungChon" data-toggle="modal" data-target="#myModal" src="${image}" alt="${name}" data-id="${id}">
                                <p class="desc vungChon title-thumbnail" target="_top" data-toggle="modal" data-target="#myModal" data-id="${id}">${name}</p>
                            </span>
                        </div>
                    `

                    listThumbnails.innerHTML += modal
                })
            }
        })
    }
})