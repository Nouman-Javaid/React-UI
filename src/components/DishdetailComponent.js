import React, {Component} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, } from 'reactstrap';

export default class DishDetail extends Component{
    
    renderDish(dish){
                  
        if(dish != null)        
            return(       
    
                <div className="row" >
                    <div  className="col-12 col-md-5 m-1"> 
                    <Card>
                        <CardImg width="100" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name} </CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                    </div>
            
                    <div className="col-12 col-md-5 m-1 text-left">
                        <h4 >Comments</h4>
                        {this.renderComments(dish.comments)}   
                    </div> 
                </div>
            );
            
        else
            return(
                <div> </div>
            );
    }

   
    renderComments(comments) {
        
        if(comments != null)  
                var reviews = comments.map((review) => {
                return (
                    <div key={review.id}>
                        <ul className="list-unstyled">
                            <li>{review['comment']}</li>
                            
                            <li className="list-inline-item">-- {review.author}</li>

                            <li className="list-inline-item">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(review.date)))} </li>
                        </ul>
                    </div>    
                )
                });
        else
            return(
            <div></div>)
        return reviews    
   }


    render() {
       
        const dish = this.props.prop;   
        return (
            <>
            <div className="container">
                 {this.renderDish(dish)}   
            </div>   
            </>
        )
    }
}