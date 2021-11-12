import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';

const TotalReview = () => {
    const [ reviews, setReviews ] = useState([])
    
    useEffect(() => {
        axios.get('https://stormy-reef-80779.herokuapp.com/reviews')
            .then(res => {
              setReviews(res.data)
             })
    },[])
    return (
        <>
           
                  {
                    reviews.map(review =>
                         <div className="col-md-4 ">
                            <Card style={ { width: '18rem', height:'200px'}}>
                                <Card.Body>
                                <Card.Title className="text-center">{review.name}</Card.Title>
                                <div style={{color:'#eb4d4b', textAlign:'center'}}>
                                    <Rating
                                            initialRating={review.rating}
                                            readonly
                                            emptySymbol="far fa-star "
                                            fullSymbol="fas fa-star"
                                            />
                                    </div>
                                    <Card.Text>
                                             {review.review}
                                    </Card.Text>
                                  
                                </Card.Body>
                            </Card>
                           </div>
                        )
                    }
          
        </>
    );
};

export default TotalReview;



//  <Card.Subtitle className="mb-2 text-danger">
//                                     <Rating
//                                             initialRating={2.5}
//                                             readonly
//                                             emptySymbol="fa fa-star "
//                                             fullSymbol="fa fa-star"
//                                             />
//                                     </Card.Subtitle>