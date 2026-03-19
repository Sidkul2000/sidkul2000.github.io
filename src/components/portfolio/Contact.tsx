import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, User, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from '@/components/animations/AnimatedSection';

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:sidkul2000@gmail.com',
    label: 'sidkul2000@gmail.com',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/siddhant-kulkarni/',
    label: 'Siddhant Kulkarni',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/Sidkul2000',
    label: '@Sidkul2000',
  },
  {
    name: 'Portfolio',
    icon: User,
    href: 'https://sidkul2000.github.io',
    label: 'sidkul2000.github.io',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: 'Message sent successfully!',
      description: "Thank you for reaching out! Please email me as well. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const renderFloatingLabel = (field: string, label: string) => (
    <Label
      htmlFor={field}
      className={`absolute left-3 transition-all duration-200 pointer-events-none ${
        focusedField === field || formData[field as keyof typeof formData]
          ? '-top-2 text-xs bg-card px-1 text-primary'
          : 'top-3 text-muted-foreground'
      }`}
    >
      {label}
    </Label>
  );

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground">
            Ready to bring your ideas to life? Get in touch and let's create something amazing.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection variant="fade-left">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      {renderFloatingLabel('name', 'Your Name')}
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="pt-4 hover:border-primary/50 focus:border-primary transition-colors bg-transparent"
                        required
                      />
                    </div>
                    <div className="relative">
                      {renderFloatingLabel('email', 'Email Address')}
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="pt-4 hover:border-primary/50 focus:border-primary transition-colors bg-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    {renderFloatingLabel('subject', 'Subject')}
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="pt-4 hover:border-primary/50 focus:border-primary transition-colors bg-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    {renderFloatingLabel('message', 'Your Message')}
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="min-h-[120px] pt-4 hover:border-primary/50 focus:border-primary transition-colors bg-transparent"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection variant="fade-right" delay={0.2} className="space-y-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have
                  a project in mind or just want to chat about technology, feel free to reach out!
                </p>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.label}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quick Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  I typically respond within 24 hours. For urgent inquiries, reach out via email!
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-muted-foreground">Usually responds within a few hours</span>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
