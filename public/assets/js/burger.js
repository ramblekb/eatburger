$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");
  
      var newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#id").val().trim(),
        burger_name: $("[name=name]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  