const $articleMain = document.getElementById('article-main');
const $art = document.getElementById('art');

window.addEventListener('scroll', function(e){
		
	tar = window.scrollY/4.20;
	
	$art.style.width= tar+"px";
	if(window.scrollY >=10 && window.scrollY <= 1491.3){
		$articleMain.style.top= window.scrollY+'px';
	}
	else if(window.scrollY >= 1491.3){
		$articleMain.style.top='1491.3px';
	}
});