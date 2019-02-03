//traigo a los hijos con la class ms(son los menus desplegables), desde el conteiner principal
let $menuDeplegable = document.getElementById('principal-container').getElementsByClassName('ms');
let $header = document.getElementById('header');//traigo el header
let $icomenuDown = $header.getElementsByClassName('icon-chevron-down');//traigo los icomenu
let $icomenuUp = $header.getElementsByClassName('icon-chevron-up');//traigo los icomenu
let $menButton = $header.getElementsByClassName('mswa');//traigo las secciones con la class mswa

//traigo a los hijos con la class rombo, desde el conteiner principal
let $rombo = document.getElementById('principal-container').getElementsByClassName('rombo');

$header.addEventListener('click', (e) =>{//tomo el evento del click en header
	
	var delay = 0;//creo la variable para el delay de los iconos para la interacion.

	for(let i=0; i<$menButton.length; i++){//inicio ciclo
		
		if(e.target.parentElement == $menButton[i] || e.target.classList == $icomenuDown[i].classList || e.target.classList == $icomenuUp[i].classList){
		//si el click es igual a la seccion o igual al icomenu
			$menuDeplegable[i].classList.toggle('active');//agrego o saco la class active
			$rombo[i].classList.toggle('romboOn');//agrego o saco la class romboOn
			$icomenuDown[i].classList.toggle('ico-active');//agrego o saco la class a los iconos
			$icomenuUp[i].classList.toggle('ico-active');//agrego o saco la class a los iconos
			
			if($menuDeplegable[0].classList.contains('active')){//si el elemento contiene la clase active(es el menu de game), desencadena las animaciones de sus hijos
				//traigo el titulo
				const $optTitle = document.getElementById('option-title');
				//traigo a los elementos 
				let $games = document.getElementById('option-games').getElementsByTagName('a');
	
				//traigo a los elementos del segundo submenu
				let $mores = document.getElementById('option-more').getElementsByTagName('a');
	
				for(let i=0; i<$games.length; i++){//creo ciclo para la aniamciones
					$games[i].style.animationName= 'aparece';//le agrego el nombre de la animacion
					$games[i].style.animationDelay= delay+'s';//le agrego la variable delay a la animacion
					delay = delay + 0.05;//modifico cada vez que termina una iteracion para cambiarle el delay a cada icono asi caen en cascada
				}
				$optTitle.style.animationName = 'opa';//animacion del titulo
				for(let i=0; i<$mores.length; i++){//creo siclo para todos los elementos del array
					$mores[i].style.animationName='caen';//les agrego el nombre de la animacion
				}
			}
			if($menuDeplegable[1].classList.contains('active')){//si el elemento contiene la clase active(es el menu de deportes), desencadena las animaciones de sus hijos
				//traigo los elementos del menu sport
				let $sport = document.getElementById('sport-games').getElementsByTagName('a');
				//traigo los elementos del submenu
				let $moreSport = document.getElementById('sport-more').getElementsByTagName('a');
				
				for(let i=0; i<$sport.length; i++){//creo ciclo para darles las propiedades
					$sport[i].style.animationName= 'aparece';
					$sport[i].style.animationDelay= delay+'s';
					delay = delay + 0.05;//modifico el delay de cada uno asi no salen al mismo tiempo
				}
				for(let i=0; i<$moreSport.length; i++){//creo el ciclo para el submenu
					$moreSport[i].style.animationName='caen';
				}
			}	
		}else if(e.target.parentElement != $menButton[i] || e.target.classList != $icomenuDown[i].classList || e.target.classList != $icomenuUp[i].classList){
			//si el click no es igual a la seccion, remuevo  la class active
			$menuDeplegable[i].classList.remove('active');//remuevo la class si la tiene algun menu
			$rombo[i].classList.remove('romboOn');//remuevo la class si la tiene algun rombo
			$icomenuUp[i].classList.remove('ico-active');//remuevo la class si la tiene algun icono
			$icomenuDown[i].classList.add('ico-active');//remuevo la class si la tiene algun icono
		}
	}
});
//responsive
const $navi = document.getElementById('navi');
const $icomenu = document.getElementById('ico-menu');
const $icouser = document.getElementById('ico-user');
const $loin = document.getElementById('loin'); 
const $navlo = document.getElementById('x-user');
const $navCer = document.getElementById('ico-x');
let $navF = document.getElementById('act');
let $icoDown = $navF.getElementsByClassName('icon-chevron-down');//traigo los icomenu
let $icoUp = $navF.getElementsByClassName('icon-chevron-up');//traigo los icomenu
let $despl = $navF.getElementsByClassName('despl');
let $rs = $navF.getElementsByClassName('rs');

$navi.addEventListener('click', (e) =>{
	if(e.target.id == $icomenu.id){
		$navF.style.left= '0';
		$loin.style.right= '-900px';
	}else if(e.target.id == $icouser.id){
		$loin.style.right= '0';
		$navF.style.left= '-900px';
	}else if(e.target.id == $navCer.id){
		$navF.style.left= '-900px';
		$navF.style.overflowY= 'hidden';
	}else if(e.target.id == $navlo.id){
		$loin.style.right= '-900px';
	}
});
$navF.addEventListener('click', (e) =>{
	for(let i=0; i<$despl.length; i++){
		if(e.target.parentElement == $despl[i].id || e.target.classList == $icoDown[i].classList || e.target.classList == $icoUp[i].classList){
			$rs[i].classList.toggle('alto');
			$icoDown[i].classList.toggle('alto');
			$icoUp[i].classList.toggle('alto');
			$navF.style.overflowY= 'scroll';
		}else if(e.target.parentElement != $despl[i].id || e.target.classList != $icoDown[i].classList || e.target.classList != $icoUp[i].classList){
			$rs[i].classList.remove('alto');
			$icoUp[i].classList.remove('alto');
			$icoDown[i].classList.add('alto');
		}else{}
	}
});