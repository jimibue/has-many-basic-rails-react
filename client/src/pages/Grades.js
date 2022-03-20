import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
import useAxios from "axios-hooks";

const Grades = (props) => {
  const [{ data, loading, error }] = useAxios("/api/grades");
  console.log(data)
  return (
    <AxiosContainer loading={loading} error={error}>
      <List name="Grades" data={data} />
    </AxiosContainer>
  );
};
export default Grades;
