import React, { useState, useEffect } from "react";
import { FadeUp } from "../components/SharedComponents";
import { useInView } from "../hooks/useCustomHooks";
import profileImage from "../public/images/IMG_0018.JPG__1_-removebg-preview.png";

const Icon = ({ name, size = 24, color = "currentColor", style = {} }) => {
  const icons = {
    linkedin: (
      <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 10.02h2.67v8.38H5.6v-8.38Zm4.34 0h2.56v1.15h.04c.36-.67 1.23-1.37 2.53-1.37 2.7 0 3.2 1.78 3.2 4.1v4.5H15.6v-3.99c0-.95-.02-2.18-1.33-2.18-1.33 0-1.53 1.04-1.53 2.11v4.06H9.94v-8.38ZM12 2.4A9.6 9.6 0 1 0 12 21.6 9.6 9.6 0 0 0 12 2.4Zm0 1.6A8 8 0 1 1 12 20A8 8 0 0 1 12 4Z" />
    ),
    instagram: (
      <path d="M8.2 4h7.6A4.2 4.2 0 0 1 20 8.2v7.6a4.2 4.2 0 0 1-4.2 4.2H8.2A4.2 4.2 0 0 1 4 15.8V8.2A4.2 4.2 0 0 1 8.2 4Zm0 1.6A2.6 2.6 0 0 0 5.6 8.2v7.6a2.6 2.6 0 0 0 2.6 2.6h7.6a2.6 2.6 0 0 0 2.6-2.6V8.2a2.6 2.6 0 0 0-2.6-2.6H8.2Zm8.2 1.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8a4 4 0 1 1 0 8.01A4 4 0 0 1 12 8Zm0 1.6a2.4 2.4 0 1 0 0 4.81 2.4 2.4 0 0 0 0-4.8Z" />
    ),
    facebook: (
      <path d="M13.34 20v-6.25h2.1l.31-2.44h-2.41V9.75c0-.7.2-1.18 1.2-1.18h1.29V6.39c-.22-.03-.99-.1-1.87-.1-1.85 0-3.12 1.13-3.12 3.2v1.82H8.75v2.44h2.09V20A8 8 0 1 1 13.34 20Z" />
    ),
    lightbulb: <path d="M12 3.5a5.5 5.5 0 0 0-3.5 9.74c.65.57 1 1.23 1.12 1.96h4.76c.12-.73.47-1.4 1.12-1.96A5.5 5.5 0 0 0 12 3.5Zm-1.7 13.3h3.4v1.1a1.7 1.7 0 1 1-3.4 0v-1.1Z" />,
    users: <path d="M9.25 11.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Zm5.5-1a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM4.5 17.25A3.75 3.75 0 0 1 8.25 13.5h2a3.75 3.75 0 0 1 3.75 3.75v.75H4.5v-.75Zm10.5.75v-.75c0-.96-.26-1.86-.72-2.63h.47a3.25 3.25 0 0 1 3.25 3.25V18H15Z" />,
    award: <path d="M12 4.25 14 8.3l4.48.65-3.24 3.16.76 4.46L12 14.47l-4 2.1.76-4.46L5.52 8.95 10 8.3 12 4.25Zm-2.1 12.8h4.2V20l-2.1-1.18L9.9 20v-2.95Z" />,
    compass: <path d="M12 3.5A8.5 8.5 0 1 0 20.5 12 8.51 8.51 0 0 0 12 3.5Zm2.93 5.57-1.86 4.8-4.8 1.86 1.86-4.8 4.8-1.86ZM12 5.1A6.9 6.9 0 1 1 5.1 12 6.9 6.9 0 0 1 12 5.1Z" />,
    plus: <path d="M11.2 5h1.6v6.2H19v1.6h-6.2V19h-1.6v-6.2H5v-1.6h6.2V5Z" />,
    minus: <path d="M5 11.2h14v1.6H5z" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" style={{ width: size, height: size, display: "block", fill: color, ...style }}>
      {icons[name]}
    </svg>
  );
};

