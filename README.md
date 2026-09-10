# School of Computer Science Engineering and Artificial Intelligence
## DevOps and Fullstack (23CS102PE405) - Assignment 7.2.2
### Scenario 2: College Student Dashboard

A modern, responsive React-based College Student Management Dashboard built using Vite. It allows students to view their profile, subjects, dynamic attendance with exam eligibility conditional rendering, and examination schedule.

---

## 🛠️ Project Structure
```
student-dashboard/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # College name & dashboard title
│   │   ├── StudentProfile.jsx  # Student details via props
│   │   ├── SubjectList.jsx     # Dynamic subjects list with map()
│   │   ├── Attendance.jsx      # Dynamic attendance & conditional eligibility
│   │   ├── ExamDetails.jsx     # Examination schedule & details
│   │   ├── StudentCard.jsx     # Bonus: Multi-student card switcher
│   │   └── Footer.jsx          # Institutional copyright & course metadata
│   ├── App.jsx                 # App state & component composition
│   ├── dashboard.css           # Dashboard layout & modern styling
│   ├── index.css               # Reset and typography
│   └── main.jsx                # React root
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Run
```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🌟 Key Features
- **Props-based Architecture**: Data passed cleanly from `App.jsx` to individual components.
- **Dynamic Array Mapping**: Subjects rendered dynamically with `.map()`.
- **Conditional Rendering**: Attendance $\ge 75\%$ marks "Eligible", while $< 75\%$ marks "Not Eligible" for semester exams.
- **Bonus Challenge**: Reusable `StudentCard` with "View Profile" button to dynamically switch between multiple students.
