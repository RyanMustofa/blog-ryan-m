import React,{ Fragment } from 'react';
import { article } from '../../utility';

class DetailSekolah extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            loading: true
        }
    }
    componentDidMount(){
        setTimeout(() => this.setState({loading: false,data: article.article}),1500)
    }
    render(){
        const title = this.props.match.params.title;
        const filterArticle = this.state.data.filter(
            articles => articles.title === title
        );
        console.log(filterArticle)
        return(
            <Fragment>
                <div className="container article-sekolah">
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
                                                    src={param.image}
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
            </Fragment>
        )
    }
}

export default DetailSekolah;
