import React,{ useEffect } from "react";
import Header from "../header/header";
import axios from "axios";
import Image1 from "./header.png";
import g1 from "./janko-ferlic-sfL_QOnmy00-unsplash.jpg";
import { Link } from "react-router-dom";
import g2 from "./glenn-carstens-peters-npxXWgQ33ZQ-unsplash.jpg";

const Dashboard = () => {
    useEffect(() => {
        document.title = "dashboard | BlogRyan"
    },[])
    return (
        <React.Fragment>
            <Header />
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h1 class="display-4">Ryan Blogs</h1>
                            <p class="lead">
                                Article and Tutorial Programming Code From
                                Beginner to learn programming language
                            </p>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img
                                className="img-fluid"
                                src={Image1}
                                alt="image1"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: "200px" }}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 text-center mt-5 pt-3">
                        <h2 className="feature wow fadeInUp">Feature</h2>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className=" col-md-6 col-sm-12 mt-5 text-center mb-4 wow fadeInLeft">
                        <h4>
                            integrated with Liputan6 RealTime
                            <br />
                            and up to date article
                        </h4>
                        <Link
                            className="btn btn-outline-primary mt-4 tombol"
                            to="/article"
                        >
                            Go
                        </Link>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center wow fadeInRight">
                        <img
                            className="img-fluid"
                            style={{ borderRadius: "20px" }}
                            width="400"
                            height="350"
                            src={g1}
                            alt=""
                        />
                    </div>
                </div>
                <div className="row mt-5 pt-4">
                    <div className="col-md-6 col-sm-12 wow fadeInLeft d-flex justify-content-center">
                        <img
                            className="img-fluid"
                            src={g2}
                            style={{ borderRadius: "20px" }}
                            width="400"
                            height="350"
                            alt=""
                        />
                    </div>
                    <div className="col-md-6 col-sm-12 text-center mt-2 wow fadeInRight">
                        <h4>
                            and articles about school lessons
                            <br /> for software engineering
                        </h4>
                        <Link
                            className="btn btn-outline-primary mt-4 tombol"
                            to="/sekolah"
                        >
                            Go
                        </Link>
                    </div>
                </div>
                <div className="footer">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            &copy; RyanMustofa, 2020
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
