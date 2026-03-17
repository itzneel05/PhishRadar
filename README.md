# PhishRadar🛡️  
### A Cybersecurity Web Application focusing on real-world phishing detection.

PhishRadar is a web-based phishing detection tool designed to help users identify potentially malicious URLs and phone numbers. It provides real-time analysis and securely stores scan results for future reference.
<img width="1536" height="1024" alt="Phishradar-logo" src="https://github.com/user-attachments/assets/db29ca82-73eb-41bb-bed5-b505d82e4968" />


---

## 🔍 Features

- 🔗 URL Scanning – Detect phishing or suspicious links  
- 📱 Phone Number Analysis – Identify potential scam numbers  
- 📝 Reporting System – Report suspicious URLs and phone numbers  
- 🗂️ Data Storage – Stores scan history using MongoDB  
- ⚡ Real-time Results – Instant scan response  

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  

---

## ⚙️ How It Works

1. User inputs a URL or phone number  
2. Backend processes the request via API  
3. Scan logic evaluates the input  
4. Result is classified as **Legitimate** or **Suspicious**  
5. Data is stored in the database and displayed on UI  

---

## 🚀 Run Locally

```bash
npm install
node backend/server.js

**Open in browser
http://localhost:3000

---

## 👨‍💻 Contributions

- Pranav Lingayat(Project Lead)  
  - Backend Development  
  - Database Integration (MongoDB)  
  - API Design & Scanning Logic  

- Neel igner(Frontend Developer)  
  - Frontend Development
  - UI/UX Implementation
  - User Interaction Handling
