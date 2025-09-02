import "./SubscribeForm.css";
import { useEffect } from "react";

const SubscribeForm = () => {
  useEffect(() => {
    window.ml = { q: [["account", import.meta.env.VITE_MAILERLITE_ACCOUNT]] };
    const script = document.createElement("script");
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div
      className="ml-embedded subscribe-form"
      data-form={import.meta.env.VITE_MAILERLITE_FORM_ID}
    ></div>
  );
};

export default SubscribeForm;
