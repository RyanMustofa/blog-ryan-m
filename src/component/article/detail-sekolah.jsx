import React, { Fragment, useState, useEffect } from "react";
import { article } from "../../utility";

const DetailSekolah = (props) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setData(article.article), setLoading(false), 1500);
    }, []);
    const title = props.match.params.title;
    const filterArticle = data.filter(
        articles => articles.title === title
    );
    return (
        <Fragment>
            <div className="container article-sekolah">
                <div className="row">
                    {loading ? (
                        <div class="col-12 d-flex justify-content-center">
                            <div className="loader"></div>
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
                                        <div
                                            className="col-md-12 col-sm-12 mt-1"
                                            style={{ fontSize: "19px" }}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: param.content
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </Fragment>
    );
};

export default DetailSekolah;
