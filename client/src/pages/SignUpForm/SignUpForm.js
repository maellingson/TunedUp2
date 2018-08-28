import React, { Component } from "react";
import API from "../../utils/API";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SignUpForm extends Component {
    state = {
        username: "",
        email: "",
        genres: [],
        instruments: [],
        bio: "",
        zip: "",
        links: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.email && this.state.genres && this.state.instruments && this.state.bio && this.state.zip && this.state.links) {
            API.saveUser({
                username: this.state.username,
                email: this.state.email,
                genres: this.state.genres,
                instruments: this.state.instruments,
                bio: this.state.bio,
                zip: this.state.zip,
                links: this.state.links,
            })
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Create a Profile</h1>
                        </Jumbotron>
                        <form>
                            <Input
                                value={this.state.username}
                                onChange={this.handleInputChange}
                                name="username"
                                placeholder="Username (required)"
                            />
                            <Input
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                name="email"
                                placeholder="Email (required)"
                            />
                            <Select
                                value={this.state.genres}
                                onChange={this.handleInputChange}
                                name="genres"
                                placeholder=""
                            />
                            <Select
                                value={this.state.instruments}
                                onChange={this.handleInputChange}
                                name="instruments"
                                placeholder=""
                            />
                            <Input
                                value={this.state.zip}
                                onChange={this.handleInputChange}
                                name="zip"
                                placeholder="Zip Code (required)"
                            />
                            <TextArea
                                value={this.state.bio}
                                onChange={this.handleInputChange}
                                name="bio"
                                placeholder="Bio (Optional)"
                            />
                            <TextArea
                                value={this.state.links}
                                onChange={this.handleInputChange}
                                name="links"
                                placeholder="Links (Optional)"
                            />
                            <FormBtn
                                disabled={!(this.state.username && this.state.email && this.state.genres && this.state.instruments && this.state.zip)}
                                onClick={this.handleFormSubmit}
                            >
                                Create Profile
                  </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignUpForm;