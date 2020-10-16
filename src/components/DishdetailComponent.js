import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';

class DishDetail extends Component {


  renderDish(dish){
    const { name, image, description} = dish;
    return (
      <Card>
        <CardImg top src={ image } alt={ name } />
        <CardBody>
          <CardTitle>{ name }</CardTitle>
          <CardText>{ description }</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments= []) {
    const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
    const region = 'en-US';
    return (
      <div>
        <h4>Coments</h4>
        <ul className="list-unstyled">
          {
            comments.map((comment)=>{
              let { id, comment: text , author, date} = comment;
              date = new Intl.DateTimeFormat(region, dateFormat).format(new Date(date));
              return (
                <li key={ id }>
                  <div>{ text }</div>
                  <br />
                  <div>-- { author } , { date }</div>
                  <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  render(){
    const { dish } = this.props;
    if (dish != null) {
      const { comments } = dish;
      console.log(comments);
      return (
        <div className="row">
          <div  className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>
          <div  className="col-12 col-md-5 m-1">
            {this.renderComments(comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
