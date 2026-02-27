import { useEffect } from 'react';

function WhatsAppWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="elfsight-app-537ade13-ff13-4365-80ee-ae25f00ed218"
      data-elfsight-app-lazy
    ></div>
  );
}

export default WhatsAppWidget;