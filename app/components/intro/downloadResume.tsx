import { IconCloudDownload, IconRings } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { Ring } from "react-spinners-css";
import { toast } from "sonner";

const DownloadResume = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const fileID = process.env.NEXT_PUBLIC_RESUME_FILE_ID;

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, delay: 0.4 } },
  };

  const handleDownload = useCallback(() => {
    setIsDownloading(true);

    setTimeout(() => {
      setIsDownloading(false);
      try {
        const link = document.createElement("a");
        if (fileID === undefined) {
          throw new Error("File ID not found");
        } else {
          toast.success("Resume downloaded!");

          link.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      } catch (error) {
        console.error("Download failed:", error);
        toast.error("Failed to download resume.");
      } finally {
        setIsDownloading(false);
      }
    }, 3000);
  }, [fileID]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      aria-label="Download Resume"
      className=""
    >
      <motion.button
        whileHover={{
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex w-full transform items-center justify-center gap-2 rounded bg-secondary px-4 py-3 font-medium uppercase shadow transition-all md:w-fit"
      >
        {isDownloading ? (
          <>
            <Ring size={20} color="#111827" aria-hidden="true" />
            <motion.span variants={textVariant}>Downloading...</motion.span>
          </>
        ) : (
          <>
            <motion.span variants={textVariant}>
              <IconCloudDownload aria-hidden="true" />
            </motion.span>
            <motion.span variants={textVariant}>Download Resume</motion.span>
          </>
        )}
      </motion.button>
    </motion.div>
  );
};

export default DownloadResume;
