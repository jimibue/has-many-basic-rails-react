import styled from "styled-components";

export const Code = styled.pre`
    font-family:MonoLisa;
    color:#ff00ff;
`;

const StringifyJSON = ({json}) => {
  return <Code>{JSON.stringify(json,null,2)}</Code>;
};

export default StringifyJSON
