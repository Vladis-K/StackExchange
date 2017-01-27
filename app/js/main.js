jQuery(document).ready(function() {

    //Scroll appearance
    $(window).scroll(function () {
        $(".appearance").each(function () {
            var positionElements = $(this).offset().top;
            var windowTop = $(window).scrollTop();
            if (positionElements < windowTop + 600) {
                $(this).addClass("slide");
            }
        });
    });

        
    //Smooth scrolling
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2000);
    });

    //Modal switches
    $("#modalBasic").on('show.bs.modal', function(event){
        var button = $(event.relatedTarget);
        var typePackage = button.data('info');
        var price = button.data('price');
        $(this).find('.modal-title').text(typePackage + " package");
        $(this).find('.modal-price').text(price);
    })


});
    //JavaScript

        //Loading additional 3d-visualization
        var b = document.getElementById("myButton");
        b.addEventListener('click', uploadPictures, false);

        function uploadPictures() {
            var xhr = new XMLHttpRequest();
            //xhr.withCredentials = true;
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    allTogether(JSON.parse(xhr.responseText));
                }
            };
            xhr.open('GET', 'img/info.json', true);
            xhr.send(null);
            
            function allTogether(getData) {
                var out = "";
                var allData = getData.response.length;
                var insert = document.getElementById("upload");
                //console.log(allData);
                // var index = 0;
                var start = 6;
               // top:
                    for (var i = start; i < allData; i++) {
                    getData.response[i];
                    //console.log(getData.response[i]);
                    // if (index % 4 == 0){
                    //     break top;
                    // }
                    out += '<div class="col-xs-12 col-sm-6 col-md-4">';
                    out += '<img src="' + getData.response[i].image_medium + '"' + ' class="img-responsive" alt=" ' + getData.response[i].title + ' ">';
                    out += '<div class="depiction">' + '<p>' + getData.response[i].description + ', ' + getData.response[i].title + '</p>';
                    out += '</div>' + '</div>'
                }
                insert.innerHTML = out;
                insert.classList.add("slide");
                b.style.visibility = "hidden";

            }
        };


