$.getJSON( "landscape.json", function( data ) {
    console.log(data);
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li> <img class='land' src='"+val+ "' alt='Picture of " +key+ "'></li>");
    
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#test" );
});