import { AiFillAlipayCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs"

import Loader from "./Loader";

const FormInput = ({type, placeholder}) => {
    return (
        <input
            type = {type}
            placeholder={placeholder}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"

        >

        </input>
    );
}

const Welcome = () => {


    const connectWallet = () => {

    }
    return (
        <div className="h-full md:flex md:justify-between items-start p-4 md:w-full place-items-end">

            {/* Connect to Wallet button */}
            <div className="w-full m-10">
                <h1 className="text-white text-3xl">
                    Send Crypto <br></br>accros the world
                </h1>
                <p className="text-white my-4">
                    Explore the crypto world. Buy and sell crypto currencies easily. 
                </p>
                <button 
                    className="w-1/2 md:w-64 bg-blue-600 hover:bg-blue-900 rounded-full p-4 text-center md:text-xl text-white"
                    onClick={connectWallet}
                >
                    Connect to Wallet
                </button>
            </div>

            <div className="w-full lex flex-col justify-end items-start">

                {/* Etherium wallet card */}
                <div className="w-full 2xl:w-1/2 h-60 eth-card rounded-2xl p-4 flex flex-col justify-between ">
                    <div className="flex items-start justify-between">
                        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                            <FaEthereum fontSize={24}></FaEthereum>
                        </div>
                        <BsInfoCircle fontSize={24}></BsInfoCircle>
                    </div>
                    <div className="flex flex-col justify-between text-start">
                        <div className="text-black font-mono text-xl">
                            Wallet address
                        </div>
                        <div className="text-black font-mono text-xl font-bold">
                            ETH
                        </div>
                    </div>
                </div>

                {/* Transfer form here */}
                <div className="sm:w-96 w-full">
                    
                    <div className="my-5 p-5  flex flex-col justify-start items-center white-glassmorphism">
                        <FormInput type="text" placeholder="Address to"></FormInput>
                        <FormInput type="number" placeholder="Amount(ETH)" />
                        <FormInput type="text" placeholder="Enter message" />
                    </div>
                    <div className="h-[1px] bg-gray-400"></div>
                    <button className="text-white w-full mt-2 border-[2px] p-2 border-green-600 hover:bg-[#3d4f7c] rounded-full cursor-pointer">
                        Send now
                    </button>
                </div>


            </div>


        </div>

        
    );
}

export default Welcome;
