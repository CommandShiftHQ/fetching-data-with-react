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
    fetch(DATA_URL)
      .then(response => response.json())
      .then(data => this.setState({ data }))
      .catch(err => {
        this.setState({
          error: true,
        });
      });
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
