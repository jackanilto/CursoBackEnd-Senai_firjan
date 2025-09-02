
programa 
{
	inclua biblioteca Util 
	
	funcao inicio() 
	{
		inteiro contador = 15
		
		enquanto (contador > 0)
		{
			limpa()
			escreva ("Detonação em: ", contador)
		  	
		  	contador = contador -1
		  	Util.aguarde(1000) // Aguarda 1000 millisegundos = 1 segundo)
		}

		limpa()
		escreva ("Booooom!\n")
	}
}

