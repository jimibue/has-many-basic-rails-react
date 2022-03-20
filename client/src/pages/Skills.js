import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
import useAxios from "axios-hooks";
import { Link } from "react-router-dom";

const Skills = (props) => {
  const [{ data, loading, error }] = useAxios("/api/skills");
  return (
    <AxiosContainer loading={loading} error={error}>
      <List
        name="Skills"
        data={data}
        renderData={(skill) => {
          return (
            <Link to={`/skills/${skill.id}`}>
              <div>
                <p>{skill.name}</p>
              </div>
            </Link>
          );
        }}
      />
    </AxiosContainer>
  );
};
export default Skills;
