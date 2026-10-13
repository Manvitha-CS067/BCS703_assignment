# CryptoLab — Password Hashing with Salt (SHA-256)

A React + Vite virtual cryptography laboratory experiment.

## Features

- Introduction
- Objective
- Theory
- Procedure
- Interactive SHA-256 password hashing
- Secure random salt generation using Web Crypto API
- Password verification
- Salt comparison observation
- Quiz
- References
- Feedback
- Responsive layout

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Important

This is an educational demonstration. SHA-256 is not a recommended password-storage
algorithm for production applications. Production systems should normally use a
password-specific KDF such as Argon2id, bcrypt, scrypt, or PBKDF2.

The experiment uses the browser's Web Crypto API:
- crypto.getRandomValues() for salt generation
- crypto.subtle.digest("SHA-256", ...) for hashing
