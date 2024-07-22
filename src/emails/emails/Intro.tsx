import Email from "../../components/Email";
import { Text, Container, Row, Section } from "@react-email/components";
import Wave from "../blocks/Wave";
import Headline from "../blocks/Headline";
import theme from "../../theme";
import Button from "../blocks/Button";

export default function Header() {
  return (
    <Email colors={theme} className="bg-gray-100 py-4">
      <Container className="bg-white w-[600px] max-w-full rounded-md overflow-hidden">
        <Wave />

        <Section className="p-6 pt-3 md:p-10 md:pt-4">
          <Headline />

          <Row>
            <Text className="text-textgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              egestas eget nulla sed rutrum.
            </Text>
            <Text className="text-textgrey">
              Mauris rutrum, purus quis tincidunt sagittis, nisl metus euismod
              mi, id commodo elit augue non urna.
            </Text>
            <Text className="text-textgrey">
              Fusce at nunc arcu. Sed lobortis felis ac enim bibendum imperdiet.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </Text>
          </Row>

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
