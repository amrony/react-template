import { useState } from "react";
import DataTable from "../components/Datatable";
import DashboardLayout from "../components/HOC/DashboardLayout";
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import CustomModal from "../components/CustomModal";
import { Button } from "react-bootstrap";

const Home = () => {

    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({});
    // const [updateFormdata, setUpdateFormdata] = useState({});

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

    const handleEdit = (item) => {
        console.log("item", item);
        setUpdateFormdata(item);
        setShow(true);
    };
    
    const handleDelete = (item) => {
    alert(`Deleting item: ${item.name}`);
    };

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
                            Edit | Delete
                        )
                    }

                }
            ],
            
            rows: items.map((item) => ({
                ...item,
                actions: (
                    <>
                    <button onClick={() => handleEdit(item)}>Edit</button>
                    <button>Delete</button>
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