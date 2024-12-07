import { RxCaretDown } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
import { FaSearch ,FaRegUser} from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaCartShopping,FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { BiTargetLock } from "react-icons/bi";



export default function Header() {
    const data=[{
        icon:<FiShoppingBag />,
        name:'Swiggy Corporate',
        sup:''
    },
    {
        icon:<FaSearch />,
        name:'Search',
        sup:''
    },
    {
        icon:<CiDiscount1 />,
        name:'Offers',
        sup:'new'
    }
    ,   {
        icon:<IoHelpBuoyOutline />,
        name:'Help',
        sup:''
    },
    {
        icon:<FaRegUser />,
        name:'Sign In',
        sup:''
    },
    {
        icon:<FaCartShopping /> ,
        name:'Cart',
        sup:''
    }
    

]
const [toggle,settoggle]=useState(false)
const togglehandler=(e)=>{
    e.stopPropagation();
    settoggle(!toggle);

}
    return(
        <div className=" shadow-lg p-4 sticky top-0 bg-white z-10"><div className="flex max-w-[1280px] mx-auto"><img src="/logo.png" alt="" className="w-[90px]"/><div className=" items-center ms-4 hover:text-[#fc8019] font-bold group flex" onClick={()=>{settoggle(!toggle)}}><p className="border-b-2 pb-1 border-black group-hover:border-[#fc8019] cursor-pointer">other</p> <RxCaretDown />
        </div>
        <div className="md:w-[40vw] w-[80vw] h-[100vh] fixed top-0 bg-white z-20 duration-500"
        style={{
           left: toggle?'0':'-100%'
        }}>
            <div className=" absolute top-[50px] left-[30px] text-[25px] cursor-pointer" onClick={togglehandler}><FaXmark /></div>
            <div className="mt-[100px] md:ms-[100px] ms-[20px]"><input type="text" placeholder="Search For Area" className=" border p-4 w-[80%] focus:outline-none" />
            <div className="border p-6 w-[80%] mt-[30px] group flex cursor-pointer"><div className="text-[25px] px-3"><BiTargetLock /></div>
            <div><h3 className="group-hover:text-[#fc8019] font-bold">Get current location</h3>
            <p className="text-[#93959f] text-[13px]">Using GPS</p></div></div>
            </div>
        </div>
        <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-[#282c3f9c] z-10 duration-100"
        style={{
           opacity: toggle?'1':'0',
           visibility:toggle?'visible':'hidden'
        }} onClick={togglehandler}>

        </div>
        <div className="ms-auto gap-10 hidden lg:flex">{
           data.map(
            (d,i)=>{
                return(
                    <Item d={d} key={i}></Item>
                )
            }
           ) 
           }
            </div></div></div>
    )
}
function Item(props1) {
    return(
    <div  className="flex items-center gap-2 cursor-pointer hover:text-[#fc8019]">{props1.d.icon} <p>{props1.d.name} <sup className="text-[#fc8019] font-bold">{props1.d.sup}</sup> </p></div>
    )
}