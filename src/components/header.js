import React from "react";
import navbar from "./nav";

class header extends React.component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <navbar />
        </div>
      </div>
    );
  }
}
export default header;
