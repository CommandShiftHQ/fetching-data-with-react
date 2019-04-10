import React from 'react';

const DATA_URL = 'https://gist.githubusercontent.com/IkraP/b44da4035619931858183d832497fe6f/raw/70ad77f86583a8940c07fda1a063e23898816ff7/data.json';


class BindExamples extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: false,
    };
  }

  componentDidMount() {
    console.log('componentDidMount is run');
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate is run');
  }


  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps is run');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate is run');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate - last chance to see dom as it is...');
  }

  render() {
    const { data, error } = this.state;


    if (error) {
      return (<div>We're sorry. Try again :(</div>);
    }

    return (
      <div>{data.map(document => {
        return (<p key={document.name}><span>{document.type} - {document.name}</span></p>);
      })}
      </div>
    );
  }
}

export default BindExamples;
