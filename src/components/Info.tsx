
// import { Link } from "react-router-dom"


interface Stru {
    image: string,
    video: string,
    name: string,
    description: string
}

interface Props {
    Changestate: () => void,
    nftitem: Stru,
}


const Info = ({ Changestate, nftitem }: Props) => {
    console.log(nftitem);

    return (
        <>
            <div className="flex items-center justify-center p-6 gap-4 border rounded-lg text-white min-h-screen">
                <div className="flex flex-col flex-grow">
                    <h1 className="text-3xl font-bold bg-gray-800 p-4 rounded-t-lg">NFT Name: {nftitem.name}</h1>
                    <div className="bg-gray-800 p-4 rounded-b-lg">
                        <p className="font-semibold">Item Description:</p>
                        <p>{nftitem.description}</p>
                    </div>
                </div>
                <div className="flex-shrink">
                    <video src={nftitem.video} className="h-auto max-h-96 w-auto" autoPlay controls />
                </div>
            </div>
            <div className="flex justify-center p-10">
                {/* <button onClick={Changestate} className="mt-8 px-6 py-3 bg-black text-red-500 text-xl rounded-lg hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white transition duration-300 ease-in-out">Exit</button> */}
                <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span onClick={Changestate} className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">EXIT</span>
                </a>
            </div>
        </>


    )

}

export default Info



// {/* <div className=" flex items-center justify-center max-sm:p-7 px-48 gap-4  pt-32 border">
//             <br />
//             <div className="font-bold text-2xl">
//                 <h1 className="text-3xl">NFT Name: {nftitem.name}</h1>
//                 <br />
//                 <div className="">
//                     <p className="">Item Description:</p>
//                     <p className="border border-3 border-red-500 p-4 py-12">{nftitem.description}</p>
//                 </div>
//             </div>
//             {/* <div className="font-bold text-2xl">Item Description : {nftitem.description}</div> */}
//             <div>
//                 <div className=" max-w-50">
//                     <video src={nftitem.video} className='h-[450px] max-w-500 ' autoPlay />
//                 </div>
//                 <div className=" content-center">
//                     <button onClick={Changestate} className=" px-9 py-3 bg-black text-red-500 text-4xl rounded-lg">Exit</button>
//                 </div>
//             </div>
//         </div> */}