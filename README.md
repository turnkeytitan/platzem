# Platzem

Platzem es un idioma inventado para el [curso de fundamentos de javascript](https://platzi.com/js) de [platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina con "ar", se quitan esas dos letras
- Si la palabra inicia con "Z", se le añade "pe" al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palindromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúscuas y minúsculas

## Instalación

```
npm install platzem
```

## Uso

```
Import platzem from 'platzem'

platzem("programar") //program
platzem("Zorro") //Zorrope
platzem("Zarpar") //Zarppe
platzem("abecedario") // abece-dario
platzem("sometemos") //SoMeTeMoS

```

## Créditos

- [Samuel Sanchez](https://github.com/turnkeytitan/)

## Licencia
[MIT](https://opensource.org/licenses/MIT)
