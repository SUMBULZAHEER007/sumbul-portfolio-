import Image from "next/image";
import Card from "@/app/components/ProjectsCard";

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am Sumbul zaheer, Front End Developer
              </h1>
              <p className="main-para">
                "A passionate Front-End Developer and Web Designer. I specialize
                in creating clean, modern, and user-friendly digital
                experiences. With a strong foundation in HTML, CSS, JavaScript,
                and frameworks like React, I bring ideas to life on the web. I’m
                dedicated to continuous learning and staying updated with the
                latest trends in web development to deliver high-quality
                solutions. Let's build something amazing together!"
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div className="ellipse">
              <div>
                <Image
                  src="/profile-image.jpg"
                  width={300}
                  height={300}
                  alt="person"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-card">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Projects</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="card-parent">
              <Card />
              
            </div>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured Works</h3>
            </div>
            
            <div className="card-parent">
                      <div className="card">
                      <Image
                        src="/html css collection.avif"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                                <h2>HTML/CSS Projects Collection</h2>
                                <div className="badge-parent">
                                    <div className="badge">
                                        <p>2024</p>
                                    </div>
                                    <p>HTML/CSS Collection</p>
                                </div>
                                <p>A collection of projects that demonstrate your foundation in HTML and CSS, focusing on responsive design, layout, and styling skills.
                                  
                                </p>
                              </div>
                      </div>

                    <div className="card">
                      <Image
                        src="/portfolio.Responsive Web App.avif"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>STC Digital Website</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2024</p>
                            </div>
                            <p>Digital Website</p>
                        </div>
                        <p>A comprehensive website for STC, showcasing innovative digital solutions and services. This project includes a dynamic homepage, an about page with team profiles and languages, a portfolio page displaying various projects, and a contact form with image upload and location map features".
                        </p>
                      </div>
                    </div>

                    <div className="card">
                      <Image
                        src="/Company-portfolio.jpg"
                        width={245}
                        height={180}
                        alt="image"
                      ></Image>

                      <div className="card-content">
                        <h2>Eco Vision</h2>
                        <div className="badge-parent">
                            <div className="badge">
                                <p>2024</p>
                            </div>
                            <p>Company Portfolio</p>
                        </div>
                        <p>
                        A professional showcase website for [Company Name], featuring an overview of services, team, projects, and contact information. Designed for potential clients and partners to explore the company's expertise and achievements.
                        </p>
                      </div>
                    </div>
            </div>
 </div>
  </div>
  </div>
    </>
  );
}
