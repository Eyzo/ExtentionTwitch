$(document).ready(function () {

    var compteur = 0;
    var time = 3000;
    var stream = "solary";

    setInterval(function () {
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
                if (data.data.length > 0 && compteur < 1) {

                    new Notification('Stream Open Notif', {
                        icon: 'img/icon.png',
                        body: "Petite notification d'avertissement pour prevenir que le stream est bien on"
                    });

                    compteur++;

                    //Si le stream est off mais que le compteur a était passé a 1
                } else if (data.data.length < 1 && compteur > 0) {

                    compteur = 0;

                }
            }
        });
    },time);

});