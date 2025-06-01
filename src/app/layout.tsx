import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/Footer';
import Header from './components/Header';

export const metadata: Metadata = {
  title: "Free Temp Mail - Disposable Email Service",
  description: "Get a secure, anonymous temporary email instantly. Use Temp Mail to protect your inbox from spam.",
  keywords: ["temp mail", "temporary email", "disposable email", "anonymous email", "email generator"],
  openGraph: {
    title: "Free Temp Mail - Anonymous Disposable Email",
    description: "Create free temp mail addresses instantly. No signup. Stay private.",
    url: "https://www.www.goysto.shop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Temp Mail",
    description: "Use anonymous temp email to protect your inbox. No registration.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="g5rUsPJzdSVr6jnNPzAqJRhTDPvnj8XDWTV5rdKN_h8" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
