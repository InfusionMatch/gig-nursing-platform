# Gig Nursing Platform Frontend

This is the starter React + TailwindCSS frontend for connecting nurses with pharmacies for gig-based infusion jobs.

## Features

- Role-based portal for Nurses, Partners (Pharmacies), and Admins
- Sidebar navigation changes based on user role
- Demo AuthContext for role switching (replace with real auth/backend later)
- TailwindCSS for styling

## Setup

1. Clone this repo:
   ```
   git clone https://github.com/InfusionMatch/gig-nursing-platform.git
   cd gig-nursing-platform
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. (Optional) Setup Tailwind if not already:
   - `npx tailwindcss init -p`
   - Make sure `tailwind.config.js` and `postcss.config.js` match this repo.

## Structure

- `src/context/AuthContext.js`: Demo user/role context and role switcher
- `src/components/Sidebar/Sidebar.js`: Role-based sidebar navigation
- `src/pages/Nurse/`, `src/pages/Partner/`, `src/pages/Admin/`: Dashboards for each role
- Use the sidebar buttons to switch roles (for demo/testing).

## Next Steps

- Replace AuthContext with real authentication and user management
- Implement all gig/job logic and backend API integration
- Add onboarding, credentialing, payroll, NURSYS, Gusto, and background check API stubs

---

© 2025 InfusionMatch
