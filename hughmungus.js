$(document).ready(function(){
  $("#banana").click(function(){
    $("#bananaS").toggle();

    $("#oatmeal").click(function(){
      $("#oatmealS").toggle();

      $("#eggs").click(function(){
        $("#eggS").toggle();

        $("#broccoli").click(function(){
          $("#broccoliS").toggle();

          $("#chicken").click(function(){
            $("#chickenS").toggle();

            $("#brownrice").click(function(){
              $("#brownriceS").toggle();
            });
          });
        });
      });
    });
  });
});
