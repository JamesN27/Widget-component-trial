'use client';

import { useEffect } from 'react';

export default function OddspediaWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      window.oddspediaWidgetOddsComparisonPopularSportsLeagues = {
        api_token: "1802fa7b754c1a082862aa19948c30499bcd952be46462a15b5874b481e3",
        type: "odds-comparison",
        domain: "widget-component-trial.vercel.app/",
        selector: "oddspedia-widget-container",
        width: "1200",
        theme: "1",
        odds_type: "1",
        language: "en",
        primary_color: "#283E5B",
        accent_color: "#00B1FF",
        font: "Roboto",
        logos: "true",
        limit: "10",
        popular: "false",
        sports: "",
        leagues: ""
      };

      const initScript = document.createElement('script');
      initScript.src =
        'https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetOddsComparisonPopularSportsLeagues';
      initScript.async = true;

      document.getElementById('oddspedia-widget-container').appendChild(initScript);
    `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
