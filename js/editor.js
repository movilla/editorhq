function mostrar_panel(divId, selCasilla, Casilla) {
	var listado_paneles = document.getElementsByClassName('panel');
		for (var i = 0; i < listado_paneles.length; i++) {
			listado_paneles[i].style.visibility = 'hidden';
		}
	document.getElementById(divId).style.visibility = 'visible';
	var listado_casillas = document.getElementsByClassName('indice_casilla');
		for (var a = 0; a < listado_casillas.length; a++) {
			if (!(document.getElementById('quitar_rejilla').checked)) {
				listado_casillas[a].className = 'indice_casilla';
			}
		}
	if (document.getElementsByClassName('indice_casilla seleccionada')[0]) {
		var casilla_seleccionada = document.getElementsByClassName('indice_casilla seleccionada')[0];
			if (document.getElementById('quitar_rejilla').checked) {
				casilla_seleccionada.className = 'indice_casilla sin_rejilla';
			}
			else {
			casilla_seleccionada.className = 'indice_casilla';
		}
	}
	document.getElementById(Casilla).className += ' seleccionada';
	var exite_panel = document.getElementById("ocupante_"+selCasilla+"bis");
	if (!(exite_panel)) {
	var casilla = document.getElementById(divId);
	casilla.innerHTML = "<tr><td class=\"indice_casilla\"><select name=\"ocupante_"+selCasilla+"\" id=\"ocupante_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('ocupante_"+selCasilla+"bis', 'ocupante_"+selCasilla+"')\"><option value=\"ocupante\">Ocupante</option><option value=\"ocupante\">Borrar</option><optgroup label=\"Enemigos\"><option value=\"goblin\">Goblin</option><option value=\"orco\">Orco</option><option value=\"esqueleto\">Esqueleto</option><option value=\"zombi\">Zombi</option><option value=\"momia\">Momia</option><option value=\"fimir\">Fimir</option><option value=\"guerrero_caos\">Guerrero Caos</option><option value=\"gargola\">Gárgola</option></optgroup><optgroup label=\"Roca\"><option value=\"roca\">Roca</option><option value=\"rocas_este\">Rocas →</option><option value=\"rocas_oeste\">Rocas ←</option><option value=\"rocas_sur\">Rocas ↓</option><option value=\"rocas_norte\">Rocas ↑</option></optgroup><optgroup label=\"Héroes\"><option value=\"barbaro\">Bárbaro</option><option value=\"enano\">Enano</option><option value=\"elfo\">Elfo</option><option value=\"mago\">Mago</option></optgroup><optgroup label=\"Letras\"><option value=\"a\">Letra A</option><option value=\"b\">Letra B</option><option value=\"c\">Letra C</option><option value=\"d\">Letra D</option><option value=\"e\">Letra E</option><option value=\"f\">Letra F</option><option value=\"g\">Letra G</option><option value=\"h\">Letra H</option><option value=\"i\">Letra I</option><option value=\"j\">Letra J</option><option value=\"k\">Letra K</option><option value=\"l\">Letra L</option><option value=\"m\">Letra M</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"puerta_"+selCasilla+"\" id=\"puerta_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('puerta_"+selCasilla+"bis', 'puerta_"+selCasilla+"')\"><option value=\"puerta\">Mobilario</option><option value=\"puerta\">Borrar</option><optgroup label=\"Puertas\"><option value=\"puerta_sur\">Puerta ↓</option><option value=\"puerta_norte\">Puerta ↑</option><option value=\"puerta_este\">Puerta →</option><option value=\"puerta_oeste\">Puerta ←</option><option value=\"puerta_este_oeste\">Puertas → ←</option><option value=\"puerta_sur_norte\">Puertas ↓ ↑</option><option value=\"puerta_norte_oeste\">Puertas ← ↑</option><option value=\"puerta_norte_este\">Puertas → ↑</option><option value=\"puerta_sur_oeste\">Puertas ← ↓</option><option value=\"puerta_sur_este\">Puertas → ↓</option></optgroup><optgroup label=\"Muebles\"><option value=\"laboratorio_sur\">Laboratorio ↓</option><option value=\"laboratorio_norte\">Laboratorio ↑</option><option value=\"laboratorio_este\">Laboratorio →</option><option value=\"laboratorio_oeste\">Laboratorio ←</option><option value=\"libreria_sur\">Libreria ═</option><option value=\"libreria_este\">Libreria ║</option><option value=\"armario_sur\">Armario ═</option><option value=\"armario_este\">Armario ║</option><option value=\"chimenea_sur\">Chimenea ↓</option><option value=\"chimenea_norte\">Chimenea ↑</option><option value=\"chimenea_este\">Chimenea →</option><option value=\"chimenea_oeste\">Chimenea ←</option><option value=\"potro_sur\">Potro torturas ↓</option><option value=\"potro_norte\">Potro torturas ↑</option><option value=\"potro_este\">Potro torturas →</option><option value=\"potro_oeste\">Potro torturas ←</option><option value=\"mesa_mago_sur\">Mesa mago ↓</option><option value=\"mesa_mago_norte\">Mesa mago ↑</option><option value=\"mesa_mago_este\">Mesa mago →</option><option value=\"mesa_mago_oeste\">Mesa mago ←</option><option value=\"tumba_sur\">Tumba ↓</option><option value=\"tumba_norte\">Tumba ↑</option><option value=\"tumba_este\">Tumba →</option><option value=\"tumba_oeste\">Tumba ←</option><option value=\"mesa_sur\">Mesa ═</option><option value=\"mesa_este\">Mesa ║</option><option value=\"cofre_sur\">Cofre ═</option><option value=\"cofre_este\">Cofre ║</option><option value=\"trono_sur\">Trono ↓</option><option value=\"trono_norte\">Trono ↑</option><option value=\"trono_este\">Trono →</option><option value=\"trono_oeste\">Trono ←</option><option value=\"armero_sur\">Armero ═</option><option value=\"armero_este\">Armero ║</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"trampa_"+selCasilla+"\" id=\"trampa_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('trampa_"+selCasilla+"bis', 'trampa_"+selCasilla+"')\"><option value=\"trampa\">Trampa</option><option value=\"trampa\">Borrar</option><option value=\"lanza\">Lanza</option><option value=\"abismo\">Abismo</option><option value=\"piedra_caida\">Piedra caida</option></select>";
	casilla.innerHTML +="<select name=\"paredes_"+selCasilla+"\" id=\"paredes_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('paredes_"+selCasilla+"bis', 'paredes_"+selCasilla+"')\"><option value=\"paredes\">Paredes</option><option value=\"paredes\">Borrar</option><option value=\"arriba\">Arriba</option><option value=\"abajo\">Abajo</option><option value=\"izquierda\">Izquierda</option><option value=\"derecha\">Derecha</option><option value=\"arriba_abajo\">Arriba abajo</option><option value=\"izquierda_derecha\">Izquierda derecha</option><option value=\"arriba_izquierda\">Arriba izquierda</option><option value=\"arriba_derecha\">Arriba derecha</option><option value=\"abajo_izquierda\">Abajo izquierda</option><option value=\"abajo_derecha\">Abajo derecha</option></select>";
	casilla.innerHTML +="<select name=\"suelo_"+selCasilla+"\" id=\"suelo_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('suelo_"+selCasilla+"bis', 'suelo_"+selCasilla+"')\"><option value=\"suelo\">Suelo</option><option value=\"suelo\">Borrar</option><optgroup label=\"Escaleras\"><option value=\"escaleras_norte\">Escaleras ↑</option><option value=\"escaleras_sur\">Escaleras ↓</option></optgroup><optgroup label=\"Color\"><option value=\"blanco\">Blanco</option><option value=\"gris\">Gris</option><option value=\"gris_oscuro\">Gris oscuro</option><option value=\"violeta_oscuro\">Violeta oscuro</option><option value=\"azul_oscuro\">Azul oscuro</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"puerta_secreta_"+selCasilla+"\" id=\"puerta_secreta_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('puerta_secreta_"+selCasilla+"bis', 'puerta_secreta_"+selCasilla+"')\"><option value=\"puerta_secreta\">Trampilla</option><option value=\"puerta_secreta\">Borrar</option><option value=\"puerta_secreta_norte\">Trampilla ↑</option><option value=\"puerta_secreta_sur\">Trampilla ↓</option><option value=\"puerta_secreta_este\">Trampilla →</option><option value=\"puerta_secreta_oeste\">Trampilla ←</option><option value=\"puerta_secreta_norte_sur\">Trampilla ↑ ↓</option><option value=\"puerta_secreta_este_oeste\">Trampilla → ←</option><option value=\"puerta_secreta_norte_oeste\">Trampilla ↑ ←</option><option value=\"puerta_secreta_norte_este\">Trampilla ↑ →</option><option value=\"puerta_secreta_sur_oeste\">Trampilla ↓ ←</option><option value=\"puerta_secreta_sur_este\">Trampilla ↓ →</option></select>";
	casilla.innerHTML +="<select name=\"tesoro_"+selCasilla+"\" id=\"tesoro_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('tesoro_"+selCasilla+"bis', 'tesoro_"+selCasilla+"')\"><option value=\"tesoro\">Tesoro</option><option value=\"tesoro\">Borrar</option><option value=\"numero_1\">1</option><option value=\"numero_2\">2</option><option value=\"numero_3\">3</option><option value=\"numero_4\">4</option><option value=\"numero_5\">5</option><option value=\"numero_6\">6</option><option value=\"numero_7\">7</option><option value=\"numero_8\">8</option><option value=\"numero_9\">9</option><option value=\"numero_10\">10</option><option value=\"numero_11\">11</option></select></td></tr><tr><td><a id=\"cerrar\" class=\"cerrar\" title=\"Ocultar panel\" onclick=\"cerrar_panel('"+divId+"')\">X</a></td><td><a id=\"vaciar\" class=\"vaciar\" title=\"Vaciar la casilla\" onclick=\"vaciar_casilla('"+selCasilla+"')\">Vaciar casilla</a></td></tr>";
	}
	var suelo = document.getElementById('suelo').checked;
	if (suelo) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'suelo');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'suelo';
	}
	var blanco = document.getElementById('blanco').checked;
	if (blanco) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'blanco');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'blanco';
	}
	var gris = document.getElementById('gris').checked;
	if (gris) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'gris');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'gris';
	}
	var gris_oscuro = document.getElementById('gris_oscuro').checked;
	if (gris_oscuro) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'gris_oscuro');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'gris_oscuro';
	}
	var violeta_oscuro = document.getElementById("violeta_oscuro").checked;
	if (violeta_oscuro) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'violeta_oscuro');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'violeta_oscuro';
	}
	var azul_oscuro = document.getElementById("azul_oscuro").checked;
	if (azul_oscuro) {
		document.getElementById("suelo_"+selCasilla+"").setAttribute('class', 'azul_oscuro');
		document.getElementById("suelo_"+selCasilla+"bis").value = 'azul_oscuro';
	}
}

