// // Get the data from the wunderground API
////  $.getJSON( "ajax/photography-portfolio/fine.json", 
//            $(function() {
//       console.log("test");
//        $.ajax({
//            url: '/photography-portfolio/fine.json',
//            dataType: "json",
//            success: function (data) {
//                console.log(data);
//                var bridge = data.fine.bridge;
//                var cart = data.fine['cart'];
//                var close = data.fine['close-fence'];
//                var fence = data.fine['fence'];
//                var wheel = data.fine['wheel'];
//                var skull = data.fine['skull'];
//                var tools = data.fine['tools'];
//                var wheat = data.fine['wheat'];
//                var leaf = data.fine['red-leaf'];
//        console.log(bridge);
//                    
//                $('#bridge').text(bridge);
//                $('#cart').text(cart);
//                $('#close-fence').text(close);
//                $('#fence').text(fence);
//                $('#wheel').text(wheel);
//                $('#skull').text(skull);
//                $('#tools').text(tools);
//                $('#wheat').text(wheat);
//                $('#leaf').text(leaf);
//                
//                
//
//            }
//        });});

$.getJSON( "fine.json", function( data ) {
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li> <img class='fine' src='"+val+ "' alt='Picture of " +key+ "'></li>");
    
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#test" );
});