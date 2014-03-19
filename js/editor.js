function mostrar_panel(divId, selCasilla, Casilla) {
	var listado_paneles = document.getElementsByClassName('panel')
		for (var i = 0; i < listado_paneles.length; i++) {
			listado_paneles[i].style.visibility = 'hidden';
		}
	document.getElementById(divId).style.visibility = 'visible';
	var listado_casillas = document.getElementsByClassName('indice_casilla')
		for (var i = 0; i < listado_casillas.length; i++) {
			listado_casillas[i].className = 'indice_casilla';
		}
	document.getElementById(Casilla).className += ' seleccionada';
	var exite_panel = document.getElementById("ocupante_"+selCasilla+"bis");
	if (!(exite_panel)) {
	var casilla = document.getElementById(divId);
	casilla.innerHTML = "<tr><td class=\"indice_casilla\"><select name=\"ocupante_"+selCasilla+"\" id=\"ocupante_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('ocupante_"+selCasilla+"bis', 'ocupante_"+selCasilla+"')\"><option value=\"ocupante\">Ocupante</option><option value=\"ocupante\">Borrar</option><optgroup label=\"Enemigos\"><option value=\"goblin\">Goblin</option><option value=\"orco\">Orco</option><option value=\"esqueleto\">Esqueleto</option><option value=\"zombi\">Zombi</option><option value=\"momia\">Momia</option><option value=\"fimir\">Fimir</option><option value=\"guerrero_caos\">Guerrero Caos</option><option value=\"gargola\">Gárgola</option></optgroup><optgroup label=\"Roca\"><option value=\"roca\">Roca</option><option value=\"rocas_este\">Rocas →</option><option value=\"rocas_oeste\">Rocas ←</option><option value=\"rocas_sur\">Rocas ↓</option><option value=\"rocas_norte\">Rocas ↑</option></optgroup><optgroup label=\"Héroes\"><option value=\"barbaro\">Bárbaro</option><option value=\"enano\">Enano</option><option value=\"elfo\">Elfo</option><option value=\"mago\">Mago</option></optgroup><optgroup label=\"Letras\"><option value=\"a\">Letra A</option><option value=\"b\">Letra B</option><option value=\"c\">Letra C</option><option value=\"d\">Letra D</option><option value=\"e\">Letra E</option><option value=\"f\">Letra F</option><option value=\"g\">Letra G</option><option value=\"h\">Letra H</option><option value=\"i\">Letra I</option><option value=\"j\">Letra J</option><option value=\"k\">Letra K</option><option value=\"l\">Letra L</option><option value=\"m\">Letra M</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"puerta_"+selCasilla+"\" id=\"puerta_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('puerta_"+selCasilla+"bis', 'puerta_"+selCasilla+"')\"><option value=\"puerta\">Mobilario</option><option value=\"puerta\">Borrar</option><optgroup label=\"Puertas\"><option value=\"puerta_sur\">Puerta ↓</option><option value=\"puerta_norte\">Puerta ↑</option><option value=\"puerta_este\">Puerta →</option><option value=\"puerta_oeste\">Puerta ←</option><option value=\"puerta_este_oeste\">Puertas → ←</option><option value=\"puerta_sur_norte\">Puertas ↓ ↑</option><option value=\"puerta_norte_oeste\">Puertas ← ↑</option><option value=\"puerta_norte_este\">Puertas → ↑</option><option value=\"puerta_sur_oeste\">Puertas ← ↓</option><option value=\"puerta_sur_este\">Puertas → ↓</option></optgroup><optgroup label=\"Muebles\"><option value=\"laboratorio_sur\">Laboratorio ↓</option><option value=\"laboratorio_norte\">Laboratorio ↑</option><option value=\"laboratorio_este\">Laboratorio →</option><option value=\"laboratorio_oeste\">Laboratorio ←</option><option value=\"libreria_sur\">Libreria ═</option><option value=\"libreria_este\">Libreria ║</option><option value=\"armario_sur\">Armario ═</option><option value=\"armario_este\">Armario ║</option><option value=\"chimenea_sur\">Chimenea ↓</option><option value=\"chimenea_norte\">Chimenea ↑</option><option value=\"chimenea_este\">Chimenea →</option><option value=\"chimenea_oeste\">Chimenea ←</option><option value=\"potro_sur\">Potro torturas ↓</option><option value=\"potro_norte\">Potro torturas ↑</option><option value=\"potro_este\">Potro torturas →</option><option value=\"potro_oeste\">Potro torturas ←</option><option value=\"mesa_mago_sur\">Mesa mago ↓</option><option value=\"mesa_mago_norte\">Mesa mago ↑</option><option value=\"mesa_mago_este\">Mesa mago →</option><option value=\"mesa_mago_oeste\">Mesa mago ←</option><option value=\"tumba_sur\">Tumba ↓</option><option value=\"tumba_norte\">Tumba ↑</option><option value=\"tumba_este\">Tumba →</option><option value=\"tumba_oeste\">Tumba ←</option><option value=\"mesa_sur\">Mesa ═</option><option value=\"mesa_este\">Mesa ║</option><option value=\"cofre_sur\">Cofre ═</option><option value=\"cofre_este\">Cofre ║</option><option value=\"trono_sur\">Trono ↓</option><option value=\"trono_norte\">Trono ↑</option><option value=\"trono_este\">Trono →</option><option value=\"trono_oeste\">Trono ←</option><option value=\"armero_sur\">Armero ═</option><option value=\"armero_este\">Armero ║</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"trampa_"+selCasilla+"\" id=\"trampa_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('trampa_"+selCasilla+"bis', 'trampa_"+selCasilla+"')\"><option value=\"trampa\">Trampa</option><option value=\"trampa\">Borrar</option><option value=\"lanza\">Lanza</option><option value=\"abismo\">Abismo</option><option value=\"piedra_caida\">Piedra caida</option></select>";
	casilla.innerHTML +="<select name=\"paredes_"+selCasilla+"\" id=\"paredes_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('paredes_"+selCasilla+"bis', 'paredes_"+selCasilla+"')\"><option value=\"paredes\">Paredes</option><option value=\"paredes\">Borrar</option><option value=\"arriba\">Arriba</option><option value=\"abajo\">Abajo</option><option value=\"izquierda\">Izquierda</option><option value=\"derecha\">Derecha</option><option value=\"arriba_abajo\">Arriba abajo</option><option value=\"izquierda_derecha\">Izquierda derecha</option><option value=\"arriba_izquierda\">Arriba izquierda</option><option value=\"arriba_derecha\">Arriba derecha</option><option value=\"abajo_izquierda\">Abajo izquierda</option><option value=\"abajo_derecha\">Abajo derecha</option></select>";
	casilla.innerHTML +="<select name=\"suelo_"+selCasilla+"\" id=\"suelo_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('suelo_"+selCasilla+"bis', 'suelo_"+selCasilla+"')\"><option value=\"suelo\">Suelo</option><option value=\"suelo\">Borrar</option><optgroup label=\"Escaleras\"><option value=\"escaleras_norte\">Escaleras ↑</option><option value=\"escaleras_sur\">Escaleras ↓</option></optgroup><optgroup label=\"Color\"><option value=\"gris\">Gris</option><option value=\"gris_oscuro\">Gris oscuro</option><option value=\"violeta_oscuro\">Violeta oscuro</option><option value=\"azul_oscuro\">Azul oscuro</option></optgroup></select>";
	casilla.innerHTML +="<select name=\"puerta_secreta_"+selCasilla+"\" id=\"puerta_secreta_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('puerta_secreta_"+selCasilla+"bis', 'puerta_secreta_"+selCasilla+"')\"><option value=\"puerta_secreta\">Trampilla</option><option value=\"puerta_secreta\">Borrar</option><option value=\"puerta_secreta_norte\">Trampilla ↑</option><option value=\"puerta_secreta_sur\">Trampilla ↓</option><option value=\"puerta_secreta_este\">Trampilla →</option><option value=\"puerta_secreta_oeste\">Trampilla ←</option><option value=\"puerta_secreta_norte_sur\">Trampilla ↑ ↓</option><option value=\"puerta_secreta_este_oeste\">Trampilla → ←</option><option value=\"puerta_secreta_norte_oeste\">Trampilla ↑ ←</option><option value=\"puerta_secreta_norte_este\">Trampilla ↑ →</option><option value=\"puerta_secreta_sur_oeste\">Trampilla ↓ ←</option><option value=\"puerta_secreta_sur_este\">Trampilla ↓ →</option></select>";
	casilla.innerHTML +="<select name=\"tesoro_"+selCasilla+"\" id=\"tesoro_"+selCasilla+"bis\" form=\"formulario\" onChange=\"cambiar_imagen('tesoro_"+selCasilla+"bis', 'tesoro_"+selCasilla+"')\"><option value=\"tesoro\">Tesoro</option><option value=\"tesoro\">Borrar</option><option value=\"numero_1\">1</option><option value=\"numero_2\">2</option><option value=\"numero_3\">3</option><option value=\"numero_4\">4</option><option value=\"numero_5\">5</option><option value=\"numero_6\">6</option><option value=\"numero_7\">7</option><option value=\"numero_8\">8</option><option value=\"numero_9\">9</option><option value=\"numero_10\">10</option><option value=\"numero_11\">11</option></select></td></tr><tr><td><a id=\"cerrar\" class=\"cerrar\" title=\"Ocultar panel\" onclick=\"cerrar_panel('"+divId+"')\">X</a></td><td><a id=\"vaciar\" class=\"vaciar\" title=\"Vaciar la casilla\" onclick=\"vaciar_casilla('"+selCasilla+"')\">Vaciar</a></td></tr>";
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
}

function cambiar_imagen(divIdSelect, divIdCasilla) {
	var linea = document.getElementById(divIdSelect);
	var dame_value = linea.options[linea.selectedIndex].value;
	document.getElementById(divIdCasilla).setAttribute('class', dame_value);
	document.getElementById(divIdCasilla).style.opacity = '1';
}

// para el futuro
function cambiar_tablero() {
	var linea = document.getElementById('tableros');
	var dame_value = linea.options[linea.selectedIndex].value;
		if (dame_value == 'tablero_1') {
			document.getElementById('paredes_5').setAttribute('class', 'arriba');
		}
}
