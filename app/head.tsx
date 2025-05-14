// app/head.tsx
export default function Head() {
  return (
    <>
      <title>EndlessChat</title>
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-RSK3XJ3F9F"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RSK3XJ3F9F');
          `,
        }}
      />
    </>
  );
}
