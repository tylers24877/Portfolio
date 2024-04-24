import { ReactNode } from "react";
import { AWSIcon } from "./components/icons/tech_stack/AWSIcon";
import { KotlinIcon } from "./components/icons/tech_stack/KotlinIcon";
import { PythonIcon } from "./components/icons/tech_stack/PythonIcon";
import { ReactIcon } from "./components/icons/tech_stack/ReactIcon";
import { TypeScriptIcon } from "./components/icons/tech_stack/TypeScriptIcon";
import { ProjectCardProps } from "./sections/my_projects/components/ProjectCard";

export const techStacks: [string, ReactNode][] = [
  ["TypeScript", <TypeScriptIcon className="fill-on-primary" />],
  ["React", <ReactIcon className="fill-on-primary" />],
  ["Kotlin", <KotlinIcon className="fill-on-primary" />],
  ["Python", <PythonIcon className="fill-on-primary" />],
  ["AWS", <AWSIcon className="fill-on-primary" />],
];

export const projectList: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description:
      "You're at it now! A personal portfolio website showcasing my projects and experience. The Design was created using Figma and I developed the website using React, Typescript, and Tailwind CSS. Hosted on AWS S3 with CloudFront for CDN.",
    techStack: ["React", "Tailwind", "TypeScript", "Terraform", "AWS", "Figma"],
    githubLink: "https://github.com/tylers24877/portfolio",
  },
  {
    title: "Sarcall Alarm",
    description:
      "Previously written in Java, before moving to Kotlin. SARCALL Alarm is an Android application in use by the RAF and UK Mountain Rescue Teams to trigger an alarm on response to a callout sent via SMS. In addition to this, users are able to sign on and off and notify the team of their status on the way to a job. The app is in use by team members across the UK and has been used in real-life scenarios, speeding up response times of UK Mountain Rescue Teams.",
    techStack: ["Android", "Kotlin", "Java"],
    liveLink:
      "https://sarcallapp.com/downloads/sarcall_alarm/sarcall_download.html",
    githubLink: "https://github.com/tylers24877/SARCALL-Alarm",
  },
  {
    title: "GPS Tracker",
    description:
      "A GPS Tracking service written using Python which processes NMEA location data from a GPS device and forwards the processed data an API endpoint belonging to an asset tracking system within the UK Mountain Rescue. This allows a team to track the location of the GPS device in near real time, ensuring safety of team members.",
    techStack: ["Python"],
    githubLink: "https://github.com/tylers24877/MRMap-GPS-Connector",
  },
  {
    title: "Police Data Visualiser",
    description:
      "As part of a small coding project in the RAF, I created a React Website that visualised data from the UK Police API. The website allows users to search for crimes within 1 mile of a postcode and view the data on a map. The website was created using React, TypeScript, Material-UI and MapBox API which is then hosted on AWS S3 with CloudFront for CDN.",
    techStack: ["React", "TypeScript", "Material-UI"],
    githubLink: "https://github.com/tylers24877/JHUB-Module-9",
    liveLink: "https://d29650oo6jvc4g.cloudfront.net/",
  },
  {
    title: "PPE & Loan Management System",
    description:
      "Still currently in development - My flagship project at the RAF. I've created a PPE & Loan Management System for the RAF Mountain Rescue Teams, which allows PPE inspection records and clothing/ equipment loans 'to be recorded and tracked. The system is written in React, TypeScript, Node.JS with a database utilising MongoDB. Email and SMS messaging is provided via a government API. The web app frontend is hosted on AWS S3 with Cloudfront for CDN. The backend is located on a EC2 instance(s) with any images produced by a user is saved on an S3 bucket. I've learnt a lot throughout this project and there is areas I wish I did differently, but I have enjoyed the challenge of creating a full stack application.",
    techStack: [
      "React",
      "MongoDB",
      "Node.JS",
      "TypeScript",
      "Material-UI",
      "AWS",
    ],
    githubLink: "https://github.com/tylers24877/JHUB-Module-9",
    liveLink: "https://d29650oo6jvc4g.cloudfront.net/",
  },
];

export const aboutMe = "I'm a Software Engineer with a passion for creating software that makes a difference. I have experience in a variety of languages and technologies, including React, TypeScript, Kotlin, Python, and AWS. I'm currently working on a PPE & Loan Management System for the RAF Mountain Rescue Teams. I'm always looking to learn new technologies and improve my skills. Outside of work, I enjoy hiking, photography, and playing the guitar."