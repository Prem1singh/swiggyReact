import Catitem from "./Catitem";
import { FaArrowRight , FaArrowLeft  } from "react-icons/fa";
import { useState } from "react"
import Rest from "./rest";
export default function Showcat(props){
    const [scroll,setscroll]=useState(0)
    return(
        <>
            <div className="flex justify-between"><div><h2 className="lg:text-[30px] font-bold text-[20px]">{(props.restro)?"Top restaurant chains in Jaipur":"What's on your mind?"}</h2></div>
        <div className="flex gap-3 "><div className="border  p-3 rounded-full bg-[#dfdede] cursor-pointer h-[42px] w-[42px]" onClick={()=>{
            if(scroll<=0) return false
            setscroll(scroll-2)
            }}><FaArrowLeft /></div><div className="border  p-3 rounded-full bg-[#dfdede] cursor-pointer h-[42px] w-[42px]" onClick={()=>{ if((props.data1.length-6<=scroll)) return false
                setscroll(scroll+2)
                }}><FaArrowRight /></div></div>
        </div>
        
        <div className="flex overflow-hidden pb-[40px]">
        {
           
            props.data1.map(
                (d,i)=>{
                    
                    return(
                        (props.restro)?<Rest data={d} key={i} scroll={scroll}></Rest>:
                        <Catitem data={d} key={i} scroll={scroll}></Catitem>
                    )
                }
            )
        }
        </div>
        </>
    )
}