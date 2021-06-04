import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../components/AppComponents/Footer"
import Navbar from "../components/AppComponents/Navbar"
import WhatsAppButton from "../components/UtilityComponents/WhatsAppButton"

function AppLayout({ children, refs }) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Instituto Educacional Gnosis - Cursos de pós-graduação na área da
          medicina
        </title>

        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '294467252111944');
            fbq('track', 'PageView');`}
        </script>


        
      </Helmet>

      <Navbar refs={refs} />

      <main>{children}</main>

      <WhatsAppButton />
      <Footer />
    </React.Fragment>
  )
}

export default AppLayout
