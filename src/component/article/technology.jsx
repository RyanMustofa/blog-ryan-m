import React, { Fragment } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
            loading: true
        };
    }
    componentDidMount() {
        axios
            .get(
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.liputan6.com%2Frss"
            )
            .then(res => {
                // console.log(res)
                this.setState({
                    article: res.data.items,
                    loading: false
                });
            })
            .catch(err => {
                alert(err.response);
            });
    }
    onClick = title => {
        this.props.history.push('/article/' + title)
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="div article-home">
                        <div className="row">
                            {this.state.loading ? (
                                <div className="col-12 d-flex justify-content-center">
                                    <div class="progress-circular progress-circular-primary">
                                        <div class="progress-circular-wrapper">
                                            <div class="progress-circular-inner">
                                                <div class="progress-circular-left">
                                                    <div class="progress-circular-spinner"></div>
                                                </div>
                                                <div class="progress-circular-gap"></div>
                                                <div class="progress-circular-right">
                                                    <div class="progress-circular-spinner"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                this.state.article.map((param, index) => {
                                    return (
                                        <div
                                            className="col-md-4 col-sm-12 d-flex justify-content-center"
                                            onClick={() => this.onClick(param.title)}
                                            key={index}
                                        >
                                            <div class="card">
                                                <img
                                                    alt="Card image cap"
                                                    class="card-img-top"
                                                    width="100%"
                                                    height="320"
                                                    src={param.thumbnail}
                                                />
                                                <div class="card-body">
                                                    <h4 class="card-title">
                                                        {param.title}
                                                    </h4>
                                                </div>
                                                <div class="card-actions">
                                                    <p className="mr-auto ml-1">
                                                        {param.pubDate}
                                                    </p>
                                                    <p className="ml-auto mr-1">
                                                        source{" "}
                                                        <a href={param.link}>
                                                            Liputan6.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Technology;