export const PageAbout = ({ site }) => {
  const [ref, inView] = useInView(0.1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const socialLinks = [
    { name: "linkedin", href: site?.socialLinkedIn, label: "LinkedIn" },
    { name: "instagram", href: site?.socialInstagram, label: "Instagram" },
    { name: "facebook", href: site?.socialFacebook, label: "Facebook" },
  ].filter((item) => item.href);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const coreValues = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We push the boundaries of design to create unique and impactful solutions.",
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "Working closely with clients to bring their visions to life.",
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      description: "Delivering high-quality designs that exceed expectations.",
    },
  ];

  // Since this is a personal site we only display a single profile
  const teamMembers = [
    {
      name: "Ian Marwa",
      position: "Founder & Designer",
      // random about message for personal tone
      bio: "I'm a one‑person studio obsessed with clean typography, thoughtful color palettes, and making quiet, lasting work. When I'm not behind the screen you can find me hiking or experimenting with analog collage.",
      image: profileImage,
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const faqList = [
    { 
      q: "How does your design process typically work?", 
      a: "My design process begins with a thorough discovery phase where I listen to your vision, goals, and challenges. We then move into research and ideation, exploring concepts through sketches and mood boards. From there, I develop refined designs, iterate based on your feedback, and finalize the project with high-quality deliverables. Throughout the process, I maintain clear communication and ensure the final result aligns perfectly with your brand and objectives." 
    },
    { 
      q: "Are you open to collaborations or part-time work?", 
      a: "Yes, I'm always open to meaningful collaborations and part-time engagements. Whether it's joining a creative team for a specific project, providing ongoing design support, or contributing to larger initiatives, I enjoy working with other creatives and businesses. My flexible approach allows me to adapt to different collaboration styles while maintaining the quality and attention to detail that defines my work." 
    },
    { 
      q: "How long does it typically take to complete a project?", 
      a: "Project timelines vary depending on scope and complexity, but most projects range from 2-8 weeks. Simple branding projects might take 2-3 weeks, while comprehensive identity systems or large-scale campaigns could extend to 6-8 weeks. I always provide a detailed timeline upfront and work efficiently to meet deadlines while ensuring the highest quality. Rush projects are possible with appropriate adjustments to the scope." 
    },
    { 
      q: "What kind of projects do you take on?", 
      a: "I specialize in brand identity design, including logos, visual systems, and brand guidelines. I also work on editorial design for magazines and books, digital experiences like websites and apps, and marketing materials such as packaging and advertisements. My focus is on projects that require thoughtful, strategic design thinking, and I particularly enjoy working with clients who value craftsmanship and long-term brand building over quick, disposable solutions." 
    },
  ];

  return (
    <div style={{ background: "#080806", minHeight: "100vh", paddingTop: "5rem" }}>
{/* Team Section - single member */}
<section
  id="team"
  style={{
    background: "white",
    position: "relative",
    height: isMobile ? "auto" : "90vh",
    padding: isMobile ? "4rem 1.5rem" : "0 3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  <div style={{ width: "100%", maxWidth: "1200px", position: "relative" }}>
    
    {/* HUGE BACKGROUND NAME */}
    <h1
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: isMobile ? "3rem" : "10rem",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        whiteSpace: "nowrap",
        opacity: 0.08,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      {teamMembers[0].name}
    </h1>

    {/* CENTER IMAGE */}
    <div
      style={{
        position: "relative",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        margin: isMobile ? "0 auto" : "0",
      }}
    >
      <img
        src={teamMembers[0].image}
        alt={teamMembers[0].name}
        style={{
          width: isMobile ? "min(72vw, 240px)" : "380px",
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>

    {/* MOBILE OVERLAY - Only appears on small screens */}
    {isMobile && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)",
          zIndex: 2,
          borderRadius: "1rem",
          pointerEvents: "none",
        }}
      />
    )}

    {/* LEFT TEXT */}
    <div
      style={{
        position: isMobile ? "relative" : "absolute",
        color: isMobile ? "#ffffff" : "#161615",
        left: 0,
        top: isMobile ? "auto" : "50%",
        transform: isMobile ? "none" : "translateY(-50%)",
        maxWidth: "300px",
        zIndex: 4,
        marginTop: isMobile ? "1rem" : "0",
        padding: isMobile ? "1rem" : "0",
        backgroundColor: isMobile ? "rgba(0,0,0,0.7)" : "transparent",
        borderRadius: isMobile ? "0.5rem" : "0",
        backdropFilter: isMobile ? "blur(5px)" : "none",
      }}
    >
      <FadeUp>
        <p
          style={{
            fontSize: "2rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            color: isMobile ? "#C8A97E" : "inherit",
          }}
        >
          About Me
        </p>

        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.6,
            opacity: 0.9,
            color: isMobile ? "#ffffff" : "inherit",
          }}
        >
          Crafting digital experiences that seamlessly blend beauty,
          usability, and business goals — turning ideas into designs that work.
        </p>

        <div style={{ 
          marginTop: "1.2rem", 
          display: "flex", 
          gap: "1rem",
          color: isMobile ? "#C8A97E" : "inherit",
        }}>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "inline-flex",
              }}
            >
              <Icon name={item.name} size={22} color={isMobile ? "#C8A97E" : "#161615"} />
            </a>
          ))}
        </div>
      </FadeUp>
    </div>

    {/* RIGHT TEXT */}
    <div
      style={{
        position: isMobile ? "relative" : "absolute",
        color: isMobile ? "#ffffff" : "#141413",
        right: 0,
        bottom: isMobile ? "auto" : "15%",
        maxWidth: "260px",
        zIndex: 4,
        textAlign: isMobile ? "left" : "right",
        marginTop: isMobile ? "1rem" : "0",
        padding: isMobile ? "1rem" : "0",
        backgroundColor: isMobile ? "rgba(0,0,0,0.7)" : "transparent",
        borderRadius: isMobile ? "0.5rem" : "0",
        backdropFilter: isMobile ? "blur(5px)" : "none",
      }}
    >
      <FadeUp delay={0.2}>
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: 1.6,
            opacity: 0.9,
            color: isMobile ? "#ffffff" : "inherit",
          }}
        >
          From the first sketch to the final pixel, every detail is designed
          to engage users, solve problems, and drive results.
        </p>
      </FadeUp>
    </div>

    {/* DECORATIVE LINE (SVG instead of color-based shape) */}
    <svg
      viewBox="0 0 1200 300"
      preserveAspectRatio="none"
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        height: "60%",
        zIndex: 2,
        pointerEvents: "none",
        opacity: isMobile ? 0.05 : 0.15,
        color: isMobile ? "#ffffff" : "currentColor",
      }}
    >
      <path
        d="M0,150 C200,50 400,250 600,150 C800,50 1000,250 1200,150"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  </div>
