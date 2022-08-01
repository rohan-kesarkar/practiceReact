import { useState } from "react"

const LoginForm = ()=>{
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [allEntries, setAllEntries] = useState([])

    const submitForm = (e)=>{
        e.preventDefault()
        if(email && password){
            const newEntry = {id: new Date().getTime().toString(),  email, password}

            setAllEntries([...allEntries, newEntry])
            setEmail("")
            setPassword("")
        }else{
            alert("Please fill the data")
        }
    }

    return(
        <>
        <form onSubmit={submitForm}>
            <div>
            <label>Email</label>
            <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
            <label>Password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit" >Log In</button>
        </form>
        </>
    )
}
export default LoginForm