import React from "react";
import { Script } from "gatsby";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      {/* <!-- Podscribe pixel --> */}
      <Script id="podscribe-pixel-id">
        {`
            (function (w, d) {
              var id = 'podscribe-capture',
              n = 'script';
              var e = d.createElement(n);
              e.id = id;
              e.async = true;
              e.src = 'https://d34r8q7sht0t9k.cloudfront.net/tag.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
              e.addEventListener('load', function() {
                w.podscribe('init', { user_id: '5b5e9391-684f-4f68-bf83-f2d963a6d467', advertiser: 'freshair' });
                w.podscribe('view');
              })
            })(window, document);
          `}
      </Script>

      <Script id="spotify-pixel-id">
        {`
          (function(w, d){
            var id='spdt-capture', 
            n='script';
            if (!d.getElementById(id)) {
              w.spdt =
                w.spdt ||
                function() {
                  (w.spdt.q = w.spdt.q || []).push(arguments);
                };
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = 'https://pixel.byspotify.com/ping.min.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            w.spdt('conf', { key: 'f4d14b1d6dd7407f95aa43d929665572' });
            w.spdt('view');
          })(window, document);
        `}
      </Script>
    </>
  );
};
