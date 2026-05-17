import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import "@/styles/globals.css";
import {
  GA_ID,
  CLARITY_ID,
  captureUtm,
  pageview,
  isTrackingDisabled,
} from "@/components/v2/lib/analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [trackingOn, setTrackingOn] = useState(false);

  useEffect(() => {
    const allowed = !isTrackingDisabled();
    setTrackingOn(allowed);
    if (allowed) captureUtm();
  }, []);

  useEffect(() => {
    if (!trackingOn || !GA_ID) return;
    const handle = (url) => pageview(url);
    router.events.on("routeChangeComplete", handle);
    return () => router.events.off("routeChangeComplete", handle);
  }, [router.events, trackingOn]);

  return (
    <>
      {trackingOn && GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      )}

      {trackingOn && CLARITY_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}

      <Component {...pageProps} />
    </>
  );
}
