import { Component } from "react";
import { signUp } from "../../utilities/users-service";
export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmation: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      //The promise returned by the sign up server method, will resolve to the user object included in the payload of the JSON WEB TOKEN (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      this.props.handleRedirect();
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };
  //We must override the render method
  //The render method is the equivalent to a function-based component

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <button type="submit" disabled={disable}>
                SIGN UP
              </button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div> 
        <h4 className="signup-note">
          Note: For signing up
          the email doesn't need to be real. It can be as simple
          as "name@email.com". That being said the password can also be
          very simple, but needs to be three characters or longer.
        </h4>
      </>
    );
  }
}
