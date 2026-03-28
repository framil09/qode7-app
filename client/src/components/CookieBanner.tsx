import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("qode7_cookie_consent");
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("qode7_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("qode7_cookie_consent", "rejected");
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
        >
          <div
            style={{
              background: "rgba(11, 15, 26, 0.97)",
              borderTop: "1px solid rgba(29, 201, 164, 0.15)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Content */}
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{
                      background: "rgba(29, 201, 164, 0.1)",
                      border: "1px solid rgba(29, 201, 164, 0.2)",
                    }}
                  >
                    <Shield size={20} style={{ color: "#1dc9a4" }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-bold mb-1 text-base"
                      style={{ color: "#f0f4f8", letterSpacing: "-0.3px" }}
                    >
                      {t("cookies.banner_title")}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(160, 174, 192, 0.7)" }}
                    >
                      {t("cookies.banner_description")}{" "}
                      <a
                        href="/cookies"
                        className="underline font-semibold transition-colors"
                        style={{ color: "#1dc9a4" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#00ffe0"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#1dc9a4"; }}
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
                      backgroundColor: "transparent",
                      color: "rgba(160, 174, 192, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                      e.currentTarget.style.color = "#f0f4f8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.color = "rgba(160, 174, 192, 0.7)";
                    }}
                  >
                    {t("cookies.banner_reject")}
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 md:flex-none px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
                    style={{
                      backgroundColor: "#1dc9a4",
                      color: "#0b0f1a",
                      border: "none",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#00ffe0"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#1dc9a4"; }}
                  >
                    {t("cookies.banner_accept")}
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleReject}
                  className="absolute top-3 right-3 md:static p-1.5 rounded-lg transition-all cursor-pointer"
                  style={{ color: "rgba(160, 174, 192, 0.5)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#f0f4f8"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(160, 174, 192, 0.5)"; }}
                  aria-label="Fechar"
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
