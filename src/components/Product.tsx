import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDoc, doc, documentId,
    query, onSnapshot, where } from 'firebase/firestore'
import { Db } from "../Config"

function Prod() {
    const Prm = useParams()

    const [Cloth, setCloth] = useState({
        Name: "", Descrp: "", Img: "", Price: "", ID: ""
    })
  

    useEffect(() => {
        const ClothRef = collection(Db, "Critter_Purchase")
        const qryCloth = query(ClothRef, where(documentId(), '==', Prm.pid))
        
        onSnapshot(qryCloth, async (snapshot) => {
            let Cloth: any = {}
    
            snapshot.forEach((doc) => {
                Cloth = {...doc.data(), ID: doc.id}
            })
            setCloth(Cloth)   
        })
      }, [])

    return (
        <>
            <br />
            <div className='container flex flex-wrap justify-center items-center px-[5ch]'>
                <div className='mt-[2.5vh] min-w-[25em] bg-Thir rounded'>
                    <img className='rounded w-full h-full p-[1.7ch]' src={Cloth.Img} />
                </div>
                <div className='m-[2.5vh] max-w-[40em] text-slate-200  font-Comf'>
                    <p className='text-4xl font-Oswd text-Text'>{Cloth.Name}</p>
                    <p className='text-2xl'>Rs {Cloth.Price}</p>
                    <p className='text-xl'>{Cloth.Descrp}</p>
                </div>
            </div>
        </>
    )
}

export default Prod
