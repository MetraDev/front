const expect = require ('expect');


describe ('Test unitarios clase ', () => {
    it('comparación directa de un valor simple', ()=>{
        expect(1+1).toBe(2);
        expect({name:'sergio'}).not.toBe({name:'sergio'});
    })
    it('.toEqual () - comparaciono de datos complejos', ()=>{
        expect([1]).toEqual ([1]);
        expect({name:'sergio'}).toEqual({name:'sergio'});
    })


})