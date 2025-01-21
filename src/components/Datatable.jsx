import React, { useState } from 'react';
import { CDBCard, CDBCardBody, CDBDataTable, CDBContainer } from 'cdbreact';
import CustomModal from './CustomModal';


const DataTable = ({data}) => {

    // const [show, setShow] = useState(false);

    // function testClickEvent(param) {
    //     alert('Row Click Event');
    // }



    // const items = [
    //     {
    //         name: 'Aminul',
    //         email: 'aminul@gmail.com',
    //         phone: '0169585665',
    //         age: '61',
    //     },
    //     {
    //         name: 'Rony',
    //         email: 'rony@gmail.com',
    //         phone: '0179585665',
    //         age: '61',
    //     },
    //     {
    //         name: 'Rocky',
    //         email: 'rocky@gmail.com',
    //         phone: '0189585665',
    //         age: '61',
    //     },
    // ];

    // const handleEdit = (item) => {
    //     setShow(true);
    //   };
    
    //   const handleDelete = (item) => {
    //     alert(`Deleting item: ${item.name}`);
    //   };

    // const data = () => {
    //     return {
    //         columns: [
    //             {
    //             label: 'Name',
    //             field: 'name',
    //             width: 150,
    //             attributes: {
    //                 'aria-controls': 'DataTable',
    //                 'aria-label': 'Name',
    //             },
    //             },
    //             {
    //             label: 'Email',
    //             field: 'email',
    //             width: 270,
    //             },
    //             {
    //             label: 'Phone',
    //             field: 'phone',
    //             width: 200,
    //             },
    //             {
    //             label: 'Actions',
    //             field: 'actions',
    //             sort: 'asc',
    //             width: 100,

    //                 getActions: (data) => {
    //                     return (
    //                         Edit | Delete
    //                     )
    //                 }

    //             }
    //         ],
            
    //         rows: items.map((item) => ({
    //             ...item,
    //             actions: (
    //                 <>
    //                 <button onClick={() => handleEdit(item)}>Edit</button>
    //                 <button>Delete</button>
    //                 </>
    //             )
    //         }))
    //     };
    // };

    return (
        <>
        <CDBCard>
            <CDBCardBody>
            {/* <CustomModal
                show={show}
                setShow={setShow}
            /> */}

                <CDBDataTable
                    striped
                    bordered
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data()}
                    materialSearch={true}
                />
            </CDBCardBody>
        </CDBCard>
        </>
    );
};

export default DataTable;