import React, { Fragment } from "react";
import { article } from "../../utility";

class Sekolah extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true
        };
    }
    componentDidMount() {
        setTimeout(
            () => this.setState({ data: article.article, loading: false }),
            1500
        );
    }
    onClick = (title) => {
        this.props.history.push('/sekolah/' + title)
    }
    render() {
        return (
            <Fragment>
                <div className="article-sekolah">
                    <div className="container">
                        <div className="row">
                            {this.state.loading ? (
                                <div class="col-md-12 col sm-12 d-flex justify-content-center">
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
                                this.state.data.map((param,index) => {
                                    return (
                                        <div class="col-md-4 col-sm-12 justify-content-center" onClick={() => this.onClick(param.title)}>
                                            <div class="card">
                                                <img
                                                    alt="Card image cap"
                                                    width="100%"
                                                    height="320"
                                                    class="card-img-top"
                                                    src={param.image}
                                                />
                                                <div class="card-body">
                                                    <h4 class="card-title">
                                                        {param.title}
                                                    </h4>
                                                    <p class="card-text">
                                                        {param.description}
                                                    </p>
                                                </div>
                                                <div class="card-actions">
                                                    <div className="row">
                                                        <div className="col-md-12 col-sm-12">
                                                            <p className="ml-auto">source <a href={param.source}>novardian</a></p>
                                                        </div>
                                                    </div>
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

export default Sekolah;
