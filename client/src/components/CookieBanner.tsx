import { useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(true);

  const handleAccept = () => {
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-[9999]"
          style={{ backgroundColor: "rgba(15, 58, 125, 0.97)" }}
        >
          <div
            className="border-t shadow-2xl"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Content */}
                <div className="flex items-start gap-4 flex-1">
                  <Cookie className="flex-shrink-0 mt-1" size={28} style={{ color: "#ffffff" }} />
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 text-base" style={{ color: "#ffffff" }}>
                      {t("cookies.banner_title")}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {t("cookies.banner_description")}{" "}
                      <a
                        href="/cookies"
                        className="underline font-semibold transition-colors"
                        style={{ color: "#ffffff" }}
                      >
                        {t("cookies.banner_learn_more")}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 flex-shrink-0 w-full md:w-auto">
                  <button
                    onClick={handleReject}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "#ffffff",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    {t("cookies.banner_reject")}
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#0F3A7D",
                    }}
                  >
                    {t("cookies.banner_accept")}
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleReject}
                  className="absolute top-3 right-3 md:static p-1.5 rounded-lg transition-colors cursor-pointer"
                  style={{ color: "#ffffff" }}
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