function vaciar_casilla(selCasilla) {
	document.getElementById("ocupante_"+selCasilla+"").className = 'ocupante';
	document.getElementById("puerta_"+selCasilla+"").className = 'puerta';
	document.getElementById("trampa_"+selCasilla+"").className = 'trampa';
	document.getElementById("paredes_"+selCasilla+"").className = 'paredes';
	document.getElementById("suelo_"+selCasilla+"").className = 'suelo';
	document.getElementById("puerta_secreta_"+selCasilla+"").className = 'puerta_secreta';
	document.getElementById("tesoro_"+selCasilla+"").className = 'tesoro';
	document.getElementById("ocupante_"+selCasilla+"bis").value = 'ocupante';
	document.getElementById("puerta_"+selCasilla+"bis").value = 'puerta';
	document.getElementById("trampa_"+selCasilla+"bis").value = 'trampa';
	document.getElementById("paredes_"+selCasilla+"bis").value = 'paredes';
	document.getElementById("suelo_"+selCasilla+"bis").value = 'suelo';
	document.getElementById("puerta_secreta_"+selCasilla+"bis").value = 'puerta_secreta';
	document.getElementById("tesoro_"+selCasilla+"bis").value = 'tesoro';
}

function cerrar_panel(divId) {
	document.getElementById(divId).style.visibility = 'hidden';
	var casilla_seleccionada = document.getElementsByClassName('indice_casilla seleccionada')[0];
	casilla_seleccionada.className = 'indice_casilla';
}

