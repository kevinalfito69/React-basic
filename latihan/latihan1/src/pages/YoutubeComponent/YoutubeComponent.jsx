import React from "react";

const YoutubeComponent=({title,time})=>{
    return(
        <div className=" bg-white sm:w-52 overflow-hidden rounded-xl shadow-xl">
            <div className="mx-auto overflow-hidden relative">
                <img className="w-full h-28 object-cover" src="https://source.unsplash.com/400x600" alt="" />
                <div className="flex items-center justify-center active:rotate-90 hover:scale-150 bottom-1/2 -translate-x-1/2 right-1/2 rounded-full bg-slate-600/50 backdrop-blur-sm left-1/2 top-1/3 transition-all duration-150 text-white absolute w-12 h-12">
                    <div className="w-4 h-4 ml-2 border-b-2 border-l-2 rotate-45"></div>
                </div>
                <p className="bg-slate-900 bottom-1 right-0 text-white absolute px-2 text-sm">{time}</p>
                
            </div>
            <div className="p-4 my-5">
            <h1 className="text-lg font-semibold  text-slate-800">{title}</h1>
            <p className=" text-slate-500 text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid mollitia, beatae harum molestias illum possimus temporibus? Modi, deleniti! Praesentium, eaque.</p>
            </div>
        </div>
    )
}
YoutubeComponent.defaultProps ={
    time:'00:00',
    title:"404"
}

export default YoutubeComponent