import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailTechnology = props => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.liputan6.com%2Frss"
            )
            .then(res => {
                setArticle(res.data.items);
                setLoading(false);
            })
            .catch(err => {
                alert(err.response);
                setLoading(false);
            });
    }, []);
    const title = props.match.params.title;
    const filterArticle = article.filter(article => article.title === title);
    return (
        <React.Fragment>
            <div className="container article-home">
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
                                                src={param.thumbnail}
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
        </React.Fragment>
    );
};

export default DetailTechnology;
