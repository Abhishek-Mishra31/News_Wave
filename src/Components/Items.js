import React, { Component } from "react";

export default class Items extends Component {
  render() {
    let { head, img, newsUrl, des, update, author } = this.props;
    return (
      <div className="card" style={{ width: "250px", margin: "0 auto" }}>
        <img
          src={!img ? "image not availble" : img}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{head.slice(0, 40)}...</h5>
          <p className="card-text">{des ? des.slice(0, 88) : ""}...</p>
          <a
            href={newsUrl}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-sm btn-primary "
          >
            Read More
          </a>
          <div className="card-footer text-body-secondary">
            By {!author ? "unknown" : author} on{" "}
            {new Date(update).toGMTString()}
          </div>
        </div>
      </div>
    );
  }
}
