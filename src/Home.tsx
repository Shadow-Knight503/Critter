import { useState, useEffect } from 'react'
import Waves from './assets/Waves.svg'
import { collection,
  query, onSnapshot } from 'firebase/firestore'
import { Db } from "./Config"


function Home() {
    const [Proj, setProj] = useState([{
        Name: "", Descrp: "", Img: "", Price: "", ID: ""
        }])
  
    const ProjRef = collection(Db, "Critter_Purchase")
  
    useEffect(() => {
      const qryProj = query(ProjRef)
      onSnapshot(qryProj, async (snapshot) => {
          let Proj: any = []
  
          snapshot.forEach((doc) => {
            Proj.push({...doc.data(), 
                ID: doc.id})
          })
  
        setProj(Proj)   
      })
    }, [])
    console.log(Proj)

    return (
        <>
            <div className='container'>
                <img src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX42494814.jpg'
                    className='w-full max-h-[30vh] rounded mt-4'/>
                <p className='font-Oswd mt-4 text-5xl text-Text'>Exclusive Deals</p>
            </div>
            <div className='flex gap-2 flex-wrap justify-center items-center'>
                {Proj.map((el) => (
                    <div key={el.ID} className='bg-Thir shadow-xl hover:-translate-y-2 p-[1ch] rounded max-h-[50vh] max-w-[45vw] m-[0.2ch]'>
                        <a href={'./products/' + el.ID}><img src={el.Img} className='w-[20vh] h-[25vh]'/></a>
                        <p className='truncate mt-[1ch] mb-0 font-Oswd text-[2ch] text-slate-200'>{el.Name}</p>
                        <p className='font-Oswd text-xl text-Text'>Rs {el.Price}</p>
                    </div>
                ))}
            </div>
            <img className='aspect-[960/200] w-full' src={Waves} />
        </>
    )
}

export default Home