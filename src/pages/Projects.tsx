import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  ExternalLink, 
  Filter, 
  Star,
  Calendar,
  Users,
  Code2
} from 'lucide-react';
import projectsShowcase from '@/assets/projects-showcase.jpg';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "RollNRide",
      description: "An efficient and user-friendly online platform for vehicle renting services.",
      longDescription: "Key features will include secure payment processing, real-time availability tracking, user reviews, and customer support. By using modern web technologies and responsive design, the platform seeks to streamline the vehicle renting process, enhancing convenience and accessibility for users while facilitating efficient management for rental providers.",
      image: projectsShowcase,
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Firebase"],
      category: "web",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://ecotrack-demo.com",
      duration: "4 months",
      team: "3 developers",
      highlights: [
        "Won 1st place at GreenTech Hackathon 2023",
        "10k+ downloads in first month",
        "Featured in university innovation showcase"
      ]
    },
    {
      id: 2,
      title: "StudyBuddy - Collaborative Learning",
      description: "A web platform connecting students for study groups, resource sharing, and peer-to-peer learning experiences.",
      longDescription: "StudyBuddy revolutionizes the way students collaborate and learn together. With features like virtual study rooms, resource libraries, and progress tracking, it creates an engaging learning ecosystem.",
      image: projectsShowcase,
      technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
      category: "mobile",
      featured: true,
      githubUrl: "https://github.com",
      liveUrl: "https://studybuddy-demo.com",
      duration: "3 months",
      team: "Solo project",
      highlights: [
        "Used by 500+ students across 3 universities",
        "Improved study session effectiveness by 40%",
        "Integrated with university LMS systems"
      ]
    },
    {
      id: 3,
      title: "Smart Home IoT Dashboard",
      description: "An IoT dashboard for monitoring and controlling smart home devices with real-time analytics and automation.",
      longDescription: "A comprehensive IoT solution that provides centralized control and monitoring for smart home devices. Features include real-time sensor data visualization, automated scheduling, and energy consumption tracking.",
      image: projectsShowcase,
      technologies: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
      category: "iot",
      featured: false,
      githubUrl: "https://github.com",
      duration: "2 months",
      team: "2 developers",
      highlights: [
        "Reduced energy consumption by 25%",
        "Supports 20+ device types",
        "Custom protocol for device communication"
      ]
    },
    {
      id: 4,
      title: "AI Recipe Generator",
      description: "Machine learning model that generates personalized recipes based on dietary preferences and available ingredients.",
      longDescription: "An intelligent recipe recommendation system powered by natural language processing and machine learning. The system analyzes user preferences, dietary restrictions, and ingredient availability to suggest personalized recipes.",
      image: projectsShowcase,
      technologies: ["Python", "TensorFlow", "Flask", "React", "PostgreSQL"],
      category: "ai",
      featured: false,
      githubUrl: "https://github.com",
      liveUrl: "https://ai-recipes-demo.com",
      duration: "6 months",
      team: "3 developers",
      highlights: [
        "Trained on 100k+ recipes dataset",
        "95% user satisfaction rate",
        "Published research paper on food recommendation systems"
      ]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ai', label: 'AI/ML' },
    { value: 'iot', label: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, innovations, and contributions to the developer community
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center animate-slide-up">
              <Star className="w-6 h-6 mr-2 text-yellow-500" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-yellow-500 text-yellow-50">Featured</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline">+{project.technologies.length - 3} more</Badge>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {project.team}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      {project.liveUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center mr-4">
            <Filter className="w-4 h-4 mr-2" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={filter === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category.value)}
              className="hover-lift"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-yellow-500 text-yellow-50">Featured</Badge>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                  ))}
                  {project.technologies.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 text-xs">
                    <Code2 className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1 text-xs">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No projects found in this category. Try a different filter!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;