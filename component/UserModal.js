"use client"
import { Button, TextField, Modal, Box, Typography } from "@mui/material"

import { Formik, Form, Field } from "formik"
import axios from "axios"
import { useRouter } from "next/navigation"
export default function ({ isModalOpen, isModalClose }) {

    const modStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        
    }

    const userInfo = {
        name: "",
        rank: "",
        email: "",
        age: ""
    }

    const handleUserSubmit = async (values, action) => {
        console.log(values)
      
        try {
            const response = await axios.post("http://localhost:5005/api/users",values)
            console.log(response)
            alert(response.data.message)
            isModalClose()
            //
            
        } catch (error) {
            console.error(error.message)
        }
      
    }
    return (

        <div>

            <Modal
                open={isModalOpen}
                onClose={isModalClose}
            >
                <Box sx={modStyle}>
                    <Typography variant="h6" component="h2">
                        Enter User Details
                    </Typography>



                    <Formik
                        initialValues={userInfo}
                        onSubmit={handleUserSubmit}
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