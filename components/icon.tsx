import InstagramIcon from "./icons/instagram";
import SubstackIcon from "./icons/substack";

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "instagram":
      return <InstagramIcon />;
    case "substack":
      return <SubstackIcon />;
    default:
      return "";
  }
};

export default Icon;
