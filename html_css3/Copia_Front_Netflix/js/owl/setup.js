/* $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
}) */
var owl = $('#primeiro-carrosel');

var owl2 = $('#segundo-carrosel');

// 

owl.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

// 

owl2.owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items:5
        },
        1200:{
            items:6
        }
    }
});

// 

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// 

owl2.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl2.trigger('next.owl');
    } else {
        owl2.trigger('prev.owl');
    }
    e.preventDefault();
});