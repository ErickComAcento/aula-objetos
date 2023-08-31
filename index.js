/* EXERCÍCIO 1 DE INTERPRETAÇÃO
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

RESPOSTA = O primeiro console vai aparecer "Matheus Nachtergaele"
O segundo vai aparecer sempre o ultimo nome da array de elenco
e o terceiro vai aparecer Canal: "Globo", horario: "14h" */



/* EXERCÍCIO 2 DE INTERPRETAÇÃO
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

RESPOSTA = O 1° console vai mostrar o objeto do cachorro
o segundo vai mostrar o objeto do gato (clonado do cachorro
mas com nme diferente), e o terceiro console vai ser clonado
do gato mas trocando todas as letras "a" por "o". E os 3 pontos
clonam um objeto. */ 



/* EXERCÍCIO 3 DE INTERPRETAÇÃO
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

RESPOSTA = O primeiro vai aparecer o objeto da pessoa
e a palavra "backender" ao lado, e o segundo a mesma
coisa porém com a palavra "altura", pois ambas as palavras
estão entre parenteses */





/* EXERCÍCIO 1 DE ESCRITA DE CÓDIGO
const pessoa = {
	nome: "Erick",
	apelidos: ["Tibúrcio", "Tiburcinho", "Tiburção"]
}

const funcaoBraba = (pessoas) => {
	console.log(`Eu sou ${pessoa1.nome}, mas pode me chamar de ${pessoa1.apelidos}.`)
}

const pessoa1 = {
	...pessoa,
	apelidos: ["Apelido Incrível", "To sem criatividade", "Apelidão"]
}

funcaoBraba(pessoa1) */



const pepessoa = {
	nome: "Edenilson"
	idade: 29
	profissão: "Pedreiro"
}

const pepessoa1 = {
	nome: "Claudiomar"
	idade: 34
	profissão: "Eletricista"
}


