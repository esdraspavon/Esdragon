# Esdragon

Esdragon es un idioma inventado para aprender como manejar módulos de npm

## Descripción

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final.
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas
  
## Instalación

```
npm install esdragon
```

## Uso 
```
import esdragon from 'esdragon'
esdragon("Programar") // Program
esdragon("Zorro") // Zorrope
esdragon("Zarpar") // Zarppe
esdragon("abecedario") // abece-dario
esdragon("sometemos") // SoMeTeMoS
```

## Créditos
- [Esdras Pavón](https://esdraspavon.com)

## Licencia
MIT