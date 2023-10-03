import axios from 'axios';
import {useEffect, useState} from "react";
import Shame from "./Shame.tsx";

interface IContent {
    reFetchToggle : boolean
    setReFetchToggle : Function
}

const Content = ({reFetchToggle, setReFetchToggle} : IContent) => {

    const [results, setResults] = useState<{data : Array<any>}>({data : []})

    const fetchData = async ()=>{
        const response =  await axios.get(`${process.env.REACT_APP_APP_URL}api/shames`)
        setResults(response)
    }

    useEffect(()=>{
        fetchData()
    }, [reFetchToggle])

    return (
        <div className={"content"}>
            {results.data.map((item : any)=>(
                <Shame item={item} setReFetchToggle={setReFetchToggle}/>
            ))}
        </div>
    );
};

export default Content;