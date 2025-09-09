import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <style jsx global>{`
          body { font-family: 'Roboto', sans-serif; margin: 0; padding: 0; color: #343a40; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          @media (max-width: 768px) { .container { padding: 0 10px; } }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}