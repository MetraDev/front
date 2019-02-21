const uuid = require ('uuid')

describe ('Mock de funciones', ()=> {
    test ('mockName getMockName', () => {
        const mock = jest.fn();
        mock.mockName('miFuncion');
        expect(mock.getMockName()).toBe('miFuncion')

    })
    test ('toHaveBeenCalledWith', () => {
        const mock = jest.fn();
        mock('funciona')
        mock(10)


        expect(mock).toHaveBeenCalledWith('funciona')
        expect(mock).toHaveBeenCalledWith(expect.any(String))

    })
    test ('mock return value', () => {
        const mock = jest.fn();
        mock
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false)
            .mockReturnValueOnce('funciona')



        expect(mock()).toBe(true)
        expect(mock()).toBe(false)
        expect(mock()).toBe('funciona');


    })
    test("mock de libreria moment", ()=>{

        const mock = jest.fn((timestamp =0)=>require ('moment')(timestamp));
        const hoy = moment('21/2/2019');
        const mañana = hoy.add(1,'day')
        expect(moment).toHaveBeenCalledTimes(1)
        expect(moment).toHaveBeenCalledWith('21/2/2019')
        expect(mañana.format('YYYY-MM-DD')).toBe('1970-01-02')


    })
    test("mock de libreria uuid", ()=>{

        const mock = jest.fn();
        const id = uuid()
        const nextId = uuid + 1

        expect(uuid).toHaveBeenCalledTimes(1)
        expect(nextId.format(String)).toBe(id+1)


    })
})
