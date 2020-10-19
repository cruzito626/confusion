import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => (
      <Home
        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />
    );

    const DishWithId = ({match}) => {
      const { dishId } = match.params;
      return(
        <DishDetail
          dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
          />
      );
    };

    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  };
};

export default Main;
