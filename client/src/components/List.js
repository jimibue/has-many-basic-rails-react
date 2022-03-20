import StringifyJSON from "./StringifyJSON";

const List = (props) => {
  const { name, data, renderData } = props;

  const renderList = ()=>{
      // if function not given tell how to render the data/
      // just stringify it 
      if(!renderData){
       return <StringifyJSON json={data} />
      }
      // use the function given to pass to map to tell how to render each one
      return data.map((d) => renderData(d) )
      
  }
  return (
    <>
      {name && <h1>{name}</h1>}
      <div>
          {renderList()}
      </div>
    </>
  );
};
export default List;
