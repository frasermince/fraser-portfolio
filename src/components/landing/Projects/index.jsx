import React from "react";
import { graphql } from "gatsby";
import { Flex, Item } from "react-flex-ready";
import Container from "components/common/Container";
import Card from "components/common/Card";
import { Wrapper, Content, ProjectContent, Thumbnail, ProjectHeader } from "./styles";
import { StaticImage } from "gatsby-plugin-image"


export default () => {
  const projectInfo = {
    "Muzero Implementation": {
      description: "A recent project where I successfully implemented the Muzero algorithm using Jax and Ray for distributed training on Atari games. The project required a deep understanding of the underlying theory and the development of skills in neural network building, distributed training orchestration, and the use of Jax and Ray.",
      learnings: [ 
        "Acquired proficiency in using Jax for building neural networks that are easy to use and device portable",
        "Developed expertise in using Ray for distributed training",
        "Learned how to orchestrate distributed training effectively",
        "Gained a thorough understanding of the AlphaZero family of algorithms and its underlying theory." 
      ],
      url: "https://github.com/frasermince/muzero",
      imageComponent: <StaticImage height="200" src="../../../assets/muzero2_illustration.png" alt="Illustration of a stylized game of pong combined with go" />,
      startTime: "2022",
    },
    "Reinforcement Learning Paper Implementations": {
      "description": "A compilation of RL algorithms implemented in Pytorch, representing an initial step in my journey towards proficiency in reading and implementing RL algorithms.",
      "learnings": [
        "Gained familiarity and comfort with Pytorch",
        "Developed the ability to understand the fundamentals of RL papers and the mathematical concepts behind them",
        "Acquired a foundational understanding of value networks, policy networks, and actor-critic networks",
        "Implemented DQN, DDQN, A2C, and initiated an implementation of Muzero"
      ],
      url: "https://github.com/frasermince/rl-papers",
      imageComponent: <StaticImage height="200" src="../../../assets/rl_papers2_illustration.png" alt="Illustration of a man inventing AI to be used in games" />,
      startTime: "2021",
    },
    "Unchart": {
  "description": "A startup idea I implemented to facilitate reading books in other languages, featuring an Elixir GraphQL backend and Purescript React Native frontend.",
    "learnings": [
        "Enhanced my expertise in Purescript during a period of focus on functional programming",
        "Acquired proficiency in GraphQL and Apollo",
        "Gained experience in reaching out to potential users through cold emailing and messaging to gather feedback on the product",
        "Became proficient in React Native",
        "Learned how to use spaCy for NLP tasks related to processing epub files",
      ],
      url: "https://unchart.io",
      imageComponent: <StaticImage height="200" src="../../../assets/unchart_illustration.png" alt="Illustration of a book that is combined with a computer" />,
      startTime: "2020",
    },
    "Fast.ai course and beginning interest in machine learning": {
      "description": "A period of learning and exploration in the field of AI and deep learning, including participation in the fast.ai course and Kaggle competitions, as well as delving into the underlying theory of deep learning and AI.",
      learnings: [
        "Acquired proficiency in using Pytorch",
        "Developed expertise in using fast.ai",
        "Gained a foundational understanding of neural networks, and distilled my learning in a blog post: https://thoughtbot.com/blog/neural-nets",
        "Became familiar with convolutional neural networks and attention mechanisms",
        "Began studying the \"Spinning Up In Deep RL\" guide: https://spinningup.openai.com/",
      ],
      url: "",
      imageComponent: <StaticImage height="200" src="../../../assets/neural_net_illustration.png" alt="Illustration of a stylized neural net" />,
      startTime: "2018",
    },
    "Interactive Code Portfolio": {
      "description": "A project developed with Purescript that aimed to create an interactive code-first portfolio.",
      "learnings": [
        "Developed proficiency in Purescript",
        "Gained experience in creating a product to meets my specific needs"
      ],
      url: "https://github.com/frasermince/code-saga",
      imageComponent: <StaticImage height="200" src="../../../assets/code_portfolio_illustration.png" alt="Illustration of a computer higher than trees showing off code" />,
      startTime: "2017",
    },
    "Make a Lisp": {
      "description": "A project to implement a Lisp dialect using Haskell",
      "learnings": [
        "Advance my skills in Haskell",
        "Became familiar with the Parsec library",
        "Gained deeper understanding of the homoiconic nature of Lisp"
      ],
      url: "https://github.com/frasermince/mal-personal",
      imageComponent: <StaticImage height="200" src="../../../assets/make_a_lisp_illustration.png" alt="Illustration of a computer higher than trees showing off code" />,
      startTime: "2016",
    }
  };

  return (
    <Wrapper as={Container} id="projects">
      <ProjectHeader>
        <h2>Projects</h2>
        <p>Explore a curated selection of personal projects that I have undertaken throughout my career, each serving as an opportunity for growth and skill development. From startup ideas event to my unfinished endeavors, these projects reflect my dedication to continuous learning and self-improvement.</p>
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
                      <h4>{name} - {value.startTime}</h4>
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
