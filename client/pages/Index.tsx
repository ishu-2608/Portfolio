import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Stars,
  Text,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Moon,
  Sun,
  ChevronDown,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Zap,
  Award,
  Users,
  BookOpen,
  Rocket,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Trophy,
  Star,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Menu,
  X,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Circle,
  Terminal,
  Briefcase,
  GraduationCap,
  Settings,
  Cpu,
  Layers,
  Monitor,
  Palette,
  Shield,
  Cloud,
  Workflow,
  GitBranch,
  Box,
  Activity,
  BarChart3,
  Hexagon,
  Sparkles,
  Flame,
  Diamond,
  Gem,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as React from "react";

// Animated particles component
function AnimatedParticles() {
  const particlesRef = useRef<any>();
  const count = 100;

  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ],
        scale: Math.random() * 0.5 + 0.1,
        rotation: Math.random() * Math.PI * 2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// Enhanced 3D sphere with rotation
function AnimatedSphere() {
  const sphereRef = useRef<any>();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      sphereRef.current.scale.setScalar(
        1 + Math.sin(state.clock.elapsedTime) * 0.1,
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={3}>
      <Sphere
        ref={sphereRef}
        args={[1, 100, 200]}
        scale={isHovered ? 3 : 2.5}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      <Text
        position={[0, 0, 2]}
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        UMESH
      </Text>
    </Float>
  );
}

// Floating tech icons around the sphere
function FloatingTechIcons() {
  const icons = [
    { name: "React", position: [3, 2, 1], color: "#61dafb" },
    { name: "Node", position: [-3, 1, 2], color: "#68a063" },
    { name: "TS", position: [2, -2, 1], color: "#3178c6" },
    { name: "AWS", position: [-2, -1, 2], color: "#ff9900" },
    { name: "DB", position: [1, 3, -1], color: "#336791" },
    { name: "GIT", position: [-1, -3, -1], color: "#f05032" },
  ];

  return (
    <group>
      {icons.map((icon, index) => (
        <Float
          key={icon.name}
          speed={1 + index * 0.2}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <Text
            position={icon.position}
            fontSize={0.3}
            color={icon.color}
            anchorX="center"
            anchorY="middle"
          >
            {icon.name}
          </Text>
        </Float>
      ))}
    </group>
  );
}

