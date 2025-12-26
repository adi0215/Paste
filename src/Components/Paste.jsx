import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { removeFromPaste } from '../Redux/Slices/pasteslice'
import toast from 'react-hot-toast'

const Paste = () => {

    const pastes=useSelector((state)=>state.paste.pastes);
    // console.log(pastes);
    const [searchTerm,setSearchTerm]=useState('');
    const dispatch=useDispatch();

    const filteredData=pastes.filter((paste)=>paste.title.toLowerCase().includes(searchTerm.toLowerCase()));
    // console.log(filteredData);

    function handleDelete(pasteId){
        dispatch(removeFromPaste(pasteId));
    }
    function handleCopyToClipBoard(pasteContent){
        navigator.clipboard.writeText(pasteContent);
        toast.success("Copied to clipboard");
    }
  return (
    <div>
      <input
      className='p-2 rounded-2xl min-w-[600px] mt-5 border-2' 
      type="search" value={searchTerm} onChange={(e)=>(setSearchTerm(e.target.value))} placeholder ="Search here"/>
      <div className='flex flex-col gap-5 mt-5'>
        {filteredData.length>0 &&  filteredData.map(
            (paste)=>{
                return(
                    <div  className='border-2 p-4 rounded-2xl bg-white shadow-md' key={paste._id}
                    >
                        <div>
                            {paste.title}

                        </div>
                        <div>{paste.content}</div>
                        <div className='flex flex-row gap-4 place-content-evenly'>
                            <button ><a href={`/?pasteId=${paste._id}`}>Edit</a></button>
                            <button ><a href={`/pastes/${paste._id}`}>View</a></button>
                            <button onClick={()=>handleDelete(paste._id)}>Delete</button>
                            <button onClick={()=>handleCopyToClipBoard(paste.content) }>Copy</button>
                            <button>Share</button>
                        </div>
                        <div>{paste.createdAt}</div>
                    </div>
                )
            }
        )        }
      </div>
    </div>
  )
}

export default Paste
