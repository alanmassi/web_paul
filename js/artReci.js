//articulos recientes
const $noticeRecent = document.getElementById('noticeRecent-container'); 
let $recentCont = document.getElementById('recent-cont');
const $titulo = document.getElementById('recent-title-g').offsetHeight;
const $alto =$recentCont.offsetHeight + $titulo;
let $childrens = $noticeRecent.getElementsByTagName('a');
var total = 0;
var $altura = [2072, 3072, 4072, 5072];
document.getElementById('ampliar').addEventListener('click', function(){
	$noticeRecent.style.height= $altura[total]+'px';
	total = total+1;
	return total;
});