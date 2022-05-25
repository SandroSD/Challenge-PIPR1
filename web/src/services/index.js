import dataAberturas from '../data/aberturas.json';
import dataEquipamiento from '../data/equipamiento.json';
import dataTerminaciones from '../data/terminaciones.json';

/**
 * Al intentar hacer la llamada con axios, salian problemas con los CORS.
 * Intenté solucionarlo pero desde el front no tenia muchas alternativas,
 * por lo que no pude hacer los llamados como deberían ser.
 * Deje una alternativa de todas maneras bajando la información manualmente
 * y en base a la categoría clickeada muestro en pantalla lo deseado.
 * Las fotos tal vez no las puedas ver todas porque un día
 * se veían y otro día aparecía como que ya no estaban mas alojadas en la url que
 * tenían.
 */
class DataServices {
    async data(categoria) {
        try {
            //const a = await axios.get(`https://us-central1-prueba-front-280718.cloudfunctions.net/${categoria}`);
            let data;
            switch (categoria) {
                case 'abertura':
                    data = dataAberturas;
                break;
                case 'equipamiento':
                    data = dataEquipamiento;
                break;
                case 'terminaciones':
                    data = dataTerminaciones;
                break;
                default:
                    throw new Error("Error al cargar la data.");
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new DataServices();