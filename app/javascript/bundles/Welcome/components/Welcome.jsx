import PropTypes from 'prop-types';
import React from 'react';

export default class Welcome extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
    this.state = { name: this.props.name };
  }

  updateName = name => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <h1 className="mb-8 text-purple">Enter your dynamic message below!</h1>
        <p className="mb-4 max-w-full">Message: {this.state.name}</p>
        <hr />
        <form>
          <input
            id="name"
            className="bg-blue-lightest p-2 text-grey-light w-full"
            type="text"
            value={this.state.name}
            onChange={e => this.updateName(e.target.value)}
          />
        </form>
      </div>
    );
  }
}
