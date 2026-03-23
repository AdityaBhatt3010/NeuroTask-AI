# Security Policy

## Overview

The maintainers of NeuroTask-AI take security seriously and appreciate responsible disclosure of vulnerabilities.

This project includes authentication, authorization, and API-based functionality, and therefore may be subject to security risks such as access control issues, token misuse, and injection vulnerabilities.

---

## Supported Versions

Currently, only the latest version of the repository is actively supported with security updates.

| Version        | Supported |
| -------------- | --------- |
| Latest         | ✅         |
| Older versions | ❌         |

---

## Reporting a Vulnerability

If you discover a security vulnerability, please report it responsibly.

### ❗ Do NOT:

* Open public GitHub issues for security vulnerabilities
* Disclose vulnerabilities publicly before coordination

### ✅ Preferred Method:

* Use **GitHub Security Advisories (GHSA)**
* Or contact the maintainer privately (if contact is available)

---

## Required Information

Please include as much of the following as possible:

* Type of vulnerability (e.g., IDOR, authentication bypass, XSS)
* Affected endpoint(s) or component(s)
* Steps to reproduce
* Proof-of-concept (PoC) code or requests
* Impact assessment (what an attacker can achieve)
* Suggested remediation (if available)

Providing detailed reports helps faster triage and resolution. ([GitHub][1])

---

## Response Timeline

We aim to follow this timeline:

* **Acknowledgment:** within 48 hours
* **Initial assessment:** within 3–5 days
* **Fix development:** depends on severity
* **Disclosure:** coordinated after patch release

---

## Disclosure Policy

* Reports will be handled confidentially
* Fixes will be developed before public disclosure
* Researchers will be credited (if desired)
* Coordinated disclosure is preferred

---

## Security Best Practices (For Contributors)

When contributing to this project:

### Authentication & Authorization

* Always validate user identity server-side
* Never trust client-controlled identifiers (e.g., `userId`)

### Input Handling

* Sanitize and validate all user input
* Avoid directly rendering user-controlled content

### Secrets Management

* Never commit `.env` files or API keys
* Use environment variables securely

### API Security

* Enforce ownership checks on all resource operations
* Avoid exposing sensitive data in responses

### Frontend Security

* Avoid unsafe rendering methods
* Implement Content Security Policy (CSP)

---

## Security Acknowledgment

We appreciate contributions from the security community. Responsible disclosures help improve the security posture of this project.

---

## Contact

For security-related inquiries:

* Preferred: GitHub Security Advisory
* Alternative: Maintainer contact (if available)

---

Thank you for helping keep NeuroTask-AI secure.

---
