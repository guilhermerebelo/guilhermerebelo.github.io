$(document).ready(function() {
	$('#dadosFormulario').validate({
		rules: {
			fnome:{
				required: true,
				minlength: 5

			},
			ftelefone:{
				required: true,
				rangelength: [8,11]
				
			},
			fmensagem:{
				required: true

			},
		},
		messages:{
			fnome:{
				required: true,
				minlength: 5

			},
			ftelefone:{
				required: true,
				rangelength: [8,11]
				
			},
			fmensagem:{
				required: true

			},
		},

		},

	});	
});