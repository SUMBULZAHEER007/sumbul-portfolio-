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
                Hi, I am Sumbul Zaheer, Front End Developer
              </h1>
              <p className="main-para">
                A passionate Front-End Developer and Web Designer. I specialize in creating clean, modern, and user-friendly digital experiences. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I bring ideas to life on the web. I’m dedicated to continuous learning and staying updated with the latest trends in web development to deliver high-quality solutions. Let&apos;s build something amazing together!
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div className="ellipse">
              <div>
                <Image
                  src="/profile-image.jpg"
                  width={300}
                  height={300}
                  alt="Sumbul Zaheer"
                />
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
                  alt="HTML CSS Projects"
                />
                <div className="card-content">
                  <h2>HTML/CSS Projects Collection</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>HTML/CSS Collection</p>
                  </div>
                  <p>A collection of projects demonstrating your foundation in HTML and CSS, focusing on responsive design, layout, and styling skills.</p>
                </div>
              </div>
              <div className="card">
                <Image
                  src="/portfolio.Responsive Web App.avif"
                  width={245}
                  height={180}
                  alt="STC Digital Website"
                />
                <div className="card-content">
                  <h2>STC Digital Website</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Digital Website</p>
                  </div>
                  <p>A comprehensive website for STC, showcasing innovative digital solutions and services, including dynamic pages and user-friendly features.</p>
                </div>
              </div>
              <div className="card">
                <Image
                  src="/Company-portfolio.jpg"
                  width={245}
                  height={180}
                  alt="Eco Vision Portfolio"
                />
                <div className="card-content">
                  <h2>Eco Vision</h2>
                  <div className="badge-parent">
                    <div className="badge">
                      <p>2024</p>
                    </div>
                    <p>Company Portfolio</p>
                  </div>
                  <p>A professional showcase for Eco Vision, featuring an overview of services, team, projects, and contact information designed for clients and partners.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
