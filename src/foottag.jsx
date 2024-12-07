import { useEffect, useState } from "react"
import Footdata from "./footdata"
import Footitem from "./footitem"
export default function Foottag(props) {
    const [data,setdata]=useState([])
    const data1=['Best Restaurants in Bangalore','Best Restaurants in Pune','Best Restaurants in Mumbai','Best Restaurants in Delhi','Best Restaurants in Hyderabad','Best Restaurants in Kolkata','Best Restaurants in Chennai','Best Restaurants in Chandigarh','Best Restaurants in Ahmedabad','Best Restaurants in Jaipur','Best Restaurants in Nagpur','Show More']
    useEffect(
        ()=>{
            return(
                setdata(data1)
            )
        },[]
    )
    return(
        <div className="w-[90vw] mx-auto  p-5">
            <h1 className="text-[25px] font-bold">Best Places to Eat Across Cities</h1>
            <Footitem data={data}></Footitem>
        </div>
    )
}