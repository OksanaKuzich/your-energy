import Sun from "../../images/sun.svg";
import HeroXl from "../../images/hero.png";
import HeroSm from "../../images/hero-sm.png";
import { HeroWrapper, TagList, TagItem, TagSection } from "./Hero.style";

export const Hero = () => {
  const data = ["Sport", "Healthy", "Workout", "Diet"];

  return (
    <>
      <HeroWrapper>
        <>
          <h1>
            <img src={Sun} alt="Logo icon" />
            Get Body in shape, Stay healthy
          </h1>
          <p>
            Transform your physique and embrace a healthier lifestyle with our
            comprehensive fitness and nutrition support.
          </p>
        </>
        <TagSection>
          <img src={HeroSm} alt="Logo icon" width="168px" height="100px" />
          <TagList>
            {data.map((i, idx) => (
              <TagItem key={idx}>#{i}</TagItem>
            ))}
          </TagList>
        </TagSection>
      </HeroWrapper>
      <img src={HeroXl} alt="Logo icon" />
    </>
  );
};
