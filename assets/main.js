$(document).ready(function(){
    $("#design_image").click(function(){
      $("#design_image").slideDown('1500').hide('1000');
      $("#design_details").show('1500');
    });
    $("#design_details").click(function(){
      $("#design_details").slideUp('1500');
      $("#design_image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#development_image").click(function(){
      $("#development_image").slideDown('1500').hide('1000');
      $("#development_details").show('1500');
    });
    $("#development_details").click(function(){
      $("#development_details").slideUp('1500');
      $("#development_image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product_image").click(function(){
      $("#product_image").slideDown('1500').hide('1000');
      $("#product_details").show('1500');
    });
    $("#product_details").click(function(){
      $("#product_details").slideUp('1500');
      $("#product_image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay1").show();
    }).mouseout(function(){
      $("#overlay1").hide();
    });
  });

  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });

  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });

  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });

  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
  });

  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
  });

  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
  });

  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });

  $(document).ready(function(){
    $("#validate").submit(function(event){
    
      var name = $("input#name").val();
      var email = $("input#email").val();
    
      if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your message. Thank you.We will reach out to you shortly");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  
});