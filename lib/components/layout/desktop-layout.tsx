import { Hero } from "../hero/hero";
import { RevealImageList } from "../projects/desktop-reveal";
import { Container } from "./container";

export const DesktopLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <Container>
        <div className="flex flex-col items-center justify-center">
          <RevealImageList />
        </div>
      </Container>
    </div>
  );
};
