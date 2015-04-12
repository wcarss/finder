function generate_map_url(x, y) {
  //return "http://map1.vis.earthdata.nasa.gov/wmts-geo/wmts.cgi?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=MODIS_Terra_CorrectedReflectance_TrueColor&STYLE=&TILEMATRIXSET=EPSG4326_250m&TILEMATRIX=6&TILEROW=" + x + "&TILECOL=" + y + "&FORMAT=image%2Fjpeg&TIME=2012-07-09";
  //return "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/EPSG4326_250m/3/"+ x +"/"+ y +".jpg";
  return "http://map1.vis.earthdata.nasa.gov/wmts-webmerc/MODIS_Terra_CorrectedReflectance_TrueColor/default/2012-07-09/GoogleMapsCompatible_Level9/6/"+ x +"/"+ y +".jpg"
}

function make_maps() {
  var i = 0, j = 0, images = [];

  for (i = 0; i < 48; i++) {
    for (j = 0; j < 64; j++) {
      images.push('<img src="' + generate_map_url(i, j) + '" width=10 height=10 />');
    }
  }

  return images.join("");
}

$(function () {
  var maps = make_maps();
  $(".maps").html(maps);
});
