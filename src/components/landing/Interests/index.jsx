import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Container from "components/common/Container";
import {
  Wrapper,
  SkillsWrapper,
  Details,
  Thumbnail,
  Content,
  ProjectContent,
  ListWrapper,
} from "./styles";
import Card from "components/common/Card";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Item } from "react-flex-ready";

const interests = {
  "Machine Learning": {
    interests: {
      RLHF: {
        description:
          "As reinforcement learning has found more production use cases through RLHF, I have begun to explore the state of the art.",
        steps: {
          title: "Currently Reading",
          items: [
            [
              "Learning to Summarize From Human Feedback",
              "https://openai.com/blog/learning-to-summarize-with-human-feedback/",
            ],
            [
              "Training a helpful and harmless assistant with reinforcement learning from human feedback",
              " https://arxiv.org/abs/2204.05862",
            ],
            [
              "Constitutional AI",
              "https://www.anthropic.com/constitutional.pdf",
            ],
            [
              "Deepmind Sparrow",
              "https://storage.googleapis.com/deepmind-media/DeepMind.com/Authors-Notes/sparrow/sparrow-final.pdf",
            ],
          ],
        },
        imageComponent: (
          <StaticImage
            height="200"
            src="../../../assets/rlhf_illustration.png"
            alt="Man teaching a machine to think"
          />
        ),
      },
      Muesli: {
        description:
          "A new algorithm from deepmind. I am currently reading the theory to fully understand the inner workings",
        steps: {
          title: "Currently Reading",
          items: [
            [
              "Reinforcement Learning and Control as Probabilistic Inference: Tutorial and Review",
              "https://arxiv.org/abs/1805.00909",
            ],
            [
              "Monte-Carlo tree search as regularized policy optimization",
              "https://arxiv.org/pdf/2007.12509.pdf",
            ],
            [
              "Maximum A Posteriori Policy Optimisation",
              "https://arxiv.org/pdf/1806.06920.pdf",
            ],
          ],
        },
        imageComponent: (
          <StaticImage
            height="200"
            src="../../../assets/muesli_illustration.png"
            alt="Muesli Illustration"
          />
        ),
      },
      "Blog Posts": {
        description:
          "Recording the work I have done in RL for my own reference and to share with others",
        steps: {
          title: "Posts to Write",
          items: [
            ["DQN and Value Methods"],
            ["A2C and Policy Gradient Methods"],
            ["Muzero and the AlphaZero family"],
          ],
        },
        imageComponent: (
          <StaticImage
            height="200"
            src="../../../assets/blog_post_illustration2.png"
            alt="AI Coming to Life"
          />
        ),
      },
    },
  },
};

export default () => {
  const {
    content: {
      frontmatter: { title, description, action },
    },
  } = useStaticQuery(graphql`
    query {
      content: markdownRemark(
        frontmatter: { section: { eq: "current_interests" } }
      ) {
        frontmatter {
          title
          description
          action
        }
      }
    }
  `);
  return (
    <Flex>
      <Wrapper id="interests">
        <SkillsWrapper as={Container}>
          <Thumbnail>
            <StaticImage
              src="../../../assets/abstract_ai_door.png"
              alt="Man Entering High Tech Door"
            />
          </Thumbnail>
          <Details>
            <h1>{title}</h1>
            <p>{description}</p>
          </Details>
        </SkillsWrapper>
      </Wrapper>
      <ListWrapper as={Container}>
        <Flex>
          {Object.entries(interests).map(([interestName, interestInfo], i) => {
            return (
              <div>
                <h3>{interestName}</h3>
                {Object.entries(interestInfo.interests).map(
                  ([name, value], index) => (
                    <Item key={index} marginBottom={30} gap={1} stretch>
                      <Card
                        as="a"
                        href={value.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        paddingLeft={10}
                        paddingRight={10}
                      >
                        <ProjectContent reversed={index % 2 == 0}>
                          <Thumbnail>{value.imageComponent}</Thumbnail>

                          <Content>
                            <div>
                              <h4>{name}</h4>
                              <p>{value?.description}</p>
                              <h4>{value?.steps.title}</h4>
                              <ul>
                                {value?.steps.items.map((step) => {
                                  return (
                                    <li>
                                      {step[0]}
                                      {step.length > 1 ? " - " + step[1] : ""}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </Content>
                        </ProjectContent>
                      </Card>
                    </Item>
                  )
                )}
              </div>
            );
          })}
        </Flex>
      </ListWrapper>
    </Flex>
  );
};
