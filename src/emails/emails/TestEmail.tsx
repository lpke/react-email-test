import { Button, Html } from "@react-email/components";

export default function TestEmail() {
  return (
    <Html>
      <Button
        style={{ background: "#000", color: "#fff", padding: "12px 20px", cursor: "pointer" }}
      >
        Example Button
      </Button>
    </Html>
  );
}
