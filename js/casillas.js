function explorar_4( imagen ){
	document.getElementById('pasillo_4').style.opacity = '1';
	document.getElementById('ocupante_4').style.opacity = '1';
	document.getElementById('puerta_4').style.opacity = '1';
		if (document.getElementById('trampa_4').style.opacity != '1') {
			var x = window.confirm('¿Pisar esta casilla?');
		    	if (x) { document.getElementById('trampa_4').style.opacity = '1';
		    	}
		}
}

function explorar_5( imagen ){
	document.getElementById('pasillo_5').style.opacity = '1';
	document.getElementById('ocupante_5').style.opacity = '1';
	document.getElementById('puerta_5').style.opacity = '1';
		if (document.getElementById('trampa_5').style.opacity != '1') {
			var x = window.confirm('¿Pisar esta casilla?');
		    	if (x) { document.getElementById('trampa_5').style.opacity = '1';
		    	}
		}
}