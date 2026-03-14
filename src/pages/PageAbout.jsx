import React, { useState } from "react";
import { FadeUp } from "../components/SharedComponents";
import { useInView } from "../hooks/useCustomHooks";

export const PageAbout = ({ site }) => {
  const [ref, inView] = useInView(0.1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

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
      name: "Ian M.",
      position: "Founder & Designer",
      // random about message for personal tone
      bio: "I’m a one‑person studio obsessed with clean typography, thoughtful color palettes, and making quiet, lasting work. When I’m not behind the screen you can find me hiking or experimenting with analog collage.",
      image: "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=IM",
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
      <section id="team" style={{ padding: "5rem 0", background: "#0B0A09" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <FadeUp>
            <div
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.3em",
                color: "#C8A97E",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              About Me
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "3rem",
                fontWeight: 300,
                color: "#F5F0E8",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              {teamMembers[0].name}
            </h2>
          </FadeUp>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            <img
              src={teamMembers[0].image}
              alt={teamMembers[0].name}
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #C8A97E",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "rgba(245,240,232,0.6)",
                lineHeight: 1.8,
                maxWidth: "40rem",
              }}
            >
              {teamMembers[0].bio}
            </p>
          </div>
        </div>
      </section>

      <div
        style={{
          padding: "5rem 3rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8rem",
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
                fontSize: "clamp(2.5rem,5vw,5rem)",
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
                fontSize: "1.02rem",
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
                fontSize: "0.95rem",
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
                fontSize: "0.88rem",
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
          <div style={{ position: "relative", paddingBottom: "2.5rem", paddingRight: "2.5rem" }}>
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
                padding: "1.8rem 2.2rem",
                background: "#C8A97E",
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.8rem",
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
                  fontSize: "0.57rem",
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

      {/* Stats Section */}
      <div
        ref={ref}
        style={{
          padding: "0 3rem 2px",
          borderTop: "1px solid rgba(200,169,126,0.06)",
          borderBottom: "1px solid rgba(200,169,126,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
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
                padding: "3rem 2.5rem",
                background: "#080806",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(18px)",
                transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "3.8rem",
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
                  fontSize: "0.58rem",
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

      {/* Mission Section - Enhanced Design */}
      <section
        id="mission"
        style={{
          padding: "8rem 0",
          background: "linear-gradient(135deg, #080806 0%, #0f0e0a 50%, #080806 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at 100% 0%, rgba(200,169,126,0.08) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-40px", left: "-40px", width: "200px", height: "200px", background: "radial-gradient(circle, rgba(200,169,126,0.1) 0%, transparent 70%)", borderRadius: "50%" }}></div>
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20230624/pngtree-blue-bar-graph-3d-icon-against-black-background-image_3664034.jpg"
                alt="Creative Design Process"
                style={{
                  width: "100%",
                  height: "24rem",
                  objectFit: "cover",
                  borderRadius: "2rem",
                  transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  boxShadow: "0 20px 60px rgba(200,169,126,0.2)",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(-8px)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
              />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", background: "rgba(8,8,6,0.8)", backdropFilter: "blur(10px)", padding: "1rem 1.5rem", borderRadius: "1rem", border: "1px solid rgba(200,169,126,0.3)" }}>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.7rem", color: "#C8A97E", letterSpacing: "0.15em", margin: 0 }}>Outcome </p>
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <i
                  className="fas fa-compass"
                  style={{
                    fontSize: "3.5rem",
                    color: "#C8A97E",
                    opacity: 0.9,
                  }}
                ></i>
              </div>
              <div style={{ marginBottom: "1rem", fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#C8A97E", textTransform: "uppercase" }}>My Direction</div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "3.5rem",
                  fontWeight: 300,
                  color: "#F5F0E8",
                  marginBottom: "2rem",
                  lineHeight: "1.1",
                }}
              >
                Crafting Visual <span style={{ color: "#A855F7" }}>Masterpieces</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "rgba(245,240,232,0.52)",
                  lineHeight: "1.8",
                  marginBottom: "1.5rem",
                }}
              >
                At Artika Graphics, my mission is to empower brands through innovative graphic design solutions that transform ideas into stunning visual experiences. We blend creativity with cutting‑edge technology to deliver designs that captivate, communicate, and convert.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                <div style={{ width: "3px", background: "linear-gradient(180deg, #C8A97E, transparent)" }}></div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "0.95rem", color: "rgba(245,240,232,0.38)", fontStyle: "italic" }}>Every project is a collaborative journey toward excellence, where strategy meets artistry.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Staggered Cards */}
      <section
        id="values"
        style={{
          padding: "8rem 0",
          background: "#000000",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,169,126,0.3), transparent)" }}></div>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "left", marginBottom: "5rem" }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.3em", color: "#C8A97E", textTransform: "uppercase", marginBottom: "1rem" }}>Foundation</div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "3.5rem",
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
                fontSize: "1.05rem",
                color: "rgba(245,240,232,0.48)",
                maxWidth: "50rem",
              }}
            >
              The principles that guide our creative journey and define our commitment to excellence in graphic design.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              position: "relative",
            }}
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                style={{
                  padding: "2.5rem",
                  position: "relative",
                  opacity: hoveredValue === null || hoveredValue === index ? 1 : 0.4,
                  transform: `translateY(${hoveredValue === index ? -16 : 0}px)`,
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  cursor: "pointer",
                  marginTop: `${index * 20}px`,
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
                <div style={{ marginBottom: "1.5rem" }}>
                  <i
                    className={value.icon}
                    style={{
                      fontSize: "2.8rem",
                      color: "#C8A97E",
                      transition: "all 0.3s",
                      opacity: hoveredValue === index ? 1 : 0.7,
                    }}
                  ></i>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "1.5rem",
                    fontWeight: 300,
                    color: "#F5F0E8",
                    marginBottom: "0.8rem",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    color: "rgba(245,240,232,0.48)",
                    lineHeight: "1.7",
                    fontSize: "0.95rem",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" style={{ padding: "6rem 3rem", background: "#080806" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeUp>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "3rem",
                fontWeight: 300,
                color: "#C8A97E",
                margin: 0,
                lineHeight: 1.1,
                textAlign: "left",
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
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.3rem",
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
                      fontSize: "0.9rem",
                      color: "rgba(245,240,232,0.6)",
                      lineHeight: 1.7,
                      marginTop: "1rem",
                      paddingRight: "2rem",
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
