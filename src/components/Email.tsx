import { Head, Html, Preview, Tailwind } from "@react-email/components";

type EmailProps = {
  preview?: string;
  colors?: Record<string, string>;
  className?: string;
  children: React.ReactNode;
};

export default function Email({
  preview,
  colors,
  className,
  children,
}: EmailProps) {
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
      <Html className={className}>
        <Head />
        {preview && <Preview>{preview}</Preview>}
        {children}
      </Html>
    </Tailwind>
  );
}
