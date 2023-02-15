import "./App.css";
const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};
export default Loading;
