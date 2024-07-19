import Email from "../components/Email";
import {
  Text,
  Container,
  Img,
  Row,
  Section,
  Heading,
  Button,
} from "@react-email/components";

const colors = {
  purple: "#300431",
  orange: "#FF5D2B",
  blue: "#CEEDFF",
  cream: "#FFFCF2",
  grey: "#D9D9D9",
  textgrey: "#363841",
};

export default function Header() {
  return (
    <Email colors={colors} className="bg-gray-100 py-4">
      <Container className="bg-white w-[600px] max-w-full rounded-md overflow-hidden">
        <Section>
          <Img src="/static/sweep_orange.png" className="md:w-auto w-[128px]" />
        </Section>

        <Section className="p-6 pt-3 md:p-10 md:pt-4">
          <Row>
            <Heading as="h2" className="text-purple">
              Hi <span className="text-orange">John,</span>
              <br />
              Headline text example
            </Heading>
          </Row>

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
              <Button className="bg-purple text-white rounded-md w-[200px] text-center p-[10px] shadow-md">
                Call to action
              </Button>
            </Row>
          </Section>
        </Section>
      </Container>
    </Email>
  );
}
