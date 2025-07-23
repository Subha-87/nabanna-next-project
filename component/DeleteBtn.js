"use client"
import { Button } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function DeleteBtn({ del_id }) {

    const router = useRouter()
    const handleDelete = async(del_id) => {
        //console.log(del_id)  -->for testing
        try {
            const response = await axios.delete(`http://localhost:5005/api/users/${del_id}`)
            console.log(response)
            alert(response.data.message)
            router.push("/user")
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Button variant="contained" color="error" onClick={() => handleDelete(del_id)}>Delete</Button>

    )
}