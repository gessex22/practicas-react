import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en funcione 05", () => {
  test("test user derbe de retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "papichulo123",
    };

    const user = getUser()


    expect(testUser).toEqual(user)
  });


    test('Tarea de un name en el objeto', ()=>{
    
        const name = 'gomelo'
        const user = getUsuarioActivo(name)

        expect(user).toEqual({
        uid:'ABC123',
        username: name
        })
        
    
    
    })

});
