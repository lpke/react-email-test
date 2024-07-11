import Email from "../../components/Email";
import {
  Button,
  Column,
  Container,
  Heading,
  Markdown,
  Row,
  Section,
} from "@react-email/components";

export default function TestEmail() {
  return (
    <Email colors={{ purple: "#300431" }}>
      <Container className="max-w-xl">
        <Heading>Heading</Heading>

        <Markdown>
          {`**Lorem ipsum** dolor sit amet, consectetur adipiscing elit, sed
do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`}
        </Markdown>

        <Section className="mb-8">
          <Row>
            <Column>Column 1, Row 1</Column>
            <Column>Column 2, Row 1</Column>
          </Row>
        </Section>

        <Button className="bg-purple cursor-pointer py-4 px-6 text-white">
          Example Button
        </Button>
      </Container>
    </Email>
  );
}
