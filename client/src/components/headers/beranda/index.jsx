import React, { useRef, useEffect, useState } from 'react'

import { FaCopy, FaPaste  } from "react-icons/fa";

import './style.css'

const Beranda = () => {
    const refElement = {
        a: useRef(null),
        b: useRef(null),
        c: useRef(null)
    }

    const [nilai, setNilai] = useState({
        a: '',
        b: '',
        c: ''
    })

    const handleClick = (e) => {
        const target = e.target

        // Toggle 'active' class on the clicked element
        target.classList.toggle('active');

        // Remove 'active' class from all other elements
        Object.values(refElement).forEach((elements) => {
            if (elements.current !== target) {
            elements.current.classList.remove('active');
            }
        });

        // Check if each element has the 'active' class
        Object.values(refElement).forEach((elements) => {
            const isActive = elements.current.classList.contains('active');
            console.log(`Element contains 'active' class: ${isActive}`);
        });
        
    }

   

    return  (
        <div className='flex bg-[#eee] px-8 relative w-full h-full py-4'>
           <div className='relative w-[50%] flex'>
                <div>
                    <div className='flex items-center mb-7'>
                        <FaCopy color='#0f4269' fontSize='1.35em' cursor='pointer'/>
                        <p className='font-Quick font-[500] ml-1 cursor-pointer'>Copy</p>
                    </div>
                    <div className='flex items-center'>
                        <FaPaste color='#0f4269' fontSize='1.5em' cursor='pointer'/>
                        <p className='font-Quick font-[500] ml-1 cursor-pointer'>Paste</p>
                    </div>
                </div>
                <div className='mx-4'>
                    <form>
                    <div className='w-[250px] grid grid-cols-6 grid-rows-2 gap-4 '>
                        <div className='col-span-4 row-span-1'><input type="text" defaultValue='Arial' className='w-full h-full px-2'/></div>
                        <div className='col-span-2 row-span-1'><input type="number" id='number' className='w-full h-full px-1 appearance-none' defaultValue={15} /></div>
                        <div ref={refElement.a} onClick={handleClick} className='col-span-2 row-span-1   font-bold text-center cursor-pointer' id='pil'>B</div>
                        <div ref={refElement.b}  onClick={handleClick} className='col-span-2 row-span-1 italic font-serif  text-center cursor-pointer' id='pil'>I</div>
                        <div ref={refElement.c}  onClick={handleClick} className='col-span-2 row-span-1 underline  text-center cursor-pointer' id='pil'>U</div>
                    </div>

                    </form>
                </div>
                <div>
                
                </div>
           </div>
           <div>test</div>
           <div>yo</div>
        </div>
    )
}

export default Beranda