import { Row, Heading } from "@react-email/components";
import theme from "../../theme";
import Email from "../../components/Email";

export default function Headline() {
  return (
    <Email colors={theme}>
      <Row>
        <Heading as="h2" className="text-purple text-left">
          Hi <span className="text-orange">John,</span>
          <br />
          Headline text example
        </Heading>
      </Row>
    </Email>
  );
}
