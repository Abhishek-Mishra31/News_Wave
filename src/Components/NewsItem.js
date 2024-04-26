import React, { Component } from "react";
import Items from "./Items";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsItem extends Component {
  static defaultProps = {
    country: "In",
  };

  static props = {
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${
      this.props.apikey
    }&pageSize=10&page=${this.state.page + 1}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pageSize=10&page=1`;
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  render() {
    return (
      <>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<h4 color="white">Loading...</h4>}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4">
                    <Items
                      head={element.title}
                      img={element.urlToImage}
                      newsUrl={element.url}
                      des={element.description}
                      update={element.publishedAt}
                      author={element.author}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
