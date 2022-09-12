import { ButtonContainer, ButtonWrapper } from "./ButtonStyle";

export default function Button({ disabled, text, bgColor, onClick }) {
    return (
        <ButtonContainer>
            <ButtonWrapper
                variant="contained"
                style={{
                    backgroundColor: bgColor,
                    color: '#000'
                }}
                disabled={disabled}
                type="submit"
                onClick={onClick}
            >
                {text}
            </ButtonWrapper>
        </ButtonContainer>
    )
}