import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  MessageSquare, 
  FileText,
  ArrowRight 
} from 'lucide-react';

const QuickLinksSection = () => {
  const quickLinks = [
    {
      title: "About Me",
      description: "Learn about my journey, skills, and passions",
      icon: User,
      path: "/about",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Projects",
      description: "Explore my latest work and technical projects",
      icon: Briefcase,
      path: "/projects",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Education",
      description: "My academic background and achievements",
      icon: GraduationCap,
      path: "/education",
      color: "from-green-500 to-blue-600"
    },
    {
      title: "Achievements",
      description: "Awards, certifications, and recognitions",
      icon: Award,
      path: "/achievements",
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Resume",
      description: "Download my latest resume and view skills",
      icon: FileText,
      path: "/resume",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Contact",
      description: "Let's connect and work together",
      icon: MessageSquare,
      path: "/contact",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover different aspects of my academic and professional life through these quick links
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            
            return (
              <Card 
                key={link.title}
                className="group relative overflow-hidden border-0 bg-card hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${link.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {link.description}
                  </p>

                  {/* Button */}
                  <Link to={link.path}>
                    <Button 
                      variant="ghost" 
                      className="group/btn p-0 h-auto font-medium text-primary hover:text-primary/80"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickLinksSection;