$(document).ready(function() {

    function getQuote() {
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
            var tweet = encodeURI(res.quote+'\n- '+res.author);
            console.log(tweet);
            $("#btntwitter").attr("href", $("#btntwitter").attr("href")+tweet);
            $("#p-quote").text(res.quote);
            $("#p-author").text('- '+res.author);
        });
    }

    $("#btnquote").on("click", getQuote);

});
