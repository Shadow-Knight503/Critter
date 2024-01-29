import { useEffect, useState } from "react";
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { doc, collection, setDoc, where, query, onSnapshot } from 'firebase/firestore'
import { Db } from "../Config"
import Cookies from "universal-cookie";

function Reg(props: any) {
    const [User, setUser] = useState({
        Name: '', Pass: ''
    })
    const [Sld, setSld] = useState(0)

    const Label = ['Login Info', 'Basic Info', 'Other']
    const Flds = [{ID: 'Lgn_Frm', Dets: [
        {id: 'Name', name: 'Username', type: 'text'},
        {id: 'Pass', name: 'Password', type: 'password'}
    ]}, {ID: 'Bsc_Info', Dets: [
        {id: 'Fname', name: 'First_name', type: 'text'},
        {id: 'Lname', name: 'Last_name', type: 'text'},
        {id: 'Gender', name: 'Gender', type:'text'}
    ]}, {ID: 'Other', Dets: [
        {id: 'Age', name: 'Age', type: 'text'},
        {id: 'Work', name: 'Work', type: 'text'}
    ]}]

    const cookies = new Cookies
    const CltsRef = collection(Db, "Crit_Users")
    const { setAuth } = props

    function timeout(delay: number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        const sldBoot =async () => {
            let doc = document.getElementById(Flds[Sld].ID) || null
            doc?.classList.toggle('hidden')
            await timeout(300)
            doc?.classList.toggle('active')
        }
        sldBoot();
    }, [])

    // Register function
    const Regt = (e: any) => {
        e.preventDefault()
        const qryClts = query(CltsRef, 
            where(`${User.Name}.Role`, 'in', ['Admin', 'User']))

        onSnapshot(qryClts, async (snapshot) => {
            if(snapshot.empty) {
                const {Name, ...Dets} = User
                setDoc(doc(CltsRef, User.Name), {
                    ...Dets,
                    Role: 'User',
                })
                console.log(`${User.Name} Added`)
                cookies.set('auth_token', true)
                cookies.set('name', User.Name)
                setAuth(true)
                // Nag('/')
            } else {
                console.log('Username exists')
            }
        })
    }
    
    async function sld(p: number) {
        let doc = document.getElementById(Flds[Sld].ID) || null
        doc?.classList.toggle('active')
        let len: number = Flds[Sld].Dets.length || 0
        await timeout(200 + len * 100)
        doc?.classList.toggle('hidden')
        setSld(Sld + p)
        doc = document.getElementById(Flds[Sld + p].ID) || null
        doc?.classList.toggle('hidden')
        await timeout(200 + len * 100)
        doc?.classList.toggle('active')
    }

    return (
        <>
            <form onSubmit={(e) => {Regt(e)}} method="get">
                <p className="text-3xl text-slate-200 font-Comf">Register: </p>
                <div className="flex justify-center">
                    {Label.map((lbl, i: number) => (
                        <div className={`${Sld === i ?"bg-blue-800":"huh"}` + 
                        " rounded border-slate-800 text-blue-300 mx-2 p-2 font-Comf"}
                        key={lbl}>{lbl}</div>
                    ))}
                </div>
                <div className="flex flex-row flex-nowrap gap-1 h-auto min-w-[5rem] 
                    max-w-[50vw] md:max-w-[35vw] transition-all
                    justify-items-center overflow-hidden">
                    {Flds.map((fld) => (
                        <div key={fld.ID} className="group hidden active
                            transition-all" id={fld.ID}>
                            {fld.Dets.map((fl: any, ind: number) => (
                                <div className={`relative mt-4 group-[.active]:translate-x-[35.2vw] ` +
                                    `transition-all ` +
                                    `duration-300 ease-in`} key={fl.id}
                                    style={{'transitionDelay': `${ind * 100}ms`}}>
                                    <input id={fl.id} className='peer rounded-t bg-slate-700 h-7 min-w-[30vw] 
                                        placeholder-transparent focus:outline-none border-b-2 text-slate-200 
                                        border-blue-500 p-2 valid:border-green-600 invalid:border-red-500
                                        transition-all' 
                                        onInput={(e: any) => setUser({...User, [fl.id]: e.target.value.trim()})}
                                        type={fl.type} required placeholder='[Placeholder]'>    
                                    </input>
                                    <label htmlFor={fl.id}
                                        className='text-sm absolute left-0 -top-6 transition-all text-gray-400
                                        peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200
                                        peer-placeholder-shown:top-0 peer-placeholder-shown:left-2
                                        peer-focus:text-sm peer-focus:left-0 peer-focus:-top-6
                                        peer-focus:text-gray-400'>
                                        {fl.name}
                                    </label>
                                </div>
                            ))}
                        </div>                            
                    ))}
                </div>
                <button 
                    disabled={Sld <= 0?true: false}
                    className='bg-blue-900 py-2 px-2 rounded mt-3 
                    text-slate-300 disabled:bg-slate-700 disabled:text-slate-500' 
                    type='button'  onClick={() => sld(-1)}>Back 
                    <PaperAirplaneIcon className="inline-block ml-2 mb-1 h-6 w-6" />
                </button>
                <button 
                    disabled={Sld >= Flds.length - 1?true: false}
                    className='bg-blue-900 py-2 px-2 rounded mt-3 
                    float-right text-slate-300 disabled:bg-slate-700 disabled:text-slate-500' 
                    type='button' onClick={() => sld(1)}>Next 
                    <PaperAirplaneIcon className="inline-block ml-2 mb-1 h-6 w-6" />
                </button>
                <button className='bg-blue-900 py-2 px-2 rounded mt-3 
                    block text-slate-300' 
                    type='submit'>Register 
                    <PaperAirplaneIcon className="inline-block ml-2 mb-1 h-6 w-6" />
                </button>
            </form>
        </>
    )
}

export default Reg