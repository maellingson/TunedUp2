import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
// import DeleteBtn from "../../components/DeleteBtn";


class LiveFeed extends Component {
  state = {
    listings: [],
    title: "",
    username: "",
    description: "",
    otheruserid: ""
  };

  componentDidMount() {
    this.loadListings();
  }

  loadProfile = () => {``
    API.getUser()
      .then(res =>
        this.setState({ username:"", location:"", instruments:"", genres:"", bio:"", email: "", phone:"", image_url:""})
      )
      .catch(err => console.log(err));
    };

  loadListings = () => {
    API.getListings()

      .then(res => this.setState({ listings: res.data }))
      .catch(err => console.log(err));
  };

  // deleteListings = id => {
  //   API.deleteListings(id)
  //     .then(res => this.loadListings())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadOtherUserId = event => {
    const otheruserid = this.val();
    this.setState({otheruserid: otheruserid});
    console.log('pleasework',this.state.otheruserid)
  }

  handleFormSubmit = event => {
    const googleuser = this.props.googleuser
    event.preventDefault();
    console.log(this.state.title)
    const title = this.state.title
    const username = googleuser.username
    const _id = googleuser._id
    const description = this.state.description
    if (this.state.title && this.state.description) {
      API.createListings({
        title: title,
        username: username,
        _id: _id,
        description: description
      })
        .then(res => this.loadListings())
        .then(this.state.title = "", this.state.description="")
        .catch(err => console.log(err));
    }
  };

  render() {
    const googleuser = this.props.googleuser

    return (
      <Container fluid>
        <Jumbotron>
          <h1><span><img src="levels.png" /></span>TunedUp</h1>
        </Jumbotron>
        <Row>
          <Col size="md-3">
            <Container fluid>
            </Container>
            <div>
            <img class="rounded" src={googleuser.image + 0} style={{ width: 200, height: 200}} alt={googleuser.username}/>
                <h4>{googleuser.username}</h4>
                <hr></hr>
                <p><strong>Instrument: </strong>{googleuser.instruments}</p>
                <p><strong>Genre: </strong>{googleuser.genres}</p>
              </div>
          </Col>
          <Col size="md-1"></Col>
          <Col size="md-8">
            <div className="media">
              <div className="media-body shadow rounded">
                <form>
                  <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Title" />
                  
                  {/* <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username (required)"/> */}
                <TextArea value={this.state.description} onChange={this.handleInputChange} name="description" placeholder="Description (required)" />
                <FormBtn disabled={!(this.state.description && this.state.title)} onClick={this.handleFormSubmit}>Submit</FormBtn>
        
                </form>
              </div>
            </div>
            <Row></Row>
            <Col size="md-12">
            <Row>
              <div className="media-body shadow rounded">
              {this.state.listings.length ? (
                <List>
                  {this.state.listings.map(listings => {
                    const pleasework = "/users/" + listings.user_id
                    return (
                    <ListItem onClick={this.loadOtherUserId} value={listings.user_id} key={listings.user_id}>
                    <h2>
                    <img className="mr-3 rounded" src={googleuser.image + 0} style={{ width: 64, height: 64 }} alt={googleuser.username}/>
                      {listings.title} 
                      {/* <DeleteBtn onClick={() => this.deleteListings(listings._id)} /> */}
                      </h2>
                      <a href={pleasework}><strong>Posted By: {listings.username}</strong></a>
                      <p>{listings.description}</p>
                    </ListItem>
                    );
                  })}
                </List>
              ) : (
                  <h3>No Posts to Display</h3>
                )}
                </div>
            </Row>
          </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LiveFeed;
