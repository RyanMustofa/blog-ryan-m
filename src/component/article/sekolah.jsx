import React, { Fragment, useState, useEffect } from "react";
import { article } from "../../utility";

const Sekolah = props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setData(article.article), setLoading(false), 1500);
    }, []);
    const onClick = title => {
        props.history.push("/sekolah/" + title);
    };
    return (
        <Fragment>
            <div className="article-sekolah">
                <div className="container">
                    <div className="row">
                        {loading ? (
                            <div class="col-md-12 col sm-12 d-flex justify-content-center">
                                <div className="loader"></div>
                            </div>
                        ) : (
                            data.map((param, index) => {
                                return (
                                    <div
                                        class="col-md-4 col-sm-12 justify-content-center"
                                        onClick={() =>
                                            onClick(param.title)
                                        }
                                    >
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
                                                    <div className="ml-3 col-md-12 col-sm-12">
                                                        <p className="ml-auto">
                                                            source{" "}
                                                            <a
                                                                href={
                                                                    param.source
                                                                }
                                                            >
                                                                {param.profile}
                                                            </a>
                                                        </p>
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
};

export default Sekolah;
