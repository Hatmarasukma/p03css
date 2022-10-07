//smoothScroll

var posY = 0;
var jarak = 15;

function smoothScroll(id){
	var target = document.getElementById('id').offsetTop;  //jarak antara atas dan div

	var scrollAnimate = setTimeout(function(){
									smoothScroll(id);
									}, 30) //fungsi, waktu

posY = posY + jarak;

//berhenti pada bagian tertentu
	if (posY >= target){
		clearTimeout(scrollAnimate);
		posY = 3;
	}else{
		window.scroll(0, posY) //x dan y
	}
	return false;
}

//fungsi untuk falidasi formular

function validasi(form){
	var lolos = true;

	for(i=0; i<3; i++){
		if (form[i].value.trim().length <= 0) {

//hanya kalau belum ada error
			if(form[i].nextElementSibling.className != 'error'){
			form[i].style.borderColor = 'red'
			form[i].insertAdjacenHTML('afterend', "<div class='error'> tidak boleh kosong </div>");
	}
			lolos false;
		}else{
			//sebelumnya sudah ada error., hapus error


		}//end for

		return lolos;
	}
	
}











