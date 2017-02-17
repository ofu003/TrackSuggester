
$(function(){
  $("form#Form").submit(function(event){
    var graphicDesign = $("#q1").val();
    var workingEnv = $("#q2").val();
    var hobbies = $("#q3").val();
    var appsVsWeb = $("#q4").val();
    var dynamicContent = $("#q5").val();

    //if fields are all filled, suggest track
    if (graphicDesign!=="blank"&&workingEnv!=="blank"&&hobbies!=="blank"&&appsVsWeb!=="blank"&&dynamicContent!=="blank"){
      if (graphicDesign==="1"&&hobbies==="y"){
        $("#showCSSDesign").show();
        }
      else if (dynamicContent==="y"&&appsVsWeb==="websites"){
        $("#showRubyRails").show();
        }
      else {
        $("#showJavaAndroid").show();
        }
      }
    //else show alert, specific missing info
    else{
      alert("There is missing information and we may not accurately match you");
      if (graphicDesign!=="blank"){
        }
      else{
        $("#errorq1").show();
        }
      if (workingEnv!=="blank"){
        }
      else{
        $("#errorq2").show();
        }
      if (hobbies!=="blank"){
        }
      else{
        $("#errorq3").show();
        }
      if (appsVsWeb!=="blank"){
        }
      else{
        $("#errorq4").show();
        }
      if (dynamicContent!=="blank"){
        }
      else{
        $("#errorq5").show();
        }
      }
    event.preventDefault();
    });
  });
