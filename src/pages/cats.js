import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "../store/redux/catState";
import "./cats.css";
const Cats = () => {
  const catData = useSelector((state) => state.cat.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log("catData", catData);
  const CatCard = ({ cat }) => {
    return (
      <div className="card mb-3 p-0" style={{ height: "300px" }}>
        <div className="row g-0">
          <div
            className="col-md-3 align-self-start"
            style={{ height: "297px" }}
          >
            <img
              src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}
              className="img-fluid rounded-start"
              alt={cat.name}
              title={cat.name}
              style={{ height: "100%", width: "100%", objectFit: "cover" }} // Fix image height and aspect ratio
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{cat.name}</h3>
              <h6 className="card-subtitle mb-2 ">{cat.temperament}</h6>
              <p className="card-text">{cat.description}</p>
              <p className="card-text">
                <a
                  href={cat.wikipedia_url}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-4">
      <div>
      <h1 className="painted-background">The Cat API</h1>
        <h1>Cats as a service.</h1>
        <h3>Because everyday is a Caturday.</h3>
      </div>
      <div className="row">
        {catData.map((cat, index) => (
          <CatCard key={index} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default Cats;
