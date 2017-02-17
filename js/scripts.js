
$(function(){
  $("form#Form").submit(function(event){
    var graphicDesign = $("#q1").val();
    var workingEnv = $("#q2").val();
    var hobbies = $("#q13").val();
    var appsVsWeb = $("#q4").val();
    var dynamicContent = $("#q5").val();

    //if gender and age are not empty, match to celeb
    if (graphicDesign!=="blank"&&workingEnv!=="blank"&&hobbies!=="blank"&&appsVsWeb!=="blank"&&dynamicContent!=="blank"){
      if (graphicDesign==="1"&&hobbies==="yes"){
        $("#showCSSDesign").show();
        }
      else if (dynamicContent==="y"){
        $("#showEva").show();
        }
      else {
        $("#showJavaAndroid").show();
        }
      }
    //else show alert, specific missing info
    else{
      alert("There is missing information and we may not accurately match you");
      if (graphicDesign){
        }
      else{
        $("#errorq1").show();
        }
      if (workingEnv){
        }
      else{
        $("#errorq2").show();
        }
      if (hobbies){
        }
      else{
        $("#errorq3").show();
        }
      if (appsVsWeb){
        }
      else{
        $("#errorq4").show();
        }
      if (dynamicContent){
        }
      else{
        $("#errorq5").show();
        }
      }
    event.preventDefault();
    });
  });
