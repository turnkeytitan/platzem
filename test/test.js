const expect = require('chai').expect
const platzem = require('..').default
describe('#Platzem', function () {
	it('Si la palabra termina con "ar", se quitan esas dos letras', function () {
		const translation = platzem("programar")
		expect(translation).to.equal("program")
	})
	it('Si la palabra inicia con "Z", se le añade "pe" al final', function () {
		const translation = platzem("zorro")
		const translation2 = platzem("zarpar")

		expect(translation).to.equal("zorrope")
		expect(translation2).to.equal("zarppe")
	})
	it('Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guión medio', function () {
		const translation = platzem("abecedario")

		expect(translation).to.equal("abece-dario")
	})
	it('Por último, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúscuas y minúsculas', function () {
		const translation = platzem("sometemos")

		expect(translation).to.equal("SoMeTeMoS")
	})
})
