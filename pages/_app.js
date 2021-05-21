// import '../styles/globals.css'

import Head from 'next/head';

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        {/* bootstrap */}
        <link
          rel='stylesheet'
          href='./assets/css/bootstrap/bootstrap.min.css'
        />

        {/* css */}
        <link rel='stylesheet' href='./assets/css/style.css' />

        {/* fontawesome-free */}
        <link
          rel='stylesheet'
          href='./assets/vendor/fontawesome-free/css/all.min.css'
        />

        <script src='./assets/js/jquery.min.js' />
      </Head>
      <Component {...pageProps} />

      {/* loader */}
      {/* <div class='loading-overlay'>
        <div class='bounce-loader'>
          <div class='bounce1'></div>
          <div class='bounce2'></div>
          <div class='bounce3'></div>
        </div>
      </div> */}

      {/* button go to top */}
      <a id='scroll-top' href='#top' title='Top' role='button'>
        <i class='icon-angle-up'></i>
      </a>
    </>
  );
}

export default MyApp;
