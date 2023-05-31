import React, { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTransaction, postTransaction, getAllTransactions } from "../../../stores/transactions-slice";
import { Background, CloseButton, FormButton } from "../../atoms";
import { Container, Close, Header, Title, Form, InputContainer, SubmitContainer, MainFormContainer, LeftContainer, RightContainer, Label, LabelCenter, Input, TextArea } from "./Modal.style";

function Modal({modalInfo, setModalInfo ,setModalShow}) {
    const { mainTitle, colorName, title, description, created, value, type, id} = modalInfo;
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const { name, value } = target;
        setModalInfo({...modalInfo, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if ('id' in modalInfo) {
            dispatch(editTransaction({ id: parseInt(id), value: parseInt(value), created, title, description, type }));
        } else {
            dispatch(postTransaction({ value: parseInt(value), created, title, description, type }));
        }
        dispatch(getAllTransactions());
        setModalShow(false);
    }

    return (
    <>
        <Background/>
        <Container>
            <Close>
                <CloseButton onClick={() => setModalShow(false)}/>
            </Close>
            <Header>
                <Title colorName={colorName}>{mainTitle}</Title>
            </Header>
            <Form>
                <MainFormContainer>
                    <LeftContainer>
                        <InputContainer>
                            <Label htmlFor="value" colorName={colorName}>Value</Label>
                            <Input value={value !== undefined ? value : 0} type="number" name="value" id="value" onChange={handleChange}/>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="created" colorName={colorName}>Date</Label>
                            <Input type="date" name="created" id="created" onChange={handleChange}/>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="title" colorName={colorName}>Title</Label>
                            <Input value={title !== undefined ? title : ""} type="text" name="title" id="title" onChange={handleChange}/>
                        </InputContainer>
                        <InputContainer>
                            <Label htmlFor="description" colorName={colorName}>Description</Label>
                            <TextArea value={description} name="description" id="description" cols="20" rows="5" placeholder="..." onChange={handleChange}></TextArea>
                        </InputContainer>
                    </LeftContainer>

                    <RightContainer>
                        <LabelCenter htmlFor="attachment" colorName={colorName}>Attachment</LabelCenter>
                        <Input type="file" name="attachment" id="attachment"/>
                    </RightContainer>
                </MainFormContainer>
                <SubmitContainer>
                    <FormButton 
                        onClick={(e) => {
                            e.preventDefault()
                            setModalShow(false)
                        }}
                        colorName="negative"
                    >Cancel</FormButton>
                    <FormButton onClick={handleSubmit} colorName="positive">Save</FormButton>
                </SubmitContainer>
            </Form>

        </Container>
    </>
    );
}

export default Modal;
