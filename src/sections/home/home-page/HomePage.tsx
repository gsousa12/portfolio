import { SectionTitle } from "@components/section-title/SectionTitle";
import { SocialBox } from "@components/social-box/SocialBox";
import { StackBox } from "@components/stack-box/StackBox";
import { ContentWrapper } from "@components/wrappers/content-wrapper/ContentWrapper";
import { socialItemsData, stacksData } from "@datas/home-page-datas";

export const HomePage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Hi," />
        <p className="block isolate">
          My name is Gabriel - a FullStack Developer with a focus on Backend.
          I'm an enthusiast of TypeScript, Node.js/Bun, and React. Here, I share
          my projects, articles, and thoughts on technology and software
          development. Feel free to connect with me!
        </p>
        <SocialBox socialItems={socialItemsData} />
        <StackBox stacks={stacksData} />
      </div>
    </ContentWrapper>
  );
};
