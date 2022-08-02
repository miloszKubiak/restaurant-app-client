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
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore labore error quis. Soluta inventore, corrupti expedita eos ipsam fugiat molestias voluptates quaerat cumque libero voluptatem assumenda sequi ab. Vel quae, odio aspernatur nihil saepe omnis porro pariatur molestiae commodi ullam accusamus non natus nulla! Architecto vitae quas possimus molestiae reprehenderit dolore perspiciatis quae expedita quibusdam voluptate dolorem vel repellendus in natus, odit non, aspernatur consequuntur aliquid repudiandae, enim cupiditate?
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
	line-height: 2;
	letter-spacing: var(--spacing);
	color: var(--grey-1);
`;
