import { useState } from "react";
import Categories from "./restorants";
import Rest from "./rest";
export default function Items(props){
    const [data1,setdata]=useState([]);
    const getdata=(data)=>{
        setdata(data);
    }
        return(
            <div className="w-[90%] mx-auto py-10 border-b-2">
                <Categories getdata={getdata}></Categories>
                <div><h2 className="text-[30px] font-bold ms-[60px]">Restaurants with online food delivery in Jaipur
</h2></div>
                
                <div className="flex flex-wrap justify-center">
                {
                data1.map(
                   (d,i)=>{
                    return(
                    <Rest data={d} key={i} sc={true}></Rest>
                    )
                   }
                )}{
                data1.map(
                    (d,i)=>{
                     return(
                     <Rest data={d} key={i} sc={true}></Rest>
                     )
                    }
                 )
            }
            </div>
            </div>
        )
}