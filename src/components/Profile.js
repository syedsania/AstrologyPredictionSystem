import axios from 'axios'
import {useState} from 'react'

export default function Profile(){
    const [result, setResult] = useState(null)

    if(result == null){
        axios.get('https://localhost:8081/show').then((response) =>{
            console.log(JSON.stringify(response.data));
            setResult(response.data);
        })
        return(
            <div>
                There is no Data to Display
            </div>
        );
    }
    else{
        return(
            <div>
                Ther User Data is Given Below<br></br>
                {Object.keys(result).map((user)=>{
                    return(
                        <div>
                            {user}
                        </div>
                    );
                })}
            </div>
        );
    }
    }
    
        
