import { useToastHelper } from "@/helper/ToastMsgHelper";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MainAdministrator = () => {
  const router = useRouter();
  const showToast = useToastHelper();

  useEffect(() => {
    // Redirect to another page after a delay (for example, 3 seconds)
    const redirectTimer = setTimeout(() => {
      showToast({
        description: `Harus login terlebih dahulu!`,
        statusToast: "error",
      });
      router.push("/");
    }, 2000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(redirectTimer);
  }, []); // Empty dependency array ensures this effect runs only once

  return <>aowkoakwoakw</>;
};

export default MainAdministrator;
