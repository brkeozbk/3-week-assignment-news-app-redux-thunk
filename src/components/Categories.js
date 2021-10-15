import React, { Component } from "react";
class Categories extends Component {
  render() {
    const { news, fetching } = this.props.news;
    if (fetching) {
      return <div> Yükleniyor </div>;
    } else {
      
      return (
        
        <div
          style={{ borderColor: "blue", borderStyle: "solid", margin: "2px" }}
        >

          <pre>{JSON.stringify(news, null, 3)}</pre>
        </div>
      );
    }
  }
}

export default Categories;
