import MyCard from './MyCard';
const Contents = ({ data }) => {
  return (
    <div className="Contents">
      {data.map((it) => (
        <MyCard key={it.id} {...it} />
      ))}
    </div>
  );
};

export default Contents;
