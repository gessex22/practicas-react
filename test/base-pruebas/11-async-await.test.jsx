import { getImagen } from "../../src/base-pruebas/11-async-await"

describe(`Pruiebas de asynz await ` , ()=>{

    test(`Debe de retornar url de imagen `,async ()=>{
    
      const url = await getImagen()
      console.log(url)
    
    expect( typeof url ).toBe('string')
    })


})