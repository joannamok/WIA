$(document).ready(function(){
	/*this conects to the mapForm element, which is the dropdown box. The function will tell the value selected in the 
	 dropdown box through and alert*/
	$('#mapForm').change(function(){

		//this is to equal value inside option form
		var slectedLocation = $("#mapForm option:selected").val();

		//is seleted item is 'ALL'
		if(slectedLocation == 'ALL'){
			//then show in 1000 ms
			$('a.dot').show(1000);
		}else{
			//else if not on ALL then on selected item show only selected item on map
			$('a.dot[location *="'+slectedLocation+'"]').show(1000);
			//and hide other locations
			$('a.dot[location !="'+slectedLocation+'"]').hide(1000);
		}


	});

	//adds a click event to dots on map
	$('a.dot').click(function(){
		//alert($(this).attr('city')); //checks shows city value in dots

		//changes state to selected on dot png when clicked and removes it off other dots
		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		//sets a variable to equal the values of "city" in dots to equal matching id in html details .city_detail boxes
		var city ='.city_detail#'+ $(this).attr('city');
		//this will set up a var for the city vars html code
		var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500,function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		})
	});//end dot click event


});