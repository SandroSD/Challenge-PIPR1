import { useState } from 'react';

import aberturas from '../assets/img/Aberturas.png';
import equipamiento from '../assets/img/Equipamiento.png';
import terminaciones from '../assets/img/Terminaciones.png';
import activo from '../assets/img/Activo.png';

import dataService from '../services';

import AccordionLayout from './Accordion/AccordionLayout';

const SidebarLeft = () => {
    const [data, setData] = useState([]);
    const [isOptionClicked, setIsOptionClicked] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleData = async (categoria) => {
        try {
            const data = await dataService.data(categoria);

            setData(data);
            setIsOptionClicked(!isOptionClicked);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="top-15">
            <div className="left-0 bg-gray-500 p-1 fixed">
                <div className="h-screen grid grid-cols-1 items-center">
                    <div>
                        <img 
                            alt="aberturas"
                            src={aberturas}
                            onClick={() => handleData("abertura")}
                        />
                        <img 
                            alt="equipamiento"
                            src={equipamiento}
                            onClick={() => handleData("equipamiento")}
                        />
                        <img 
                            alt="terminaciones"
                            src={terminaciones}
                            onClick={() => handleData("terminaciones")}
                        />
                    </div>
                </div>
            </div>
            {isOptionClicked &&
                <div className="left-16 bg-gray-100 p-1 fixed h-full grid grid-flow-col">
                    <div className="w-[40em] max-w-2xl">
                        {data?.map((row, index) => (
                            <AccordionLayout
                                key={index}
                                items={row.items}
                                title={row.name}
                                index={index}
                                activeIndex={activeIndex}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>
                    <div className="flex items-center">
                        <img 
                            alt="activo"
                            src={activo}
                            onClick={() => handleData("abertura")}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default SidebarLeft;