import useAxios from "axios-hooks";
import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
const Users = (props) => {
  const [{ data, loading, error }] = useAxios("/api/users");
  return (
    <AxiosContainer loading={loading} error={error}>
      <List
        name="Users"
        data={data}
        renderData={(user) => {
          return (
            <Link to={`/users/${user.id}`}>
              <div>
                <p>{user.name}</p>
              </div>
            </Link>
          );
        }}
      />
    </AxiosContainer>
  );
};
export default Users;
