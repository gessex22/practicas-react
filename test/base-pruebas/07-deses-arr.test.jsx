import { string } from "prop-types"
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('PRuebas de desestructuracion 07', ()=>{

    test('debe retornar un string y un numero', ()=>{
    
    const [ letters,numbers] = retornaArreglo()

    expect(letters).toBe('ABC')
    expect(numbers).toBe(123)

    expect(typeof letters).toBe('string') //good for string
    expect(typeof numbers).toBe('number') // good for numbers

    expect(letters).toStrictEqual( expect.any(String)) // anything string 

    })



})