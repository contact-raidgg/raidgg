"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body style={{ backgroundColor: "#0a0a0f", color: "#e4e4e7", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Something went wrong</h1>
          <p style={{ color: "#a1a1aa", marginBottom: "2rem" }}>An unexpected error occurred.</p>
          <button
            onClick={() => reset()}
            style={{ padding: "0.75rem 2rem", backgroundColor: "#00e5ff", color: "#0a0a0f", border: "none", borderRadius: "0.5rem", fontWeight: 600, cursor: "pointer" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