function cambiar_imagen(divIdSelect, divIdCasilla) {
	var linea = document.getElementById(divIdSelect);
	var dame_value = linea.options[linea.selectedIndex].value;
	document.getElementById(divIdCasilla).setAttribute('class', dame_value);
	document.getElementById(divIdCasilla).style.opacity = '1';
	// guardando los cambios
	var tex_codigo = document.getElementById('codigo_mapa');
	var pre_codigo = document.getElementById("codigo_de_mapa");	
	if (!(pre_codigo)) {
		tex_codigo.innerHTML = "<textarea id=\"codigo_de_mapa\">?"+divIdCasilla+"="+dame_value+"</textarea>";
	}
	else {
		var pre_tex_codigo = document.getElementById('codigo_de_mapa').value;
		var pre_tex_codigo = pre_tex_codigo.replace('?','');
		tex_codigo.innerHTML = "<textarea id=\"codigo_de_mapa\">?"+divIdCasilla+"="+dame_value+"&"+pre_tex_codigo+"</textarea>";
	}
}

function pre_cargar_mapa( name ) {
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp ( regexS );
	var tmpURL = document.getElementById('codigo_de_mapa').value;
	var results = regex.exec( tmpURL );
	if( results == null )
		return"";
	else
		return results[1];
}

function cargar_mapa() {
	var ocupante_1 = pre_cargar_mapa( 'ocupante_1' );
	alert(ocupante_1);
	var ocupante_2 = pre_cargar_mapa( 'ocupante_2' );
	alert(ocupante_2);
	document.getElementById('ocupante_1').setAttribute('class', ''+ocupante_1+'');
}

