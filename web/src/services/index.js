import dataAberturas from '../data/aberturas.json';
import dataEquipamiento from '../data/equipamiento.json';
import dataTerminaciones from '../data/terminaciones.json';

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