---
id: lec9
title: Lecture 9
---

[Lecture Slides](https://docs.google.com/presentation/d/19hYPVOnGaGTs9WuPwHAozivuwK65lpcmtC_dQ1H_Tm8/edit?usp=sharing)

[Final Project Instructions](finalproject)

# Quick Announcements

- Final Project Demonstration
  - Monday 11/30 7:30 - 8:45 PM
  - Location: Phillips 203
  - Attendance of your whole team is required!
  - Structure of the demo day:
    - Each team will be assigned a personal table to demo your project.
    - You can visit other team's table to learn about other team's projects.
    - Instructors will visit each table one by one to grade your projects.
  - Pizza will be provided!
- Fill out the feedback forms by **Dec 2nd (11:59PM)** (10% of your grade)
  - [Final Feedback](https://forms.gle/azvrHfDcZsQRBwSk7)
  - [Project Feedback](https://forms.gle/UPjzXv8wqnp42Gjx9)

# Containerization Concepts

Containerization allows applications to packaged with their dependencies into standardized units called containers.

**Benefits**

- Portability between environments
- Ensure consistency
- Streamline deployment

**Docker** is a popular containerization platform. Key concepts:

- **Images:** Blueprint describing the environment
- **Containers:** Running instances of images
- **Dockerfile:** Defines how to build an image

With Docker we can package applications into images that can be run reliably as containers anywhere.

## Docker Setup

To build a Docker image for a Node.js app:

1. Create a Dockerfile
2. Define base image, copy source code, specify commands
3. Build image: `docker build`
4. Run container from image: `docker run`

## Deploying Containers

Platforms like **Google Cloud Run** make it easy to deploy Docker containers. Cloud Run is a "serverless" platform, which means you don't manage the underlying servers (VMs).

**How Cloud Run Works:**

- It is **not** a standard persistent Virtual Machine (VM).
- It spins up a container _only_ when a request comes in.
- It scales down to zero (0 cost) when no one is using your app.
- It scales up automatically (to thousands of instances) if your app goes viral.

### Steps to Deploy (Backend)

We have prepared a comprehensive guide in the [lecture demo repository](https://github.com/cornell-dti/trends-mono-fa26/tree/main/demos/lec9/server).

**Summary of Steps:**

1.  **Containerize**: Create a `Dockerfile` (we did this in the demo).
2.  **Push & Build**: Upload your code to Google Cloud Build.
3.  **Deploy**: Cloud Run takes the built image and creates a service URL (e.g., `https://lec9-server-xyz.a.run.app`).

### Steps to Deploy (Frontend)

For the frontend (React/Vite), we are using **Vercel**.

1.  Connect your GitHub repository to Vercel.
2.  Add your environment variables (e.g., `VITE_API_BASE_URL` pointing to your Cloud Run URL).
3.  Vercel automatically builds and deploys your site on every push.

# Even Further Beyond

Some further technologies:

- Turborepo
- Redux, SWR, Axios
- GraphQL
- Nest.js
- Deno

# Final Course Feedback (10% of your Grade)

Let us know your thoughts by filling out [Project Feedback](https://forms.gle/UPjzXv8wqnp42Gjx9) and [Final Feedback](https://forms.gle/azvrHfDcZsQRBwSk7) by **Dec 2nd (11:59PM)**.

Thank you!