function cambiar_tablero() {
	var linea = document.getElementById('tableros');
	var dame_value = linea.options[linea.selectedIndex].value;
		if (dame_value === 'tablero_basico') {
		document.getElementById('paredes_2a').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_3a').setAttribute('class', 'arriba');
		document.getElementById('paredes_4a').setAttribute('class', 'arriba');
		document.getElementById('paredes_5a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_6a').setAttribute('class', 'arriba');
		document.getElementById('paredes_7a').setAttribute('class', 'arriba');
		document.getElementById('paredes_8a').setAttribute('class', 'arriba');
		document.getElementById('paredes_9a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_10a').setAttribute('class', 'arriba');
		document.getElementById('paredes_11a').setAttribute('class', 'arriba');
		document.getElementById('paredes_12a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_15a').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_16a').setAttribute('class', 'arriba');
		document.getElementById('paredes_17a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_18a').setAttribute('class', 'arriba');
		document.getElementById('paredes_19a').setAttribute('class', 'arriba');
		document.getElementById('paredes_20a').setAttribute('class', 'arriba');
		document.getElementById('paredes_21a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_22a').setAttribute('class', 'arriba');
		document.getElementById('paredes_23a').setAttribute('class', 'arriba');
		document.getElementById('paredes_24a').setAttribute('class', 'arriba');
		document.getElementById('paredes_25a').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_2b').setAttribute('class', 'izquierda');
		document.getElementById('paredes_5b').setAttribute('class', 'derecha');
		document.getElementById('paredes_9b').setAttribute('class', 'derecha');
		document.getElementById('paredes_12b').setAttribute('class', 'derecha');
		document.getElementById('paredes_15b').setAttribute('class', 'izquierda');
		document.getElementById('paredes_17b').setAttribute('class', 'derecha');
		document.getElementById('paredes_21b').setAttribute('class', 'derecha');
		document.getElementById('paredes_25b').setAttribute('class', 'derecha');
		document.getElementById('paredes_2c').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_3c').setAttribute('class', 'abajo');
		document.getElementById('paredes_4c').setAttribute('class', 'abajo');
		document.getElementById('paredes_5c').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_6c').setAttribute('class', 'abajo');
		document.getElementById('paredes_7c').setAttribute('class', 'abajo');
		document.getElementById('paredes_8c').setAttribute('class', 'abajo');
		document.getElementById('paredes_9c').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_12c').setAttribute('class', 'derecha');
		document.getElementById('paredes_15c').setAttribute('class', 'izquierda');
		document.getElementById('paredes_17c').setAttribute('class', 'derecha');
		document.getElementById('paredes_21c').setAttribute('class', 'derecha');
		document.getElementById('paredes_25c').setAttribute('class', 'derecha');
		document.getElementById('paredes_2d').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6d').setAttribute('class', 'izquierda');
		document.getElementById('paredes_10d').setAttribute('class', 'izquierda');
		document.getElementById('paredes_12d').setAttribute('class', 'derecha');
		document.getElementById('paredes_15d').setAttribute('class', 'izquierda');
		document.getElementById('paredes_17d').setAttribute('class', 'derecha');
		document.getElementById('paredes_21d').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_25d').setAttribute('class', 'derecha');
		document.getElementById('paredes_2e').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6e').setAttribute('class', 'izquierda');
		document.getElementById('paredes_10e').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_11e').setAttribute('class', 'abajo');
		document.getElementById('paredes_12e').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_15e').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_16e').setAttribute('class', 'abajo');
		document.getElementById('paredes_17e').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_18e').setAttribute('class', 'arriba');
		document.getElementById('paredes_19e').setAttribute('class', 'arriba');
		document.getElementById('paredes_20e').setAttribute('class', 'arriba');
		document.getElementById('paredes_21e').setAttribute('class', 'derecha');
		document.getElementById('paredes_22e').setAttribute('class', 'arriba');
		document.getElementById('paredes_23e').setAttribute('class', 'arriba');
		document.getElementById('paredes_24e').setAttribute('class', 'arriba');
		document.getElementById('paredes_25e').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_2f').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6f').setAttribute('class', 'izquierda');
		document.getElementById('paredes_9f').setAttribute('class', 'derecha');
		document.getElementById('paredes_18f').setAttribute('class', 'izquierda');
		document.getElementById('paredes_21f').setAttribute('class', 'derecha');
		document.getElementById('paredes_25f').setAttribute('class', 'derecha');
		document.getElementById('paredes_2g').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6g').setAttribute('class', 'izquierda');
		document.getElementById('paredes_9g').setAttribute('class', 'derecha');
		document.getElementById('paredes_11g').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_12g').setAttribute('class', 'arriba');
		document.getElementById('paredes_13g').setAttribute('class', 'arriba');
		document.getElementById('paredes_14g').setAttribute('class', 'arriba');
		document.getElementById('paredes_15g').setAttribute('class', 'arriba');
		document.getElementById('paredes_16g').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_18g').setAttribute('class', 'izquierda');
		document.getElementById('paredes_21g').setAttribute('class', 'derecha');
		document.getElementById('paredes_25g').setAttribute('class', 'derecha');
		document.getElementById('paredes_2h').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_3h').setAttribute('class', 'abajo');
		document.getElementById('paredes_4h').setAttribute('class', 'abajo');
		document.getElementById('paredes_5h').setAttribute('class', 'abajo');
		document.getElementById('paredes_6h').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_7h').setAttribute('class', 'abajo');
		document.getElementById('paredes_8h').setAttribute('class', 'abajo');
		document.getElementById('paredes_9h').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_11h').setAttribute('class', 'izquierda');
		document.getElementById('paredes_16h').setAttribute('class', 'derecha');
		document.getElementById('paredes_18h').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_19h').setAttribute('class', 'abajo');
		document.getElementById('paredes_20h').setAttribute('class', 'abajo');
		document.getElementById('paredes_21h').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_22h').setAttribute('class', 'abajo');
		document.getElementById('paredes_23h').setAttribute('class', 'abajo');
		document.getElementById('paredes_24h').setAttribute('class', 'abajo');
		document.getElementById('paredes_25h').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_11i').setAttribute('class', 'izquierda');
		document.getElementById('paredes_16i').setAttribute('class', 'derecha');
		document.getElementById('paredes_2j').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_3j').setAttribute('class', 'arriba');
		document.getElementById('paredes_4j').setAttribute('class', 'arriba');
		document.getElementById('paredes_5j').setAttribute('class', 'arriba');
		document.getElementById('paredes_6j').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_7j').setAttribute('class', 'arriba');
		document.getElementById('paredes_8j').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_9j').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_11j').setAttribute('class', 'izquierda');
		document.getElementById('paredes_16j').setAttribute('class', 'derecha');
		document.getElementById('paredes_18j').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_19j').setAttribute('class', 'arriba');
		document.getElementById('paredes_20j').setAttribute('class', 'arriba');
		document.getElementById('paredes_21j').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_22j').setAttribute('class', 'arriba');
		document.getElementById('paredes_23j').setAttribute('class', 'arriba');
		document.getElementById('paredes_24j').setAttribute('class', 'arriba');
		document.getElementById('paredes_25j').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_2k').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6k').setAttribute('class', 'izquierda');
		document.getElementById('paredes_8k').setAttribute('class', 'izquierda');
		document.getElementById('paredes_9k').setAttribute('class', 'derecha');
		document.getElementById('paredes_11k').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_12k').setAttribute('class', 'abajo');
		document.getElementById('paredes_13k').setAttribute('class', 'abajo');
		document.getElementById('paredes_14k').setAttribute('class', 'abajo');
		document.getElementById('paredes_15k').setAttribute('class', 'abajo');
		document.getElementById('paredes_16k').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_18k').setAttribute('class', 'izquierda');
		document.getElementById('paredes_21k').setAttribute('class', 'derecha');
		document.getElementById('paredes_25k').setAttribute('class', 'derecha');
		document.getElementById('paredes_2l').setAttribute('class', 'izquierda');
		document.getElementById('paredes_6l').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_7l').setAttribute('class', 'abajo');
		document.getElementById('paredes_8l').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_9l').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_18l').setAttribute('class', 'izquierda');
		document.getElementById('paredes_21l').setAttribute('class', 'derecha');
		document.getElementById('paredes_25l').setAttribute('class', 'derecha');
		document.getElementById('paredes_2m').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_3m').setAttribute('class', 'abajo');
		document.getElementById('paredes_4m').setAttribute('class', 'abajo');
		document.getElementById('paredes_5m').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_9m').setAttribute('class', 'derecha');
		document.getElementById('paredes_10m').setAttribute('class', 'arriba');
		document.getElementById('paredes_11m').setAttribute('class', 'arriba');
		document.getElementById('paredes_12m').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_15m').setAttribute('class', 'arriba_izquierda');
		document.getElementById('paredes_16m').setAttribute('class', 'arriba');
		document.getElementById('paredes_17m').setAttribute('class', 'arriba');
		document.getElementById('paredes_18m').setAttribute('class', 'arriba_derecha');
		document.getElementById('paredes_19m').setAttribute('class', 'abajo');
		document.getElementById('paredes_20m').setAttribute('class', 'abajo');
		document.getElementById('paredes_21m').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_22m').setAttribute('class', 'abajo');
		document.getElementById('paredes_23m').setAttribute('class', 'abajo');
		document.getElementById('paredes_24m').setAttribute('class', 'abajo');
		document.getElementById('paredes_25m').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_2n').setAttribute('class', 'izquierda');
		document.getElementById('paredes_5n').setAttribute('class', 'derecha');
		document.getElementById('paredes_9n').setAttribute('class', 'derecha');
		document.getElementById('paredes_12n').setAttribute('class', 'derecha');
		document.getElementById('paredes_15n').setAttribute('class', 'izquierda');
		document.getElementById('paredes_18n').setAttribute('class', 'derecha');
		document.getElementById('paredes_21n').setAttribute('class', 'derecha');
		document.getElementById('paredes_25n').setAttribute('class', 'derecha');
		document.getElementById('paredes_2o').setAttribute('class', 'izquierda');
		document.getElementById('paredes_5o').setAttribute('class', 'derecha');
		document.getElementById('paredes_9o').setAttribute('class', 'derecha');
		document.getElementById('paredes_12o').setAttribute('class', 'derecha');
		document.getElementById('paredes_15o').setAttribute('class', 'izquierda');
		document.getElementById('paredes_18o').setAttribute('class', 'derecha');
		document.getElementById('paredes_21o').setAttribute('class', 'derecha');
		document.getElementById('paredes_25o').setAttribute('class', 'derecha');
		document.getElementById('paredes_2p').setAttribute('class', 'izquierda');
		document.getElementById('paredes_5p').setAttribute('class', 'derecha');
		document.getElementById('paredes_9p').setAttribute('class', 'derecha');
		document.getElementById('paredes_12p').setAttribute('class', 'derecha');
		document.getElementById('paredes_15p').setAttribute('class', 'izquierda');
		document.getElementById('paredes_18p').setAttribute('class', 'derecha');
		document.getElementById('paredes_21p').setAttribute('class', 'derecha');
		document.getElementById('paredes_25p').setAttribute('class', 'derecha');
		document.getElementById('paredes_2q').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_3q').setAttribute('class', 'abajo');
		document.getElementById('paredes_4q').setAttribute('class', 'abajo');
		document.getElementById('paredes_5q').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_6q').setAttribute('class', 'abajo');
		document.getElementById('paredes_7q').setAttribute('class', 'abajo');
		document.getElementById('paredes_8q').setAttribute('class', 'abajo');
		document.getElementById('paredes_9q').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_10q').setAttribute('class', 'abajo');
		document.getElementById('paredes_11q').setAttribute('class', 'abajo');
		document.getElementById('paredes_12q').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_15q').setAttribute('class', 'abajo_izquierda');
		document.getElementById('paredes_16q').setAttribute('class', 'abajo');
		document.getElementById('paredes_17q').setAttribute('class', 'abajo');
		document.getElementById('paredes_18q').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_19q').setAttribute('class', 'abajo');
		document.getElementById('paredes_20q').setAttribute('class', 'abajo');
		document.getElementById('paredes_21q').setAttribute('class', 'abajo_derecha');
		document.getElementById('paredes_22q').setAttribute('class', 'abajo');
		document.getElementById('paredes_23q').setAttribute('class', 'abajo');
		document.getElementById('paredes_24q').setAttribute('class', 'abajo');
		document.getElementById('paredes_25q').setAttribute('class', 'abajo_derecha');
		}
		if (dame_value === 'tablero_original') {
		document.getElementById('tablero_base_1').setAttribute('class', 'tablero_base_original');
		}
		if (dame_value === 'tableros') {
			document.getElementById('tablero_base_1').setAttribute('class', '');
			var listado_paredes = document.getElementsByName('paredes')
				for (var i = 0; i < listado_paredes.length; i++) {
					listado_paredes[i].className = 'paredes';
				}
		}
}

function quita_rejilla() {
	var listado_de_casillas = document.getElementsByClassName('indice_casilla');
		for (var z = 0; z < listado_de_casillas.length; z++) {
			if (document.getElementById('quitar_rejilla').checked) {
				listado_de_casillas[z].className += ' sin_rejilla';
			}
			else {
			listado_de_casillas[z].className = 'indice_casilla';
		}
	}
}

function test() {
	alert('funciona');
}
