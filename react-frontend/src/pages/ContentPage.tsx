import { Layout, Row, Button } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Legend } from "./components/legend";
import { MapWrapper } from "./components/MapWrapper";
import { CheckBoxes } from "./components/Checkboxes";
import PointControlBox from "./components/PointControlBox";

export default function ContentPage() {

    return (
        <Layout className="layout" id="contentPage">
            <Content className="content" id="mapContent">
                <Row id="titelPage">
                    <h1 id="contentTitel">Zürich</h1>
                </Row>
                <Row id="mapPage">
                    <h1 id="mapHeader">Content Page</h1>
                    <MapWrapper/>
                    <Legend/>
                    <CheckBoxes/>
                    <PointControlBox/>
                    <Link to="/">
                        <Button>Back to home (TEMP)</Button>
                    </Link>
                </Row>
            </Content>
            <Footer className="footer" id="mapFooter">
                <span id="footerText">
                    <h5 id="fortnite">Elias Csuka, Joshua Durrant, Leander Hemmi, Cedric Koller, Mathias Schmid</h5>
                </span>
            </Footer>
        </Layout>
    );
}