</section>

      {/* About Studio Section - Responsive Grid */}
      <div
        style={{
          padding: isMobile ? "3rem 1.5rem" : "5rem 3rem",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "3rem" : "8rem",
          alignItems: "start",
        }}
      >
        <div>
          <FadeUp>
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.3em",
                color: "#C8A97E",
                textTransform: "uppercase",
                marginBottom: "1.2rem",
              }}
            >
              About the Studio
            </div>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2rem,6vw,5rem)",
                fontWeight: 300,
                color: "#F5F0E8",
                lineHeight: 0.94,
                margin: "0 0 2.5rem",
              }}
            >
              Design as a
              <br />
              <em style={{ color: "rgba(245,240,232,0.28)" }}>discipline</em>
            </h1>
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
                fontSize: isMobile ? "0.95rem" : "1.02rem",
                color: "rgba(245,240,232,0.48)",
                lineHeight: 1.88,
                margin: "0 0 1.8rem",
              }}
            >
              {site.aboutShort}
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
                fontSize: isMobile ? "0.9rem" : "0.95rem",
                color: "rgba(245,240,232,0.28)",
                lineHeight: 1.88,
                margin: "0 0 2.5rem",
              }}
            >
              {site.aboutLong}
            </p>
            <div
              style={{
                width: "3rem",
                height: "1px",
                background: "#C8A97E",
                marginBottom: "2rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
                fontSize: isMobile ? "0.85rem" : "0.88rem",
                color: "rgba(245,240,232,0.22)",
                lineHeight: 1.88,
              }}
            >
              Based in {site.location}, working with clients across Africa, Europe, and North
              America.
            </p>
          </FadeUp>
        </div>
        <FadeUp delay={0.1}>
          <div style={{ 
            position: "relative", 
            paddingBottom: isMobile ? "2rem" : "2.5rem", 
            paddingRight: isMobile ? "2rem" : "2.5rem",
            maxWidth: isMobile ? "100%" : "none",
          }}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=85"
              alt="Studio"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                objectFit: "cover",
                filter: "grayscale(28%)",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                padding: isMobile ? "1.2rem 1.5rem" : "1.8rem 2.2rem",
                background: "#C8A97E",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: isMobile ? "2.2rem" : "2.8rem",
                  fontWeight: 300,
                  color: "#080806",
                  lineHeight: 1,
                }}
              >
                2024
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: isMobile ? "0.55rem" : "0.57rem",
                  letterSpacing: "0.15em",
                  color: "rgba(8,8,6,0.55)",
                  textTransform: "uppercase",
                  marginTop: "0.35rem",
                }}
              >
                Founded
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Stats Section - Responsive Grid */}
      <div
        ref={ref}
        style={{
          padding: isMobile ? "0 1.5rem 2px" : "0 3rem 2px",
          borderTop: "1px solid rgba(200,169,126,0.06)",
          borderBottom: "1px solid rgba(200,169,126,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2,1fr)" : "repeat(4,1fr)",
            gap: "1px",
            background: "rgba(200,169,126,0.06)",
          }}
        >
          {[
            [site.stat1, site.stat1Label],
            [site.stat2, site.stat2Label],
            [site.stat3, site.stat3Label],
            [site.stat4, site.stat4Label],
          ].map(([n, l], i) => (
            <div
              key={i}
              style={{
                padding: isMobile ? "2rem 1rem" : "3rem 2.5rem",
                background: "#080806",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(18px)",
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: isMobile ? "2.5rem" : "3.8rem",
                  fontWeight: 300,
                  color: "#C8A97E",
                  lineHeight: 1,
                  marginBottom: "0.45rem",
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: isMobile ? "0.55rem" : "0.58rem",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.22)",
                  textTransform: "uppercase",
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section - Enhanced Design with Responsive Updates */}
      <section
        id="mission"
        style={{
          padding: isMobile ? "4rem 0" : "8rem 0",
          background: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ 
          position: "absolute", 
          top: 0, 
          right: 0, 
          width: isMobile ? "60%" : "40%", 
          height: "100%", 
          background: "radial-gradient(circle at 100% 0%, rgba(200,169,126,0.08) 0%, transparent 70%)", 
          pointerEvents: "none" 
        }}></div>
        
        <div style={{ 
          maxWidth: "1280px", 
          margin: "0 auto", 
          padding: isMobile ? "0 1.5rem" : "0 2rem", 
          position: "relative", 
          zIndex: 1 
        }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "3rem" : "4rem",
              alignItems: "center",
            }}
          >
            {/* Image Column */}
            <div style={{ 
              position: "relative",
              order: isMobile ? "2" : "1"
            }}>
              <div style={{ 
                position: "absolute", 
                top: isMobile ? "-20px" : "-40px", 
                left: isMobile ? "-20px" : "-40px", 
                width: isMobile ? "150px" : "200px", 
                height: isMobile ? "150px" : "200px", 
                background: "radial-gradient(circle, rgba(200,169,126,0.1) 0%, transparent 70%)", 
                borderRadius: "50%" 
              }}></div>
              
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230624/pngtree-blue-bar-graph-3d-icon-against-black-background-image_3664034.jpg"
                alt="Creative Design Process"
                style={{
                  width: "100%",
                  height: isMobile ? "16rem" : "24rem",
                  objectFit: "cover",
                  borderRadius: isMobile ? "1.5rem" : "2rem",
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  boxShadow: "0 20px 60px rgba(200,169,126,0.2)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
              />
              
              <div style={{ 
                position: "absolute", 
                bottom: isMobile ? "10px" : "20px", 
                left: isMobile ? "10px" : "20px", 
                background: "rgba(8,8,6,0.8)", 
                backdropFilter: "blur(10px)", 
                padding: isMobile ? "0.75rem 1.2rem" : "1rem 1.5rem", 
                borderRadius: "1rem", 
                border: "1px solid rgba(200,169,126,0.3)" 
              }}>
                <p style={{ 
                  fontFamily: "'DM Mono',monospace", 
                  fontSize: isMobile ? "0.65rem" : "0.7rem", 
                  color: "#C8A97E", 
                  letterSpacing: "0.15em", 
                  margin: 0 
                }}>Outcome</p>
              </div>
            </div>

            {/* Content Column */}
            <div style={{ 
              order: isMobile ? "1" : "2",
              textAlign: isMobile ? "center" : "left"
            }}>
              <div style={{ marginBottom: "1.5rem" }}>
                <Icon name="compass" size={isMobile ? 44 : 56} color="#C8A97E" style={{ opacity: 0.9 }} />
              </div>
              
              <div style={{ 
                marginBottom: "1rem", 
                fontFamily: "'DM Mono',monospace", 
                fontSize: isMobile ? "0.6rem" : "0.65rem", 
                letterSpacing: "0.3em", 
                color: "#C8A97E", 
                textTransform: "uppercase" 
              }}>
                My Direction
              </div>
              
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: isMobile ? "clamp(2rem,7vw,3rem)" : "3.5rem",
                  fontWeight: 300,
                  color: "#0c0c0c",
                  marginBottom: isMobile ? "1.5rem" : "2rem",
                  lineHeight: "1.1",
                }}
              >
                Crafting Visual <span style={{ color: "#A855F7" }}>Masterpieces</span>
              </h2>
              
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontStyle: "italic",
                  fontSize: isMobile ? "0.95rem" : "1.05rem",
                  color: "rgba(17, 17, 16, 0.52)",
                  lineHeight: isMobile ? "1.7" : "1.8",
                  marginBottom: "1.5rem",
                  maxWidth: isMobile ? "100%" : "600px",
                  marginLeft: isMobile ? "auto" : "0",
                  marginRight: isMobile ? "auto" : "0",
                }}
              >
                At Artika Graphics, my mission is to empower brands through innovative graphic design solutions that transform ideas into stunning visual experiences. We blend creativity with cutting‑edge technology to deliver designs that captivate, communicate, and convert.
              </p>
              
              <div style={{ 
                display: "flex", 
                gap: "1rem", 
                marginTop: "2rem",
                justifyContent: isMobile ? "center" : "flex-start",
                maxWidth: isMobile ? "100%" : "500px",
                marginLeft: isMobile ? "auto" : "0",
                marginRight: isMobile ? "auto" : "0",
              }}>
                <div style={{ 
                  width: "3px", 
                  background: "linear-gradient(180deg, #C8A97E, transparent)" 
                }}></div>
                <p style={{ 
                  fontFamily: "'Playfair Display',serif", 
                  fontSize: isMobile ? "0.9rem" : "0.95rem", 
                  color: "black", 
                  fontStyle: "italic",
                  margin: 0,
                  textAlign: "left"
                }}>
                  Every project is a collaborative journey toward excellence, where strategy meets artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Staggered Cards with Responsive Updates */}
      <section
        id="values"
        style={{
          padding: isMobile ? "4rem 0" : "8rem 0",
          background: "#000000",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,169,126,0.3), transparent)" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "0 1.5rem" : "0 2rem" }}>
          <div style={{ 
            textAlign: isMobile ? "center" : "left", 
            marginBottom: isMobile ? "3rem" : "5rem" 
          }}>
            <div style={{ 
              fontFamily: "'DM Mono',monospace", 
              fontSize: "0.65rem", 
              letterSpacing: "0.3em", 
              color: "#C8A97E", 
              textTransform: "uppercase", 
              marginBottom: "1rem" 
            }}>
              Foundation
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: isMobile ? "2.5rem" : "3.5rem",
                fontWeight: 300,
                color: "#F5F0E8",
                marginBottom: "1rem",
              }}
            >
              Core Values
            </h2>
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                color: "rgba(245,240,232,0.48)",
                maxWidth: "50rem",
                marginLeft: isMobile ? "auto" : "0",
                marginRight: isMobile ? "auto" : "0",
              }}
            >
              The principles that guide our creative journey and define our commitment to excellence in graphic design.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              position: "relative",
            }}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                style={{
                  padding: isMobile ? "2rem" : "2.5rem",
                  position: "relative",
                  opacity: hoveredValue === null || hoveredValue === index ? 1 : 0.4,
                  transform: `translateY(${hoveredValue === index ? -16 : 0}px)`,
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  marginTop: isMobile ? "0" : `${index * 20}px`,
                }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#000000",
                    borderRadius: "1.5rem",
                    border: "1px solid rgba(200,169,126,0.2)",
                    backdropFilter: "blur(10px)",
                    zIndex: -1,
                  }}
                ></div>
                <div style={{ marginBottom: "1.5rem", textAlign: isMobile ? "center" : "left" }}>
                  <Icon
                    name={value.icon.replace("fas fa-", "")}
                    size={isMobile ? 40 : 45}
                    color="#C8A97E"
                    style={{
                      transition: "all 0.3s",
                      opacity: hoveredValue === index ? 1 : 0.7,
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: isMobile ? "1.4rem" : "1.5rem",
                    fontWeight: 300,
                    color: "#F5F0E8",
                    marginBottom: "0.8rem",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "rgba(245,240,232,0.48)",
                    lineHeight: "1.7",
                    fontSize: isMobile ? "0.9rem" : "0.95rem",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Responsive Updates */}
      <section id="faq" style={{ padding: isMobile ? "4rem 1.5rem" : "6rem 3rem", background: "#080806" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeUp>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: isMobile ? "2.2rem" : "3rem",
                fontWeight: 300,
                color: "#C8A97E",
                margin: 0,
                lineHeight: 1.1,
                textAlign: isMobile ? "center" : "left",
              }}
            >
              Frequently Asked Questions
            </h2>
          </FadeUp>
          {faqList.map((f, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div style={{ margin: "2rem 0", borderBottom: "1px solid rgba(200,169,126,0.1)", paddingBottom: "1rem" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 0,
                    gap: "1rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: isMobile ? "1.1rem" : "1.3rem",
                      color: "#F5F0E8",
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {f.q}
                  </h3>
                  <Icon
                    name={openFaq === i ? "minus" : "plus"}
                    size={16}
                    color="#C8A97E"
                    style={{
                      transition: "transform 0.3s ease",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease-in-out",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontSize: isMobile ? "0.85rem" : "0.9rem",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: 1.7,
                      marginTop: "1rem",
                      paddingRight: isMobile ? "0" : "2rem",
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
};
