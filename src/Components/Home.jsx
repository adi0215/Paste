import React, { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPaste, updateToPaste } from "../Redux/Slices/pasteslice.jsx";




const Home = () => {
  const [title, setTitle] = useState("");
    const dispatch=useDispatch();
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const allPastes=useSelector((state)=>state.paste.pastes);
    function createPaste(){
        const paste={
            title:title,
            content:value,
            _id:pasteId||Date.now().toString(36),
            createdAt:new Date().toISOString()
        }

        if(pasteId){
            //update
            dispatch(updateToPaste(paste));
        }
        else{
            //Create
            dispatch(addToPaste(paste));
        }

        //after creating or updating clear the form
        setTitle("");
        setValue("");
        setSearchParams({});
    }

    useEffect(()=>{
        if(pasteId){
            const paste=allPastes.find((p)=>p._id===pasteId);
            setTitle(paste.title);
            setValue(paste.content);
            return;
        }
    },[pasteId]
)
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
          className="p-1 w-[65%] m-2 rounded-2xl border-2 pl-5"
          type="text"
          name=""
          id=""
          placeholder="Enter Title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className=" p-4 m-2 rounded-2xl border-2 bg-blue-500 text-white "
        onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create my paste"}
        </button>
      </div>
      <div className="mt-4 h-[70vh] ">
        <textarea
          className="rounded-2xl mt-4 w-full p-4 bg-amber-50  "
          name=""
          id=""
          value={value}
          placeholder="Enter your content here"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
