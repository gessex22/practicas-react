import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp", () => {
  test(" getHeroeById debe retornar un Heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({id: 1,name: "Batman",owner: "DC"});




  });

      test(" getHeroeById debe retornar undefined si no existe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy()



    
  });



 test(" retornar los heroes de DC", () => {
    const id = 100;
    const heroesOwner = getHeroesByOwner('DC')

    expect(heroesOwner).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ])

    expect(heroesOwner.length).toBe(3)
    
  });
  test(" retornar los heroes de Marvel", () => {
     const heroesOwner = getHeroesByOwner('Marvel')

    expect(heroesOwner.length).toBe(2)
    
  });


});
