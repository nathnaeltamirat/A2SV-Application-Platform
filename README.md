
# A2SV Application Platform – Frontend

## Overview

The **A2SV Application Platform** is a web-based system designed to replace the manual application process for the A2SV program.
It streamlines the workflows for **Applicants**, **Reviewers**, **Managers**, and **Admins** by centralizing all application-related data and providing role-specific dashboards and tools.

This repository contains the **frontend implementation** of the platform built with **Next.js** and **Tailwind CSS**, fully integrated with the dedicated A2SV backend API.

---

## Features

### Applicant

* Secure registration and login
* Submit an application form with:
  * Personal details (School, Degree)
  * Handles (LeetCode, Codeforces)
  * Essays (multi-line)
  * Resume upload (PDF ≤ 5MB)

* View application status in real-time

### Reviewer

* Dashboard showing **only** assigned applications
* Detailed applicant view with resume download
* Review form for activity, resume, essays, and interviews
* Save progress anytime

### Manager

* Comprehensive dashboard of all applications
* Filter by status
* Assign or reassign reviewers
* View application details and reviewer feedback
* Make final decisions: Accepted / Rejected

### Admin

* Create new users (Applicant, Reviewer, Manager)
* Manage application cycles (set active cycle)

---

## Tech Stack

* **Frontend Framework**: [Next.js](https://nextjs.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: React hooks & Redux 
* **API Communication**: Fetch / Axios
* **Backend API**: A2SV Application Platform API
  Example:

  ```
    https://a2sv-application-platform-backend-team1.onrender.com
  ```

---

## Project Structure

```
.
src
 ├─ app
 │   ├─ admin
 │   ├─ api
 │   ├─ applicant
 │   ├─ auth
 │   ├─ dashboard
 │   ├─ manager
 │   ├─ profile
 │   ├─ reviewer
 │   └─ unauthorized
 ├─ components
 ├─ features
 ├─ providers
 ├─ store
 ├─ types
 └─ utils

```

---

## 📸 Screenshots

### Landing Page
![alt text](image.png)

### Login Page
![alt text](image-4.png)

### Applicant Workflow

1. **Applicant DashBoard**
   ![alt text](image-1.png)
2. **Profile Page**
   ![alt text](image-2.png)
3. **Application Form**
   ![alt text](image-3.png)

### Reviewer Workflow

4. **Reviewer Dashboard**
   ![alt text](image-13.png)
5. **Application Review Form**
   ![alt text](image-14.png)

### Manager Workflow

6. **Manager Dashboard**
   ![alt text](image-11.png)
7. **Manage Applicant and Assign Reviewer Page**
   ![alt text](image-12.png)

### Admin Workflow

8. **Admin DashBoard**
   ![alt text](image-6.png)
9. **User Management Page**
   ![alt text](image-5.png)
   ![alt text](image-7.png)
10. **Cycle Management Page**
    ![alt text](image-8.png)
    ![alt text](image-9.png)
11. **Admin Profile Page**
    ![alt text](image-10.png)

---

## 📜 API Documentation

Access API docs here:


[Link](https://documenter.getpostman.com/view/33183582/2sB3B7PENE)


Test endpoints with the provided Postman collection.

---

## ✅ Requirements Covered

* Role-based authentication
* Responsive UI (Tailwind CSS)
* File upload with validation
* Status-based filtering
* Integration with backend API
* Following Figma designs

---

## 📄 License

This project is licensed for educational use under the A2SV training program.

---

