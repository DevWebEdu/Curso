import { getHeroeById, getHeroesByOwner } from "../src/base-pruebas/08-imp-exp";

describe('Pruebas en  08-imp-exp', () => { 


    // Buscamos que las pruebas sean independientes
    test('getHeroById retorna un heroe por su ID ', () => { 
        
        const id=1;
        const hero = getHeroeById(id);
       
        expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
     })


     test('getHeroById retornar undefined si no existe', () => { 
        
        const id=100;
        const hero = getHeroeById(id);
       
        expect(hero).toBeFalsy();
        // expect(hero).toEqual( { id: 1, name: 'Batman', owner: 'DC' })
     })

    // Tarea 
    // Debe retornar un arreglo de con los heroes de DC
    // length === 3
    //  toEqual al arreglo filtrado 

    // debe de retornar un arreglo con los heroes de Marvel
    test ('getHeroesByOwner debe retornar un arreglo de los creadores de los heroes', ()=>{

        const creador = 'Marvel'
        const  arregloHeroes = getHeroesByOwner(creador)
        
        
        expect(arregloHeroes.length).toBe(2)
        expect(arregloHeroes).toEqual(

            [
                { id: 2, name: 'Spiderman', owner: 'Marvel' } ,
                { id: 5, name: 'Wolverine', owner: 'Marvel' }    ]


        )

    })
    
         
})



