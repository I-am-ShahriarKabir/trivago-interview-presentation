'use client';

import React, { useState, useEffect, KeyboardEvent, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Slide {
  title: string;
  content?: string;
  subContent?: string;
  highlight?: string;
  highlights?: string[];
}

const slides: Slide[] = [
  {
    title: "Shahriar Kabir",
    content: "Software Engineer | Data Scientist | AI/ML Specialist",
    subContent: "Passionate about building scalable, high-performance systems"
  },
  {
    title: "Contents",
    highlights: [
      "1. Bio",
      "2. Experiences and related skills",
    ]
  },
  {
    title: "Bio",
    highlights: [
      "1. Software Developer at TOP seven GmbH & Co. KG (1/2023 - 6/2024)",
      "2. Research Assistant at Technical University of Munich (7/2022 - 12/2022)"
    ]
  },
  {
    title: "Java, Rx Java, & Kotlin Expertise, and Data Processing",
    content: "• Extensive hands-on experience in Java development and data optimization",
    subContent: "• Architected and implemented complex systems",
    highlights: [
      "Developed a pilot Android application for drone-based infrastructure inspection",
      "Where -",
      "1. Integrated DJISDK and MAVSDK, delivering scalable, maintainable code with API proficiency",
      "2. Increased operational efficiency by 30% through real-time data processing and visualization",
      "3. Optimized communication protocols, resulting in a 40% increase in data transmission efficiency",
      "4. Reduced application crash rate by 60% through rigorous testing and 80% code coverage with JUnit and Mockito",
      "5. Ensured seamless user experience using Espresso for UI testing"
    ]
  },
  {
    title: "Database Management",
    content: "• Implemented a localized geofence database using SQLite",
    subContent: "• Handled large-scale databases efficiently",
    highlights: [
      "1. Implemented a localized geofence database using SQLite, optimizing query performance for real-time data retrieval and analysis"
    ]
  },
  {
    title: "Cloud & Distributed Systems",
    content: "• Proficient in cloud computing concepts",
    subContent: "• Implemented cloud-native APIs",
    highlights: [
      "Experience with AWS (eager to expand to GCP & Azure)",
      "Where -",
      "1. Leveraged AWS S3 for scalable data management, implementing systems for efficient storage and retrieval of large datasets",
      "2. Utilized AWS Lambda functions for on-demand data processing and API integrations"
    ]
  },
  {
    title: "DevOps & CI/CD",
    content: "• Led implementation of CI/CD pipelines",
    subContent: "• Reduced deployment times by 50%",
    highlights: [
      "1. Led CI/CD pipeline implementation using GitLab",
      "2. Integrated test scripts in CI/CD pipeline using Jenkins, enabling early detection of issues and maintaining high code quality",
      "3. Created a Dockerfile to streamline the deployment of a Gazebo simulation environment with Pixhawk firmware integration",
      "4. Enabled developers to test and validate drone missions virtually before real-world flight, reducing the risk of accidents and expediting the development cycle",
      "5. Developed and maintained infrastructure-as-code using Terraform"
    ]
  },
  {
    title: "Python & AI Expertise, and Data Processing",
    content: "• Developed a custom Python image viewer application for wind turbine blade inspections",
    subContent: "• User-friendly (PyQt) interface facilitated efficient image visualization and damage annotation",
    highlights: [
      "1. Integrated the viewer with a company-developed, modified YOLOv5 deep learning model",
      "2. Enabled real-time damage detection and classification on wind turbine blades",
      "3. Implemented COCO format JSON processing for accurate bounding box generation",
      "4. Implemented comprehensive unit testing using PyUnit and Pytest for the application",
      " ",
      "Previously -",
      "1. Implemented self-supervised contrastive learning algorithms using the PyTorch framework to pre-train a deep learning model on the Global Mining Sites dataset",
      "2. Developed and optimized machine learning models for processing extensive datasets",
      "3. The pre-trained model served as a foundation for high-performing supervised mining site segmentation models trained with a limited amount of labeled data",
      "4. Presented the paper SSL for Large - Scale Mining Site Segmentation at IGARSS 2023"
    ]
  },
  {
    title: "Agile Methodologies",
    content: "• Successfully led cross-functional teams",
    subContent: "• Increased productivity by 25%",
    highlights: [
      "1. Ensured timely delivery of high-quality features through Agile methodologies. Implemented Scrum principles (using Jira and Kanban) to streamline workflows",
      "2. Organized daily stand-ups, sprint planning, and retrospective meetings, which enhanced team cohesion and aligned project goals with stakeholder expectations",
      "3. Continuous improvement by encouraging regular communication and feedback loops"
    ]
  },
  {
    title: "Continuous Learning",
    content: "• Actively improving knowledge of Spring framework and GCP",
    subContent: "• Track record of quickly adapting to new technologies",
    highlights: [
      "Ongoing professional certifications"
    ]
  },
  {
    title: "Thank You",
    content: "Questions?",
    subContent: "Looking forward to discussing how I can contribute"
  }
];

const Presentation: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const presentationRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      presentationRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'f') {
        toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener('keydown', handleKeyDown as unknown as EventListener);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown as unknown as EventListener);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div ref={presentationRef} className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className={`${isFullscreen ? 'w-screen h-screen' : 'w-[1920px] h-[1080px]'} bg-white shadow-xl overflow-hidden`}>
        <CardContent className="flex flex-col justify-between h-full p-16">
          <div>
            <h2 className="text-6xl font-bold mb-16">{slides[currentSlide].title}</h2>
            <p className="text-4xl mb-8">{slides[currentSlide].content}</p>
            <p className="text-3xl mb-12">{slides[currentSlide].subContent}</p>
            {slides[currentSlide].highlights && (
              <div className="bg-blue-100 p-8 rounded-md">
                {slides[currentSlide].highlights.map((highlight, index) => (
                  <p key={index} className="text-blue-800 font-semibold text-3xl mb-4"> {highlight}</p>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-between items-center mt-8">
            <Button onClick={prevSlide} disabled={currentSlide === 0} className="text-2xl py-4 px-8">
              <ChevronLeft className="mr-4 h-8 w-8" /> Previous
            </Button>
            <span className="text-2xl text-gray-500">
              Slide {currentSlide + 1} of {slides.length}
            </span>
            <Button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className="text-2xl py-4 px-8">
              Next <ChevronRight className="ml-4 h-8 w-8" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <Button onClick={toggleFullscreen} className="fixed bottom-4 right-4 text-2xl py-4 px-8">
        {isFullscreen ? <Minimize className="h-8 w-8" /> : <Maximize className="h-8 w-8" />}
      </Button>
    </div>
  );
};

export default Presentation;
