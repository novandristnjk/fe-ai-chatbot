import { Sparkles, Code, Lightbulb, FileText, AirplayIcon } from 'lucide-react';

interface WelcomeScreenProps {
  onSuggestionClick: (suggestion: string) => void;
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "3rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "48rem", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }} className="animate-fadeIn">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "4rem",
              height: "4rem",
              background: "linear-gradient(135deg, var(--primary), var(--primary-dark))",
              borderRadius: "1rem",
              marginBottom: "1.5rem",
              animation: "glow 2s ease-in-out infinite",
            }}
          >
            <AirplayIcon style={{ width: "2rem", height: "2rem", color: "white" }} />
          </div>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "700",
              color: "var(--text)",
              marginBottom: "0.75rem",
            }}
          >
            Wellcome
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.125rem" }}>
          </p>
        </div>

       
      </div>
    </div>
  );
}
