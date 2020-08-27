import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const Technology = props => {
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(
                "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ffeed.liputan6.com%2Frss"
            )
            .then(res => {
                // console.log(res)
                setArticle(res.data.items);
                setLoading(false);
            })
            .catch(err => {
                alert(err.response);
                setLoading(false);
            });
    }, []);
    const onClick = title => {
        props.history.push("/article/" + title);
    };
    return (
        <Fragment>
            <div className="container">
                <div className="div article-home">
                    <div className="row">
                        {loading ? (
                            <div className="col-12 d-flex justify-content-center">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            article.map((param, index) => {
                                return (
                                    <div
                                        className="col-md-4 col-sm-12 d-flex justify-content-center"
                                        onClick={() => onClick(param.title)}
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
                                                <p className="mr-auto ml-1">
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
};

export default Technology;
