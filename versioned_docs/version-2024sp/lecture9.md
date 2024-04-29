---
id: lecture9
title: Lecture 9
---

[Lecture Slides](https://docs.google.com/presentation/d/1aAG-3sTxKT90whxWbWZW6mbKD8dv8DdOTa_zyS_ZKk0/edit?usp=sharing)

[Final Project Instructions](finalproject)

# Quick Announcements

- Final Project Demonstration
  - Monday 5/6 7:30 - 8:45 PM
  - Location: TBD (We will post announcement on Ed)
  - Attendance of your whole team is required!
  - Structure of the demo day:
    - Each team will be assigned a personal table to demo your project.
    - You can visit other team's table to learn about other team's projects.
    - Instructors will visit each table one by one to grade your projects.
  - Cookies will be provided!

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

Platforms like **Fly.io** make it easy to deploy Docker containers.

To deploy on Fly.io:

1. Install flyctl CLI
2. Sign up and login
3. Launch app with `flyctl launch`
4. Deploy updates with `flyctl deploy`

Fly.io handles running containers on their infrastructure.

# Even Further Beyond

Some further technologies:

- Redux, SWR, Axios
- GraphQL
- Nest.js
- Deno

# Final Course Feedback (10% of your Grade)

Let us know your thoughts by filling out [Final Project Feedback Form](https://forms.gle/1xVW4cdW9vfNfSsXA) and [Final Feedback Form](https://forms.gle/X2x1j33xdAgb4MAVA) by **May 6 (11:59PM)**.

Thank you!
