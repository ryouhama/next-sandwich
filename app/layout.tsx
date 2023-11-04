import type { Metadata } from "next";
import { Providers } from "./providers";
import { PageLayout } from "./_PageLayout";

export const metadata: Metadata = {
  title: "Battle Ground Rating",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <main>
          <Providers>
            <PageLayout>{children}</PageLayout>
          </Providers>
        </main>
      </body>
    </html>
  );
}
