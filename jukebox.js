document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  var playButton = document.getElementById('play');
  var stopButton = document.getElementById('stop');
  var pauseButton = document.getElementById('pause');
  var nextButton = document.getElementById('next');
  var backButton = document.getElementById('back');
  var audio = document.getElementById('audio')
  var i = 0;

  function showImage(index) {
    //hide all images
    //show image of song on that index
    $('.album-artwork')
      .children()
      .hide();
    $('img.album-artwork-image:eq(' + index +')')
      .show();
    $('p.title')

  };

  //Function contains song file path, and song name, and stores them in the arrays.
  function Jukebox(){
    this.songs = [];

  };

  //Adds the song filepath
  Jukebox.prototype.addSong = function(song){
    this.songs.push(song);
  }


  //Juke Box
  var mattjb = new Jukebox()
   mattjb.addSong("music/01 Everything In Its Right Place.m4a")
   mattjb.addSong("music/02 Locked.m4a");
   mattjb.addSong("music/03 Lettsanity.m4a");
   mattjb.addSong("music/04 Watermelon Man.mp3");

  let print = document.querySelector('.title');
  let songArray =
   ['Radiohead - Everything In Its Right Place',
   'Fourtet - Locked',
   'Lettuce - Lettsanity',
   'Herbie Hancock - Watermelon Man'];
  let myIndex = 1;

  function printTitles() {
     print.innerHTML = songArray[myIndex++ % songArray.length]
  };

  function printTitles() {
     print.innerHTML = songArray[myIndex++ % songArray.length]
  };

  print.innerHTML = 'Radiohead - Everything In Its Right Place';


  Jukebox.prototype.play = function() {
    audio.play();
  };

  Jukebox.prototype.pause = function(){
   audio.pause();
  };

  audio.src = mattjb.songs[i];

  console.log(mattjb);

  Jukebox.prototype.next = function (){
    i ++
    console.log('Position: ', i, ' songs: ', mattjb.songs.length);
    if(i < mattjb.songs.length){
      console.log('less than total');
      showImage(i);
      printTitles(i);
      audio.pause()
      audio.src = mattjb.songs[i]
      audio.play()
    }else {
      i = -1;
      console.log('Go to start')
      audio.pause()
      audio.play()
    };
  };

  Jukebox.prototype.back = function(){
    i --
    console.log('Position: ', i, ' songs: ', mattjb.songs.length);
        if (i >= 0 && i < 4){
          showImage(i);
          printTitles(i);
          audio.pause()
          audio.src = mattjb.songs[i]
          audio.play()
      }else if(i < 0 ){
        i = 0;
        console.log('Beginning of Playlist');
      };
    };

  function click_handler1() { alert("click_handler1"); }
  function click_handler2() { alert("click_handler2"); }

  window.addEventListener('load',function(){
     playButton.addEventListener("click", function(event){
    event.preventDefault();
    mattjb.play();
    });

    pauseButton.addEventListener("click", function(event){
      event.preventDefault();
      mattjb.pause();
    });

    nextButton.addEventListener("click", function(event){
      event.preventDefault();
      mattjb.next();
    });

    backButton.addEventListener("click", function(event){
      event.preventDefault();
      mattjb.back();
    });

    stopButton.addEventListener("click", function stopAudio(event){
      audio.pause();
      audio.currentTime = 0;
    });
  });
});
