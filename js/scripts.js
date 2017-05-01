$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var groceryItems = ["item1", "item2", "item3", "item4", "item5"];

     $("#formOne").fadeOut();
     $(".showList").fadeIn();

    var displayItems = groceryItems.map(function(item) {
      var item = $("input#" + item).val();
      $("ul").append("<li>" + item.toUpperCase() + "</li>");
    });
  });
});
    // var displayItems = groceryItems.map(function(item) {
    //   return item.toUpperCase();
    // });
    //




// Create a form that allows a user to input items they need at the store.
// When the user submits the form, hide the form and display the list of items in alphabetical order, all uppercased.
// Hint: To do this, build an array of the inputted items. (Make sure you don't include any blank fields.) Sort the array in alphabetical order. Make a new array with each entry uppercased (don't just uppercase them when you display them). Then, display the sorted list of things as list items inside a <ul>.

//
// $(function(){
//   $("#formOne").submit(function(event){
//     event.preventDefault();
//     var groceryItems = ["item1", "item2", "item3", "item4", "item5"];
//
//      $("#formOne").fadeOut();
//      $(".showList").fadeIn();
//
//      groceryItems.forEach(function(item) {
//        var item = $("input#" + item).val();
//        $("." + item).text(item);
//        $("ul").append("<li>" + item + "</li>");
//      });
//
//     // var displayItems = groceryItems.map(function(item) {
//     //   alert(items.toUpperCase());
//     // });
//   });
// });
