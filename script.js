
window.onload = function(){
	$('.container-fluid').hide();	
	$('.modal').show();

};

$(document).on('click','#btn-aceita-termos-privacidade',function(){
	$('.container-fluid').show();
	var vinheta = document.getElementById("audio");
	$('.modal').hide();
	vinheta.play();
	setTimeout(function(){
		$('#logo-marca').css({'max-width': '3em'});
		$('#chamada-1').css({'min-height': '2em'});
		$('#div-formulario').show();
	}, 10000);
	
	
	
	
});

