import { ReactNode } from "react";
import { AWSIcon } from "./components/icons/tech_stack/AWSIcon";
import { KotlinIcon } from "./components/icons/tech_stack/KotlinIcon";
import { PythonIcon } from "./components/icons/tech_stack/PythonIcon";
import { ReactIcon } from "./components/icons/tech_stack/ReactIcon";
import { TypeScriptIcon } from "./components/icons/tech_stack/TypeScriptIcon";
import { ProjectCardProps } from "./sections/my_projects/components/ProjectCard";
import { TerraformIcon } from "./components/icons/tech_stack/Terraform";

export const socialLinks = [
  ["GitHub", "https://github.com/tylers24877"],
  ["LinkedIn", "https://www.linkedin.com/in/tyler-simmonds-327a861a7/"],
];

export const techStacks: [string, ReactNode][] = [
  ["TypeScript", <TypeScriptIcon className="fill-on-primary" />],
  ["React", <ReactIcon className="fill-on-primary" />],
  ["Kotlin", <KotlinIcon className="fill-on-primary" />],
  ["Python", <PythonIcon className="fill-on-primary" />],
  ["AWS", <AWSIcon className="fill-on-primary" />],
  ["Terraform", <TerraformIcon className="fill-on-primary" />],
];

export const aboutMe =
  "I've had the privilege of serving in the Royal Air Force (RAF) as a Communications Technician, where over the course of 8 years, I've enhanced both technical expertise and leadership skills. From managing the deployment, maintenance, and recovery of network and IT infrastructure in challenging environments such as Afghanistan and Iraq to overseeing communication equipment for the RAF Mountain Rescue Service (RAF MRS), I've gained invaluable experience in project management and technical operations.\n\nI've always been driven by a passion for software development, which I've actively pursued alongside my RAF duties. I've designed and created multiple successful applications that are integral to RAF MRS. Notably, my work on the SARCALL Alarm Android app earned recognition from Station Commander RAF Leeming, earning me a commendation for its impact on enhancing team communication and coordination in life threatening situations.\n\nIn addition to my professional pursuits, I'm an avid climber and scrambler, often escaping to the Lake District with my partner Beth and our Whippet Blue. These pursuits not only provide me with personal fulfillment but also instill qualities of resilience, problem-solving, and teamwork that I bring to my professional endeavors.\n\nLooking ahead, I am eager to leverage my extensive background in technical, project management, and software development to pursue opportunities where I can continue to make meaningful contributions, innovate, and chase my passion.";

export const projectList: ProjectCardProps[] = [
  {
    title: "Portfolio Website",
    description:
      "You're at it now! A personal portfolio website showcasing my projects and experience. The Design was created using Figma and I then developed the website using React, Typescript, and Tailwind CSS.\nHosted on AWS S3 with CloudFront for CDN, Route 53 for DNS and a Python Lambda function connected to a SNS for the contact form. The infrastructure is fully deployed using Terraform.",
    buttons: [
      { url: "https://github.com/tylers24877/portfolio", text: "Github" },
    ],
    techStack: ["React", "Tailwind", "TypeScript", "Terraform", "AWS", "Figma"],
  },
  {
    title: "Sarcall Alarm",
    description:
      "Previously written in Java, before moving to Kotlin. SARCALL Alarm is an Android application in use by the RAF and UK Mountain Rescue Teams to trigger an alarm on their phone (even during silent/ DnD) in response to a callout sent via SMS. In addition to this, users are able to sign on and off and notify the team of their status on the way to a tasking. The app is in use by team members across the UK and has been used in many real-life scenarios, speeding up response times of UK Mountain Rescue Teams.\nThroughout development challenges faces were adapting to the restrictions imposed by Android with detecting SMS messages and allowing an alarm to activate at anytime.\n\nThe app has been commended by the Station Commander RAF Leeming for its impact on enhancing team communication and coordination in life-threatening situations.",
    techStack: ["Android", "Kotlin", "Java"],
    buttons: [
      {
        url: "https://sarcallapp.com/downloads/sarcall_alarm/sarcall_download.html",
        text: "View Live",
      },
      { url: "https://github.com/tylers24877/SARCALL-Alarm", text: "Github" },
    ],
  },
  {
    title: "GPS Tracking Service",
    description:
      "Having noticed a flaw with no tracking in the RAF MRS vehicles I decided to design and create a python application which is installed pre-existing computer embedded on the vehicle. This is then fed data from a GPS device, processes the data which is in NMEA format, then pushes the formatted data to an API endpoint. This endpoint is operated by an asset tracking system used within the UK Mountain Rescue.\n\nNow the tracking problem is solved, RAF MRS can now track the location of the vehicles ensuring safety of team members using them.",
    techStack: ["Python"],
    buttons: [
      {
        url: "https://github.com/tylers24877/MRMap-GPS-Connector",
        text: "Github",
      },
    ],
  },
  {
    title: "Police Crime Map",
    description:
      "As part of a small coding project in the RAF, I created a React Web App that visualises data from a UK Police Crime API. The website allows users to quickly search for crimes within 1 mile of a postcode and view the data on a map. The website was created using React, TypeScript, Material-UI and MapBox API which is then hosted on AWS S3 with CloudFront for CDN.\nThis was a fun mini project to work on, it was great to have a go using MapBox for mapping.",
    techStack: ["React", "TypeScript", "Material-UI"],
    buttons: [
      {
        url: "https://d29650oo6jvc4g.cloudfront.net/",
        text: "View Live",
      },
      { url: "https://github.com/tylers24877/JHUB-Module-9", text: "Github" },
    ],
  },
  {
    title: "PPE & Loan Management System",
    description:
      "Still currently in development. I've created a PPE & Loan Management System for the RAF Mountain Rescue Teams, which allows PPE inspection records and clothing / equipment loans 'to be recorded and tracked. The system is written in React, TypeScript, Node.JS with a database utilising MongoDB. Email and SMS messaging is provided via a government API. The web app frontend is hosted on AWS S3 with Cloudfront for CDN. The backend is located on a EC2 instance(s) with any images produced by a user is saved on an S3 bucket. I've learnt a lot throughout this project and there is areas I wish I did differently, but I have enjoyed the challenge of creating a full stack application.\n\nPlease contact me for a demo.",
    techStack: [
      "React",
      "MongoDB",
      "Node.JS",
      "TypeScript",
      "Material-UI",
      "AWS",
    ],
    buttons: [
      {
        url: "/screenshot/ppe-loan-management-system.png",
        text: "Screenshot",
      },
    ],
  },
];
