import React from 'react'


const BodyContent = () => {
    return (
        <section className='relative mx-auto flex justify-center mt-12'>
                <form className='w-full'>
                    <div className='w-full flex justify-center'>
                        <textarea name="content" id="content" className='ring ring-1 ring-black w-[70%] h-[1025px] resize-none outline-none border-none'>

                        </textarea>
                    </div>
                </form>
        </section>
    )
}


export default BodyContent