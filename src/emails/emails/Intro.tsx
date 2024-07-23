import theme from "../../theme";
import Email from "../../components/Email";
import { Container, Row, Section } from "@react-email/components";
import Wave from "../blocks/Wave";
import Headline from "../blocks/Headline";
import Content from "../blocks/Content";
import Button from "../blocks/Button";

export default function Header() {
  return (
    <Email colors={theme} className="bg-gray-100 py-4">
      <Container className="bg-white w-[600px] max-w-full rounded-md overflow-hidden">
        <Wave />

        <Section className="p-6 pt-3 md:p-10 md:pt-4">
          <Headline />

          <Content />

          <Section className="mt-4">
            <Row>
              <Button>Call to action</Button>
            </Row>
          </Section>
        </Section>
      </Container>
    </Email>
  );
}
