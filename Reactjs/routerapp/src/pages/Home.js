
import  c1  from './images/c1.jpeg';
import  c2  from './images/c2.jpeg';
import  c3 from './images/c3.jpeg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Home=()=>{
    return(
      
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "300px", // Adjust height
              backgroundColor: "#f8f9fa", // Light gray background
            }}
          >
            <div className="text-center">
              <h3>Slide 1</h3>
              <p>This is a Flexbox-aligned carousel slide.</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "300px",
              backgroundColor: "#dee2e6", // Slightly darker gray
            }}
          >
            <div className="text-center">
              <h3>Slide 2</h3>
              <p>Flexbox makes content alignment easy!</p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              height: "300px",
              backgroundColor: "#ced4da", // Even darker gray
            }}
          >
            <div className="text-center">
              <h3>Slide 3</h3>
              <p>Perfect for customized layouts.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
  
}
export default Home;