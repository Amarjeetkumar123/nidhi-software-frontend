import Datatable from "../../components/datatable/Datatable"
import "./listUser.scss"

const userData = [
  { id: 1, name: 'John Doe', username: 'johndoe', email: 'johndoe@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', username: 'janesmith', email: 'janesmith@example.com', status: 'Inactive' },
  // Add more users if needed
];

// Define columns
const userColumns = [
  { label: 'ID', accessor: 'id' },
  { label: 'Name', accessor: 'name' },
  { label: 'Username', accessor: 'username' },
  { label: 'Email', accessor: 'email' },
  { label: 'Status', accessor: 'status' },
];

const ListUser = () => {
  return (
    <>
      <Datatable data={userData} columnConfig={userColumns} />
    </>
  )
}

export default ListUser