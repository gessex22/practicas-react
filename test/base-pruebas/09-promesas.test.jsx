import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en Promesas", () => {
  test("getHeroeByIdAsync debe dee retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then( heroe => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });

      done();
    });
  });

test("getHeroeByIdAsync debe retornar un error de not found", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch( error => {
        console.log(error)      
      done();
    });
  });


});



