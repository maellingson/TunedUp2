import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./ProfileEdit.css";

class ProfileEdit extends Component {
  state = {
    username: "Alicia Keys",
    location: "",
    instruments: "",
    genres: "",
    bio: "",
    email: "",
    phone: "",
    image: "https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60",

    listings: [],

    _id: ""
  }
  componentDidMount() {
    const googleuser = this.props.googleuser
    this.setState({username: googleuser.username, location: googleuser.location, instruments: googleuser.instruments, genres: googleuser.genres, bio: googleuser.bio, email: googleuser.email, phone: googleuser.phone})
    //   //this.setState({_id: req.user[0]._id})
    //   const googleuser = this.props.googleuser
    //   //this.setState({_id: googleuser._id})
    //   console.log(googleuser._id)
    //this.loadListings();
    //   //this.loadProfile(this.state._id);
  }

  // loadListings = () => {
  //   console.log('loadlistings')
  //   API.getListings()
  //     .then(res =>
  //       this.setState({ listings: res.data, title: "", username: "", description: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // loadProfile = () => {
  //   const googleuser = this.props.googleuser
  //   console.log(googleuser._id)
  //   API.getUser(this.state._id)
  //     .then(res =>
  //       console.log(res.data)
  //       //this.setState({ username:"", location:"", instruments:"", genres:"", bio:"", email: "", phone:"", image_url:""})
  //     )
  //     .catch(err => console.log(err));
  //   };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    const id = this.props.googleuser._id
    event.preventDefault();
    console.log(this.state.location)
    const location = this.state.location
    const instruments = this.state.instruments
    const genres = this.state.genres
    const bio = this.state.bio
    const phone = this.state.phone
    const email = this.state.email
    API.updateUser(id, {
      location: location,
      instruments: instruments,
      genres: genres,
      bio: bio,
      phone: phone,
      email: email
    })
      .then(res => {
        this.props.updateProfile()
        this.props.history.push("/myprofile")
      })

      .catch(err => console.log(err))
  }

  render() {
    const googleuser = this.props.googleuser
    console.log('render', googleuser._id)
    return (
      <div>
        <form>
          <Container fluid>
            <FormBtn onClick={this.handleFormSubmit}>
              Update Profile
            </FormBtn>
            <div className="bio">
              <Row>
                <Col size="md-3">
                  <div>
                    <img className="rounded float-right" src={googleuser.image + 0} style={{ width: 150, height: 150 }} alt="Generic user picture" />
                  </div>
                </Col>
                <Col size="md-5">
                  <Container fluid>
                    <div>
                      <h3>{googleuser.username}</h3>
                      <p><span><img src="/placeholder.png" style={{ width: 20, height: 20 }} /><Input value={this.state.location} onChange={this.handleInputChange} name="location" placeholder="ie. New York, NY" /></span></p>
                      <p><strong>Instruments: </strong><Input value={this.state.instruments} onChange={this.handleInputChange} name="instruments" placeholder="ie. Vocal, Violin" /></p>
                      <p><strong>Genres: </strong><Input value={this.state.genres} onChange={this.handleInputChange} name="genres" placeholder="ie. jazz, soul" /></p>
                    </div>
                  </Container>
                </Col>
              </Row>
            </div>
          </Container>
          <Container fluid>
            <Row>
              <Col size="md-8">
                <Container fluid>
                  <div className="shadow rounded top">
                    <h5>ABOUT ME</h5>
                    <hr></hr>
                    <p><TextArea value={this.state.bio} onChange={this.handleInputChange} name="bio" placeholder="About Me" /></p>
                  </div>
                </Container>
              </Col>

              <Col size="md-4">
                <Container fluid>
                  <div className="shadow rounded top">
                    <h6>Contact & Personal Info</h6>
                    <hr></hr>
                    <p><span><img src="/email.png" style={{ width: 20, height: 20 }} /><Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="ie. email@email.com" /></span></p>
                    <p><span><img src="/phone.png" style={{ width: 20, height: 20 }} /><Input value={this.state.phone} onChange={this.handleInputChange} name="phone" placeholder="ie. xxx-xxx-xxxx" /></span></p>
                  </div>
                </Container>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    );
  }
}

export default ProfileEdit;

// import React, { Component } from "react";
// import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
// import { Input, TextArea, FormBtn } from "../../components/Form";
// import "./ProfileEdit.css";
// import { Link } from "react-router-dom";

