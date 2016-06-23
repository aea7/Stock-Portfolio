var init_stock_lookup;

init_stock_lookup = function(){
  
   $('#stock-lookup-form').on('ajax:before',function(event,data,status){
     $('#spinner').show();
    $('#stock_lookup_results').replaceWith('');
    });
  
  $('#stock-lookup-form').on('ajax:success',function(event,data,status){
     $('#spinner').hide();
     console.log(data)
    $('#stock_lookup').replaceWith(data);
    init_stock_lookup(); // to have listeners again
  });
  
    $('#stock-lookup-form').on('ajax:error',function(event,xhr,status,error){
    $('#spinner').hide();
    $('#stock_lookup_results').replaceWith('');
    $('#stock-lookup-errors').replaceWith("Stock was not found");
  });

}

$(document).ready(function(){
  init_stock_lookup();
})