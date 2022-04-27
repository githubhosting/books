/* Description: Custom JS file */

(function ($) {
  "use strict";

  /* Move Form Fields Label When User Types */
  // for input and textarea fields
  $("input, textarea").keyup(function () {
    if ($(this).val() != "") {
      $(this).addClass("notEmpty");
    } else {
      $(this).removeClass("notEmpty");
    }
  });

  /* Countdown Timer - The Final Countdown */
  $("#clock")
    .countdown("2022/5/9") /* change for "countdown to" date */
    .on("update.countdown", function (event) {
      var format =
        '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span>';
      $(this).html(event.strftime(format));
    })
    .on("finish.countdown", function (event) {
      $(this).html("").parent().addClass("disabled");
    });

  /* Removes Long Focus On Buttons */
  $(".button, a, button").mouseup(function () {
    $(this).blur();
  });
})(jQuery);
