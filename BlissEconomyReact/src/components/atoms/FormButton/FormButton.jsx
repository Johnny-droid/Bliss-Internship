import { FormButtonStyle } from "./FormButton.style";

function FormButton({onClick, colorName, children}) {
    return (  
        <FormButtonStyle onClick={onClick} colorName={colorName}>
            {children}
        </FormButtonStyle>
    );
}

export default FormButton;