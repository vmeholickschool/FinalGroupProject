CREATE TABLE jobs (
    JobId INT PRIMARY KEY IDENTITY(1,1),
    JobTitle VARCHAR(255),
    CompanyName VARCHAR(255),
    Location VARCHAR(255),
    ZipCode VARCHAR(10),
    SalaryRange VARCHAR(50),
    JobDescription TEXT,
    ExperienceLevel VARCHAR(50)
);


CREATE TABLE savedJobs (
    SaveId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT,
    JobId INT,
    FOREIGN KEY (JobId) REFERENCES jobs (JobId)
);


CREATE TABLE applicationStatus (
    StatusId INT PRIMARY KEY IDENTITY(1,1),
    UserId INT,
    JobId INT,
    Status VARCHAR(50),
    FOREIGN KEY (JobId) REFERENCES jobs (JobId)
);

INSERT INTO Jobs (JobTitle, CompanyName, Location, SalaryRange, JobDescription, ExperienceLevel) VALUES
('Software Engineer', 'Tech Innovators Inc.', 'San Francisco, CA', '$120,000 - $150,000', 'Responsible for developing, testing, and maintaining software applications. Collaborate with cross-functional teams to define and implement new features.', 'Mid-level'),
('Data Scientist', 'DataXperts', 'New York, NY', '$110,000 - $140,000', 'Analyze large datasets to extract meaningful insights. Develop predictive models and machine learning algorithms to drive business decisions.', 'Senior'),
('DevOps Engineer', 'Cloud Solutions LLC', 'Seattle, WA', '$100,000 - $130,000', 'Implement and manage CI/CD pipelines, automate infrastructure, and ensure the reliability of production systems.', 'Mid-level'),
('Front-end Developer', 'Web Wizards', 'Austin, TX', '$90,000 - $120,000', 'Create responsive and interactive web applications using HTML, CSS, and JavaScript frameworks. Work closely with designers to translate UI/UX designs into functional code.', 'Junior'),
('Back-end Developer', 'CodeCrafters', 'Denver, CO', '$95,000 - $125,000', 'Develop and maintain server-side logic, databases, and APIs. Ensure high performance and responsiveness of applications.', 'Mid-level'),
('Cybersecurity Analyst', 'SecureTech', 'Chicago, IL', '$105,000 - $135,000', 'Monitor and protect company systems and networks from cyber threats. Conduct vulnerability assessments and implement security measures.', 'Senior'),
('Mobile App Developer', 'AppGenius', 'Los Angeles, CA', '$100,000 - $130,000', 'Design and develop mobile applications for iOS and Android platforms. Collaborate with product and design teams to create user-friendly apps.', 'Mid-level'),
('UX/UI Designer', 'Creative Minds', 'Boston, MA', '$85,000 - $115,000', 'Design and enhance user interfaces and experiences for web and mobile applications. Conduct user research and usability testing.', 'Junior'),
('Network Engineer', 'NetSecure Solutions', 'Atlanta, GA', '$95,000 - $125,000', 'Design, implement, and manage company network infrastructure. Troubleshoot network issues and ensure network security.', 'Mid-level'),
('IT Project Manager', 'TechProject Pros', 'Miami, FL', '$110,000 - $140,000', 'Plan, execute, and oversee IT projects. Coordinate with teams and stakeholders to ensure project goals are met on time and within budget.', 'Senior');
