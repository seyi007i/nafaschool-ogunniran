# nafaschool-ogunniran

### 1. The Problem
Complexe Scolaire Les Palmiers manages school fee payments manually using paper ledgers, spreadsheets, and mobile-money receipts. This creates inconsistencies, makes payment reconciliation time-consuming, and increases the risk of lost or incorrectly recorded payments. Parents may be wrongly informed that they have outstanding fees even after making payments. The school needs a simple, reliable system that records each payment once, maintains accurate pupil balances, and prevents the loss or duplication of financial records.
### 2. The User – Mariama Diallo (School Administrator)
Mariama Diallo is the primary user and day-to-day administrator of the school. She is responsible for enrolling pupils, managing guardians, setting termly school fees, recording cash and mobile-money payments, and tracking outstanding balances. She has limited administrative support, no budget for software licences, and relies on an old laptop and basic Android devices. NafaSchool must therefore be easy to use, affordable, mobile-friendly, and reliable even when internet connectivity is slow or unstable.
### 3. What NafaSchool Will Not Do
NafaSchool will focus exclusively on pupil registration, guardian records, termly fee management, payment recording, and outstanding balance tracking. It will deliberately exclude:
- Messaging: No SMS, WhatsApp, email, or parent notification features.
- Academic management: No grades, examinations, attendance, or timetabling.
- Multi-school management: Designed exclusively for Complexe Scolaire Les Palmiers.
- Advanced financial management: No payroll, accounting, budgeting, or financial reporting beyond school fee records.
- Multiple payment integrations: Only one payment provider in test mode or a supplied mock provider for mobile-money transactions.
The goal is to deliver a small, dependable product that solves the school's immediate fee-management problems without introducing unnecessary complexity.

### Fee balance calculation
The TypeScript function `getOutstandingBalance` calculates a termly fee as `45,000 + (D × 5,000)` XOF and subtracts recorded payments. Set `D` in the environment to a non-negative integer; an overpayment results in a zero outstanding balance. Payments are supplied as non-negative whole-number XOF amounts.

Run `npm test` to compile the function and execute its unit tests.

