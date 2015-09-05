#! /bin/bash


concatCSS() {

  echo $1
  echo "/* MINIMIZE "$1" */" >> css/minimize.css
  cat $1 >> css/minimize.css
}

concatJS() {

  echo $1
  echo "/* MINIMIZE "$1" */" >> js/minimize.js
  cat $1 >> js/minimize.js

}

# CSS

echo "" > css/minimize.css

concatCSS 'asset/css/bootstrap.min.css'
concatCSS 'css/font-awesome.min.css'
concatCSS 'css/style.css'
concatCSS 'css/responsive.css'
concatCSS 'css/animate.css'
concatCSS 'css/colors/red.css'

# JS

echo "" > js/minimize.js

concatJS js/jquery-2.1.1.min.js
concatJS js/jquery.migrate.js
concatJS js/modernizrr.js
concatJS asset/js/bootstrap.min.js
concatJS js/jquery.fitvids.js
concatJS js/owl.carousel.min.js
#concatJS js/nivo-lightbox.min.js
concatJS js/jquery.isotope.min.js
concatJS js/jquery.appear.js
concatJS js/count-to.js
concatJS js/jquery.textillate.js
concatJS js/jquery.lettering.js
concatJS js/jquery.easypiechart.min.js
concatJS js/jquery.nicescroll.min.js
concatJS js/jquery.parallax.js
concatJS js/mediaelement-and-player.js
concatJS js/script.js
concatJS js/jquery.easing.1.3.js

