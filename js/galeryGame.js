//galerry games------------------------------------
const $gallery = document.getElementById('gallery-slider');
const $proximo = document.getElementById('nexte');
const $anterior = document.getElementById('preve');
let posicion=['0', '-170px', '-340px', '-510px', '-680px'];
var lugar = 0;

pasar(lugar);
function pasar(lugar){
	document.getElementById('gallery-slider-container').addEventListener('click', (e) =>{
		
		if(e.target.id == $anterior.id || e.target.id == 'prevet'){
			if(lugar>0){
				lugar=lugar - 1;
				$gallery.style.left= posicion[lugar];
			}else if(lugar == 0){
				lugar = 0;
			}
		}else if(e.target.id == $proximo.id || e.target.id == 'nextet'){
			if(lugar < 4){
				lugar=lugar + 1;
				$gallery.style.left= posicion[lugar];
			}else if(lugar == 4){
				lugar = 4;
			}
		}else{}
	});
}