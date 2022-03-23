import MyCard from './MyCard';
const Contents = ({ data, category }) => {
  return (
    <div className="Contents">
      {data.map((it) => (
        <MyCard key={it.id} {...it} category={category} />
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
