$(document).ready(function(){

  $.stratus({
    links: 'https://soundcloud.com/gentlemenmusic-1/baby-its-your-day,https://soundcloud.com/gentlemenmusic-1/country-boots-girl,https://soundcloud.com/gentlemenmusic-1/4-2,https://soundcloud.com/gentlemenmusic-1/capo-3,https://soundcloud.com/gentlemenmusic-1/one-of-these-days',
    download: false,
    stats: false,
    align: 'top',
    theme: "http://" + window.location.host + '/styles/stratus.css'
  });
});