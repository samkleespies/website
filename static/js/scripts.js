$(document).ready(function()
{
    var clicks = 0;
    var hovers = 0;
    
    $('.mfg').delay(0).fadeIn(500);
    $('.dgn').delay(300).fadeIn(500);
    $('.rsch').delay(600).fadeIn(500);

    $('.videos-wrapper').fadeIn(800);
    $('.leftbox').delay(500).fadeIn(1200);
    $('.middlebox').delay(600).fadeIn(1200);
    $('.rightbox').delay(700).fadeIn(1200);
    
    setTimeout(function() 
            {
              $('.box-left').animate({width: '0%'});
            }, 600);
    setTimeout(function() 
            {
              $('.box-right').animate({left: '100%', width: '0%'});
            }, 600);
    
    $(function() 
    {
        $("#contactelement").click(function() 
        {
          clicks++;
          if (clicks%2==0)
          {
            setTimeout(function() 
            {
              $("#contactelement").removeClass("movecontact");
            }, 650);
          }
          else
          {
            $("#contactelement").addClass("movecontact");
           
          }
          $(".socialbuttons").toggleClass("addbuttons");
        });

        $(".animator").hover(function()
        {
          hovers++;
          if (hovers%2==0)
          {
            setTimeout(function() 
            {
              $(".resize").removeClass("dosize");
            }, 650);
            setTimeout(function() 
            {
              $(".moveleft").removeClass("domove");
            }, 650);
          }
          else
          {
            $(".resize").addClass("dosize");
            $(".moveleft").addClass("domove");
          }
          $(".aboutmetext").toggleClass("doabout");
        })
    });
});