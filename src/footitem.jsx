import Footdata from "./footdata"
export default function Footitem(props) {
    return(
        <>
        
            <div className=" flex flex-wrap gap-8 mt-5 justify-between  ">
                {
                    props.data.map(
                        (d,i)=>{
                            return(
                                <Footdata data={d} key={i}></Footdata>
                            )
                        }
                    )
                }
           
            </div>
        </>
    )
}