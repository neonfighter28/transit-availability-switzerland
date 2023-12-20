import React, { useEffect, useRef } from "react";
import { Layout, Row, Button } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import Zuerich from "./zuerich.mp4";
import back_chevron from "../svg/back_chevron.svg";
import CustomDesc from "./components/descriptions/CustomDesc";
import {ScrollToBottom, ScrollToTop} from "./components/ScrollToButton";
import { Legend, MapWrapper, CheckBoxes, PointControlBox, PopulationHeatmap, PtMap, PtMap_desc, HeatMap_desc } from "./components";
import "./css/pages.css";
import "./css/content.css";
import "./css/lineform.css";
import "./css/leaflet.css";
import "./css/popup.css";

const handleContextMenu: React.MouseEventHandler<HTMLVideoElement> = (event) => {
    event.preventDefault();
  };

export default function ContentPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Start or pause the video depending on whether it's in the viewport
                if (entry.isIntersecting) {
                    videoRef.current?.play();
                } else {
                    videoRef.current?.pause();
                }
            },
            {
                // Trigger the callback when the video is 50% in view
                threshold: 0.5,
            }
        );

        // Start observing the video
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        // Clean up on unmount
        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);
    return (
        <Layout className="layout" id="contentPage">
            <Content className="content" id="mapContent">
                <Row id="titlePage">
                    <div id="video-container">
                    <video ref={videoRef} id="zurichVideo" playsInline autoPlay loop muted preload="" 								onContextMenu={handleContextMenu}>
                        <source src={Zuerich} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h1 id="contentTitle">Switzerland</h1>
                    <Link to="/" className="homeButton">
                        <img className="homeImg" src={back_chevron}/>
                        <h1>HOME</h1>
                    </Link>
                    <a id="skipButton">
                        <ScrollToBottom/>
                    </a>
                    <Link id="attributionLink2" to="/attributions">
                        <img id="homeImg" src={back_chevron}/>
                        <h1>ATTRIBUTIONS</h1>
                    </Link>
                    </div>
                </Row>
                <Row className="textPage">
                    <HeatMap_desc/>
                </Row>
                <Row id="popPage" className="page">
                    <PopulationHeatmap/>
                </Row>
                <Row className="textPage">
                    <PtMap_desc/>
                </Row>
                <Row id="transportPage" className="page ">
                    <PtMap/>
                </Row>
                <Row className="textPage">
                    <CustomDesc/>
                </Row>
                <Row id="interactivePage"className="page">
                    <MapWrapper/>
                    <Legend/>
                    <CheckBoxes/>
                    <PointControlBox/>
                    <a>
                        <ScrollToTop/>
                    </a>
                </Row>
            </Content>
            <Footer className="footer">
                <span id="footerWrapper">
                    <h5 className="credits">Elias Csuka, Joshua Durrant, Leander Hemmi, Cedric Koller, Mathias Schmid</h5>
                </span>
            </Footer>
        </Layout>
    );
}