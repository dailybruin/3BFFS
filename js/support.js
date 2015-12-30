$(document).ready(function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
        {
            src: 'photos/gallery/IMG_6970.JPG',
            w: 1200,
            h: 1200
        },
        {
            src: 'photos/gallery/ms12.jpg',
            w: 814,
            h: 1136
        },
        {
            src: 'photos/gallery/ms2.jpg',
            w: 916,
            h: 922
        },
        {
            src: 'photos/gallery/ms3.jpg',
            w: 962,
            h: 1072
        },
        {
            src: 'photos/gallery/Rusty.JPG',
            w: 1224,
            h: 1623
        }
    ];

    // define options (if needed)
    var options = {
        // optionName: 'option value'
        // for example:
        index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();

});