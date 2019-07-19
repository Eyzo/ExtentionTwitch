$(document).ready(function () {

    $('#oui').click(function () {
        /*chrome.tabs.create({
            url : 'https://www.youtube.com'
        });*/
        var notification = new Notification('Tuto',{
           icon : 'img/icon.png',
            body: 'Une petite notification sympa'
        });
    });

});