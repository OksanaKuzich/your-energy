import Sun from "../../images/sun.svg";
import HeroXl from "../../images/hero.png";
import HeroSm from "../../images/hero-sm.png";
import { HeroWrapper } from "./Hero.style";

export const Hero = () => {
  const data = ["Sport", "Healthy", "Workout", "Diet"];

  return (
    <>
      <HeroWrapper>
        <>
          <img src={Sun} alt="Logo icon" />
          <h1>Get Body in shape, Stay healthy</h1>
          <p>
            Transform your physique and embrace a healthier lifestyle with our
            comprehensive fitness and nutrition support.
          </p>
        </>
        <>
          <img src={HeroSm} alt="Logo icon" />
          <ul>
            {data.map((i, idx) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </>
      </HeroWrapper>
      <img src={HeroXl} alt="Logo icon" />
    </>
  );
};
