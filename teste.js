var xhr = new XMLHttpRequest();
xhr.open("GET","http://www1.folha.uol.com.br/poder/2015/12/1718219-mbl-distribui-panfletos-em-feira-livre-de-favela-de-sp.shtml");

xhr.onload = function(){
	document.write(xhr.response);
}

xhr.send();