$(document).ready(function() {
  $(".new-tweet form textarea").on("input", function(event) {
    $(this).siblings(".flashMsg").text("");
    const limit = 140;
    var length = $(this).val().length;
    var remain = limit - length;
    var counter = $(this).parent().find(".counter");
    counter.text(remain);
    if (remain < 0) {
      counter.addClass("err");
    } else {
      counter.removeClass("err");
    }
  });
});