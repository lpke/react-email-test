import { Html, Preview, Tailwind } from "@react-email/components";

type EmailProps = {
  preview?: string;
  colors?: Record<string, string>;
  children: React.ReactNode;
};

export default function Email({ preview, colors, children }: EmailProps) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: colors,
          },
        },
      }}
    >
      <Html>
        {preview && <Preview>{preview}</Preview>}
        {children}
      </Html>
    </Tailwind>
  );
}
