import { FC } from "react";
import Marquee from "react-fast-marquee";
import Bitmap from "../../assets/imgs/Bitmap.png";
import PartnerCard from "./PartnerCard/PartnerCard";
import { partnersInfo } from "./PartnersInfo";

export interface PartnersMarqueeProps {}

const PartnersMarquee: FC<PartnersMarqueeProps> = () => {
  return (
    <Marquee style={{ marginTop: "40px" }} pauseOnHover={true}>
      {partnersInfo.map((item, index) => (
        <PartnerCard
          key={index}
          partnerImg={Bitmap}
          partnerName={item.partnerName}
        />
      ))}
    </Marquee>
  );
};

export default PartnersMarquee;
