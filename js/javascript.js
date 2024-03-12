//Función cross-browser para añadir Eventos
function crearEvento(elemento, tipoEvento, funcion){

	if (elemento.addEventListener) { 

		elemento.addEventListener(tipoEvento, funcion, false); ////Asigna el evento con el metodo de W3C

	} else if (elemento.attachEvent){
		elemento.attachEvent("on" + tipoEvento, funcion); //En caso de que falle, asigna el método de Internet Explorer

	} else {
		elemento["on" + tipoEvento] = funcion; //Asigna el evento en linea en caso de que las otras dos fallen
	}
}


//crearEvento (<id del elemento>, "click", <funcion>)


function iniciar(){
// Dibujamos la tabla dónde pintaremos con el ratón
	dibujarTablero();
	
	// A la tabla de colores le asignamos el evento de click para seleccionar un color.
	var tablaColores= document.getElementById("paleta");
	
	var celdasColores=tablaColores.getElementsByTagName("td");

	for (var i=0; i < celdasColores.length; i++){

		crearEvento(celdasColores[i],"click",detectarColorPaleta);
	}












}







function dibujarTablero(){

	// Creacion de la tabla con todos sus atributos

	var tabla = document.createElement("table");
	tabla.setAttribute("border","1px");
	tabla.setAttribute("id","tablero");
	//tabla.setAttribute("class","tablerodibujo");

	var titulo = document.createElement("caption");
	var textoTitulo = document.createTextNode("Haga CLICK en cualquier celda para activar/desactivar el Pincel");
	titulo.appendChild(textoTitulo);
	tabla.appendChild(titulo);

	// Creamos las filas de la tabla y las celdas dentro de cada fila.
	for (var i=1; i<=30; i++) {

		var nuevaFila=document.createElement("tr");

		for (var j=1; j<=30; j++) {

			var nuevaCelda=document.createElement("td");
			nuevaFila.appendChild(nuevaCelda);
		}
	
		tabla.appendChild(nuevaFila);
	}

	// Una vez que ya tenemos la tabla completamente creada la metemos dentro del div con id="zonadibujo"
	document.getElementById("zonadibujo").appendChild(tabla);
}






function detectarColorPaleta(){





	
}


//Para acceder a todas las celdas de la tabla con id="tablero"
/*var celdas=
document.getElementById("tablero").getElementsByTagName("td"); */








//Cuando se haya cargado la pagina HTML llamamos a la funcion iniciar
crearEvento(window, "load", iniciar); 