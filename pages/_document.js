import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const structuredData = {
      "@context":"http://schema.org",
      "@type":"Restaurant",
      "name":"La Bola",
      "description":"Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester.",
      "url":"https://labolarochester.com",
      "image":"https://labolarochester.com/logo.png",
      "priceRange": "$$",
      "servesCuisine": "Spanish, Mediterranean",
      "openingHours": [
        "Mo-Fr 11:30-15:00",
        "Mo-Fr 16:00-20:30"
      ],
      "acceptsReservations": true,
      "menu": "https://labolarochester.com/#menu",
      "address":{
         "@type":"PostalAddress",
         "streetAddress":"240 East Main St.",
         "addressLocality":"Rochester",
         "addressRegion":"NY",
         "postalCode":"14604"
      },
      "telephone":"(585) 434-0044",
      "sameAs": ["https://www.instagram.com/labolarochester", "https://avvinorochester.com/labola"]
   };

    const scriptText = JSON.stringify(structuredData, null, 2);

    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />

          <meta property="og:url" content="https://labolarochester.com"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="La Bola By AVVINO"/>
          <meta property="og:description" content="Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester."/>
          <meta property="og:image" content="https://labolarochester.com/pic2.jpg"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:domain" content="labolarochester.com"/>
          <meta property="twitter:url" content="https://labolarochester.com"/>
          <meta name="twitter:title" content="La Bola By AVVINO"/>
          <meta name="twitter:description" content="Experience the vibrant flavors of Spain and the Mediterranean at La Bola, a light fare restaurant and bar in downtown Rochester."/>
          <meta name="twitter:image" content="https://labolarochester.com/pic2.jpg"/>

          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: ` ${JSON.stringify(structuredData, null, 2)}` }}
          />
        </Head>
        <body className="relative bg-[url('/bg2.jpg')] backdrop-filter bg-fixed bg-cover">
          <div className=""></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
