import { IconCloudDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { toast } from "sonner";

const DownloadResume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.5 } },
  };

  const handleDownload = useCallback(() => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      try {
        const link = document.createElement("a");
        const fileID = "18r8SaE40PmARQSv5kV42NAQaLsg-3R8B";
        link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        toast.success("Resume downloaded!");
      } catch (error) {
        console.error("Download failed:", error);
        toast.error("Failed to download resume.");
      } finally {
        setIsDownloading(false);
      }
    }, 3000);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      aria-label="Download Resume"
      className=""
    >
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex w-full transform items-center justify-center gap-2 rounded-full border border-secondary px-4 py-3 font-medium text-800 shadow-md transition-all active:scale-105 md:w-fit"
      >
        {isDownloading ? (
          <>
            <Spinner />
            <motion.span variants={textVariant}>Downloading...</motion.span>
          </>
        ) : (
          <>
            <motion.span variants={textVariant}>
              <IconCloudDownload aria-hidden="true" />
            </motion.span>
            <motion.span variants={textVariant} className="uppercase">
              download resume
            </motion.span>
          </>
        )}
      </button>
    </motion.div>
  );
};

const Spinner = () => (
  <svg
    className="h-5 w-5 animate-spin text-black"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default DownloadResume;
