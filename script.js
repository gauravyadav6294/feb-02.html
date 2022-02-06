let minute_value = 4;
let second_value = 59;
let miliSec_value = 10;
let miliSec_running = true;

let time_id = setInterval(function () {
  condition();
  output();
  end1();
}, 100);


// Stop Function

document.getElementById("stop").addEventListener("click", function () {
  clearInterval(time_id);
  miliSec_running = false;
});


// Resume Function

document.getElementById("resume").addEventListener("click", function () {
  if (miliSec_running == false) {
    time_id = setInterval(function () {
      condition();
      output();
      end1();
    }, 100);
  }
});


// Restart Function

document.getElementById("reset").addEventListener("click", function () {
   if((miliSec_value === 0) || (second_value === 0) || (minute_value === 0) ||
    (miliSec_value !== 0) || (second_value !== 0) || (minute_value !== 0)) {
      minute_value = 4;
      second_value = 59;
      miliSec_value = 9;
      let miliSec_running2 = true;

      let time_id2 = setInterval(function () {
         condition();
         output();
         end2();
       }, 100);

       document.getElementById("stop").addEventListener("click", function () {
         clearInterval(time_id2);
         miliSec_running2 = false;
       });
       
       
       // Resume Function
       
       document.getElementById("resume").addEventListener("click", function () {
         if (miliSec_running2 == false) {
           time_id2 = setInterval(function () {
             condition();
             output();
             end2();
           }, 100);
         }
       });       
   }
});
