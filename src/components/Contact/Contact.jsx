import React from "react";
import styled from "styled-components";

const Contact = () => {
	return (
		<Wrapper>
			<Container>
				<Title>
					Join our newsletter and stay up to date with all promotions!
				</Title>
				<Content>
					<Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus fugit dolores, vel eius doloremque
						cupiditate ipsum ipsam soluta recusandae deserunt?
					</Description>
					<FormContainer>
						<Form>
							<Input type="email" />
							<SubmitBtn>Subscribe</SubmitBtn>
						</Form>
					</FormContainer>
				</Content>
			</Container>
		</Wrapper>
	);
};

export default Contact;

const Container = styled.div`
	margin: 0 auto;
	width: 90vw;
	max-width: var(--max-width);
`;

const Content = styled.div`
	display: flex;
  align-items: center;
	margin-top: 2rem;
	gap: 5rem;
`;

const Title = styled.h3`
	font-size: 1.6rem;
	text-align: left;
  letter-spacing: var(--spacing);
`;

const Description = styled.p`
	flex: 2;
	text-align: left;
	line-height: 1.5;
	letter-spacing: var(--spacing);
`;

const FormContainer = styled.div`
`;

const Form = styled.form`
	display: flex;
  flex: 3;
	justify-content: space-between;
	align-items: center;
	height: 3rem;
	width: 90vw;
	max-width: 35rem;
`;

const SubmitBtn = styled.button`
	flex: 1;
	font-size: 1rem;
	padding: 0.5rem 1rem;
	height: 100%;
  border-top-right-radius: .5rem;
  border-bottom-right-radius: .5rem;
  border: .2rem solid var(--primary-3);
  border-left: none;
  background: var(--primary-1);
  color: var(--primary-3);
  font-weight: bold;
  letter-spacing: var(--spacing);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    background: var(--primary-3);
    color: var(--primary-1);
  }
`;

const Input = styled.input`
	flex: 3;
	border-right: none;
	height: 100%;
	border-top-left-radius: 0.5rem;
	border-bottom-left-radius: 0.5rem;
  border: .2rem solid var(--primary-3);
  outline: none;
`;

const Wrapper = styled.section`
	padding: 5rem 0;

	@media screen and (max-width: 992px) {
		${Content} {
			flex-direction: column;
			align-items: center;
		}
	}
`;
