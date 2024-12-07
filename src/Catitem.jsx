import { useState } from "react"

export default function Catitem(props) {
    const[path,setpath]=useState('public/images/')
    return(
            <div className="shrink-0 duration-500" style={{
                transform:`translateX(${-props.scroll*210}px)`,
                width:'210px'
                
            }}><img src={path+props.data.image} alt="" className="w-[150px] h-[200px]" />
            </div>
        
    )
}