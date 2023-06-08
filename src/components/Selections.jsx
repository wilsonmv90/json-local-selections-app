import Cards from "./SelectionsCard";
import data from "../data/data.json";

const Selections = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <h1 className="text-center text-warning mb-2">
            ¿Cuál es la Selección con más títulos oficiales del mundo?
          </h1>
          <div className="row">
            {data.map((item, index) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Cards item={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Selections;
