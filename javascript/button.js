$(".showmail").click(function () {
    $(this).text("no you don't!!!")
})

$("#newblog").click(function () {
    if ($(".aaaa").length == 0) {
        $(".newblogs").append("<div class='aaaa'></div>")

        $(".aaaa").append("Title: <br> <input id='title'></input> <br>")
        $(".aaaa").append("Image Link: <br> <input id='imagelink'></input> <br>")
        $(".aaaa").append("Content: <br> <input id='content'></input> <br>")
        $(".aaaa").append("<br> <button id='submit'>Preview Blog Post</button><br>")

        $(this).remove()
        
    }
    // $("#submit").text("aaaa")
})

$(document).on('click', '#submit', function () {
    // $(this).remove()
    console.log('this is working')

    if ($("#createdblog").length == 0) {
        $('.aaaa').append("<br> <div class='blogpost'> <div class='jumbotron' id='createdblog'</div> </div>");
        $("#createdblog").append("<h2 class='roboto'>" + $("#title").val() + "</h2>")
        $("#createdblog").append("<div class='row'> <img src='" + $("#imagelink").val() + "' class='col-sm-4' /> <p class='col-sm-8'>" + $("#content").val() + "</p> </div>")
        $(".aaaa").append("<p>Note: This blog post is local, and does not save. If you want to submit this blog post, <a href='contact.html'>Contact Us.</a></p>")
    }
    
})