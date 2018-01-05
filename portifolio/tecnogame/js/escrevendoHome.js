	$("#subir-descer").hide();

	var tempoOutraLetra = 80; //altera o tempo que as letras vao aparevendo m/s
	var tempoOutraFrase = 1500; //altera os segundos em que as frases aparecem m/s
	
	var texto = "QUER VARIEDADE DE JOGOS E ACESSÓRIOS?"; //alterar frase
	var i = 0;

	var frase1 = setInterval(function(){
		$("#fraseInicio").text($("#fraseInicio").text() + texto[i]);
		if (i == texto.length - 1) {
			clearInterval(frase1);
			setTimeout(function(){
				$("#fraseInicio").html("");
			},tempoOutraFrase);
			setTimeout(function(){
				segundoTexto();
			},tempoOutraFrase);

		}
		i++;
	},tempoOutraLetra);


	function segundoTexto(){
		var texto = "SÃO MAIS DE 1000 OPÇÕES EM JOGOS PARA 10 PLATAFORMAS DIFERENTES"; //alterar frase
		var i = 0;

		var frase2 = setInterval(function(){
			$("#fraseInicio").text($("#fraseInicio").text() + texto[i]);
			if (i == texto.length - 1) {
				clearInterval(frase2);
				setTimeout(function(){
					$("#fraseInicio").html("");
				},tempoOutraFrase);
				setTimeout(function(){
					terceiroTexto();
				},tempoOutraFrase);
			}
			i++;
		},tempoOutraLetra);
	}

	function terceiroTexto(){
		var texto = "VENHA PARA QUEM ENTENDE DO ASSUNTO"; //alterar frase
		var i = 0;

		var frase3 = setInterval(function(){
			$("#fraseInicio").text($("#fraseInicio").text() + texto[i]);
			if (i == texto.length - 1) {
				clearInterval(frase3);
				setTimeout(function(){
					$("#fraseInicio").html("");
				},tempoOutraFrase);
				setTimeout(function(){
					tegundoTexto();
				},tempoOutraFrase);
			}
			i++;
		},tempoOutraLetra);
	}

	function tegundoTexto(){
		var texto = "VENHA PARA TECNOGAME"; //alterar frase
		var i = 0;
		$("#fraseInicio").css("font-size","55px")
		var frase4 = setInterval(function(){
			$("#fraseInicio").text($("#fraseInicio").text() + texto[i]);
			if (i == texto.length - 1) {
				clearInterval(frase4);
				setTimeout(function(){
					$("#subir-descer").show();
				},500);	    			
			}
			i++;
		},tempoOutraLetra);
	}
