import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState ={
    pastes:localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteslice= createSlice({
    name:"paste",
    initialState,
    reducers:{
        addToPaste:(state,action)=>{


            const paste=action.payload;
            const index=state.pastes.findIndex((item)=>item._id===paste._id);
            if(index==-1){
                state.pastes.push(paste);
                localStorage.setItem("pastes",JSON.stringify(state.pastes));
                toast("Paste created successfully");

            }
        },
        updateToPaste:(state,action)=>{
            const updatedPaste=action.payload;
            const index=state.pastes.findIndex((item)=>item._id===updatedPaste._id);
            if(index>=0){
                state.pastes[index]=updatedPaste;
                localStorage.setItem("pastes",JSON.stringify(state.pastes));
                toast("Paste updated successfully");
            }
        },
        resetAllPastes:(state)=>{
            state.pastes=[];
            localStorage.setItem("pastes",JSON.stringify(state.pastes));
        },
        removeFromPaste:(state,action)=>{
            const pasteId=action.payload;
            console.log(pasteId);
            const index=state.pastes.findIndex((item)=>item._id===pasteId);
            if(index>=0){
                state.pastes.splice(index,1);
                localStorage.setItem("pastes",JSON.stringify(state.pastes));
                toast("Paste deleted successfully");
            }
        }
    }
})


export const {addToPaste,updateToPaste,resetAllPastes,removeFromPaste}=pasteslice.actions;

export default pasteslice.reducer;