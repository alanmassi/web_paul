//slider-------------------------------------------------
let $sliderCon = document.getElementById('slider-container');
let $sliders = $sliderCon.getElementsByClassName('slider');//no se para que lo traje

let $imgMovil = $sliderCon.getElementsByClassName('imgmovil');//agregar la animacion

/*barra de progreso*/
let $progress = document.getElementById('progress');
let $barProgress = $progress.getElementsByClassName('barr-progres');//agrego clase

let $relleno = $progress.getElementsByClassName('relleno');//agrego animacion
					
let $sliderLogo = $sliderCon.getElementsByClassName('slider-logo-juego-link');//agrego animacion
let $sliderTitleLink = $sliderCon.getElementsByClassName('slider-title-game-link');//agrego animacion
let $sliderButtonLink = $sliderCon.getElementsByClassName('slider-button-link');//agrego animacion
let $position = ['0vw', '-100vw', '-200vw', '-300vw', '-400vw', '-500vw'];//posicion del del slider container

var cosa = 0;//variable para itinerar

function slider1(cosa){//funccion de animacion
	$barProgress[cosa].style.animationName='colorear';//agrego nombre de la animacion
	$relleno[cosa].style.animationName='rellenar';//agrego nombre de la animacion
	$sliderLogo[cosa].style.animationName='entra';//agrego nombre de la animacion
	$sliderTitleLink[cosa].style.animationName='entra';//agrego nombre de la animacion
	$sliderButtonLink[cosa].style.animationName='entra';//agrego nombre de la animacion
	$imgMovil[cosa].style.animationName='total';//agrego nombre de la animacion
	$relleno[cosa].addEventListener('animationend',() => {//si la animacion termina quito el nombre;
		
		for(let i=0; i<6; i++){//ciclo para quitar nombre
			$barProgress[i].style.animationName='none';
			$relleno[i].style.animationName='none';
			$sliderLogo[i].style.animationName='none';
			$sliderTitleLink[i].style.animationName='none';
			$sliderButtonLink[i].style.animationName='none';
			$imgMovil[i].style.animationName='none';
		}
		if(cosa <= 4){//si la variable que itinera es menorr o igual a 4
			cosa++;//le suma 1 a la vaariable
			lanzar2(cosa);//y lanza la funcion
			
		}else if(cosa==5){//si es igual a 5
			borrar(cosa);//ejecuta funcion borrar
		}
	});
}
function lanzar2(cosa){//funcion de arranque
	$sliderCon.style.left=$position[cosa];//mueve el slider container
	slider1(cosa);//ejecuta la funcion de las animaciones
}
function borrar(cosa){//borra los nombres de las animaciones de todos los elementos
		
	for(let i=0; i<6; i++){//creo el ciclo para todos los elementos de los array
		$barProgress[i].style.animationName='none';
		$relleno[i].style.animationName='none';
		$sliderLogo[i].style.animationName='none';
		$sliderTitleLink[i].style.animationName='none';
		$sliderButtonLink[i].style.animationName='none';
		$imgMovil[i].style.animationName='none';
	}
	cosa =0;//reinicio la variable 
	lanzar2(cosa);//comienzo el ciclo de nuevo
}
sliderGeneral(cosa);//lanzo funcion master

function sliderGeneral(cosa){//funcion master
	lanzar2(cosa);//lanzo slider automatico
	document.getElementById('slider-principal').addEventListener('click', (e) =>{
	//si sucede el evento por click
		if(e.target.id == $prev.id || e.target.id == 'preve'){//si el click ocurre en prev
			
			if(cosa == 0){//si la variable que itinera es igual 0
				cancelAnimation();//llamo a la funcion de cancelar la animacion que esta corriendo
				cosa= 5;//le doy un nuevo valor a la variable
				lanzar2(cosa);//lanzo la slider automatica con los nuevos valores para que continue automatico
			}else{//si es mayor a 0 corre
				cancelAnimation();
				cosa= cosa -1;//le resto una unidad asi retrocede
				lanzar2(cosa);
			}
		}else if(e.target.id == $next.id || e.target.id == 'nexte'){//si el click ocurre en next
			
			
			if(cosa == 5){//si la variable es igual a 5 osea la ultima posicion
				cancelAnimation();
				cosa=0;//le doy valor de 0 asi retrocede hasta el principio y comienza la animacion
				lanzar2(cosa);
			}else{
				cancelAnimation();
				cosa= cosa +1;//si no esta en la ultima posicion le agrego 1
				lanzar2(cosa);
			}
			
		}
		else{}//de lo contrario nada
		return cosa;//retorno valor de cosa
	});
	
}
			
const $prev = document.getElementById('prev');//traigo el botton anterior
const $next = document.getElementById('next');//traigo el botton siguiente

function cancelAnimation(){//cancelo animacion corriendo
	for(let i=0; i<6; i++){//creo el ciclo para todos los elementos de los array
		$barProgress[i].style.animationName='none';
		$relleno[i].style.animationName='none';
		$sliderLogo[i].style.animationName='none';
		$sliderTitleLink[i].style.animationName='none';
		$sliderButtonLink[i].style.animationName='none';
		$imgMovil[i].style.animationName='none';
	}
}