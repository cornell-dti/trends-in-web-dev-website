---
id: lecture9
title: Lecture 9
---

[Lecture Slides](https://docs.google.com/presentation/d/1MOFsKAfAH2kVq9B__ZwHC_HHtpL5YpGoePVsZgzow7o/edit?usp=sharing)

[Final Project Instructions](finalproject)

# Quick Announcements

- Final Project Demonstration
    - Tuesday 12/5 12:30 – 2:00pm
    - Location: Upson 222
    - Demo required (5 minutes max)
    - Presentation optional

# Deployment

We want to share our web application with others by deploying it onto servers that can serve the site to visitors.

## What's Different About Next.js

Unlike static React apps that compile into an HTML/JS bundle, Next.js offers dynamic features like server-side rendering. This means the server needs to actually run the Next.js application to handle requests, rather than just serving static files.

## Recommended: Vercel

Vercel has amazing integration with Next.js. To deploy:

1. Install Vercel CLI: `yarn global add vercel`
2. In project root, run: `vercel`

Vercel has a free tier perfect for final projects!

## Alternative Hosting

Other options:

- **AWS Amplify:** Leverage AWS services
- **Azure:** Microsoft cloud platform
- **GCP:** Google Cloud Platform
- **Netlify** / **Heroku:** Great deployment experience
- **DigitalOcean:** Rent virtual private servers

## Post-Deployment

After deploying:

- Don't hardcode local URLs
- Update Firebase authorized domains

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

# Final Course Feedback

Let us know your thoughts!

Thank you!