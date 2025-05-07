describe('Pruebas de pruebas', ()=> {

    test('esta prueba no puede fallar',()=>{

    if (1 === 0 ){ throw new Error('Fail programado')}

    //initialization

    const message1 = 'fin del mundo';

    //estimult 

    const message2= message1.trim();

    //observ

    expect(message1).toBe(message2)

})


})



