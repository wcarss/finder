var imageCount = 0;
var currentImageUrl = null;
var current_image = null;
var goal = 10;
var gallery = [];

statusUpdate(imageCount);

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

function statusUpdate(count) {
    if (count == 0) {
        $('#status').html("Drag cool pics right, drag boring ones left!");
    } else if (count == 10) {
        $('#status').html("WHOA, Ten!? No way you can hit 100!");
        $('body').css({'background': '#eee'});
        goal = 100;
    } else if (count == 18) {
        $('body').css({'background': '#ddd'});
    } else if (count == 25) {
        $('#status').html("Not easily discouraged!. Try for 50 at least.");
        $('body').css({'background': '#ccc'});
    } else if (count == 33) {
        $('body').css({'background': '#bbb'});
    } else if (count == 40) {
        $('body').css({'background': '#aaa'});
    } else if (count == 50) {
        $('#status').html("Whoosh! You deserve a medal.");
    } else if (count == 100) {
        $('#status').html("THANKS FOR PLAYING!!! YOU MADE IT......?");
        $('body').css({'background': '#aaa'});
    } else if (count == 200) {
        $('#status').html("WHAT ARE YOU EVEN DOING");
        $('body').css({'background': '#aaa'});
    } else if (count == 500) {
        $('#status').html("Why are you still here? Go home, it's over.");
        $('body').css({'background': '#aaa'});
    } else {
        $('#status').html(count + " / " + goal);
    }
}

$("#tinderslide").jTinder({
    onDislike: function (item) {
        imageCount += 1;
        statusUpdate(imageCount);
    },
    onLike: function (item) {
        imageCount += 1;
        statusUpdate(imageCount);
       // gallery.push(currentImageUrl.toString());
        $.post('image_post.php', current_image);
    },
    newImage: function () {
        x = Math.floor(Math.random() * 130);
        y = Math.floor(Math.random() * 309);
        currentImageUrl = "http://map1.vis.earthdata.nasa.gov/wmts-geo/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/EPSG4326_250m/8/"+ x +"/"+ y +".jpg";
        console.log(currentImageUrl);
        current_image = {
            "now": new Date().toMysqlFormat(),
            "x": x,
            "y": y,
            "zoom": 8,
            "date": '2012-07-09',
            "url": currentImageUrl
        }
        return currentImageUrl;
        //return "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2014-07-09/GoogleMapsCompatible_Level9/8/"+ x +"/"+ y +".jpg";
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
});

$('.actions .like, .actions .dislike').click(function(e){
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
});



