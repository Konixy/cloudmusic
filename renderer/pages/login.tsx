import React, { useEffect, useState } from "react";

export default function Login() {
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(window.navigator.userAgent.toLowerCase().includes("macintosh"));
    }
  }, []);

  return <div className={isMac ? "mt-10" : ""}>zbi la mouette</div>;
}
