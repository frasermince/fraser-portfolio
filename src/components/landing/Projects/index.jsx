import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import Card from "components/common/Card";
import starIcon from "assets/icons/star.svg";
import forkIcon from "assets/icons/fork.svg";
import { Wrapper, Content, ProjectContent, Thumbnail, ProjectHeader } from "./styles";
import { StaticImage } from "gatsby-plugin-image"


export default () => {
  const projectInfo = {
    "Muzero Implementation": {
      description: "My most recent work where I implemented Muzero in jax and ray distributed trained on atari games. I spent a considerable amount of time understanding the paper and implementing the algorithm.",
      url: "https://github.com/frasermince/muzero",
      learnings: [
        "Learned how to use Jax to have an easy way to build neural nets in a way that is easy to use and device portable",
        "Learned how to use Ray",
        "Learned how to orchestrate distributed training",
        "Became proficient in the theory behind the AlphaZero family of algorithms"
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/muzero2_illustration.png" alt="Illustration of a stylized game of pong combined with go" />,
      startTime: "2022",
    },
    "Reinforcement Learning Paper Implementations": {
      description: "A collection of RL algorithms I implemented in pytorch. This was the first step on my path to become proficient reading and implementing RL algorithms.",
      url: "https://github.com/frasermince/rl-papers",
      learnings: [
        "Became more comfortable with Pytorch",
        "Gained experience understanding the basics of RL papers and the math behind them ",
        "Learned the basics of value networks, policy networks, and actor critic networks",
        "Implemented DQN, DDQN, A2C, and started a Muzero implementation"
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/rl_papers2_illustration.png" alt="Illustration of a man inventing AI to be used in games" />,
      startTime: "2021",
    },
    "Unchart": {
      description: "A startup idea I implemented to easily read a book in another language. Includes an Elixir GraphQL backend and a Purescript React Native frontend.",
      url: "https://unchart.io",
      learnings: [
        "Refined my skills in Purescript as I was in a bit of a functional programming phase",
        "Learned how to use GraphQL and Apollo",
        "Spend a considerable amount of time cold emailing and messaging potential users to get feedback on the product",
        "Learned how to use React Native",
        "Learned to use spaCy for NLP tasks involving processing epub files",
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/unchart_illustration.png" alt="Illustration of a book that is combined with a computer" />,
      startTime: "2020",
    },
    "Fast.ai course and beginning interest in machine learning": {
      description: "During this period I began learning about AI and deep learning. I took the fast.ai course and participated in a few kaggle competitions. I also began to learn about the theory behind deep learning and AI.",
      url: "",
      learnings: [
        "Learned how to use Pytorch",
        "Learned how to use fast.ai",
        "Learned the basics of neural nets and created a blog post distilling my understanding https://thoughtbot.com/blog/neural-nets",
        "Learned about convolutional neural nets and attention mechanisms",
        "Began going through Spinning Up In Deep RL found here https://spinningup.openai.com/",
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/neural_net_illustration.png" alt="Illustration of a stylized neural net" />,
      startTime: "2018-2019",
    },
    "Interactive Code Portfolio": {
      description: "Another project built in purescript. This one with the goal of being an interactive code first portfolio.",
      url: "https://github.com/frasermince/code-saga",
      learnings: [
        "Learned how to use Purescript",
        "Learned how to create a useful product to fit my needs"
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/code_portfolio_illustration.png" alt="Illustration of a computer higher than trees showing off code" />,
      startTime: "2017",
    },
    "Make a Lisp": {
      description: "A lisp implementation I built in Haskell",
      url: "https://github.com/frasermince/mal-personal",
      learnings: [
        "Improved my Haskell skills",
        "Learned how to use the parsec library",
        "Learned more about the homoiconic nature of Lisp",
      ],
      imageComponent: <StaticImage height="200" src="../../../assets/make_a_lisp_illustration.png" alt="Illustration of a computer higher than trees showing off code" />,
      startTime: "2016",
    }
  };

  return (
    <Wrapper as={Container} id="projects">
      <ProjectHeader>
        <h2>Projects</h2>
        <p>Explore a curated selection of personal projects that I have undertaken throughout my career, each serving as an opportunity for growth and skill development. From startup ideas to unfinished endeavors, these projects reflect my dedication to continuous learning and self-improvement.</p>
      </ProjectHeader>
      <Flex>
        {Object.entries(projectInfo).map(
          ([name, value], index) => (
            <Item
              key={index}
              marginBottom={30}
              gap={1}
              stretch
            >
              <Card as="a" href={value.url} target="_blank" rel="noopener noreferrer" paddingLeft={10} paddingRight={10}>
                <ProjectContent reversed={index % 2 == 0}>
                  <Thumbnail>
                    {value.imageComponent}
                  </Thumbnail>

                  <Content>
                    <div> 
                      <h4>{name}</h4>
                      <p>{value?.description}</p>
                      <ul>
                        {value?.learnings.map((learning) => {
                          return <li>{learning}</li>

                        })}
                      </ul>
                    </div>
                  </Content>
                </ProjectContent>
              </Card>
            </Item>
          )
        )}
      </Flex>
    </Wrapper>
  );
};
