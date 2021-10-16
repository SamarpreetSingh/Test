$(document).ready(function(){
  
    $('li').on('click', function(){
        var item = $(this).text();
        $.ajax({
          type: 'DELETE',
          url: '/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });
  
  });