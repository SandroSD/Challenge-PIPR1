import React from 'react';

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

const AccordionLayout = ({ title, items, index, activeIndex, setActiveIndex }) => {
    const handleSetIndex = (i) => {
        (activeIndex !== i) && setActiveIndex(i);
    }
  
    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex w-full justify-between p-2 mt-2 rounded bg-gray-400'>
                <div className='flex'>
                    <div className='text-white font-bold'>{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                    (activeIndex === index) 
                    ? <BsFillArrowDownCircleFill className='w-8 h-8' />
                    : <BsFillArrowUpCircleFill className='w-8 h-8' />
                    }
                </div>
            </div>
            {(activeIndex === index) && (
                <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6 grid grid-cols-3 place-items-center">
                    {items?.map((item, index) => (
                        <div
                            key={index}
                            className="text-center font-bold text-lg"
                        >
                            <img
                                className="m-1 h-[20vh] p-1"
                                alt=""
                                src={item.img}
                            />
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
  };

export default AccordionLayout;