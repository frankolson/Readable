// Vendor Assets
import React, { PureComponent } from 'react';

class Home extends PureComponent {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <b>Categories:</b>
        <ul>
          {Object.keys(categories).map((id) =>
            <li key={id}>{categories[id].name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
