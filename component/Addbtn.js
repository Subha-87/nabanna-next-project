"use client"
import { Button } from "@mui/material"
import { useState } from "react"
import UserModal from "./UserModal";

export default function Addbtn(){
    const [open, setOpen] = useState(false);
    return(
        <>
        <Button variant="outlined" color="success"  onClick={() => setOpen(true)}>ADD</Button>
        <UserModal isModalOpen = {open} isModalClose ={() => setOpen(false)}/>
        
        </>


    )
}