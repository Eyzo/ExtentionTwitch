$(document).ready(function () {

    var stream = "solary";

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

                $('.status-image').attr('src','img/connected.png');

                //Sie le stream est off
            } else {

                $('.status-image').attr('src','img/disconnected.jpg');

            }
        }
    });

});