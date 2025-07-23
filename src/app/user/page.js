import Addbtn from "../../../component/Addbtn";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import EditBtn from "../../../component/EditBtn";
import DeleteBtn from "../../../component/DeleteBtn";
export default async function Page() {
    const getData = await fetchData()
    //console.log(getData)

    return (
        <Container fluid>

            <Row> <h1>USER PAGE</h1></Row>
            <Row>
                <Col>
                    <Addbtn />
                </Col>
            </Row>
            <Row>
                <Col><h3>Details OF Engineer</h3></Col>

            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>


                        </tr>

                    </thead>
                    <tbody>

                        {
                            getData.map((post, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{post.name}</td>
                                        <td>{post.rank}</td>
                                        <td>{post.email}</td>
                                        <td>{post.age}</td>
                                        <td><EditBtn edit_id={post._id}
                                            selectedData = {post}
                                        />

                                            <DeleteBtn del_id={post._id} /></td>

                                    </tr>
                                )
                            })
                        }



                    </tbody>



                </Table>
            </Row>

        </Container>
    );
}

async function fetchData() {

    try {
        //const response = await axios.get("http://localhost:5005/api/users", { cache: "no-cache" })
        //return response.data.data
        let data = await fetch("http://localhost:5005/api/users")
        data = await data.json()
        if(data.success){
            return data.result
        }else{
            return  {success : false}
        }
    } catch (error) {
        console.error('Axios error:', error.response?.status, error.message);
    }

}