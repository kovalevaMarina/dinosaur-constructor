$(document).ready(function () {
  store = {
    countBtn: 6,
    array: [6, 4, 3, 3, 4, 3],
  };

  //генерация елементов в DOM
  $(".container").append("<div class='wrap-field'></div>");
  $(".wrap-field").append("<div class='option-wrap'></div>");
  $(".wrap-field").append("<div class='scene-wrap'></div>");
  $(".wrap-field").append("<div class='option-child_wrap'></div>");
  $(".scene-wrap").append("<div class='scene'></div>");

  // генерация первого поля елементов
  for (i = 0; i < store.countBtn; i++) {
    $(".option-wrap").append("<button class='btn option-btn'></button>");
  }

  $(".option-btn").each(function (index) {
    var count = index + 1;
    $(this).attr("data-id", count);
    $(this).append(
      "<img class='option-img' src='../assets/img/icons/" + count + ".png'>"
    );
  });

  //генерация дочерних елементов
  for (i = 0; i < store.arr[i]; i++) {}
});
