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
];
