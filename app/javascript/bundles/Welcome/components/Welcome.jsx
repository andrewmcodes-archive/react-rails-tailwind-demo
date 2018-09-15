import PropTypes from 'prop-types';
import React from 'react';

export default class Welcome extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class
    this.state = { name: this.props.name };
  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h1
          className="mb-4"
        >
          Hello, {this.state.name}!
        </h1>
        <hr />
        <form >
          <label
          htmlFor="name"
          className="block mb-2"
          >
            Say hello to:
          </label>
          <input
            id="name"
            className="bg-blue-lightest p-2 text-grey-light"
            type="text"
            value={this.state.name}
            onChange={(e) => this.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
