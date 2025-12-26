import React from 'react'
import { useState ,useEffect} from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
const ViewPaste = () => {


    const {id}=useParams();
    const allpastes=useSelector((state)=> state.paste.pastes);
    const paste =allpastes.filter((p)=>p._id===id)[0];
  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between">
        <input
        disabled
          className="p-1 w-[65%] m-2 rounded-2xl border-2 pl-5"
          type="text"
          name=""
          id=""
          placeholder="Enter Title here"
          value={paste.title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* <button
          className=" p-4 m-2 rounded-2xl border-2 bg-blue-500 text-white"
        onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create my paste"}
        </button> */}
      </div>
      <div>
        <textarea
        disabled
          className="rounded-2xl mt-4 min-w-[500px] h-50% p-4"
          name=""
          id=""
          value={paste.content}
          placeholder="Enter your content here"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
