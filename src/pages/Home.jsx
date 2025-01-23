import { useEffect, useState } from "react";
import DataTable from "../components/Datatable";
import DashboardLayout from "../components/HOC/DashboardLayout";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import CustomModal from "../components/CustomModal";
import { Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {

    const [show, setShow] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [formData, setFormData] = useState({});
    // const [updateFormdata, setUpdateFormdata] = useState({});


    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        await axios
            .get("http://localhost:5000/user")
            .then(res => {
                setTableData(res?.data?.data);
            })
            .catch(error => console.log(error));
    };


    function testClickEvent(param) {
        alert('Row Click Event');
    }

    const items = [
        {
            name: 'Aminul',
            email: 'aminul@gmail.com',
            phone: '0169585665',
            age: '61',
        },
        {
            name: 'Rony',
            email: 'rony@gmail.com',
            phone: '0179585665',
            age: '61',
        },
        {
            name: 'Rocky',
            email: 'rocky@gmail.com',
            phone: '0189585665',
            age: '61',
        },
    ];



    const handleDeleteUser = async (item) => {
        axios.delete("http://localhost:5000/user/"+item?._id).then((res) => {
            getUser();
        }); 
    };

    const handleEdit = (item) => {
        console.log("edit item", item);
        setFormData(item);
        setShow(true);
    };

    console.log("formData", formData);
    
    

    const data = () => {
        return {
            columns: [
                {
                label: 'Name',
                field: 'name',
                width: 150,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
                },
                {
                label: 'Email',
                field: 'email',
                width: 270,
                },
                {
                label: 'Phone',
                field: 'phone',
                width: 200,
                },
                {
                label: 'Actions',
                field: 'actions',
                sort: 'asc',
                width: 100,

                    getActions: (data) => {
                        return (
                            <>
                                <button>Edit</button>
                                <button>Delete</button>
                            </>
                        )
                    }

                }
            ],
            
            rows: tableData.map((item) => ({
                ...item,
                actions: (
                    <>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button onClick={() => handleDeleteUser(item)}>Delete</button>
                    </>
                )
            }))
        };
    };
    

    return (
        <DashboardLayout>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                <h1>User List</h1>

                <Button onClick={() => setShow(true)}>Add User</Button>
            </div>
            
            <CustomModal
                show={show}
                setShow={setShow}
                formData={formData}
                setFormData={setFormData}
                getUser={getUser}
            />
            <div className="">
                <DataTable
                    data={data}
                />
            </div>
        </DashboardLayout>
    )
}

export default Home;