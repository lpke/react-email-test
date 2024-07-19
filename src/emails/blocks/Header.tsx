import Email from "../../components/Email";
import { Button } from "@react-email/components";

const colors = {
  purple: "#300431",
  orange: "#FF5D2B",
  blue: "#CEEDFF",
  cream: "#FFFCF2",
  grey: "#D9D9D9",
};

export default function Header() {
  return (
    <Email colors={colors}>
      <Button className="bg-purple cursor-pointer py-4 px-6 text-white">
        Example Button
      </Button>
    </Email>
  );
}
