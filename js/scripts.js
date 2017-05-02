$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var groceryItems = ["item1", "item2", "item3", "item4", "item5"];
    var sortedItems = groceryItems.sort();

     $("#formOne").fadeOut();
     $(".showList").fadeIn();

    var sortedItems = groceryItems.map(function(item) {
      var item = $("input#" + item).val();
      $("ul").append("<li>" + item.toUpperCase() + "</li>");
    });
  });
});

// $(function(){
//   $("#formOne").submit(function(event){
//     event.preventDefault();
//     var groceryItems = ["item1", "item2", "item3", "item4", "item5"];
//
//      $("#formOne").fadeOut();
//      $(".showList").fadeIn();
//
//     var displayItems = groceryItems.map(function(item) {
//       var item = $("input#" + item).val();
//       //var sortItems = displayItems.sort();
//       $("ul").append("<li>" + item.toUpperCase() + "</li>");
//     });
//   });
// });
