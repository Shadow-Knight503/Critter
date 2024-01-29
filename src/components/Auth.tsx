import { useState } from "react";
import Cookies from "universal-cookie";
import Reg from "./Reg";

function Auth() {
    const cookie = new Cookies
    const Name = cookie.get('name')
    const [isAuth, setAuth] = useState(cookie.get('auth_token'))

    return (
        <>
            <div className="grid mt-[10vh]">
                <div className='rounded bg-slate-800 px-[2rem] py-[2rem] 
                    min-w-[35vw] place-self-center'>
                        {!isAuth ? (
                            // Registeration page
                            <Reg setAuth={setAuth} />                      
                        ) : (
                            // Pop up screen after registration
                            <div className="text-3xl text-white font-Comf">
                                Welome Aboard, {Name}
                            </div>
                        )}
                </div>
            </div>    
        </>    
    )   
}

export default Auth