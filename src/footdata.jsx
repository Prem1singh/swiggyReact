
export default function Footdata(props) {
    return(
        <div className="border rounded-2xl xl:w-[23%] md:w-[46%] w-[100%] p-3 flex items-center justify-center capitalize font-[500] cursor-pointer">
            {props.data}
        </div>
    )
}