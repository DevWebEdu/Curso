import { usContext } from "../src/base-pruebas/06-deses-obj"

describe('06-deses-obj pruebas testing', () => {
    test('usContext', () => { 
        const {nombreClave,anios,latlng:{lat,lng}}= usContext({clave:'Eduardo',edad:23})
        const objSinDeses = usContext({clave:'Eduardo',edad:23})
        // console.log(objSinDeses) 
        expect(nombreClave).toBe('Eduardo')
        expect(anios).toBe(23)
        // aca evaluamos con toEqual(obj), si el objeto esperado es igual al objeto procesado
        expect (objSinDeses).toEqual(
            {
                nombreClave: 'Eduardo',
                anios: 23,
                latlng: { lat: 14.1232, lng: -12.3232 }     
              }
        )
     })

})