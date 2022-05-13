import { state } from "jshint/src/state";
import React, { Component } from "react";
import Movie from "Movie.jsx";
import { ReactDOM } from 'react-dom/client';

class ReviewForm extends Component{  
showForm = () => {

    return (
      <div>
      { movies.map((movie) => { return movie.name}) }
      <form>
        <label>Movie Review </label>
          <input
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
      </form>
    </div>
    );
    }
  render(){
    return (
      <div className="Submit">
        <div className="button-container">
        {this.showForm()}
        </div>  
      </div>
    );
  }
}
  
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(<MyForm />);
  
  // const Rate = () => {
  // const [rate, setRate] = useState(0);
  // return (
  //   <Container>
  //   {[...Array(5)].map((item, index) => {
  //     const givenRating = index + 1;
  //     return (
  //     <label>
  //       <Radio
  //       type="radio"
  //       value={givenRating}
  //       onClick={() => {
  //         setRate(givenRating);
  //         alert(`Are you sure you want to give ${givenRating} stars ?`);
  //       }}
  //       />
  //       <Rating>
  //       <FaStar
  //         color={
  //         givenRating < rate || givenRating === rate
  //           ? "000"
  //           : "rgb(192,192,192)"
  //         }
  //       />
  //       </Rating>
  //     </label>
  //     );
  //   })}
  //   </Container>
  // );
  // };
  export default ReviewForm