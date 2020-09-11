const productos = 
[
    {nombre: 'Ordenador PC', precio: 2000, departamento: 'Tecnología'},
    {nombre: 'Juego de loza', precio: 50, departamento: 'Hogar'},
    {nombre: 'Escritorio', precio: 200, departamento: 'Hogar'},
    {nombre: 'Movil Iphone', precio: 3000, departamento: 'Tecnología'}
]


const pTecnología = productos.find(item => { // encontrar elementos dentro de un array
    return item.departamento == 'Tecnología'
})

console.log(pTecnología);


/*const productosIva = productos.map(item => { // nos permite modificar un array y nos devuelve uno nuevo pero modifica el original
    item.precio = item.precio + item.precio * 0.20; 
    return item // devolvemos el item ya modificado
})

console.log(productosIva); */

// ---- para evitar modificar el array original hacemos esto: 

const productosIva2 = productos.map(item => { // nos permite modificar un array (tener cuidado porque modifica el array original)
    let newPrecio = item.precio + item.precio * 0.20;
    return {...item, precio: newPrecio};
})

console.log(productosIva2); // aquí obtenemos los precios de los productos + el iva 

console.log(productos); // al devolver productos vemos que el array se mantiene como el original (su precio sin iva)




// --------------------- continuar minuto 7:44 con .filter

// ********************* video https://www.youtube.com/watch?v=-61Xe92xw-I