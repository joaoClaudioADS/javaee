/**
 * validaçao de formulario
 * @autor Dev Claudio gonzalez
 */

function validar() {
	let nome = frmContato.nome.value
	let fone = frmContato.fone.value
	if (nome === "") {
		alert('preencha o campo Nome')
		frmContato.nome.focus()
		return false
	} else if (fone === "") {
		alert('preencha o campo Fone')
		frmContato.nome.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}