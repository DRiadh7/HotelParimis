$( document ).ready(function() {
	$('.droite img').on('click', function(){
		var MonImage = $(this).attr('src'); // recuperation
		var MonTitle = $(this).attr('title'); // recuperation
		// console.info(MonImage);
		$('.gauche img').attr('src', MonImage); // changement
		$('.gauche img').attr('title', MonTitle); // changement
	});
}); //2 méthodes via src ou title