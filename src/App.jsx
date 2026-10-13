import React, { useState } from "react";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  ["Introduction", "/"],
  ["Objective", "/objective"],
  ["Theory", "/theory"],
  ["Procedure", "/procedure"],
  ["Experiment", "/experiment"],
  ["Observation", "/observation"],
  ["Applications", "/applications"]
];

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app">
      <header className="topbar">
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>

        <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <div className="brand-mark">⚗</div>
          <div>
            <div className="brand-name">Crypto<span>Lab</span></div>
            <div className="brand-subtitle">Virtual Cryptography Laboratory</div>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          <NavLink to="/">HOME</NavLink>
          <a href="#footer">ABOUT</a>
        </nav>
      </header>

      <div className="orange-line"></div>

      <div className="page-shell">
        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
          <div className="course-title">Computer Science<br />and Engineering</div>
          <div className="side-menu">
            {menuItems.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `side-link ${isActive ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </aside>

        {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}

        <main className="content">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/objective" element={<Objective />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/procedure" element={<Procedure />} />
            <Route path="/experiment" element={<Experiment />} />
            <Route path="/observation" element={<Observation />} />
            <Route path="/applications" element={<Applications />} />
          </Routes>
        </main>
      </div>

      <footer id="footer">
        <div className="footer-grid">
          <div>
            <h3>CryptoLab</h3>
            <p>Virtual Cryptography Laboratory</p>
            <p>Interactive experiments for learning information security.</p>
          </div>
          <div>
            <h3>Experiment</h3>
            <p>Password Hashing with Salt</p>
            <p>Algorithm: SHA-256</p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <NavLink to="/theory">Theory</NavLink>
            <NavLink to="/experiment">Experiment</NavLink>
          </div>
        </div>
        <div className="footer-bottom">© 2026 CryptoLab · Educational Virtual Lab</div>
      </footer>
    </div>
  );
}

function Page({ title, children }) {
  return (
    <section className="page">
      <h1>{title}</h1>
      <div className="title-rule"></div>
      {children}
    </section>
  );
}

function Introduction() {
  return (
    <Page title="Password Hashing with Salt">
      <div className="hero-card">
        <div>
          <span className="eyebrow">CRYPTOGRAPHY EXPERIMENT</span>
          <h2>Secure Password Storage using SHA-256</h2>
          <p>
            Welcome to CryptoLab. This virtual experiment demonstrates how a password
            can be transformed into a cryptographic hash using SHA-256 and a randomly
            generated salt.
          </p>
          <NavLink className="primary-btn" to="/experiment">Start Experiment →</NavLink>
        </div>
        <div className="hash-visual">
          <div className="node">PASSWORD</div>
          <div className="arrow">↓</div>
          <div className="node">+ RANDOM SALT</div>
          <div className="arrow">↓</div>
          <div className="node accent">SHA-256</div>
          <div className="arrow">↓</div>
          <div className="node">256-BIT HASH</div>
        </div>
      </div>

      <div className="info-grid">
        <InfoCard title="What you will learn">
          Understand hashing, salting, SHA-256, and password verification.
        </InfoCard>
        <InfoCard title="Interactive">
          Generate salts, hash passwords, compare hashes, and verify passwords.
        </InfoCard>
        <InfoCard title="Important">
          Hashing is one-way. A hash is not the encrypted form of a password.
        </InfoCard>
      </div>
    </Page>
  );
}

function Objective() {
  return (
    <Page title="Objective">
      <div className="text-card">
        <h2>Aim</h2>
        <p>
          To implement password hashing using the SHA-256 cryptographic hash function
          with a randomly generated salt and to understand the importance of salting
          in password security.
        </p>
      </div>
      <div className="text-card">
        <h2>Learning Outcomes</h2>
        <ul>
          <li>Understand the concept of cryptographic hashing.</li>
          <li>Understand the purpose of a salt in password storage.</li>
          <li>Generate a secure random salt in the browser.</li>
          <li>Compute a SHA-256 digest.</li>
          <li>Verify a password using the stored salt and hash.</li>
          <li>Observe why the same password can produce different hashes.</li>
        </ul>
      </div>
    </Page>
  );
}

function Theory() {
  return (
    <Page title="Theory">
      <div className="text-card">
        <h2>1. Password Hashing</h2>
        <p>
          Password hashing converts a password into a fixed-length value called a
          hash. A good cryptographic hash function is designed so that the original
          password cannot practically be recovered from the hash.
        </p>
      </div>

      <div className="formula-box">
        <span>Password</span><b>+</b><span>Random Salt</span><b>→</b><strong>SHA-256</strong><b>→</b><span>Hash</span>
      </div>

      <div className="text-card">
        <h2>2. What is a Salt?</h2>
        <p>
          A salt is a random value added to a password before hashing. The salt does
          not need to be secret. It is normally stored along with the resulting hash.
        </p>
        <p>
          If two users choose the same password but receive different salts, their
          resulting hashes will be different.
        </p>
      </div>

      <div className="text-card">
        <h2>3. Why is Salting Important?</h2>
        <ul>
          <li>Prevents identical passwords from having identical stored hashes.</li>
          <li>Makes precomputed rainbow-table attacks much less effective.</li>
          <li>Forces an attacker to process each salt separately during guessing.</li>
        </ul>
      </div>

      <div className="warning-card">
        <strong>Real-world note:</strong> SHA-256 is a general-purpose hash function.
        For production password storage, password-specific algorithms such as Argon2id,
        bcrypt, scrypt, or PBKDF2 are generally preferred because they are deliberately
        slower and harder to brute-force.
      </div>
    </Page>
  );
}

function Procedure() {
  const steps = [
    ["01", "Enter Password", "Enter any test password in the experiment panel."],
    ["02", "Generate Salt", "Generate a cryptographically random salt."],
    ["03", "Combine", "Combine the password and salt for the demonstration."],
    ["04", "Apply SHA-256", "Calculate the 256-bit SHA-256 digest."],
    ["05", "Store", "In a real system, store the salt and password hash, not the plaintext password."],
    ["06", "Verify", "Hash a newly entered password using the same stored salt and compare the results."]
  ];

  return (
    <Page title="Procedure">
      <div className="steps">
        {steps.map(([n, title, text]) => (
          <div className="step" key={n}>
            <div className="step-number">{n}</div>
            <div><h3>{title}</h3><p>{text}</p></div>
          </div>
        ))}
      </div>
    </Page>
  );
}

function randomBytes(length = 16) {
  const bytes = new Uint8Array(length);
  crypto.getRandomValues(bytes);
  return bytes;
}

function bytesToHex(bytes) {
  return [...bytes].map(b => b.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return bytesToHex(new Uint8Array(hash));
}

function Experiment() {
  const [password, setPassword] = useState("");
  const [salt, setSalt] = useState("");
  const [hash, setHash] = useState("");
  const [combined, setCombined] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyResult, setVerifyResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const generateSalt = () => {
    setSalt(bytesToHex(randomBytes(16)));
    setHash("");
    setCombined("");
    setVerifyResult(null);
  };

  const hashPassword = async () => {
    if (!password) return alert("Please enter a password.");
    if (!salt) return alert("Please generate a salt first.");

    setBusy(true);
    const input = password + salt;
    const result = await sha256Hex(input);
    setCombined(input);
    setHash(result);
    setBusy(false);
  };

  const verify = async () => {
    if (!verifyPassword || !salt || !hash) {
      return alert("Generate a salt, create a hash, and then enter a password to verify.");
    }
    const result = await sha256Hex(verifyPassword + salt);
    setVerifyResult(result === hash);
  };

  const clearAll = () => {
    setPassword("");
    setSalt("");
    setHash("");
    setCombined("");
    setVerifyPassword("");
    setVerifyResult(null);
  };

  return (
    <Page title="Experiment">
      <div className="experiment-layout">
        <div className="experiment-card">
          <div className="card-heading">
            <div>
              <span className="eyebrow">STEP-BY-STEP SIMULATION</span>
              <h2>Generate SHA-256 Password Hash</h2>
            </div>
            <button className="secondary-btn" onClick={clearAll}>Clear</button>
          </div>

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter a test password"
          />

          <label>Salt</label>
          <div className="input-row">
            <input value={salt} readOnly placeholder="Generate a random salt" />
            <button className="secondary-btn" onClick={generateSalt}>Generate Salt</button>
          </div>

          <button className="primary-btn wide" onClick={hashPassword} disabled={busy}>
            {busy ? "Hashing..." : "Hash Password"}
          </button>

          <div className="pipeline">
            <Pipeline label="PASSWORD" value={password ? "••••••••" : "—"} />
            <span>+</span>
            <Pipeline label="SALT" value={salt ? salt.slice(0, 16) + "…" : "—"} />
            <span>→</span>
            <Pipeline label="SHA-256" value="256-bit digest" accent />
            <span>→</span>
            <Pipeline label="HASH" value={hash ? hash.slice(0, 16) + "…" : "—"} />
          </div>

          {combined && (
            <div className="result-box">
              <label>Input to SHA-256 (password + salt)</label>
              <code>{combined}</code>
            </div>
          )}

          {hash && (
            <div className="result-box">
              <label>SHA-256 Hash</label>
              <code className="hash-output">{hash}</code>
            </div>
          )}
        </div>

        <div className="experiment-card verify-card">
          <span className="eyebrow">PASSWORD VERIFICATION</span>
          <h2>Verify a Password</h2>
          <p>
            Enter a password below. The experiment uses the same salt and compares the
            newly generated hash with the stored hash.
          </p>

          <label>Enter Password</label>
          <input
            type="password"
            value={verifyPassword}
            onChange={e => setVerifyPassword(e.target.value)}
            placeholder="Enter password to verify"
          />

          <button className="primary-btn wide" onClick={verify}>Verify Password</button>

          {verifyResult === true && (
            <div className="verify-success">✓ Password Verified — hashes match.</div>
          )}
          {verifyResult === false && (
            <div className="verify-fail">✗ Invalid Password — hashes do not match.</div>
          )}
        </div>
      </div>

      <div className="tip-card">
        <strong>Try this:</strong> Hash the same password twice using two different salts.
        You will observe two different SHA-256 hashes.
      </div>
    </Page>
  );
}

function Pipeline({ label, value, accent }) {
  return (
    <div className={`pipeline-node ${accent ? "pipeline-accent" : ""}`}>
      <small>{label}</small>
      <span>{value}</span>
    </div>
  );
}

function Observation() {
  const [rows, setRows] = useState([]);
  const [password, setPassword] = useState("hello123");

  const runObservation = async () => {
    const saltA = bytesToHex(randomBytes(16));
    const saltB = bytesToHex(randomBytes(16));
    const hashA = await sha256Hex(password + saltA);
    const hashB = await sha256Hex(password + saltB);
    setRows([
      { id: 1, password, salt: saltA, hash: hashA },
      { id: 2, password, salt: saltB, hash: hashB }
    ]);
  };

  return (
    <Page title="Observation">
      <div className="text-card">
        <h2>Effect of Different Salts</h2>
        <p>
          Enter the same password and generate two different random salts. Compare the
          resulting hashes.
        </p>
        <div className="input-row observation-input">
          <input value={password} onChange={e => setPassword(e.target.value)} />
          <button className="primary-btn" onClick={runObservation}>Run Comparison</button>
        </div>
      </div>

      {rows.length > 0 && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Trial</th><th>Password</th><th>Salt</th><th>SHA-256 Hash</th></tr>
            </thead>
            <tbody>
              {rows.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>••••••••</td>
                  <td><code>{row.salt}</code></td>
                  <td><code>{row.hash}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="observation-result">
            <strong>Observation:</strong> The password is identical in both trials,
            but the salts and resulting hashes are different.
          </div>
        </div>
      )}
    </Page>
  );
}

function Applications() {
  return (
    <Page title="Applications">
      <div className="text-card">
        <h2>Real-World Applications</h2>
        <p>
          Password hashing and salting are fundamental to modern information security. 
          Here are some of their primary applications:
        </p>
        <ul>
          <li>
            <strong>User Authentication Systems:</strong> Web applications and databases use salted hashes to store user credentials securely. If a database is breached, attackers only see the hashes and random salts, not the actual passwords.
          </li>
          <li>
            <strong>Operating System Security:</strong> Systems like Linux (via the <code>/etc/shadow</code> file) and Windows use salted hashing algorithms to protect local user account passwords from unauthorized access.
          </li>
          <li>
            <strong>Password Managers:</strong> Tools like Bitwarden or 1Password use strong, salted hash functions (like PBKDF2 or Argon2) to derive secure cryptographic keys from a user's master password.
          </li>
          <li>
            <strong>Financial and Banking Systems:</strong> Banks secure customer PINs and login credentials using heavily salted hashes to protect against brute-force and rainbow table attacks.
          </li>
        </ul>
      </div>
    </Page>
  );
}

function InfoCard({ title, children }) {
  return <div className="info-card"><h3>{title}</h3><p>{children}</p></div>;
}

export default function App() {
  return <Layout />;
}