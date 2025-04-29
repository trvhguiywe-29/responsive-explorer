$(".showmail").click(function () {
    $(this).text("no you don't!!!")
})

$("#newblog").click(function () {
    if ($(".aaaa").length == 0) {
        $(".newblogs").append("<div class='aaaa'></div>")
        $(".aaaa").append("Title: <br> <input></input> <br>")
        $(".aaaa").append("Image Link: <br> <input></input> <br>")
        $(".aaaa").append("Content: <br> <input></input> <br>")
        $(".aaaa").append("<br> <button>Submit Content</button>")
    }
})