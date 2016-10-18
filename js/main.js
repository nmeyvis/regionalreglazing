console.log("ready");

/*var bizResults = [
        {
            src: "http://www.ipagepro.com/regionalreglazing/logos/Image3.JPG",
            w: 640,
            h: 437
        },
        {
            src: "http://www.ipagepro.com/regionalreglazing/logos/Image6.JPG",
            w: 640,
            h: 437
        }
];*/

var galleryEle = document.querySelectorAll(".pswp")[0];
var bizResults = [];

$(".results-gallery img").each(function(index, obj) {
    var $img = $(obj);
    bizResults[index] = {
        src: $img.attr("src"),
        w: 640,
        h: 478
    }

    var options = {
        index: index
    }
    
    $img.click(function() {
        var gallery = new PhotoSwipe(galleryEle, PhotoSwipeUI_Default, bizResults, options);
        gallery.init();
    });
});
