var imageCount = 0;
var goal = 10;

statusUpdate(imageCount);

function statusUpdate(count) {
    if (count == 0) {
        $('#status').html("Drag cool pics right, drag boring ones left!");
    } else if (count == 10) {
        $('#status').html("WHOA, Ten!? There's no way you can hit 100!");
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
        $('body').css({'background': '#999'});
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
    },
    newImage: function () {
        x = Math.floor(Math.random() * 130);
        y = Math.floor(Math.random() * 309);
        return "http://map1.vis.earthdata.nasa.gov/wmts-geo/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/EPSG4326_250m/8/"+ x +"/"+ y +".jpg";
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
