$(document).ready(function() {
	$('.gallerie img').on('click', function(){
		var MonImage = $(this).attr('src'); // recuperation
		//var MonTitle = $(this).attr('title'); // recuperation
		// console.info(MonImage);
		$('.imageGauche img').attr('src', MonImage); // changement
		//$('.imageGauche img').attr('title', MonTitle); // changement
	});
});