import { useState } from "react"
import Categories from "./category";

import Showcat from "./showcat";

export default function Slider(){
   
const [data1,setdata]=useState([]);
    const getdata=(data)=>{
        setdata(data);
        
    }
    return(
        
        <div className="max-w-[1280px] mx-auto lg:p-5 ps-2 pt-2  border-b-2">
            <Categories getdata={getdata} key={1}></Categories>
            <Showcat data1={data1}></Showcat>
        </div>
    )
}