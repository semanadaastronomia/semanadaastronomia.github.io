function fnDescobre() {
	//Ele vai salvar no navegador uma string parecida com "0010010011101"
	let sResposta = '';
	for (i = 1; i <= 12; i++)
		sResposta += document.getElementById('slcQ' + i).value;
	sessionStorage.setItem('sResposta', sResposta);
	window.location.href = 'final.htm';
}
