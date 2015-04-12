/**
 * jTinder initialization
 */
$("#tinderslide").jTinder({
    // dislike callback
    onDislike: function (item) {
        // set the status text
        $('#status').html('Dislike image ' + (item.index()+1));
    },
    // like callback
    onLike: function (item) {
        // set the status text
        $('#status').html('Like image ' + (item.index()+1));
    },
    newImage: function () {
        x = Math.floor(Math.random() * 180);
        y = Math.floor(Math.random() * 255);
        return "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2014-07-09/GoogleMapsCompatible_Level9/8/"+ x +"/"+ y +".jpg";
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
});

/**
 * Set button action to trigger jTinder like & dislike.
 */
$('.actions .like, .actions .dislike').click(function(e){
    e.preventDefault();
    $("#tinderslide").jTinder($(this).attr('class'));
});
