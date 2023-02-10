import { getHeroeByIdAsync } from "../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas.test.js', () => { 
    test('getHeroByIdAsync retorna un heroe segun su ID', (done) => {
        const id=1
        getHeroeByIdAsync(id)
        .then((data)=>{
                expect(data).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
                done()
        })
    })

    test('getHeroByIdAsync retorno esperado un error', (done) => { 
        const  id=100       
        getHeroeByIdAsync(id)
        .catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe')
            done()
        })
     })
 })