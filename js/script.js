$(document).ready(function(){

	$('#btnSend').click(function() {

		var errores = '';


		// Validando Nombre

		if ($('#names').val()== '') {
			errores += '<p>Escriba un nombre</p>'
			$('#names').css("border-bottom-color", "#f14b4b")
		} else{
			$('#names').css("border-bottom-color", "#d1d1d1")
		}

		// Validando Correo

		if($('#email').val()== '') {
			errores += '<p>Ingrese un correo</p>'
			$('#email').css("border-bottom-color", "#f14b4b")
		
		} else{
			$('#email').css("border-bottom-color", "#d1d1d1")
		}

		// Validando Mensaje

		if($('#mensaje').val()== '') {
			errores += '<p>Escriba un mensaje</p>'
			$('#mensaje').css("border-bottom-color", "#f14b4b")
		} else{
			$('#mensaje').css("border-bottom-color", "#d1d1d1")
		}
 
		// ENVIANDO MENSAJE

		if(errores == '' == false){
			var mensajeModal ='<div class="modal-wrap">'+
									'<div class="mensaje-modal">'+
										'<h3>Errores encontrados</h3>'+
										errores+
										'<span id="btnClose">Cerrar</span>'+
									'</div>'+
								'</div>'

		$('body').append(mensajeModal);

		}

		// CERRANDO MODAL

		$('#btnClose').click(function(){
			$('.modal-wrap').remove();
		})
	})

})