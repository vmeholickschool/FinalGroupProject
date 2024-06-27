CREATE TABLE jobs (
    JobId INT PRIMARY KEY IDENTITY(1,1),
    JobTitle VARCHAR(255),
    CompanyName VARCHAR(255),
    City VARCHAR(255),
    State VARCHAR(2),
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


INSERT INTO jobs (JobTitle, CompanyName, City, State, ZipCode, SalaryRange, JobDescription, ExperienceLevel) VALUES
('Software Engineer', 'TechCorp', 'San Francisco', 'CA', '94105', '$100,000 - $130,000', 'Embark on a journey to develop and maintain intricate software solutions in a verdant landscape of technological innovation.', 'Mid'),
('Data Scientist', 'DataWorks', 'New York', 'NY', '10001', '$110,000 - $140,000', 'Delve into a mosaic of data to uncover patterns and insights that transcend ordinary analytics.', 'Senior'),
('Frontend Developer', 'Webify', 'Los Angeles', 'CA', '90001', '$90,000 - $120,000', 'Craft captivating user interfaces that intertwine usability with beauty, orchestrating a seamless user experience.', 'Junior'),
('Backend Developer', 'APISolutions', 'Chicago', 'IL', '60601', '$95,000 - $125,000', 'Develop robust backend services in a labyrinth of APIs, ensuring efficiency and scalability.', 'Mid'),
('Fullstack Developer', 'DevHouse', 'Austin', 'TX', '73301', '$105,000 - $135,000', 'Create a tapestry of front-end and back-end solutions, delivering full-cycle software development.', 'Senior'),
('DevOps Engineer', 'CloudNet', 'Seattle', 'WA', '98101', '$100,000 - $130,000', 'Orchestrate continuous deployment pipelines in a kaleidoscopic environment of cloud technologies.', 'Mid'),
('Machine Learning Engineer', 'AIDev', 'Boston', 'MA', '02101', '$115,000 - $145,000', 'Embark on the crucible of AI development, creating models that beckon the future of machine learning.', 'Senior'),
('Product Manager', 'Innovatech', 'Denver', 'CO', '80201', '$120,000 - $150,000', 'Lead the development of innovative products, weaving together the needs of stakeholders into a cohesive vision.', 'Mid'),
('UX/UI Designer', 'DesignPros', 'Portland', 'OR', '97035', '$80,000 - $110,000', 'Design captivating user experiences that are both functional and aesthetically pleasing.', 'Junior'),
('Database Administrator', 'DataSafe', 'Atlanta', 'GA', '30301', '$95,000 - $125,000', 'Ensure the security and efficiency of databases in an intricate tapestry of data management.', 'Mid'),
('Security Analyst', 'SecureTech', 'Houston', 'TX', '77001', '$100,000 - $130,000', 'Safeguard the crucible of corporate data with innovative security solutions.', 'Mid'),
('QA Engineer', 'QualityCode', 'Phoenix', 'AZ', '85001', '$85,000 - $115,000', 'Test and ensure the quality of software in a labyrinth of development and deployment processes.', 'Junior'),
('Mobile Developer', 'AppMakers', 'Miami', 'FL', '33101', '$90,000 - $120,000', 'Create and maintain mobile applications that intertwine user needs with seamless functionality.', 'Mid'),
('Systems Analyst', 'Systematics', 'San Diego', 'CA', '92101', '$95,000 - $125,000', 'Analyze and optimize systems in a verdant landscape of technological infrastructure.', 'Mid'),
('Network Engineer', 'NetWorks', 'Dallas', 'TX', '75201', '$100,000 - $130,000', 'Design and maintain network solutions in a kaleidoscopic environment of connectivity and data flow.', 'Senior');
