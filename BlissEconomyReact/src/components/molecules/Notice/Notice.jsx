import { CloseButton, FormButton, Background } from "../../atoms";
import { Container, CloseContainer, Title, Description, ButtonContainer } from "./Notice.style";

function Notice({title, description, setClose, setAction}) {
    return (  
        <>
        <Background/>
        <Container>
            <CloseContainer>
                <CloseButton onClick={setClose}/>
            </CloseContainer>

            <Title>{title}</Title>
            <Description>{description}</Description>

            <ButtonContainer>
                <FormButton onClick={setClose} colorName="negative">Cancel</FormButton>
                <FormButton onClick={setAction} colorName="positive">Confirm</FormButton>
            </ButtonContainer>
        
        </Container>
        </>
        
    );
}

export default Notice;