
import useAxios from 'axios-hooks'
const Users = (props) => {
 const [{ data, loading, error }]= useAxios("/api/users");
  if (loading) return <p>Loading</p>
  if (error) return <p>Error</p>
  return (
    <>
        <h1>Users</h1>
        <pre>{JSON.stringify(data,null,2)}</pre>
    </>
  );
};
export default Users;