// class ProfileEdit extends Component {
//   state = {
//     username: "Alicia Keys",
//     location: "",
//     instruments: "",
//     genres: "",
//     bio: "",
//     email: "aliciakeys@email.com",
//     phone: "",
//     image: "https://images.unsplash.com/photo-1517430529647-90cda5b40093?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c0c3c22799cb1acffee5bc833906df8&auto=format&fit=crop&w=700&q=60",

//     listings: [],

//     _id: ""
//   }
//   componentDidMount() {
//     //   //this.setState({_id: req.user[0]._id})
//     //   const googleuser = this.props.googleuser
//     //   //this.setState({_id: googleuser._id})
//     //   console.log(googleuser._id)
//     //this.loadListings();
//     //   //this.loadProfile(this.state._id);
//   }

//   // loadListings = () => {
//   //   console.log('loadlistings')
//   //   API.getListings()
//   //     .then(res =>
//   //       this.setState({ listings: res.data, title: "", username: "", description: "" })
//   //     )
//   //     .catch(err => console.log(err));
//   // };

//   // loadProfile = () => {
//   //   const googleuser = this.props.googleuser
//   //   console.log(googleuser._id)
//   //   API.getUser(googleuser._id)
//   //     .then(res =>
//   //       console.log(res.data)
//   //       //this.setState({ username:"", location:"", instruments:"", genres:"", bio:"", email: "", phone:"", image_url:""})
//   //     )
//   //     .catch(err => console.log(err));
//   //   };


//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };


//   handleFormSubmit = event => {
//     const id = this.props.googleuser._id
//     event.preventDefault();
//     console.log(this.state.location)
//     const location = this.state.location
//     const instruments = this.state.instruments
//     const genres = this.state.genres
//     const bio = this.state.bio
//     const phone = this.state.phone
//     API.updateUser(id, {
//       location: location,
//       instruments: instruments,
//       genres: genres,
//       bio: bio,
//       phone: phone
//     })
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//   }

//   render() {
//     const googleuser = this.props.googleuser
//     console.log('render', googleuser._id)
//     return (
//       <div>
//         <form>
//           <Container fluid>
//             <FormBtn onClick={this.handleFormSubmit}>
//               Update Profile
//             </FormBtn>
//             <div className="bio">
//               <Row>
//                 <Col size="md-3">
//                   <div>
//                     <img className="rounded float-right" src={googleuser.image + 0} style={{ width: 150, height: 150 }} alt="Generic user picture" />
//                   </div>
//                 </Col>
//                 <Col size="md-5">
//                   <Container fluid>
//                     <div>
//                       <h3>{googleuser.username}</h3>
//                       <p><span><img src="/placeholder.png" style={{ width: 20, height: 20 }} /><Input value={this.state.location} onChange={this.handleInputChange} name="location" placeholder="ie. New York, NY" /></span></p>
//                       <p><strong>Instruments: </strong><Input value={this.state.instruments} onChange={this.handleInputChange} name="instruments" placeholder="ie. Vocal, Violin" /></p>
//                       <p><strong>Genres: </strong><Input value={this.state.genres} onChange={this.handleInputChange} name="genres" placeholder="ie. jazz, soul" /></p>
//                     </div>
//                   </Container>
//                 </Col>
//               </Row>
//             </div>
//           </Container>
//           <Container fluid>
//             <Row>
//               <Col size="md-8">
//                 <Container fluid>
//                   <div className="shadow rounded top">
//                     <h5>ABOUT ME</h5>
//                     <hr></hr>
//                     <p><TextArea value={this.state.bio} onChange={this.handleInputChange} name="bio" placeholder="About Me" /></p>
//                   </div>
//                 </Container>
//               </Col>

//               <Col size="md-4">
//                 <Container fluid>
//                   <div className="shadow rounded top">
//                     <h6>Contact & Personal Info</h6>
//                     <hr></hr>
//                     <p><span><img src="/email.png" style={{ width: 20, height: 20 }} /> {this.state.email}</span></p>
//                     <p><span><img src="/phone.png" style={{ width: 20, height: 20 }} /><Input value={this.state.phone} onChange={this.handleInputChange} name="phone" placeholder="ie. xxx-xxx-xxxx" /></span></p>
//                   </div>
//                 </Container>
//               </Col>
//             </Row>
//           </Container>
//         </form>
//       </div>
//     );
//   }
// }

// export default ProfileEdit;