// Enhanced Navigation with mobile menu
function Navigation() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About", icon: Users },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <motion.span
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🚀
              </motion.span>{" "}
              Umesh Yadav
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-neon-blue/20 text-neon-blue"
                        : "text-foreground/80 hover:text-neon-blue hover:bg-neon-blue/10"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-foreground hover:text-neon-blue relative overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: darkMode ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {darkMode ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-foreground hover:text-neon-blue"
                >
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mobileMenuOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-border/50 z-40 md:hidden"
          >
            <div className="pt-20 px-6">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 w-full p-4 text-left rounded-lg hover:bg-neon-blue/10 hover:text-neon-blue transition-all duration-300 mb-2"
                  >
                    <IconComponent className="h-5 w-5" />
                    <span className="text-lg">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Enhanced Hero Section
function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const phrases = [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Innovation Driven",
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const phrase = phrases[currentPhrase];

    if (displayText.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(phrase.slice(0, displayText.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setDisplayText("");
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentPhrase]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, -10, -10]} angle={0.3} intensity={0.5} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
          />
          <AnimatedSphere />
          <FloatingTechIcons />
          <AnimatedParticles />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 z-5" />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Animated greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium">
              <motion.span
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mr-2"
              >
                👋
              </motion.span>
              Hello, I'm
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%",
              }}
              className="bg-gradient-to-r from-neon-blue via-neon-purple via-neon-green to-neon-blue bg-clip-text text-transparent"
            >
              Umesh Yadav
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl md:text-3xl text-foreground/80 mb-4 h-12 flex items-center justify-center"
          >
            <span className="mr-3">Passionate</span>
            <motion.span
              key={displayText}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-neon-blue font-bold min-w-[300px] text-left"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-neon-purple"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Turning Ideas Into{" "}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="text-neon-green font-semibold cursor-pointer"
            >
              Scalable Web Apps
            </motion.span>{" "}
            with Modern Technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-white font-semibold px-8 py-4 rounded-full transition-all duration-500 transform shadow-2xl hover:shadow-neon-blue/25 group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Explore My Work
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white px-8 py-4 rounded-full transition-all duration-500 shadow-lg hover:shadow-neon-blue/25 group"
              >
                <motion.div
                  animate={{ rotate: [0, 180, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Download className="mr-2 h-5 w-5" />
                </motion.div>
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex justify-center space-x-8"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/ishu-2608",
                label: "GitHub",
                color: "hover:text-white",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/umesh-kumar-9a240135b",
                label: "LinkedIn",
                color: "hover:text-blue-500",
              },
              {
                icon: Mail,
                href: "mailto:umeshyadav.dev@gmail.com",
                label: "Email",
                color: "hover:text-neon-green",
              },
            ].map(({ icon: Icon, href, label, color }, index) => (
              <motion.a
                key={label}
                href={href}
                target={label === "Email" ? "_self" : "_blank"}
                rel={label === "Email" ? "" : "noopener noreferrer"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.2 }}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50 text-foreground ${color} transition-all duration-300 shadow-lg hover:shadow-xl group`}
              >
                <Icon className="h-6 w-6 group-hover:animate-pulse" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm text-foreground/60 mb-2">Scroll Down</span>
            <ChevronDown className="h-8 w-8 text-neon-blue animate-bounce" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced About Section
function AboutSection() {
  const stats = [
    { label: "Projects Completed", value: "15+", icon: Briefcase },
    { label: "Technologies Mastered", value: "20+", icon: Code },
    { label: "Certifications", value: "8+", icon: Award },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-blue rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-neon-purple rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-green rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              About
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
            >
              Me
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Passionate developer crafting digital experiences that matter
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <GraduationCap className="h-8 w-8 text-neon-blue mr-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Educational Journey
                  </h3>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Currently pursuing my studies at{" "}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-neon-blue font-semibold cursor-pointer"
                  >
                    Amity University Jaipur
                  </motion.span>
                  , where I'm diving deep into computer science fundamentals
                  while exploring cutting-edge web technologies.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-green rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="h-8 w-8 text-neon-purple mr-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    My Passion
                  </h3>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  I'm passionate about creating{" "}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-neon-purple font-semibold cursor-pointer"
                  >
                    scalable web applications
                  </motion.span>{" "}
                  that solve real-world problems. Every line of code I write is
                  driven by the desire to create meaningful digital experiences.
                </p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-blue rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Target className="h-8 w-8 text-neon-green mr-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Future Goals
                  </h3>
                </div>
                <p className="text-foreground/80 text-lg leading-relaxed">
                  My goal is to become a{" "}
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="text-neon-green font-semibold cursor-pointer"
                  >
                    tech leader
                  </motion.span>{" "}
                  who builds innovative solutions that make a positive impact on
                  society while continuously learning and growing in this
                  ever-evolving field.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Animated profile section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto w-80 h-80"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple via-neon-green to-neon-blue p-1 rounded-full"
              >
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-72 h-72 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center text-9xl relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      👨‍💻
                    </motion.div>

                    {/* Floating tech icons around avatar */}
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0"
                    >
                      {[Code, Database, Server, Globe, Zap, Lightbulb].map(
                        (Icon, index) => (
                          <motion.div
                            key={index}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: `rotate(${index * 60}deg) translateY(-120px)`,
                            }}
                            whileHover={{ scale: 1.5 }}
                          >
                            <Icon className="h-6 w-6 text-neon-blue" />
                          </motion.div>
                        ),
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ label, value, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ bounce: [0, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="mb-4"
                  >
                    <Icon className="h-8 w-8 mx-auto text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="text-3xl font-bold text-neon-blue mb-2"
                  >
                    {value}
                  </motion.div>
                  <div className="text-sm text-foreground/60 font-medium">
                    {label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Skills Section with real tech icons
function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "📘" },
        { name: "Next.js", level: 88, icon: "🔺" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "Three.js", level: 75, icon: "🎮" },
        { name: "Framer Motion", level: 85, icon: "🎭" },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90, icon: "💚" },
        { name: "Express", level: 88, icon: "🚀" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Django", level: 80, icon: "🌿" },
        { name: "FastAPI", level: 78, icon: "⚡" },
        { name: "GraphQL", level: 82, icon: "🔗" },
      ],
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MongoDB", level: 88, icon: "🍃" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "Redis", level: 80, icon: "🔴" },
        { name: "Firebase", level: 82, icon: "🔥" },
        { name: "Supabase", level: 78, icon: "⚡" },
        { name: "Prisma", level: 85, icon: "💎" },
      ],
    },
    {
      category: "DevOps & Tools",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Git", level: 95, icon: "📝" },
        { name: "GitHub Actions", level: 78, icon: "🤖" },
        { name: "Vercel", level: 90, icon: "▲" },
        { name: "Kubernetes", level: 70, icon: "☸️" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-secondary/10 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: (i % 12) * 0.2,
              }}
              className="bg-neon-blue rounded-full"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Code className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, rotateX: -90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              Skills &
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              whileInView={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
            >
              Technologies
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            My technical arsenal - constantly evolving, always improving
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50">
                  <div className="flex items-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`p-3 rounded-full bg-gradient-to-r ${category.color} mr-4`}
                    >
                      <category.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.05, x: 10 }}
                        viewport={{ once: true }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <motion.span
                              animate={{ rotate: [0, 20, -20, 0] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: skillIndex * 0.2,
                              }}
                              className="text-2xl mr-3"
                            >
                              {skill.icon}
                            </motion.span>
                            <span className="font-medium text-foreground group-hover/skill:text-neon-blue transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: skillIndex * 0.1 + 0.3 }}
                            className="text-sm text-foreground/60 font-bold"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        <div className="relative h-2 bg-secondary/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{
                              width: `${skill.level}%`,
                              opacity: 1,
                            }}
                            transition={{
                              duration: 1.5,
                              delay: skillIndex * 0.1 + 0.5,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{ x: ["-100%", "100%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="absolute inset-0 bg-white/20 w-full"
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Always Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AI/ML",
              "Blockchain",
              "WebAssembly",
              "Rust",
              "Go",
              "Deno",
              "Edge Computing",
              "Web3",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                viewport={{ once: true }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 text-neon-blue font-medium"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "DevConnect",
      description:
        "A comprehensive social platform for developers to connect, share projects, and collaborate on open-source initiatives. Features real-time messaging, code sharing, and project collaboration tools.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Redis", "AWS"],
      github: "https://github.com/ishu-2608/devconnect",
      live: "https://devconnect-umesh.vercel.app",
      image: "🌐",
      category: "Full Stack",
      status: "Production",
      features: [
        "Real-time Chat",
        "Code Sharing",
        "Project Management",
        "Developer Profiles",
      ],
    },
    {
      title: "FitTrack Pro",
      description:
        "An advanced fitness tracking application with AI-powered workout recommendations, nutrition tracking, progress analytics, and social features for fitness enthusiasts.",
      tech: [
        "React Native",
        "Firebase",
        "Node.js",
        "Express",
        "TensorFlow",
        "PostgreSQL",
      ],
      github: "https://github.com/ishu-2608/fittrack-pro",
      live: "https://fittrack-pro.vercel.app",
      image: "💪",
      category: "Mobile App",
      status: "Beta",
      features: [
        "AI Recommendations",
        "Nutrition Tracking",
        "Progress Analytics",
        "Social Features",
      ],
    },
    {
      title: "NoteSync",
      description:
        "A collaborative note-taking application with real-time synchronization, markdown support, voice notes, and team collaboration features. Perfect for students and professionals.",
      tech: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "WebRTC",
        "Supabase",
        "Tailwind",
      ],
      github: "https://github.com/ishu-2608/notesync",
      live: "https://notesync-umesh.vercel.app",
      image: "📝",
      category: "Productivity",
      status: "Production",
      features: [
        "Real-time Sync",
        "Markdown Support",
        "Voice Notes",
        "Team Collaboration",
      ],
    },
    {
      title: "EcoTracker",
      description:
        "Environmental impact tracking application that helps users monitor their carbon footprint, set sustainability goals, and participate in eco-friendly challenges.",
      tech: ["Vue.js", "FastAPI", "MongoDB", "Chart.js", "PWA", "Docker"],
      github: "https://github.com/ishu-2608/ecotracker",
      live: "https://ecotracker-umesh.vercel.app",
      image: "🌱",
      category: "Environment",
      status: "Development",
      features: [
        "Carbon Tracking",
        "Sustainability Goals",
        "Eco Challenges",
        "Impact Analytics",
      ],
    },
    {
      title: "CryptoPortfolio",
      description:
        "Advanced cryptocurrency portfolio management tool with real-time price tracking, portfolio analytics, trading signals, and market sentiment analysis.",
      tech: [
        "React",
        "TypeScript",
        "GraphQL",
        "Apollo",
        "Recharts",
        "WebSocket",
      ],
      github: "https://github.com/ishu-2608/crypto-portfolio",
      live: "https://crypto-portfolio-umesh.vercel.app",
      image: "₿",
      category: "FinTech",
      status: "Production",
      features: [
        "Real-time Tracking",
        "Portfolio Analytics",
        "Trading Signals",
        "Market Analysis",
      ],
    },
    {
      title: "CodeMentor AI",
      description:
        "AI-powered code review and mentoring platform that provides instant feedback, suggests improvements, and helps developers learn best practices.",
      tech: ["Python", "OpenAI", "FastAPI", "React", "Docker", "Kubernetes"],
      github: "https://github.com/ishu-2608/codementor-ai",
      live: "https://codementor-ai.vercel.app",
      image: "🤖",
      category: "AI/Education",
      status: "Beta",
      features: [
        "AI Code Review",
        "Learning Paths",
        "Best Practices",
        "Instant Feedback",
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Full Stack",
    "Mobile App",
    "Productivity",
    "Environment",
    "FinTech",
    "AI/Education",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-40 h-40 bg-neon-blue rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-neon-purple rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Briefcase className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              Featured
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Showcasing innovation through code - from concept to deployment
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg"
                  : "bg-secondary/50 text-foreground/80 hover:bg-neon-blue/10 hover:text-neon-blue"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-border/50 hover:border-neon-blue/50 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-neon-blue/10">
                  {/* Project status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === "Production"
                          ? "bg-neon-green/20 text-neon-green border border-neon-green/30"
                          : project.status === "Beta"
                            ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30"
                            : "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                      }`}
                    >
                      {project.status}
                    </motion.div>
                  </div>

                  {/* Project image/icon */}
                  <div className="relative aspect-video bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-green/20 flex items-center justify-center overflow-hidden">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="text-8xl"
                    >
                      {project.image}
                    </motion.div>

                    {/* Floating particles in project card */}
                    <div className="absolute inset-0">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            x: [Math.random() * 100, Math.random() * 100],
                            y: [Math.random() * 100, Math.random() * 100],
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            delay: i * 0.5,
                          }}
                          className="absolute w-2 h-2 bg-neon-blue/60 rounded-full"
                        />
                      ))}
                    </div>

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              window.open(project.github, "_blank")
                            }
                            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white"
                          >
                            <Github className="w-4 h-4" />
                          </Button>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: -10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Button
                            size="sm"
                            onClick={() => window.open(project.live, "_blank")}
                            className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="bg-secondary/50 text-xs"
                      >
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground/90">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-center text-xs text-foreground/70"
                          >
                            <CheckCircle className="w-3 h-3 text-neon-green mr-1" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-neon-blue/20 hover:text-neon-blue transition-all duration-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(project.github, "_blank")}
                          className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          onClick={() => window.open(project.live, "_blank")}
                          className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={() =>
                window.open("https://github.com/ishu-2608", "_blank")
              }
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green px-8 py-4 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
              View All Projects on GitHub
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </Button>
          </motion.div>
          <p className="text-foreground/60 mt-4">
            Explore more projects and contributions on my GitHub profile
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Achievements Section
function AchievementsSection() {
  const achievements = [
    {
      title: "Google Cloud Professional Developer",
      description:
        "Certified in building scalable applications on Google Cloud Platform",
      icon: "☁️",
      date: "2024",
      category: "Cloud",
      skills: ["GCP", "Kubernetes", "Cloud Functions"],
    },
    {
      title: "AWS Solutions Architect Associate",
      description: "Expertise in designing distributed systems on AWS",
      icon: "🏗️",
      date: "2023",
      category: "Cloud",
      skills: ["AWS", "EC2", "Lambda", "RDS"],
    },
    {
      title: "MongoDB Certified Developer",
      description: "Advanced database design and optimization skills",
      icon: "🍃",
      date: "2023",
      category: "Database",
      skills: ["MongoDB", "Aggregation", "Indexing"],
    },
    {
      title: "React Advanced Patterns",
      description: "Mastery in modern React development patterns",
      icon: "⚛️",
      date: "2024",
      category: "Frontend",
      skills: ["React", "Hooks", "Context", "Performance"],
    },
    {
      title: "Node.js Application Development",
      description: "Backend development and API design expertise",
      icon: "💚",
      date: "2023",
      category: "Backend",
      skills: ["Node.js", "Express", "APIs", "Microservices"],
    },
    {
      title: "Kubernetes Administration",
      description: "Container orchestration and DevOps practices",
      icon: "☸️",
      date: "2024",
      category: "DevOps",
      skills: ["Kubernetes", "Docker", "CI/CD"],
    },
    {
      title: "Hackathon Winner - Tech Innovation",
      description: "First place in university-wide innovation challenge",
      icon: "🏆",
      date: "2024",
      category: "Competition",
      skills: ["Innovation", "Team Leadership", "Rapid Development"],
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to major open source projects",
      icon: "🌟",
      date: "Ongoing",
      category: "Community",
      skills: ["Git", "Collaboration", "Code Review"],
    },
  ];

  const categories = [
    "All",
    "Cloud",
    "Database",
    "Frontend",
    "Backend",
    "DevOps",
    "Competition",
    "Community",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter(
          (achievement) => achievement.category === selectedCategory,
        );

  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-secondary/10 relative overflow-hidden"
    >
      {/* Animated trophy icons background */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            className="text-4xl"
          >
            🏆
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Trophy className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              Achievements
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
            >
              & Certifications
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Milestones in my journey of continuous learning and professional
            growth
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg"
                  : "bg-secondary/50 text-foreground/80 hover:bg-neon-blue/10 hover:text-neon-blue"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {filteredAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                layout
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, y: -50, rotateY: 90 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50,
                }}
                className="group perspective-1000"
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm border-border/50 hover:border-neon-blue/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-neon-blue/10 transform-gpu">
                  <CardContent className="p-6 text-center space-y-4 h-full flex flex-col">
                    {/* Achievement icon with animation */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                      className="relative"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-3xl group-hover:animate-pulse">
                        {achievement.icon}
                      </div>

                      {/* Floating sparkles around icon */}
                      <div className="absolute inset-0">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: [0, 360],
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                            }}
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: `rotate(${i * 90}deg) translateY(-30px)`,
                            }}
                          >
                            <Sparkles className="h-4 w-4 text-neon-green" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Achievement details */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-secondary/50 text-xs"
                        >
                          {achievement.category}
                        </Badge>
                        <span className="text-xs text-foreground/60 font-medium">
                          {achievement.date}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg group-hover:text-neon-blue transition-colors duration-300 leading-tight">
                        {achievement.title}
                      </h3>

                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {achievement.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1 justify-center">
                        {achievement.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge
                              variant="outline"
                              className="text-xs border-neon-blue/30 text-neon-blue hover:bg-neon-blue/10 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Verification badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex items-center justify-center text-neon-green"
                    >
                      <CheckCircle className="h-5 w-5 mr-2" />
                      <span className="text-sm font-medium">Verified</span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Certifications", value: "8+", icon: Award },
            { label: "Projects", value: "15+", icon: Briefcase },
            { label: "Technologies", value: "20+", icon: Code },
            { label: "GitHub Stars", value: "100+", icon: Star },
          ].map(({ label, value, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <motion.div
                animate={{
                  bounce: [0, -5, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
                className="mb-4"
              >
                <Icon className="h-8 w-8 mx-auto text-neon-blue group-hover:text-neon-purple transition-colors duration-300" />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-neon-blue mb-2"
              >
                {value}
              </motion.div>
              <div className="text-sm text-foreground/60 font-medium">
                {label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitStatus("idle"), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "umeshyadav.dev@gmail.com",
      href: "mailto:umeshyadav.dev@gmail.com",
      color: "text-neon-green",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ishu-2608",
      href: "https://github.com/ishu-2608",
      color: "text-white",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "www.linkedin.com/in/umesh-kumar-9a240135b",
      href: "https://www.linkedin.com/in/umesh-kumar-9a240135b",
      color: "text-blue-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, India",
      href: "#",
      color: "text-neon-purple",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-r from-neon-purple to-neon-green rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
              <Send className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              Let's
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-neon-purple to-neon-green bg-clip-text text-transparent"
            >
              Connect
            </motion.span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto"
          >
            Ready to turn your ideas into reality? Let's discuss your next
            project and create something amazing together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                creative minds. Whether you have a project in mind, need
                technical consultation, or just want to say hi, I'd love to hear
                from you!
              </p>

              <div className="space-y-4">
                {contactInfo.map(
                  ({ icon: Icon, label, value, href, color }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-neon-blue/50 transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className={`p-3 rounded-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 ${color} group-hover:shadow-lg`}
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-neon-blue transition-colors">
                          {label}
                        </div>
                        <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                          {value}
                        </div>
                      </div>
                    </motion.a>
                  ),
                )}
              </div>
            </div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Response Time", value: "< 24h", icon: Clock },
                {
                  label: "Projects Delivered",
                  value: "15+",
                  icon: CheckCircle,
                },
                { label: "Client Satisfaction", value: "100%", icon: Heart },
                {
                  label: "Coffee Consumption",
                  value: "High ☕",
                  icon: Activity,
                },
              ].map(({ label, value, icon: Icon }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-background/30 backdrop-blur-sm border border-border/30 hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Icon className="h-6 w-6 mx-auto text-neon-blue mb-2 group-hover:text-neon-purple transition-colors" />
                  </motion.div>
                  <div className="text-sm font-bold text-neon-blue">
                    {value}
                  </div>
                  <div className="text-xs text-foreground/60">{label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div whileHover={{ scale: 1.01 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              <Card className="relative p-8 bg-background/50 backdrop-blur-sm border-border/50 hover:border-neon-blue/50 transition-all duration-300 rounded-3xl">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-medium mb-3 text-foreground">
                          Name *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-4 rounded-xl bg-secondary/50 border border-border/50 focus:border-neon-blue focus:outline-none transition-all duration-300 text-foreground placeholder-foreground/50"
                          placeholder="Your Name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-medium mb-3 text-foreground">
                          Email *
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full px-4 py-4 rounded-xl bg-secondary/50 border border-border/50 focus:border-neon-blue focus:outline-none transition-all duration-300 text-foreground placeholder-foreground/50"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block text-sm font-medium mb-3 text-foreground">
                        Subject *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        className="w-full px-4 py-4 rounded-xl bg-secondary/50 border border-border/50 focus:border-neon-blue focus:outline-none transition-all duration-300 text-foreground placeholder-foreground/50"
                        placeholder="Project Discussion / Collaboration / Just Saying Hi"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block text-sm font-medium mb-3 text-foreground">
                        Message *
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-4 rounded-xl bg-secondary/50 border border-border/50 focus:border-neon-blue focus:outline-none transition-all duration-300 resize-none text-foreground placeholder-foreground/50"
                        placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-green text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="flex items-center"
                          >
                            <Activity className="h-5 w-5 mr-2" />
                            Sending...
                          </motion.div>
                        ) : submitStatus === "success" ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center"
                          >
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Message Sent!
                          </motion.div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <Send className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                            Send Message
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Footer
function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ishu-2608",
      label: "GitHub",
      color: "hover:text-white",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/umesh-kumar-9a240135b",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Mail,
      href: "mailto:umeshyadav.dev@gmail.com",
      label: "Email",
      color: "hover:text-neon-green",
    },
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-16 px-6 bg-secondary/20 border-t border-border/50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-32 h-32 bg-neon-blue rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-24 h-24 bg-neon-purple rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              Umesh Yadav
            </motion.div>
            <p className="text-foreground/70 leading-relaxed">
              Passionate Full Stack Developer crafting digital experiences that
              make a difference. Always learning, always building, always
              innovating.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-full text-foreground/60 ${color} transition-all duration-300 bg-secondary/30 hover:bg-secondary/50`}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: "#3b82f6" }}
                  viewport={{ once: true }}
                  className="block text-foreground/70 hover:text-neon-blue transition-all duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-foreground">Get In Touch</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <Mail className="h-5 w-5 text-neon-green" />
                <span>umeshyadav.dev@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <MapPin className="h-5 w-5 text-neon-purple" />
                <span>Jaipur, India</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <Calendar className="h-5 w-5 text-neon-blue" />
                <span>Available for projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
              className="text-sm text-foreground/60 bg-gradient-to-r from-foreground/60 via-neon-blue to-foreground/60 bg-clip-text"
            >
              © {currentYear} Umesh Yadav. Built with React, Three.js & Love{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-sm text-foreground/60"
            >
              <Rocket className="h-4 w-4 text-neon-blue" />
              <span>Built for the future</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Main Component
export default function Index() {
  useEffect(() => {
    document.body.classList.add("dark");

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ChevronDown className="h-5 w-5 rotate-180" />
      </motion.button>
    </div>
  );
}
