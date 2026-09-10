# School of Computer Science Engineering and Artificial Intelligence
## DevOps and Fullstack (Course Code: 23CS102PE405) - Lab Experiment Week-6.2
### Scenario 2: Student Marks and Grade Management System

A high-performance, responsive React application built with **Vite** demonstrating parent-to-child **Props**, dynamic **React State Management (`useState`)**, real-time **Form Validation ($0 - 100$)**, and **Conditional Rendering** for grades and academic awards.

---

## 👨‍🏫 Academic Metadata
- **Course**: B.Tech (Professional Elective)
- **Course Code**: `23CS102PE405`
- **Course Name**: DEVOPS AND FULLSTACK
- **Year / Semester**: 2026-27 / ODD
- **Instructors**: Dr. Mohammed Ali Shaik, Dr. N. Venkatesh, Mr. Kranthi, Srivani
- **Lab Session**: Week-6.2 (Date: 10.09.2026)

---

## 🛠️ Project Structure
```
student-marks-grade-system/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # College banner, course metadata & instructor info
│   │   ├── StudentList.jsx  # Student roster + Bonus: Real-time name search
│   │   ├── Student.jsx      # Student details rendered via PROPS
│   │   ├── MarksForm.jsx    # Faculty entry portal + Bonus: 0-100 validation
│   │   ├── Result.jsx       # Total, average, pass/fail status calculations
│   │   ├── Grade.jsx        # Bonus: Grade calculation via conditional rendering
│   │   ├── ClassStats.jsx   # Bonus: Batch metrics & class average
│   │   └── Footer.jsx       # Institutional copyright & coursework details
│   ├── App.jsx              # Central State Management (useState) & composition
│   ├── App.css              # Custom styling & conditional theme variants
│   ├── index.css            # CSS reset and design tokens
│   └── main.jsx             # React 19 application entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 PowerShell Commands to Run

Open **PowerShell** and run:

```powershell
# 1. Navigate to the project directory
cd "C:\Users\DELL\.gemini\antigravity\scratch\student-marks-grade-system"

# 2. Start the local development server
npm run dev
```

The application will start on:
👉 **`http://localhost:5173/`**

### Other Useful Commands:
```powershell
# Run production build
npm run build

# Preview production build
npm run preview

# Run code linter
npm run lint
```

---

## 🎯 Implementation Checklist

| Requirement | Implementation Details | Status |
| :--- | :--- | :---: |
| **Vite React Setup** | Initialized with React 19 and Vite 8 | ✅ Complete |
| **Component: `StudentList`** | Displays roster with active student selector | ✅ Complete |
| **Component: `Student`** | Receives `studentId`, `studentName`, `department`, `subjectNames`, `marks` via props | ✅ Complete |
| **Component: `MarksForm`** | Faculty form to enter/update marks for subjects | ✅ Complete |
| **Component: `Result`** | Calculates and displays total and average marks | ✅ Complete |
| **Component: `Grade`** | Renders grade tiers (`O`, `A+`, `A`, `B+`, `B`, `F`) conditionally | ✅ Complete |
| **Props Implementation** | Student details passed cleanly from parent `App` to child components | ✅ Complete |
| **State Management** | Centralized `useState` for students, selection, marks updates, and metrics | ✅ Complete |
| **Bonus: Marks Validation** | Real-time input validation enforcing $0 \le \text{mark} \le 100$ | ✅ Complete |
| **Bonus: Grade Conditional Rendering** | Distinct colored cards, GPA equivalents & honors/warnings | ✅ Complete |
| **Bonus: Search by Name** | Instant case-insensitive search filtering across roster | ✅ Complete |
| **Bonus: Class Average** | Computes batch average, pass rate, and honors candidate | ✅ Complete |
| **Bonus: Pass/Fail Status** | Real-time pass/fail determination (subject min 40, average min 50%) | ✅ Complete |
