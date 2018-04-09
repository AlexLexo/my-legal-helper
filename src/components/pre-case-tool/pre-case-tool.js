import React from 'react';

const preCase = (
  <React.Fragment>
    <h1>Do I have a good case?</h1>
    <p>
      We're going to ask you some questions to find out a little more about what happened. We'll then give you our view
      about whether you've got a good case.
    </p>
  </React.Fragment>
);

class PreTool extends React.Component {
  render() {
    return (
      <div className="pre-tool">
        {preCase}
        <button
          type="button"
          className="btn btn-primary btn-get-started"
          onClick={() => this.props.history.push('case-tool')}
        >
          Get Started
        </button>
      </div>
    );
  }
}
export default PreTool;
