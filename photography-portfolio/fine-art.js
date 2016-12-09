 // Get the data from the wunderground API
//  $.getJSON( "ajax/photography-portfolio/fine.json", 
            $(function() {
       console.log("test");
        $.ajax({
            url: '/photography-portfolio/fine.json',
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var bridge = data['fine-art']['bridge'];
                var cart = data['fine-art']['cart'];
                var close = data['fine-art']['close-fence'];
                var fence = data['fine-art']['fence'];
                var wheel = data['fine-art']['wheel'];
                var skull = data['fine-art']['skull'];
                var tools = data['fine-art']['tools'];
                var wheat = data['fine-art']['wheat'];
                var leaf = data['fine-art']['red-leaf'];
        
                    
                $('#bridge').html(bridge);
                $('#cart').html(cart);
                $('#close-fence').html(close);
                $('#fence').html(fence);
                $('#wheel').html(wheel);
                $('#skull').html(skull);
                $('#tools').html(tools);
                $('#wheat').html(wheat);
                $('#leaf').html(red-leaf);
                
                

            }
        });});