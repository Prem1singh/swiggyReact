import { useEffect, useState } from "react"
import Footdata from "./footdata"
import Footitem from "./footitem"
export default function Foottag2(props) {
    const [data,setdata]=useState([])
    const data1=['Chinese Restaurant Near Me','South Indian Restaurant Near Me','Indian Restaurant Near Me','Kerala Restaurant Near Me','Korean Restaurant Near Me','North Indian Restaurant Near Me','Seafood Restaurant Near Me','Bengali Restaurant Near Me','Punjabi Restaurant Near Me','Italian Restaurant Near Me','Andhra Restaurant Near Me','Show More']
    useEffect(
        ()=>{
            return(
                setdata(data1)
            )
        },[]
    )
    return(
        <div className="w-[90vw] mx-auto  p-5">
            <h1 className="text-[25px] font-bold">Best Cuisines Near Me</h1>
            <Footitem data={data}></Footitem>
        </div>
    )
}