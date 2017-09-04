// log in
$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModall").modal();
    });
    $("#myModal").on('click', function(){
        $("#myModal").css('display', 'none')
    });
    $(document).on('keyup', function (e) {
        if(e.keyCode === 27)
            $("#myModal").css('display', 'none')
    })
});

 // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementsByClassName('myImg');

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    for(let i = 0; i < img.length; i++){
        img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}