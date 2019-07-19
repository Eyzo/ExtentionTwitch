$(document).ready(function () {

    var stream = "solary";
    var time = 3000;
    var urlImgConnected = 'img/connected.png';
    var urlImgDisconnected = 'img/disconnected.jpg';

    function requestServer() {

        $.ajax({
            type: "GET",
            beforeSend: function(request) {
                request.setRequestHeader("Client-ID","pqetye0745evdh3g4kjfyhcj3jz98l");
            },
            url:"https://api.twitch.tv/helix/streams",
            data: {
                "user_login" : stream
            },
            success: function (data) {

                //Si le stream est on
                if (data.data.length > 0) {

                    if ($('.status-image').attr('src') == urlImgDisconnected) {

                        $('.status-image').attr('src',urlImgConnected);

                    }

                    //Sie le stream est off
                } else {

                    if ($('.status-image').attr('src') == urlImgConnected) {

                        $('.status-image').attr('src',urlImgDisconnected);

                    }

                }
            }
        });

    }

    requestServer();

    setInterval(function () {

        requestServer();

    },30000);

});