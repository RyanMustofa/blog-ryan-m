import React from "react";
import axios from "axios";

class DetailTechnology extends React.Component {
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
                this.setState({
                    article: res.data.items,
                    loading: false
                });
            })
            .catch(err => {
                alert(err.response);
                this.setState({
                    loading: false
                });
            });
    }
    render() {
        const title = this.props.match.params.title;
        const filterArticle = this.state.article.filter(
            article => article.title === title
        );
        return (
            <React.Fragment>
                <div className="container article-home">
                    <div className="row">
                        {this.state.loading ? (
                            <div class="col-12 d-flex justify-content-center">
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
                            filterArticle.map((param, index) => {
                                return (
                                    <div className="col-md-12 col-sm-12">
                                        <h2 className="text-center">
                                            {param.title}
                                        </h2>
                                        <div className="row">
                                            <div class="col-md-12 col-sm-12">
                                                <img
                                                    className="img-fluid"
                                                    src={param.thumbnail}
                                                    width="100%"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="col-md-12 col-sm-12 mt-1" style={{ fontSize: "19px" }}>
                                                <div dangerouslySetInnerHTML={ { __html: param.content } }></div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default DetailTechnology;
