import { useState } from "react";
import { motion } from "framer-motion";
import TextToImageAnimation from "./TextToImageAnimation";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    setImage("");

    const response = await fetch("http://localhost:5000/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    setImage(data.image);
    setLoading(false);
  };

  const downloadImage = async () => {
    const response = await fetch(image);
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${prompt}.png`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at top, #141414 0%, #000 60%)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "72px 24px",
      }}
    >
      {/* Hero */}
      <div
        style={{
          width: "100%",
          maxWidth: "920px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextToImageAnimation />

        <h1
          style={{
            marginTop: "48px",
            fontSize: "42px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Turn words into{" "}
          <span
            style={{
              color: "#9EFF00",
              textShadow: "0 0 20px rgba(158,255,0,0.35)",
            }}
          >
            visuals
          </span>
        </h1>

        <p
          style={{
            marginTop: "14px",
            maxWidth: "520px",
            textAlign: "center",
            fontSize: "15px",
            lineHeight: 1.6,
            opacity: 0.65,
          }}
        >
          Describe an idea. Watch it become an image. No settings, no noise —
          just imagination rendered.
        </p>
      </div>

      {/* Prompt box */}
      <div
        style={{
          marginTop: "44px",
          padding: "18px",
          borderRadius: "18px",
          background: "rgba(20,20,20,0.8)",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          gap: "14px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your imagination…"
          style={{
            width: "420px",
            padding: "14px 16px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0c0c0c",
            color: "#fff",
            fontSize: "14px",
            outline: "none",
          }}
        />

        <button
          onClick={generateImage}
          style={{
            padding: "14px 28px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(180deg, #bfff3c 0%, #9eff00 100%)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(158,255,0,0.35)",
          }}
        >
          Generate
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          style={{
            marginTop: "28px",
            fontSize: "13px",
            letterSpacing: "0.2em",
            color: "#9EFF00",
          }}
        >
          GENERATING…
        </motion.div>
      )}

      {/* Result */}
      {image && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            marginTop: "56px",
            padding: "24px",
            borderRadius: "24px",
            background: "rgba(18,18,18,0.9)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 30px 60px rgba(0,0,0,0.7)",
            textAlign: "center",
          }}
        >
          <img
            src={image}
            alt="Generated"
            style={{
              width: "420px",
              borderRadius: "18px",
              boxShadow: "0 0 60px rgba(158,255,0,0.25)",
            }}
          />

          <div style={{ marginTop: "18px" }}>
            <button
              onClick={downloadImage}
              style={{
                padding: "12px 28px",
                background: "transparent",
                color: "#9EFF00",
                border: "1px solid rgba(158,255,0,0.6)",
                borderRadius: "12px",
                cursor: "pointer",
                letterSpacing: "0.1em",
              }}
            >
              DOWNLOAD
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
