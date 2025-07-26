import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  MessageSquare,
  Calendar,
  Download,
  QrCode
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@email.com",
      href: "mailto:alex.johnson@email.com",
      description: "Best for detailed inquiries"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Available 9 AM - 6 PM PST"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com",
      description: "Open to remote opportunities"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      username: "@alexjohnson"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      username: "Alex Johnson"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com",
      username: "@alexjohnson_dev"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute chat",
      action: "Schedule",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Download,
      title: "Download Resume",
      description: "Get my latest CV",
      action: "Download",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Quick contact info",
      action: "View",
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate, discuss opportunities, or just say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Methods */}
            <Card className="p-6 card-gradient hover-lift animate-slide-up">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{method.label}</p>
                        <p className="text-sm text-primary">{method.value}</p>
                        <p className="text-xs text-muted-foreground">{method.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium text-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <div
                      key={action.title}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-br ${action.color} p-2 rounded-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{action.title}</p>
                          <p className="text-xs text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        {action.action}
                      </Button>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 card-gradient hover-lift animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="transition-smooth focus:shadow-elegant"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-smooth focus:shadow-elegant"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className="transition-smooth focus:shadow-elegant"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me more about your project, opportunity, or just say hello!"
                    rows={6}
                    required
                    className="transition-smooth focus:shadow-elegant resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto hover-lift"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> I typically respond within 24 hours. 
                  For urgent matters, feel free to reach out directly via phone or LinkedIn.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;