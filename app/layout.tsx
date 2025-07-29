import { ReactNode } from "react"; 
import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

<head>
  <meta 
    name="viewport" 
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  />
</head>

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Oda Roba Hospital",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode; 
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
