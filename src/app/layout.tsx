import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/lib/theme-context";

// Load fonts
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter" 
});

const firaCode = Fira_Code({ 
  subsets: ["latin"],
  variable: "--font-fira-code" 
});

export const metadata: Metadata = {
  title: "ranl - coder, streamer and builder",
  description: "Personal site of ranl, a dev who streams while working on passion projects, sharing code, and ranting about tech.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased transition-colors duration-300`}>
        <ClientBody>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ClientBody>
      </body>
    </html>
  );
}
