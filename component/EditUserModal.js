"use client"
import { Button, TextField, Modal, Box, Typography } from "@mui/material"
import { useState,useEffect } from "react"
import { Formik, Form, Field } from "formik"
import axios from "axios"

export default function EditUserModal({ selectedData, isOpen, isClose, sendEditid,data }) {

   //console.log(data) 
   const [editedData, setEditedData] = useState([]);
    /*const getSingleData = async () => {
        try {
            const response = await axios.get(`http://localhost:5005/api/users/${sendEditid }`)
            console.log(response)
            setEditedData(response.data.data)
        } catch (error) {
             console.error(error)
        }
    }
    useEffect(() => {
        
        getSingleData()
    },[])*/

    const modStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,

    }
    const handleSubmit = async (values, action) => {
        console.log(values)
        // PUT REQUEST FOR UPDATED DATA //
        const{_id} = values
        try {
            const response = await axios.put(`http://localhost:5005/api/users/${_id}`,values)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>

            <Modal
                open={isOpen}
                onClose={isClose}
            >
                <Box sx={modStyle}>
                    <Typography>Edit User</Typography>
                    <Formik
                        initialValues={data}
                        onSubmit={handleSubmit}

                    >

                        {
                            ({ values, handleChange }) => (
                                <Form>
                                    <TextField
                                        label="Engineer Name"
                                        margin='normal'
                                        size='small'
                                        fullwidth="true"
                                        variant='outlined'
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />

                                    <TextField
                                        label="Designation"
                                        margin='normal'
                                        size='small'
                                        fullwidth="true"
                                        variant='outlined'
                                        name="rank"
                                        value={values.rank}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        label="Email"
                                        type="email"
                                        margin='normal'
                                        size='small'
                                        fullwidth="true"
                                        variant='outlined'
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        label="Age"
                                        margin='normal'
                                        size='small'
                                        fullwidth="true"
                                        variant='outlined'
                                        name="age"
                                        value={values.age}
                                        onChange={handleChange}
                                    />
                                    <br />
                                    <Button variant="contained" color="secondary" type="submit">Submit</Button>



                                </Form>
                            )
                        }



                    </Formik>
















                </Box>
            </Modal>

        </div>





















    )
}