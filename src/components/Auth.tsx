import { useState } from "react";
import { doc, collection, updateDoc, where, query, onSnapshot } from 'firebase/firestore'
import { Db } from "../Config"


function Auth() {
    const [User, setUser] = useState({
        Name: '', Pass: ''
    })
    const Flds = [
        ['Name', 'Username', 'text'], 
        ['Pass', 'Password', 'password']
    ]

    const CltsRef = doc(Db, "Critter", "Users")
    const CRef = collection(Db, "Critter")

    const Regt = (e: any) => {
        e.preventDefault()
        const qryClts = query(CRef, 
            where(`${User.Name}.Role`, 'in', ['Admin', 'User']))

        onSnapshot(qryClts, async (snapshot) => {
            if(snapshot.empty) {
                updateDoc(CltsRef, {
                    [User.Name]: {
                        Pass: User.Pass,
                        Role: 'User',
                    },
                })
                console.log(`${User.Name} Added`)
                // Nag('/')
            } else {
                console.log('Username exists')
            }
        })
 
    }

    return (
        <>
            <div className="grid mt-[10vh]">
                <form className='rounded bg-slate-800 px-[2rem] py-[2rem] 
                    min-w-[35vw] place-self-center' onSubmit={(e) => Regt(e)} method='get'
                    action='/'>
                    <p className="text-3xl text-slate-200 font-Comf">Register: </p>
                    {Flds.map((fld) => (
                        <div className='relative mt-7' key={fld[0]}>
                            <input id={fld[0]} className='peer rounded-t bg-slate-700 h-7 min-w-[35vw] 
                                placeholder-transparent focus:outline-none border-b-2 text-slate-200 
                                border-blue-500 p-2 valid:border-green-600 invalid:border-red-500' 
                                onInput={(e: any) => setUser({...User, [fld[0]]: e.target.value.trim()})}
                                type={fld[2]} required placeholder='[Placeholder]'>    
                            </input>
                            <label htmlFor={fld[0]}
                                className='text-sm absolute left-0 -top-6 transition-all text-gray-400
                                peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200
                                peer-placeholder-shown:top-0 peer-placeholder-shown:left-2
                                peer-focus:text-sm peer-focus:left-0 peer-focus:-top-6
                                peer-focus:text-gray-400'>
                                {fld[1]}
                            </label>
                        </div>
                    ))}
                    <button className='bg-blue-900 py-1 px-3 rounded mt-3 text-slate-300' 
                        type='submit'>Register</button>
                </form>
            </div>    
        </>
    )
}

export default Auth