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
      year: "2025",
      title: "DSA Taining",
      description: "Focusing on advanced algorithms, data structures, and capstone project development with the Smart Intervies team.",
      type: "education"
    },
    {
      year: "2023",
      title: "Web Developer Intern",
      description: "Built full-stack application and collaborated with other developers on building a LMS platform for a EdTech Startup Edueme",
      type: "work"
    },
    {
      year: "2023",
      title: "Certified in BEC LinguaSkill ",
      description: "Got certified in BEC LinguSkill exam by Cambridge University",
      type: "achievement"
    },
    {
      year: "2022",
      title: "Started Computer Science",
      description: "Began my journey in computer science with a focus on software development and design.",
      type: "education"
    }
  ];

  const interests = [
    { icon: Code, label: "Web Development", color: "bg-blue-500" },
    { icon: Coffee, label: "Cooking", color: "bg-amber-600" },
    { icon: Music, label: "Music", color: "bg-purple-500" },
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
                    alt="Rohit Kumar Patil"
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-elegant hover:shadow-glow transition-smooth"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Rohit Kumar Patil</h2>
                <p className="text-primary font-medium mb-4">Information Technology Student</p>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Hyderabad, Telangana.
                  </div>
                  <div className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Expected Graduation: May 2026
                  </div>
                  <div className="flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    ACE Engineering College
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
                  I'm Rohit Kumar Patil, a passionate and motivated B.Tech student in the Information Technology branch 
                  at ACE Engineering College, Hyderabad, India. My academic journey has equipped me with a solid foundation 
                  in core computer science concepts, while my curiosity and dedication have driven me to explore beyond the 
                  curriculum. From developing websites and understanding system logic to diving into areas like artificial 
                  intelligence and robotics, I am constantly looking to sharpen my skills and contribute meaningfully 
                  to the world of technology.
                </p>
                <p>
                  Technically, I have hands-on experience with web development using HTML, CSS, JavaScript, 
                  React, and Tailwind CSS. I also enjoy solving real-world problems through code, building 
                  intuitive user interfaces, and optimizing functionality in every project I take up. I'm 
                  currently enhancing my skills in full-stack development, learning backend technologies, 
                  and exploring how emerging fields like AI and automation intersect with software engineering.
                  I'm particularly interested in building scalable, smart, and accessible tech solutions that 
                  solve real problems and make an impact.
                </p>
                <p>
                  Outside the world of tech, I'm a creative soul who enjoys traveling, listening to music, 
                  photography, video editing, and cooking. I believe that creativity is an important part of 
                  problem-solving in tech, and I often find inspiration for projects from my day-to-day life.
                  My strengths lie in my positive attitude, self-confidence, and ability to adapt and learn 
                  quickly. Whether working solo or in a team, I bring energy, focus, and a growth mindset to everything I do.
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