import React from "react";

const Post = (props)=>{
        return(   <div className="w-[500px]  rounded-lg shadow-xl bg-white p-4 flex justify-between ">
                    {/* content */}
                    <div className="px-4 max-w-xs">
                        <h3 className="font-semibold text-slate-800 text-lg">{props.title}</h3>
                        <p className="truncate text-sm font-normal text-slate-500">{props.desc}</p>
                    </div>
                    <div className="w-52 rounded-lg overflow-hidden">
                    <img className="object-cover bg-center" src="https://placeimg.com/600/500/any?t=1658982040078" alt="" />
                    </div>
                </div>
            )
}
export default Post;