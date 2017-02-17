
$(function(){
  $("form#Form").submit(function(event){
    var sign = $("#signbox").val();
    var age = $("#age").val();
    var gender = $("#genderbox").val();

    //if gender and age are not empty, match to celeb
    if (gender!==""&&age!==""){
      if (sign==="aquarius"){
        $("#showAshton").show();
        }
      else if (sign==="pisces"){
        $("#showEva").show();
        }
      }
    //else show alert, specific missing info
    else{
      alert("There is missing information and we can't accurately match you");

      if (gender){
        }
      else{
        $("#errorGender").show();
        }

      if (age){
        }
      else {
        $("#errorAge").show();
        }
     }
  event.preventDefault();
  });

});
