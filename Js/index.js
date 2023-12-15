$(document).ready(function(){
    $("#sec3").click(function(){
        $("#sec3").css({
            "color":"bule",
            "font-size": "40px",
        })
    })
}) 

 $(document).ready(function(){
    $("#back3").click(function(){
        $("#back3").css({
            "color":"bule",
            "font-size": "30px",
        })
    })
}) 

$(document).ready(function(){
    $('#back2').click(function(){
     $("#back2").css({
        "color": "red",
        "cursor": "pointer",
     })   
    })
})

$(document).ready(function(){
    $("#black1").hover(function(){
     $("#black1").toggleClass("sample");
    })
})

$(document).ready(function(){
    $("#black2").hover(function(){
     $("#black2").toggleClass("fab");
    })
})

$(document).ready(function(){
    $("#black3").hover(function(){
     $("#black3").toggleClass("fad");
    })
})

$(document).ready(function(){
    $("#black4").hover(function(){
     $("#black4").toggleClass("fac");
    })
})


$(document).ready(function(){
    $(".top").hover(
        function(){
          $(this).animate({
              marginTop: "-=1%",
          },200);
        },
       
      function(){
          $(this).animate({
              marginTop: "0%"
          },200);
      }
        
    );
});