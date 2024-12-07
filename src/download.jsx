
export default function Download() {
    return(
        <div className="flex justify-evenly p-7 bg-[#F0F0F5] mt-20 items-center flex-col gap-5 lg:flex-row">
            <div className="lg:text-[30px] text-[20px] font-[600]">For better experience,download <br /> the Swiggy app now</div>
            <div className="flex gap-5"><img src="public/play_store.png" alt=""  className="lg:w-[200px] w-[130px]" /><img src="public/app_store.png" alt="" className="lg:w-[200px] w-[130px]" /></div>
        </div>
    )
}