//
// main.js
// Prime3BFFs
//
// Created by Ian Cordero, Elise Yuen, Colin Fong, and Lena Correia on 11/3/15.
// Copyright (c) 2015 UCLA Daily Bruin Online. All rights reserved.
//

$(document).ready(function() {
    $('#fullpage').fullpage({
    	anchors:['firstPage', 'secondPage', 'thirdPage'],
    	scrollOverflow: true,
    	continuousVertical: false,
    	slidesNavigation: true
    });
});


var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [
    {
        src: '../photos\gallery\IMG_6970.JPG',
        w: 1200,
        h: 1200
    },
    {
        src: '../photos\gallery\ms12.jpg',
        w: 1136,
        h: 814
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
