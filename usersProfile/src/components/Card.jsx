import { FaEnvelope } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { CiGlobe, CiHeart, CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import '.././App.css'
import { useState } from "react";


const Card = (props) => {
    const { id, name, email, url, phone, imgurl } = props.value;

    const [isRed, setIsRed] = useState(false)

    return (
        <div className="border-2 m-2 border-black w-[250px]">
            <img src={imgurl} alt="profileImage" className="w-full bg-[#f5f5f5]" />
            <div className="p-3">
                <div>
                    <p className="text-xl font-bold pb-2">{name}</p>
                </div>
                <p className="flex items-center">
                    <FaEnvelope />
                    <span className="ml-2 pb-1">{email}</span>
                </p>
                <p className="flex items-center">
                    <IoMdCall />
                    <span className="ml-2 pb-1">{phone}</span>
                </p>
                <p className="flex items-center">
                    <CiGlobe />
                    <a className="ml-2 pb-1" href={url}>{url}</a>
                </p>
            </div>
            <div className="flex">
                <p className="bg-slate-200 w-full p-2 center cursor-pointer hover:bg-slate-400 text-xl" onClick={() => setIsRed(!isRed)}>
                    {isRed ? <FcLike /> : <CiHeart />}
                </p>
                <p className="bg-slate-200 w-full p-2 center border-l-2 border-r-2 border-slate-400 cursor-pointer hover:bg-slate-400 text-xl">
                    <CiEdit />
                </p>
                <p className="bg-slate-200 w-full p-2 center cursor-pointer hover:bg-slate-400 text-xl">
                    <MdDeleteForever />
                </p>
            </div>
        </div >
    )
}
export default Card;