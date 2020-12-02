import React from 'react';

class ReviewPage extends React.Component {

  render() {
    const { currentSet, currentCards } = this.props;
    console.log(currentSet, currentCards);

    return (
      <h1>Set name</h1>
    );
  }
}

export default ReviewPage;