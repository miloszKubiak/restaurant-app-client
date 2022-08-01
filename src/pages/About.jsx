import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/hero-bg2.jpg";
import { PageHero } from "../components";

const AboutPage = () => {
	return (
		<>
			<PageHero title="About" />
			<Wrapper>
				<ImgContainer>
					<img src={aboutImg} alt="the cook is baking pizza" />
				</ImgContainer>
				<Article>
					<Title>
						<h2>our story</h2>
						<Underline />
					</Title>
					<Description>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore necessitatibus quidem voluptatem ea temporibus. Neque a molestiae impedit? Quidem debitis, eaque quo corporis ad magni non ex voluptate iusto quae. Nihil expedita at excepturi, architecto pariatur porro sint provident obcaecati voluptatem illum! Voluptatibus ea reiciendis ipsum repellat nobis blanditiis reprehenderit!
					</Description>
				</Article>
			</Wrapper>
		</>
	);
};

export default AboutPage;

const Wrapper = styled.div`
	display: flex;
	gap: 4rem;
	width: 90vw;
	margin: 0 auto;
	max-width: var(--max-width);
	min-height: calc(100vh - (20vh + 10rem));
	padding: 2rem;

	@media screen and (max-width: 992px) {
		flex-direction: column;
		justify-content: center;
	}
`;

const ImgContainer = styled.div`
	flex: 1;

	img {
		display: block;
		height: 30rem;
		width: 100%;
		object-fit: cover;
		border-radius: 0.3rem;
	}
`;

const Article = styled.article`
	flex: 1;
	text-align: left;
`;

const Title = styled.div`
	h2 {
		text-transform: capitalize;
		letter-spacing: var(--spacing);
		color: var(--grey-1);
		font-size: 2.5rem;
	}
`;

const Underline = styled.div`
	width: 6rem;
	height: 0.3rem;
	margin: .2rem 0;
	background: var(--primary-3);
`;

const Description = styled.p`
	margin: 0 auto;
	margin-top: 2rem;
	line-height: 1.5;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;
