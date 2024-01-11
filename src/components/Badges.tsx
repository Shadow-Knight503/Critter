//import { useState } from "react";

function Badge() {
    //const [bg, setBg] = useState('')

    return (
        <>
            <div className='flex relative justify-center gap-4 flex-wrap pb-9 mt-4
                over:bg-[url(https://res.cloudinary.com/meme-topia/image/upload/v1704297020/Critter/image_2024-01-03_212013658_g8dqfx.png)]'>
                <div className="overflow-hidden -z-1 absolute transition-all duration-[2s] ease-out -mt-4 w-full h-full">
                    <div className="flex w-[200%] hover:-translate-x-[50%] h-full transition-all duration-[2s] ease-out" style={{}}>
                        <div className="w-full h-full bg-red-500" />
                        <div className="w-full h-full bg-blue-500" />
                    </div>
                </div>
                <div className='w-20 h-20 z-10 rounded bg-white'></div>
                <div className='w-20 h-20 rounded bg-white'></div>
                <div className='w-20 h-20 rounded bg-white'></div>                    
                <div className='w-20 h-20 rounded bg-white'></div>
                <div className='w-20 h-20 rounded bg-white'></div>
                <div className='w-20 h-20 rounded bg-white'></div>
            </div>
        </>
    )
}

export default Badge
