import React,{useRef} from "react";



 interface JoinProps {
        setChatview: (value: boolean) => void;
      }

      
export default function Join({setChatview}:JoinProps) {

    const usernameRef =useRef<HTMLInputElement>(null);
   
    const handleSubmit =() => {

        const username = usernameRef?.current?.value.trim();
        if (!username)
        return(
            console.log('SUBMIT')
        )

    }
    return(
        <div>
            <h1>Join</h1>
            <input type="text" ref = {usernameRef} placeholder="nome de user" />
            <button onClick={()=> handleSubmit()}>Entrar</button>
        </div>
    )
}