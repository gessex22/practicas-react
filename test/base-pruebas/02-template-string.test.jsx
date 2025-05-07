import { getSaludo } from "../../src/base-pruebas/02-template-string"



describe('Pruebas de 02-template', ()=>{

    test('getSaludo debe de retornar "hola gesse" ', ()=>{
    

        const name= 'gessemberg'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)


     })

})
