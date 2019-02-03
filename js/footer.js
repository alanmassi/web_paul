//idioma
const $idioma = document.getElementById('idioma');
const $listIdio = document.getElementById('idioma-main');
let $ico = $idioma.getElementsByClassName('icomenu');

document.addEventListener('click', (e) =>{
	if(e.target.parentElement == $idioma){
		$listIdio.classList.toggle('idiomaOn');
			for(var t=0;  t<$ico.length; t++){
				$ico[t].classList.toggle('idi-act');
			}
	}else{
		for(var i=0; i<$ico.length; i++){
			if(e.target.classList == $ico[i].classList || e.target.classList == $ico[i].classList){
				$listIdio.classList.toggle('idiomaOn');
				for(var t=0;  t<$ico.length; t++){
					$ico[t].classList.toggle('idi-act');
				}
			}
		}
	}
});