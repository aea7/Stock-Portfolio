var init_friend_lookup;

init_friend_lookup = function(){
  
   $('#friend-lookup-form').on('ajax:before',function(event,data,status){
     $('#spinner').show();
    $('#friend_lookup_results').replaceWith('');
    });
  
  $('#friend-lookup-form').on('ajax:success',function(event,data,status){
     $('#spinner').hide();
     console.log(data)
    $('#friend_lookup').replaceWith(data);
    init_friend_lookup(); // to have listeners again
  });
  
    $('#friend-lookup-form').on('ajax:error',function(event,xhr,status,error){
    $('#spinner').hide();
    $('#friend_lookup_results').replaceWith('');
    $('#friend-lookup-errors').replaceWith("Person was not found");
  });

}

$(document).ready(function(){
  init_friend_lookup();
})