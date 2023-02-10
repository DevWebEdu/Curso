import { getImagen } from "../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => { 

    test('getImagens pruebas', async () => { 
        const url = await getImagen()
        expect(typeof url).toBe('string')
     }) 


 })
//   si te sale un error al probar el await en testing
// se debe crear un arhivo 