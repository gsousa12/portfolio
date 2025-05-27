import { SectionTitle } from "../../../shared/components/section-title/SectionTitle";
import { SocialBox } from "../../../shared/components/social-box/SocialBox";
import { StackBox } from "../../../shared/components/stack-box/StackBox";
import { ContentWrapper } from "../../../shared/components/wrappers/content-wrapper/ContentWrapper";
import { socialItemsData, stacksData } from "../../../shared/datas/home-datas";

export const HomePage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Olá," />
        <span>
          Desenvolvedor FullStack - C# / Typescript - com foco em Backend.
        </span>
        <SocialBox socialItems={socialItemsData} />
        <StackBox stacks={stacksData} />
      </div>
    </ContentWrapper>
  );
};
