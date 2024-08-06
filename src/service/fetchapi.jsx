import {useEffect, useState} from "react";
import {json} from "react-router-dom";
import {Card} from "../components/Card";

export const ServiceGet = () => {
    const [getData,setData] = useState([])

    useEffect(()=> {
        const dataGet = async ()=>{
            const response = await fetch('http://localhost:8080')
            const Json = await response.json()
            setData(Json)
            console.log(typeof json)
        }
        dataGet()
        }
        ,[]
    )
    return (<>{getData ? <Card apiData={getData}/> :<p>Loading ...</p>}</>)
}