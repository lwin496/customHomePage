
$(document).ready(function () {
 
 
  $(".container2").hide()
  $("#switchArrow").on("click",function() { 
        $(".container1").slideToggle(1000);
        $(".container2").toggle()
        $(this).attr("src","images/arrowup.png")
        $(this).addClass('test');
  })
  $(".test").on("click",function() { 
      $(this).attr("src","images/arrowup.png")
  })
  function kroniiLeft() {   
    $("#kronii").animate({left:"-=1000"} ,2000 ,"swing",kroniiRight),
    $("#kronii").css({ 
      transform:'rotateY(0deg)',
    })
    
  
  }
  function kroniiRight() { 
    $("#kronii").animate({left:"+=1000"} ,2000 ,"swing",kroniiLeft)
    $("#kronii").css({ 
      transform:'rotateY(-180deg)',
    })
  }
  kroniiLeft()
  

});