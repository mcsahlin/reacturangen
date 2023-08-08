import {
  ImageInfoWrapper,
  InfoWrapper,
  TextWrapper,
  Wrapper,
} from "./styled/Wrappers";
import MeatPic from '../assets/img/meat-3.jpg';

export const HomeInfo = () => {
  return (
    <>
      <InfoWrapper>
        <div>
          <TextWrapper>
            Welcome to Reactaurangen
            <br />
            <br /> Where we specialize in providing you with the best quality
            meat dishes around. Our experienced chefs use only the finest cuts
            of meat, sourced from trusted suppliers, to ensure that every dish
            is bursting with flavor and cooked to perfection. Whether you're in
            the mood for a juicy steak, succulent ribs, or tender chicken, we
            have something for everyone. Our menu offers a range of classic and
            contemporary dishes, all made with the freshest ingredients and
            cooked to order. Come and join us for a meal that will tantalize
            your taste buds and leave you feeling satisfied. Our friendly staff
            are always on hand to make recommendations and ensure that your
            dining experience is one to remember. So, whether you're celebrating
            a special occasion or just looking for a great night out, we look
            forward to welcoming you to our meat restaurant.
          </TextWrapper>
        </div>
        <div>
          <ImageInfoWrapper
            src={MeatPic}
            alt="Image of meat"
          ></ImageInfoWrapper>
        </div>
      </InfoWrapper>
    </>
  );
};
