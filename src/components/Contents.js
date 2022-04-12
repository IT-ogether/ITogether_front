import MyCard from './MyCard';
const Contents = ({ data, category }) => {
  console.log(data);
  return (
    <div className="Contents">
      {data.map((it) => (
        <MyCard key={it.informationId} {...it} category={category} />
      ))}
    </div>
  );
};

export default Contents;
