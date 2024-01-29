import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { Db } from "../Config"
import Team from './Team'

function Proj() {
    const Prm: any = useParams()

    const [Proj, setProj] = useState({
        Name: "", Descrp: "", Img: "", Numb: "", Budget: "", ID: "", Status: "", 
        Team: {}, Load: false
    })

    useEffect(() => {
        const getProj = async () => {
            const ProjRef = doc(Db, 'Crit_Proj', Prm.pid)
            const ProjSnap = await getDoc(ProjRef)
            const Proj: any = {...ProjSnap.data(), ID: ProjSnap.id, Load: true} 
            setProj(Proj)
        }
        getProj()
    }, [])

    return (
        <>
            <br />
            <div className='container flex gap-2'>
                <div className='grow'>
                    <div className='flex mt-[2.5vh] max-w-[60vw] bg-Thir rounded'>
                        <img className='object-cover rounded min-w-1/4 min-h-1/4 p-[1.7ch]' src={Proj.Img} />
                        <div className='m-[2.5vh] max-w-[40em] text-slate-200  font-Comf'>
                            <p className='text-4xl font-Oswd text-Text'>{Proj.Name}</p>
                            <p className='text-2xl'>Rs {Proj.Budget}</p>
                            <p className='text-xl'>{Proj.Descrp}</p>
                        </div>
                    </div>
                </div>
                {Proj.Load ? 
                    <Team Team={Proj.Team} Descrp={Proj.Descrp} 
                        Status={Proj.Status}/>: false
                }                
            </div>
        </>
    )
}

export default Proj
