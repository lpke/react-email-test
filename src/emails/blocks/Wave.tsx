import { Img, Section } from "@react-email/components";
import Email from "../../components/Email";
import theme from "../../theme";

export default function Wave() {
  return (
    <Email colors={theme}>
      <Section>
        <Img
          src="https://i.imgur.com/9fZEVpI.png"
          className="md:w-auto w-[128px]"
        />
      </Section>
    </Email>
  );
}
