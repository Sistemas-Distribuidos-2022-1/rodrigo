# rodrigo

exercicio um:

req.body =
{
	"nome": "Diego",
	"cargo": "programador",
	"salario": 15000
}

response =
{
	"message": "Diego, salario: R$ 17700"
}

exercicio dois:

req.body =
{
  "nome": "Géssica",
  "sexo": "F",
  "idade": 16
}

response = 
{
	"message": "Géssica é menor de idade"
}

exercicio tres:

req.body = 
{
  "n1": 6,
  "n2": 6,
  "n3": 6
}

response = 
{
	"message": "Aprovado"
}

exercicio quatro:

req.body = 
{
  "altura": "1.80",
  "sexo": "M"
}

response = 
{
	"message": "Peso ideal: 72.86000000000001"
}

exercicio cinco:

req.body = 
{
  "idade": "15"
}

response = 
{
	"message": "juvenil B"
}

exercicio seis:

req.body = 
{
  "nome": "Géssica",
  "nivel": "A",
  "salario": 5000,
	"dependentes": true
}

{
  "nome": "Géssica",
  "nivel": "A",
  "salario": 5000,
	"dependentes": false
}

response = 
{
	"message": "Salario: 4600"
}

{
	"message": "Salario: 4850"
}

exercicio sete:

req.body = 
{
  "idade": "65",
  "tempoServiço": "29"
}

{
  "idade": "65",
  "tempoServiço": "30"
}

response = 
{
	"message": "Não pode aposentar"
}

{
	"message": "Pode aposentar"
}

exercicio oito:

req.body = 
{
  "saldoMedio": 201
}

response = 
{
	"message": "Crédito: 40.2"
}

exercicio nove:

req.body = 
{
  "valor": 9,
	"naipe": 3
}

response = 
{
	"message": "Carta: 9 de copas"
}
