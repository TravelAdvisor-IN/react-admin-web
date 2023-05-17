import React, { useEffect, useState } from 'react';
import {MDBDataTable, MDBIcon} from "mdbreact";
import { API } from '../Constants';
import { useNavigate } from 'react-router';


function NewEntry()
{
  const navigate = useNavigate();

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await fetch(API+'/pendingNewEntries');
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };


  const handleRowClick = (row) => {
    // Implement your logic for handling the row click event here
    // <ShowModel/>
    navigate('viewEditPlace/'+ row.response_id)
  };

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        // width: 20,
      },
      {
        label: 'Created Date',
        field: 'created_on',
        sort: 'asc',
        // width: 1500,
      },
      {
        label: 'Created User name',
        field: 'created_by',
        sort: 'asc',
        // width: 20,
      },
      {
        label: 'Place Name',
        field: 'place_name',
        sort: 'asc',
        // width: 20,
      },
      {
        label: 'District Name',
        field: 'district',
        sort: 'asc',
        // width: 20,
      },
      {
        label: 'Category',
        field: 'category',
        sort: 'asc',
        // width: 20,
      },
      {
        label: 'View / Edit',
        field: 'icon',
        sort: 'disabled',
        // width: 20,
      },
      // ... Other columns
    ],
    rows: 
      responseData.map((row) => ({
      icon: (
        <MDBIcon
          icon='edit'
          onClick={() => handleRowClick(row)}
          size="lg"
          style={{ width: '100%', textAlign: 'center', cursor:'pointer' }}
        />
      ),
      id: row.response_id,
      created_on: row.created_on,
      created_by: row.usr_id,
      place_name: row.place_name,
      district: row.district,
      category: row.category,
    })),
  };


  return (
    <MDBDataTable
      striped
      bordered
      hover
      data={data}
      // clickablerows
      noBottomColumns={true}
    />
  );
}

export default NewEntry;