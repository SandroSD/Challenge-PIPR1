import plus from '../assets/img/+.png';
import minus from '../assets/img/-.png';

import flechaArriba from '../assets/img/Flecha Arriba.png';
import flechaAbajo from '../assets/img/Flecha Abajo.png';
import flechaIzquierda from '../assets/img/Flecha Izquierda.png';
import flechaDerecha from '../assets/img/Flecha Derecha.png';

const SidebarRight = () => {
    const logItem = (item) => {
        console.log(`El ${item} fue clickeado.`);
    }

    return(
        <div className="right-0 p-1 fixed">
                <div className="h-screen grid grid-cols-1 relative">
                    <div className="grid grid-cols-2 text-center">
                        <div>
                            <button
                                className="rounded bg-gray-200 p-2"
                                onClick={() => logItem("botón fijar")}
                            >
                                Fijar
                            </button>
                        </div>
                        <div>
                            <button
                                className="rounded bg-gray-200 p-2"
                                onClick={() => logItem("botón borrar")}
                            >
                                Borrar
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="absolute bottom-20 grid grid-cols-2 cursor-pointer">
                            <div className="h-5 w-5">
                                <img 
                                    alt="plus"
                                    src={plus}
                                    onClick={() => logItem("botón mas")}
                                />
                                <img 
                                    alt="minus"
                                    src={minus}
                                    onClick={() => logItem("botón menos")}
                                />
                            </div>
                            <div className="grid grid-cols-3">
                                <div>
                                    <img
                                        className="mt-3"
                                        alt="flechaIzquierda"
                                        src={flechaIzquierda}
                                        onClick={() => logItem("botón flecha izquierda")}
                                    />
                                </div>
                                <div>
                                    <img
                                        alt="flechaArriba"
                                        src={flechaArriba}
                                        onClick={() => logItem("botón flecha arriba")}
                                    />
                                    <img
                                        alt="flechaAbajo"
                                        src={flechaAbajo}
                                        onClick={() => logItem("botón flecha abajo")}
                                    />
                                </div>
                                <div>
                                    <img
                                        className="mt-3"
                                        alt="flechaDerecha"
                                        src={flechaDerecha}
                                        onClick={() => logItem("botón flecha derecha")}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    )
}

export default SidebarRight;