import React from "react";

const Post = (props)=>{
        return(   

            <div className="w-[500px]  rounded-lg shadow-xl bg-white p-4 ">
                <div className="flex">
                    {/* content */}
                    <div className="px-4 max-w-xs flex flex-col">
                        <h3 className="font-semibold text-slate-800 text-lg">{props.data.title}</h3>
                        <p className="truncate text-sm font-normal text-slate-500">{props.data.body}</p>
                    </div>
                    <div className="w-52 rounded-lg overflow-hidden">
                        <img className="object-cover bg-center" src="https://placeimg.com/600/500/any?t=1658982040078" alt="" />
                    </div>
                </div>
                <div className="flex flex-wrap gap-2">
                <button className="py-2 text-sm  px-6 bg-rose-500 text-white font-semibold rou nded-lg" onClick={()=>props.remove(props.data.id)}>Delete</button>
                <button className="py-2 text-sm  px-6 bg-teal-500 text-white font-semibold rou nded-lg" onClick={()=>props.update(props.data)}>Update</button>
                </div>
            </div>

            )
}
export default Post;