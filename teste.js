var xhr = new XMLHttpRequest();
xhr.open("GET","http://www1.folha.uol.com.br/colunas/guilhermeboulos/2015/12/1717556-o-impeachment-temer-e-dunga.shtml");

xhr.onload = function(){
	document.write(xhr.response);
}

xhr.send();