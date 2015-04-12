var random;
var words = [];
var fav = [];
var i=0;
var j=0;
var flag=0;
var current_fav;
      
$(document).ready(function(){
  $("button").click(function(){
    $("#word-area").text(random);
      RandomWord();
      $("#history-remove").remove();

      if(flag==0) {
        $("#fav-s").append("<span class='glyphicon glyphicon-heart'></span>");
        flag = 1;
      }
      $("#history-add").prepend(words[i]+"<br>");
      current_fav=words[i];
      i++;
  });
});

$(document).ready(function () {
    $('.nav li a').click(function(e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
    });
});

$(document).ready(function(){
  $("#fav-s").click(function(){
    $("#fav-remove").remove();
    fav[fav.length] = current_fav;
    $("#fav-add").prepend(fav[j]+"<br>");
    j++;
  });
});

function RandomWord() {
  var requestStr = "http://randomword.setgetgo.com/get.php";
  $.ajax({
    type: "GET",
    url: requestStr,
    dataType: "jsonp",
    jsonpCallback: 'RandomWordComplete'
  });
}
      
RandomWord();
      
function RandomWordComplete(data){
  random = data.Word;
  words[words.length] = random;
  console.log(words.length);
}

