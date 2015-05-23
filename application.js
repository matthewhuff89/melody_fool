function playMultipleNotes(instrument, noteArray) {
 T.soundfont.setInstrument(instrument);
 var note_counter = 0;
 var interval = setInterval(function(){

   if(noteArray[note_counter]) {
   T.soundfont.play(noteArray[note_counter]);
   note_counter++;
   } else {
     return "Empty array";
   }

 }, 500);
}

 var melodyPlaying = false;
 var harmony1Playing = false;
 var harmony2Playing = false;
 var harmony3Playing = false;


function loopingMelody() {
  if(melodyPlaying === true)
     playOn = setInterval(function() {
        T.soundfont.setInstrument(31);
        T.soundfont.play(50);
      }, 500);

  else if(melodyPlaying === false){
    clearInterval(playOn);
    playOn = "nothing";
  }
}

function loopingHarmony() {
  if(harmony1Playing === true) {
    playHarmony1 = setInterval(function(){
      T.soundfont.setInstrument(35);
      T.soundfont.play(50)
    }, 500);
  }

  else if(harmony1Playing === false){
    clearInterval(playHarmony1);
    playHarmony1 = "nothing";
  }
}

function loopingHarmony2() {
  if(harmony2Playing === true) {
    playHarmony2 = setInterval(function(){
      T.soundfont.setInstrument(115);
      T.soundfont.play(50)
    }, 500);
  }

  else if(harmony2Playing === false){
    clearInterval(playHarmony2);
    playHarmony2 = "nothing";
  }
}

function loopingHarmony3() {
  if(harmony3Playing === true) {
    playHarmony3 = setInterval(function(){
      T.soundfont.setInstrument(41);
      T.soundfont.play(50)
    }, 500);
  }

  else if(harmony3Playing === false){
    clearInterval(playHarmony3);
    playHarmony3 = "nothing";
  }
}


$(document).ready(function(){


  $('#melody').click(function(){
    if(melodyPlaying === false){
    melodyPlaying = true;
    loopingMelody();
    }

    else if(melodyPlaying === true){
      melodyPlaying = false;
      loopingMelody();
    }
  });

  $('#harmony1').click(function(){
    if(harmony1Playing === false){
      harmony1Playing = true;
      loopingHarmony();
    }

    else if(harmony1Playing === true){
      harmony1Playing = false;
      loopingHarmony();
    }
  });

  $('#harmony2').click(function(){
    if(harmony2Playing === false){
      harmony2Playing = true;
      loopingHarmony2();
    }

    else if(harmony2Playing === true){
      harmony2Playing = false;
      loopingHarmony2();
    }
  });

  $('#harmony3').click(function(){
    if(harmony3Playing === false){
      harmony3Playing = true;
      loopingHarmony3();
    }

    else if(harmony3Playing === true){
      harmony3Playing = false;
      loopingHarmony3();
    }
  });

});