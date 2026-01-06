import { motion } from "framer-motion";

export default function TextToImageAnimation() {
  return (
    <div
      style={{
        position: "relative",
        padding: "44px 48px",
        borderRadius: "24px",
        background:
          "radial-gradient(circle at top left, rgba(158,255,0,0.1), transparent 45%), linear-gradient(145deg, #1a1a1a, #0e0e0e)",
        boxShadow:
          "0 28px 56px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.035)",
        overflow: "hidden",
      }}
    >
      {/* ambient floating glow */}
      <motion.div
        animate={{ y: [0, -16, 0], opacity: [0.22, 0.35, 0.22] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "160px",
          height: "160px",
          background: "rgba(158,255,0,0.22)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      {/* main content */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "36px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            padding: "22px 32px",
            background:
              "linear-gradient(180deg, #1f1f1f 0%, #141414 100%)",
            borderRadius: "18px",
            color: "#9EFF00",
            fontWeight: 600,
            letterSpacing: "0.14em",
            fontSize: "13px",
            textAlign: "center",
            boxShadow:
              "0 14px 26px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          TEXT
          <div
            style={{
              marginTop: "6px",
              fontSize: "10px",
              letterSpacing: "0.2em",
              opacity: 0.5,
            }}
          >
            PROMPT
          </div>
        </motion.div>

        {/* ARROW */}
        <motion.div
          animate={{ x: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
          style={{
            fontSize: "24px",
            color: "#9EFF00",
            opacity: 0.85,
            filter: "drop-shadow(0 0 8px rgba(158,255,0,0.35))",
          }}
        >
          ➜
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            padding: "22px 32px",
            background:
              "linear-gradient(180deg, #c9ff5e 0%, #9eff00 100%)",
            borderRadius: "18px",
            color: "#000",
            fontWeight: 700,
            letterSpacing: "0.14em",
            fontSize: "13px",
            textAlign: "center",
            boxShadow:
              "0 20px 40px rgba(158,255,0,0.4), inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        >
          IMAGE
          <div
            style={{
              marginTop: "6px",
              fontSize: "10px",
              letterSpacing: "0.2em",
              opacity: 0.6,
            }}
          >
            OUTPUT
          </div>
        </motion.div>
      </div>

      {/* bottom caption */}
      <div
        style={{
          marginTop: "24px",
          textAlign: "center",
          fontSize: "11px",
          letterSpacing: "0.18em",
          opacity: 0.45,
        }}
      >
        FROM THOUGHT TO VISUAL
      </div>
    </div>
  );
}
