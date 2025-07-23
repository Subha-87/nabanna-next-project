"use client"
import { Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import EditUserModal from "./EditUserModal";

export default function EditBtn({ edit_id, selectedData }) {

    const [openModal, setOpenModal] = useState(false);

    const handleEdit = async (edit_id) => {
        //console.log(edit_id) -->for testing
        try {
            const response = await axios.get(`http://localhost:5005/api/users/${edit_id}`)
            //console.log(response)
            
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>


            <Button variant="contained" color="success" onClick={() => { handleEdit(edit_id), setOpenModal(true) }}>Edit</Button>
            <EditUserModal
                
                isOpen={openModal}
                isClose={() => setOpenModal(false)}
                sendEditid = {edit_id}
                data ={ selectedData}


            />
        </>

    )
}