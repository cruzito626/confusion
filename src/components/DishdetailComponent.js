import React from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from 'reactstrap';


const RenderDish = ({dish}) => {
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
};

const RenderComments = ({comments}) => {
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
                <div>-- { author } , { date }</div>
                <br />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

const DishDetail = ({ dish, comments }) => {
  if (dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
            <BreadcrumbItem active><Link to='/menu'>Menu</Link></BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
          </div>
        </div>
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComments comments={comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}


export default DishDetail;
