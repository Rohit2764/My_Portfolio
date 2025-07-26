import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Heart, 
  Code, 
  Coffee,
  Music,
  Camera
} from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Year - Computer Science",
      description: "Focusing on advanced algorithms, machine learning, and capstone project development.",
      type: "education"
    },
    {
      year: "2023",
      title: "Software Engineering Intern",
      description: "Built full-stack applications and collaborated with senior developers on production systems.",
      type: "work"
    },
    {
      year: "2022",
      title: "Hackathon Winner",
      description: "Won first place at University Tech Challenge with an innovative mobile app solution.",
      type: "achievement"
    },
    {
      year: "2021",
      title: "Started Computer Science",
      description: "Began my journey in computer science with a focus on software development and design.",
      type: "education"
    }
  ];

  const interests = [
    { icon: Code, label: "Web Development", color: "bg-blue-500" },
    { icon: Coffee, label: "Coffee Brewing", color: "bg-amber-600" },
    { icon: Music, label: "Music Production", color: "bg-purple-500" },
    { icon: Camera, label: "Photography", color: "bg-green-500" },
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", 
    "Java", "SQL", "MongoDB", "Git", "AWS", "Docker", "Figma"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code - my journey, passions, and what drives me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <Card className="p-6 card-gradient hover-lift animate-slide-up">
              <div className="text-center">
                <div className="relative mb-6">
                  <img
                    src={profileImage}
                    alt="Alex Johnson"
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-elegant hover:shadow-glow transition-smooth"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Alex Johnson</h2>
                <p className="text-primary font-medium mb-4">Computer Science Student</p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Expected Graduation: May 2024
                  </div>
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    UC Berkeley
                  </div>
                </div>
              </div>
            </Card>

            {/* Interests */}
            <Card className="p-6 mt-6 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div 
                      key={interest.label}
                      className="flex flex-col items-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className={`${interest.color} p-2 rounded-lg mb-2 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-center">{interest.label}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="p-8 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6">My Story</h3>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  I'm a passionate computer science student at UC Berkeley with a deep love for creating 
                  digital experiences that make a difference. My journey into tech started during high school 
                  when I built my first website for a local nonprofit organization.
                </p>
                <p>
                  What excites me most about software development is the perfect blend of logical problem-solving 
                  and creative expression. Whether I'm architecting a complex backend system or crafting an 
                  intuitive user interface, I find joy in every aspect of the development process.
                </p>
                <p>
                  Beyond coding, I'm an avid coffee enthusiast who enjoys exploring different brewing methods, 
                  a music producer in my spare time, and someone who believes in the power of technology to 
                  solve real-world problems and connect people.
                </p>
              </div>
            </Card>

            {/* Skills */}
            <Card className="p-8 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors animate-scale-in"
                    style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-8 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-elegant group-hover:shadow-glow transition-smooth ${
                        item.type === 'education' ? 'bg-blue-500' :
                        item.type === 'work' ? 'bg-green-500' : 'bg-purple-500'
                      }`}>
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;