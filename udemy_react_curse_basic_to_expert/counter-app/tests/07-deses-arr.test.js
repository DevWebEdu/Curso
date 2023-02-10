import { retornaArreglo } from "../src/base-pruebas/07-deses-arr"

describe('testeando 07-deses-arr', () => { 
    test('debe retornar un arreglo', () => { 
        const [letters , numbers] = retornaArreglo()
        expect(typeof letters).toBe("string")
        expect(typeof numbers).toBe("number")
    })
})



