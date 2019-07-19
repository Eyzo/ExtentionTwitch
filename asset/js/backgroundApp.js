$(document).ready(function () {

    var activated = false;
    var time = 3000;
    var stream = "solary";

    setInterval(function () {

        console.log(activated);

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

                //Si le stream est on et que la notif n'est jamais apparu
                if (data.data.length > 0 && !activated) {

                    new Notification('Stream Open Notif', {
                        icon: 'img/icon.png',
                        body: "Petite notification d'avertissement pour prevenir que le stream est bien on"
                    });

                    activated = true;

                    //Si le stream est off mais que la notif a déja était activée
                } else if (data.data.length == 0 && activated) {

                    activated = false;

                }
            }
        });

    },time);

});