import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>

            <h1>Milk Header</h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "700px",
                                height: "500px",
                                backgroundColor: "red"
                            }}
                        >
                            <img
                                style={{ scale: ".75" }}
                                src="https://target.scene7.com/is/image/Target/GUEST_419f1169-a698-45a1-8d89-ad28136ba841?wid=488&hei=488&fmt=pjpeg"
                                alt="milk"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "25px",
                                backgroundColor: "red"
                            }}
                        >
                            <ol>
                                <li>Good for Bones</li>
                                <li>tasty</li>
                                <li>used for cooking food</li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. This is a website made in. Mateo Torres.
                Hello World!
            </p>
        </div>
    );
}

export default App;
