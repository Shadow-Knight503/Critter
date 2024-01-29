import { doc, getDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Db } from "../Config"

function Team(props: any) {
    const [Users, setUsers] = useState([{
        Name: "", Pfp: "", ID: "", Role: ""
    }])
    const { Team, Descrp, Status }: any = props

    useEffect(() => {
        const getUsers = async () => {
            const TeamDets: any = []
            for(let el in Team) {
                const DetsSnap: any = await getDoc(doc(Db, Team[el][0]))
                const Dets: any = {Name: DetsSnap.data().Fname + " " + 
                    DetsSnap.data().Lname, ID: DetsSnap.id, Pfp: DetsSnap.data().Pfp, 
                    Role: Team[el][1]}
                TeamDets.push(Dets)
            }    
            setUsers(TeamDets)
        }
        getUsers()
    }, [])

    return (
        <>
            <div className='relative bg-slate-900 h-[90vh] p-3 overflow-y-auto 
              text-slate-200 font-Comf min-w-[25vw] max-w-[30vw]'>
                <p className="text-Text font-Oswd text-2xl">Team: </p>
                <div className="flex gap-2 mb-3">
                    {Users.map((User) => (
                        <div className="" key={User.ID}>
                            <img className="rounded-full w-[3rem] h-[3rem] object-cover" src={User.Pfp}></img>
                        </div>
                    ))}
                </div>
                {Users.map((User) => (
                    <p className="truncate mb-1 text-md font-Comf"
                        key={User.ID}>{User.Role}: {User.Name}</p> 
                ))}                
                <br />
                <p className="mb-1 font-Oswd bold text-Text text-xl">Work Description:</p>
                <p className="text-wrap">{Descrp}</p>
                <div className="absolute bottom-5 text-2xl">Status:  
                    {Status === 'Completed'? 
                        <span className="text-green-400"> {Status}</span>: 
                        <span className="text-orange-500"> {Status}</span> 
                    }
                </div>
            </div>        
        </>
    )
}

export default Team