import React, { useState, useEffect } from "react";
import { FadeUp } from "../components/SharedComponents";
import { useInView } from "../hooks/useCustomHooks";

export const PageAbout = ({ site }) => {
  const [ref, inView] = useInView(0.1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
      image: "src/public/images/IMG_0018.JPG__1_-removebg-preview.png",
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
      }}
    >
      <img
        src={teamMembers[0].image}
        alt={teamMembers[0].name}
        style={{
          width: isMobile ? "240px" : "380px",
          height: "auto",
          objectFit: "cover",
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
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-dribbble"></i>
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
                <i
                  className="fas fa-compass"
                  style={{
                    fontSize: isMobile ? "2.8rem" : "3.5rem",
                    color: "#C8A97E",
                    opacity: 0.9,
                  }}
                ></i>
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
                  <i
                    className={value.icon}
                    style={{
                      fontSize: isMobile ? "2.5rem" : "2.8rem",
                      color: "#C8A97E",
                      transition: "all 0.3s",
                      opacity: hoveredValue === index ? 1 : 0.7,
                    }}
                  ></i>
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
                  <i
                    className={`fas ${openFaq === i ? 'fa-minus' : 'fa-plus'}`}
                    style={{
                      fontSize: "1rem",
                      color: "#C8A97E",
                      transition: "transform 0.3s ease",
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  ></i>
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