$(document).ready(function(){
  //Effet Audio Accrobranche
  $('#link2').click(function() {
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("LinksAccrobranche/Section1.html #sectionaccr1");
    $('#section2').load("LinksAccrobranche/Section2.html #sectionaccr2");
    $('#section3').load("LinksAccrobranche/Section3.html #sectionaccr3");
    $('#section4').load("LinksAccrobranche/Section4.html #sectionaccr4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/headers/header_accro.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #4BA33C',
        'transition': '3s'
    });
    // $('h1').css({
    //   'color': '#4BA33C',
    //   'transition': '3s'
    // });
    $('h2').css({
        'color': '#4BA33C',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#4BA33C',
        'transition': '3s'
    });
    $('h3').css({
        'color': '#4BA33C',
        'transition': '3s'
    });
    $('hr').css({
        'border': '4px solid #4BA33C',
        'transition': '3s'
    });
    // $('iframe').css({
    //     'border-top': '3px solid #4BA33C',
    //     'transition': '3s'
    // });
  });

  /// LIEN TARIFS
  $('#link0').click(function() {
    //Effet Audio
    $('#' + $(this).attr('rel'))[0].play();
    //requête Ajax
    $('#section1').load("LinksTarifs/Section1.html #sectiontarifs1");
    $('#section2').load("LinksTarifs/Section2.html #sectiontarifs2");
    $('#section3').load("LinksTarifs/Section3.html #sectiontarifs3");
    $('#section4').load("LinksTarifs/Section4.html #sectiontarifs4");

    // Animation CSS
    $('header').css({
        'background-image': 'url("images/headers/header_tarif.png")',
        'background-size': 'cover',
        'background-repeat': 'no-repeat',
        'border-bottom': '4px solid #D1AC35',
        'transition': '3s'
    });
    // $('h1').css({
    //     'color': '#D1AC35',
    //     'transition': '3s'
    // });
    $('h2').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
    $('.fa').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
    $('h3').css({
        'color': '#D1AC35',
        'transition': '3s'
    });
    $('hr').css({
        'border': '4px solid #D1AC35',
        'transition': '3s'
    });
    // $('iframe').css({
    //     'border-top': '3px solid #D1AC35',
    //     'transition': '3s'
    // });
});

  //Mute Audio
  var son1 = document.getElementById('son1');
  var son2 = document.getElementById('son2');
  var son3 = document.getElementById('son3');
  var son4 = document.getElementById('son4');
  var son5 = document.getElementById('son5');
  var son6 = document.getElementById('son6');
  var son7 = document.getElementById('son7');
  var son8 = document.getElementById('son8');

  document.getElementById('mute').addEventListener('click', function(e) {

    e = e || window.event;

    son1.muted = !son1.muted;
    son2.muted = !son2.muted;
    son3.muted = !son3.muted;
    son4.muted = !son4.muted;
    son5.muted = !son5.muted;
    son6.muted = !son6.muted;
    son7.muted = !son7.muted;
    son8.muted = !son8.muted;
    e.defaultPrevented();



  }, false);
});
