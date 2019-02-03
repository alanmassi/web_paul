//fasd
const $guia = document.getElementById('guia');
	window.addEventListener('scroll', (e) => {
		$guia.style.top= (window.scrollY+550)+'px';
		if(window.scrollY >= 1205){
			$guia.style.display= 'flex';
			$guia.style.zIndex= '400';
		}else{
			$guia.style.display= 'none';
		}
	});