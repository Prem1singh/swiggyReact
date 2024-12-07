import { useState } from "react"
import Restorants from "./restorants";

import Showcat from "./showcat";

export default function Toprestro(){
   
const [data1,setdata]=useState([]);
    const getdata=(data)=>{
        setdata(data);
        
    }
    return(
        
        <div className="max-w-[1280px] mx-auto lg:p-5 p-2 border-b-2">
            <Restorants getdata={getdata} key={1}></Restorants>
            <Showcat data1={data1} restro={true}></Showcat>
        </div>
    )
}