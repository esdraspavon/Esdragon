const expect = require('chai').expect
const esdragon = require('..').default

describe('#platzom', function(){

	it('Si la palabra termina con "ar", se le quitan esas dos letras.', function(){

		const translation = esdragon("Programar")
		expect(translation).to.equal("Program")

	})
	it('Si la palabra inicia con Z, se le añade "pe" al final.', function(){

		const translation = esdragon("Zorro")
		expect(translation).to.equal("Zorrope")

		const translation2 = esdragon("Zarpar")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio.', function(){
		const translation = esdragon("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas.', function(){
		const translation = esdragon("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
		
	})


})