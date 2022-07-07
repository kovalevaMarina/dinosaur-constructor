$(document).ready(function () {
  store = {
    elements: [
      {
        id: 1,
        group: "body",
        options: [
          { num: 1 },
          { num: 2 },
          { num: 3 },
          { num: 4 },
          { num: 5 },
          { num: 6 },
        ],
      },
      {
        id: 2,
        group: "eyes",
        options: [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }],
      },
      { id: 3, group: "head", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
      { id: 4, group: "mouth", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
      {
        id: 5,
        group: "spots",
        options: [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }],
      },
      { id: 6, group: "scale", options: [{ num: 1 }, { num: 2 }, { num: 3 }] },
    ],
  };

  //генерация елементов в DOM
  $(".container").append("<div class='wrap-field'></div>");
  $(".wrap-field").append("<div class='option-wrap'></div>");
  $(".wrap-field").append("<div class='scene-wrap'></div>");
  $(".wrap-field").append("<div class='option-child_wrap'></div>");
  $(".scene-wrap").append("<div class='scene'></div>");

  // генерация первого поля елементов
  store.elements.forEach((element) => {
    var $button = $(
      "<button data-id=" +
        element.id +
        " class='btn option-btn'><img class='option-img' src='../assets/img/icons/" +
        element.id +
        ".png'></button>"
    );
    $(".option-wrap").append($button);

    $button.on("click", function () {
      $(".option-child_wrap").empty();
      element.options.forEach((option) => {
        var $buttonChild = $("<button class='btn option-child-btn'></button>");
        $buttonChild.attr("data-id", option.num);
        var $imgChild = $("<img class='option-img'>");
        $imgChild.attr(
          "src",
          "../assets/img/" + element.group + "/" + option.num + ".png"
        );
        $buttonChild.append($imgChild);
        $(".option-child_wrap").append($buttonChild);
      });
    });
  });
});
