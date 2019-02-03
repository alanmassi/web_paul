let $nav = document.getElementById('nav');
let $navNe = $nav.getElementsByTagName('a');
let $spaNe = $nav.getElementsByTagName('span');
let $sectione = document.getElementById('sectione');
let $gasus = $sectione.getElementsByClassName('gaSus');

$nav.addEventListener('click', (e) =>{
	for(let i=0; i<$navNe.length; i++){
		for(let t=0; t<$navNe.length; t++){
			$gasus[i].classList.remove('activeON');
			$navNe[i].classList.remove('on');
		}
		if(e.target.innerText == $navNe[i].innerText || e.target.innerText == $spaNe[i].innerText){
			$gasus[i].classList.add('activeON');
			$navNe[i].classList.add('on');
		}
	}
});
//menuburguer
const $burButton = document.getElementById('iconPPs');
const $panel = document.getElementById('panel');

const actiButton = window.matchMedia('screen and (max-width: 480px)');

actiButton.addListener(validation)

function validation(event){
	if(event.matches){
		$burButton.addEventListener('click', mostrar);
	}else{
		$burButton.removeEventListener('click', mostrar);
	}
	
}
function mostrar(){
	if($panel.classList.contains('actapp')){
		$panel.classList.remove('actapp');
	}else{
		$panel.classList.add('actapp');					
	}
}