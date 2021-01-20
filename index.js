const generateArr = (min, max) => {
    let arr = []
    //Generamos la longitud del arreglo (entre 10 y 100)
    let arr_length = Math.floor(Math.random() * ((100+1) - 10) + 10);

    for (let i = 0; i <= arr_length; i++) {
        let num = Math.floor(Math.random() * ((max+1) - min) + min);
        arr.push(num)
    }

    return arr
}

const qtyPares = (arr) => {
    let count = 0

    arr.forEach(number => {
        if (number % 2 == 0) count++
    });

    return count
}

const qtyImpares = (arr) => {
    let count = 0

    arr.forEach(number => {
        if (number % 2 != 0) count++
    });

    return count
}

const qtyMayoresMil = (arr) => {
    let count = 0

    arr.forEach(number => {
        if (number > 1000) count++
    })

    return count
}

const maxValue = (arr) => {
    let max = 0

    arr.forEach(number => {
        if (number > max) max = number
    })

    return max
}

const minValue = (arr) => {
    let min = arr[0]

    arr.forEach(number => {
        if (number < min) min = number
    })

    return min
}

const prom = (arr) => {
    let acum = 0

    arr.forEach(number => {
        acum += number
    })

    return acum / arr.length
}

const random_arr = generateArr(0, 2000)

const qty_elements = random_arr.length

const porc_pares = qtyPares(random_arr) * 100 / qty_elements
const porc_impares = qtyImpares(random_arr) * 100 / qty_elements
const porc_mayores_mil = qtyMayoresMil(random_arr) * 100 / qty_elements
const max_value = maxValue(random_arr)
const min_value = minValue(random_arr)
const porc_prom = prom(random_arr) * 100 / max_value

const porc_min = min_value * 100 / max_value

console.log(`Porcentaje de numeros pares: ${porc_pares}%`)
console.log(`Porcentaje de numeros impares: ${porc_impares}%`)
console.log(`Porcentaje de numeros mayores a 1000: ${porc_mayores_mil}%`)
console.log(`Mayor valor: ${max_value}`)
console.log(`Menor valor: ${min_value}`)
console.log(`Asumiendo ${max_value} como el 100% tenemos:`)
console.log(`Porcentaje del menor valor con respecto al mayor valor: ${porc_min}%`)
console.log(`Porcentaje del promedio de los valores con respecto al mayor valor: ${porc_prom}%`)