export const profile = {
  name: "Ashitosh Ghodake",
  title: "Cyber Security Analyst | SOC Analyst",
  tagline: "Securing Systems. Detecting Threats. Defending Networks.",
  summary:
    "I am a cybersecurity professional focused on protecting digital environments through proactive monitoring, threat detection, and security validation. My experience spans SOC operations, VAPT engagements, penetration testing workflows, and incident response processes, with a hands-on approach to analyzing logs, investigating alerts, and hardening systems against real-world attack paths.",
  email: "ashitoshghodake0@gmail.com",
  collegeName: "WCS College | Pune",
  github: "https://github.com/ashitoshghodake",
  linkedin: "https://www.linkedin.com/in/ashitosh-ghodake-73a083220/",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    title: "Cyber Security Tools",
    items: ["Snort", "Suricata", "Wazuh", "Zeek", "ELK Stack", "Splunk"],
  },
  {
    title: "VAPT Tools",
    items: ["Burp Suite", "Nmap", "Nessus", "Wireshark", "Metasploit"],
  },
  {
    title: "SOC Skills",
    items: ["Log Analysis", "SIEM Monitoring", "Incident Response", "Threat Hunting", "Alert Triage"],
  },
  {
    title: "Technical Skills",
    items: ["Linux", "Networking", "TCP/IP", "Firewall Configuration"],
  },
];

export const projects = [
  {
    title: "Snort IDS/IPS",
    stack: "Snort | Suricata Rules | Linux",
    description:
      "Installed and configured Snort, tuned configuration files, imported Suricata rules, and validated the IDS/IPS pipeline by generating alerts for suspicious traffic patterns.",
    highlights: [
      "Installed and configured Snort end-to-end",
      "Modified core configuration files for traffic inspection",
      "Imported Suricata rules to expand coverage",
      "Generated and validated suspicious traffic alerts",
    ],
  },
  {
    title: "Suricata IDS/IPS",
    stack: "Suricata | Linux | Custom Detection Rules",
    description:
      "Deployed Suricata on Linux and created custom rules to detect port scans, SQL injection attempts, and brute-force attacks in a monitored environment.",
    highlights: [
      "Deployed Suricata on Linux systems",
      "Created custom port scanning detection rules",
      "Added rules for SQL injection attempts",
      "Built detections for brute-force attack patterns",
    ],
  },
  {
    title: "Wazuh SIEM",
    stack: "Wazuh | Ubuntu | Kibana",
    description:
      "Installed Wazuh on Ubuntu for centralized log monitoring and threat detection, then integrated dashboards for a clear analyst view of events and alerts.",
    highlights: [
      "Installed and configured Wazuh on Ubuntu",
      "Enabled log monitoring and threat detection workflows",
      "Integrated Kibana dashboards for visualization",
      "Improved analyst visibility into security events",
    ],
  },
  {
    title: "Zeek to ELK Pipeline",
    stack: "Zeek | Logstash | Elasticsearch | Kibana",
    description:
      "Built a Zeek-to-ELK pipeline for network telemetry, structured JSON log output, Logstash parsing, Elasticsearch indexing, and Kibana visualization.",
    highlights: [
      "Captured network telemetry with Zeek",
      "Structured output in JSON for downstream processing",
      "Parsed logs with Logstash filters",
      "Indexed and visualized data in Elasticsearch and Kibana",
    ],
  },
  {
    title: "Splunk Log Analysis",
    stack: "Splunk | Ubuntu Server | Monitoring Dashboards",
    description:
      "Deployed Splunk on an Ubuntu server, configured required ports, built real-time dashboards, and created alerts to support threat detection and ongoing monitoring.",
    highlights: [
      "Deployed Splunk on Ubuntu Server",
      "Configured ports 22, 8000, 8089, and 9997",
      "Built real-time monitoring dashboards",
      "Set up alerts for security event detection",
    ],
  },
];

export const experiences = [
  {
    role: "Cybersecurity Analyst Intern",
    organization: "Institute of Advanced Network Technology, Pune",
    duration: "Sep 2024 - Mar 2025",
    points: [
      "Performed VAPT on web applications and network environments.",
      "Used Burp Suite to assess OWASP Top 10-style vulnerabilities.",
      "Supported Red Team simulations and offensive security exercises.",
      "Monitored networks with Wireshark and Nmap for analysis and validation.",
      "Worked with SOC workflows including alert triage and log analysis.",
    ],
  },
  {
    role: "Cyber Security & Digital Forensics Intern",
    organization: "Cyber Secure India, Remote",
    duration: "Dec 2023 - March 2024",
    points: [
      "Contributed to penetration testing assignments across varied targets.",
      "Supported digital forensics investigations and evidence-oriented workflows.",
      "Assisted with cyber threat intelligence analysis and reporting.",
      "Learned compliance and data protection fundamentals for secure operations.",
    ],
  },
];

export const coursework = ["Networking", "Cyber Security Basics", "Operating Systems"];

export const certifications = [
  "Practical Help Desk | TCM Security | March 2026",
  "Cyber Security Specialist | Institute of Advance Network Technology | April 2025",
];
