$(document).ready(function() {

    function getQuote() {
        console.log('Button clicked');
        $.ajax({
            headers: {
                'X-Mashape-Key': 'gXCPrfTiawmsh9gtszFXIUT4piPZp1Ipk4ljsnQRoT0zyUNu4V',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=',
            method: 'POST',
        }).done(function(res) {
            res = JSON.parse(res);
            console.log(res.quote);
            console.log(res.author);
        });
    }

    $("#btnquote").on("click", getQuote);

});
