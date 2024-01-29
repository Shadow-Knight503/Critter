import { useEffect } from "react"

function Team(props: any) {
    // const [Users, setUsers] = useState([{
    //     Name: "", Pfp: "", ID: ""
    // }])
    const { Team }: any = props

    useEffect(() => {
        async () => {
            console.log(Team)
        }
        // if(Team) {
        //     await 
        // } else {
        //     console.log(null)
        // }
    }, [])

    return (
        <>
            <div className=' bg-slate-800 h-[100vh] 
                min-w-[25vw]'>
                <p className="text-xl text-white">{}</p>
            </div>        
        </>
    )
}

export default Team