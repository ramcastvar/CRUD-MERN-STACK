import React from "react";
import { Container, Section, Button } from "react-bulma-components";

const AddButton = ({ onClick }) => {
    return (
        <Section>
            <Container>
                <div className="is-pulled-right">
                    <Button onClick={onClick} className="button is-link" style={{ width: 150 }} >Add</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddButton
