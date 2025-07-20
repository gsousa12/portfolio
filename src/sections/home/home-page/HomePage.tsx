import { SectionTitle } from "@components/section-title/SectionTitle";
import { SocialBox } from "@components/social-box/SocialBox";
import { StackBox } from "@components/stack-box/StackBox";
import { ContentWrapper } from "@components/wrappers/content-wrapper/ContentWrapper";
import { socialItemsData, stacksData } from "@datas/home-page-datas";

export const HomePage = () => {
  return (
    <ContentWrapper>
      <div className="flex flex-col">
        <SectionTitle label="Olá," />
        <p className="block isolate">
          Meu nome é Gabriel - Desenvolvedor FullStack, com foco em Backend.
          Entusiasta do Typescript, Node.js/Bun e React. Aqui compartilho meus
          projetos, artigos e pensamentos sobre tecnologia e desenvolvimento de
          software. Sinta-se à vontade para se conectar comigo!
        </p>
        <SocialBox socialItems={socialItemsData} />
        <StackBox stacks={stacksData} />
      </div>
    </ContentWrapper>
  );
};
