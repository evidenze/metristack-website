<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            Security
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            How Metristack protects your data with enterprise-grade security measures
          </p>
          <div class="mt-6 text-sm text-gray-500">
            Last updated: September 13, 2025
          </div>
        </div>
      </div>
    </section>
    
    <!-- Content -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg max-w-none">
          
          <h2>Security Overview</h2>
          <p>
            At Metristack, security is fundamental to everything we do. We implement comprehensive security 
            measures to protect your data, applications, and business operations. Our security program is 
            built on industry best practices and continuously evolves to address emerging threats.
          </p>
          
          <div class="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 class="text-lg font-semibold text-blue-900 mb-3">Security Certifications</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                SOC 2 Type II Certified
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                ISO 27001 Certified
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                GDPR Compliant
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                PCI DSS Level 1
              </div>
            </div>
          </div>
          
          <h2>Data Protection</h2>
          
          <h3>Encryption Standards</h3>
          <ul>
            <li><strong>Data at Rest:</strong> AES-256 encryption for all stored data</li>
            <li><strong>Data in Transit:</strong> TLS 1.3 encryption for all API communications</li>
            <li><strong>Database Encryption:</strong> Transparent data encryption (TDE) for databases</li>
            <li><strong>Key Management:</strong> Hardware Security Modules (HSMs) for key storage</li>
            <li><strong>Field-Level Encryption:</strong> Additional encryption for sensitive data fields</li>
          </ul>
          
          <h3>Data Classification and Handling</h3>
          <ul>
            <li><strong>Data Classification:</strong> Systematic classification of all data types</li>
            <li><strong>Data Loss Prevention:</strong> DLP tools to prevent unauthorized data exfiltration</li>
            <li><strong>Data Masking:</strong> Sensitive data masking in non-production environments</li>
            <li><strong>Data Retention:</strong> Automated data retention and secure deletion policies</li>
            <li><strong>Backup Encryption:</strong> All backups are encrypted and regularly tested</li>
          </ul>
          
          <h2>Infrastructure Security</h2>
          
          <h3>Cloud Security</h3>
          <ul>
            <li><strong>Multi-Cloud Architecture:</strong> Distributed across multiple secure cloud regions</li>
            <li><strong>Network Segmentation:</strong> Isolated network segments with strict access controls</li>
            <li><strong>Virtual Private Clouds:</strong> VPCs with private subnets and secure gateways</li>
            <li><strong>DDoS Protection:</strong> Advanced DDoS mitigation and traffic filtering</li>
            <li><strong>Load Balancing:</strong> Distributed load balancing with health monitoring</li>
          </ul>
          
          <h3>System Hardening</h3>
          <ul>
            <li><strong>Server Hardening:</strong> CIS benchmarks applied to all systems</li>
            <li><strong>Container Security:</strong> Secure container images and runtime protection</li>
            <li><strong>Patch Management:</strong> Automated patching with zero-downtime deployments</li>
            <li><strong>Vulnerability Scanning:</strong> Continuous vulnerability assessment and remediation</li>
            <li><strong>Configuration Management:</strong> Infrastructure as code with security baselines</li>
          </ul>
          
          <h2>Access Controls</h2>
          
          <h3>Identity and Access Management</h3>
          <ul>
            <li><strong>Multi-Factor Authentication:</strong> MFA required for all administrative access</li>
            <li><strong>Role-Based Access Control:</strong> Principle of least privilege access</li>
            <li><strong>Single Sign-On:</strong> Centralized authentication with audit trails</li>
            <li><strong>Privileged Access Management:</strong> Just-in-time access for privileged operations</li>
            <li><strong>Regular Access Reviews:</strong> Quarterly access certification and cleanup</li>
          </ul>
          
          <h3>API Security</h3>
          <ul>
            <li><strong>OAuth 2.0 / OpenID Connect:</strong> Industry-standard authentication protocols</li>
            <li><strong>API Keys Management:</strong> Secure key generation, rotation, and revocation</li>
            <li><strong>Rate Limiting:</strong> Intelligent rate limiting to prevent abuse</li>
            <li><strong>API Gateway:</strong> Centralized API management with security policies</li>
            <li><strong>Request Validation:</strong> Comprehensive input validation and sanitization</li>
          </ul>
          
          <h2>Monitoring and Detection</h2>
          
          <h3>Security Information and Event Management (SIEM)</h3>
          <ul>
            <li><strong>24/7 Monitoring:</strong> Continuous monitoring of all systems and applications</li>
            <li><strong>Real-time Alerts:</strong> Immediate alerts for suspicious activities</li>
            <li><strong>Log Aggregation:</strong> Centralized logging with long-term retention</li>
            <li><strong>Threat Intelligence:</strong> Integration with global threat intelligence feeds</li>
            <li><strong>Behavioral Analytics:</strong> Machine learning-based anomaly detection</li>
          </ul>
          
          <h3>Incident Detection and Response</h3>
          <ul>
            <li><strong>Security Operations Center:</strong> Dedicated SOC team with 24/7 coverage</li>
            <li><strong>Automated Response:</strong> Automated containment and mitigation procedures</li>
            <li><strong>Incident Classification:</strong> Structured incident severity and escalation matrix</li>
            <li><strong>Forensic Capabilities:</strong> Digital forensic tools and procedures</li>
            <li><strong>Recovery Procedures:</strong> Documented disaster recovery and business continuity plans</li>
          </ul>
          
          <h2>Application Security</h2>
          
          <h3>Secure Development Lifecycle</h3>
          <ul>
            <li><strong>Security by Design:</strong> Security considerations integrated from project inception</li>
            <li><strong>Threat Modeling:</strong> Systematic threat analysis for all applications</li>
            <li><strong>Secure Coding Standards:</strong> OWASP-compliant coding practices</li>
            <li><strong>Code Review:</strong> Mandatory security-focused code reviews</li>
            <li><strong>Security Training:</strong> Regular security training for all developers</li>
          </ul>
          
          <h3>Application Testing</h3>
          <ul>
            <li><strong>Static Application Security Testing:</strong> SAST tools integrated into CI/CD</li>
            <li><strong>Dynamic Application Security Testing:</strong> DAST scanning of running applications</li>
            <li><strong>Interactive Application Security Testing:</strong> IAST for real-time vulnerability detection</li>
            <li><strong>Penetration Testing:</strong> Regular third-party penetration testing</li>
            <li><strong>Bug Bounty Program:</strong> Coordinated disclosure through security researchers</li>
          </ul>
          
          <h2>Third-Party Security</h2>
          
          <h3>Vendor Risk Management</h3>
          <ul>
            <li><strong>Security Assessments:</strong> Comprehensive security evaluation of all vendors</li>
            <li><strong>Due Diligence:</strong> Continuous monitoring of vendor security posture</li>
            <li><strong>Contract Requirements:</strong> Security requirements in all vendor contracts</li>
            <li><strong>Supply Chain Security:</strong> Assessment of entire supply chain risks</li>
            <li><strong>Incident Coordination:</strong> Joint incident response procedures with key vendors</li>
          </ul>
          
          <h2>Compliance and Governance</h2>
          
          <h3>Regulatory Compliance</h3>
          <ul>
            <li><strong>GDPR:</strong> Full compliance with European data protection regulations</li>
            <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
            <li><strong>SOX:</strong> Sarbanes-Oxley Act compliance for financial controls</li>
            <li><strong>HIPAA:</strong> Healthcare data protection where applicable</li>
            <li><strong>Regional Compliance:</strong> Local data protection laws in operational regions</li>
          </ul>
          
          <h3>Security Governance</h3>
          <ul>
            <li><strong>Security Committee:</strong> Executive-level security oversight and governance</li>
            <li><strong>Risk Assessments:</strong> Regular comprehensive security risk assessments</li>
            <li><strong>Policy Management:</strong> Comprehensive security policies and procedures</li>
            <li><strong>Audit Programs:</strong> Internal and external security audits</li>
            <li><strong>Metrics and Reporting:</strong> Security metrics and executive reporting</li>
          </ul>
          
          <h2>Business Continuity</h2>
          
          <h3>Disaster Recovery</h3>
          <ul>
            <li><strong>Recovery Time Objective:</strong> RTO of 4 hours for critical services</li>
            <li><strong>Recovery Point Objective:</strong> RPO of 15 minutes for data recovery</li>
            <li><strong>Geographic Redundancy:</strong> Multi-region deployment with failover capabilities</li>
            <li><strong>Backup Strategy:</strong> Automated, encrypted backups with regular testing</li>
            <li><strong>Disaster Recovery Testing:</strong> Quarterly DR exercises and validation</li>
          </ul>
          
          <h3>High Availability</h3>
          <ul>
            <li><strong>Service Level Agreement:</strong> 99.9% uptime commitment</li>
            <li><strong>Redundant Architecture:</strong> No single points of failure in critical systems</li>
            <li><strong>Load Distribution:</strong> Intelligent traffic distribution across regions</li>
            <li><strong>Health Monitoring:</strong> Continuous health checks and automated remediation</li>
            <li><strong>Capacity Planning:</strong> Proactive capacity management and scaling</li>
          </ul>
          
          <h2>Customer Security</h2>
          
          <h3>Your Responsibilities</h3>
          <ul>
            <li><strong>Account Security:</strong> Secure your account credentials and enable MFA</li>
            <li><strong>API Key Management:</strong> Keep API keys secure and rotate them regularly</li>
            <li><strong>Application Security:</strong> Implement security best practices in your applications</li>
            <li><strong>Data Handling:</strong> Follow data protection requirements for end-user data</li>
            <li><strong>Incident Reporting:</strong> Report security incidents to our security team</li>
          </ul>
          
          <h3>Security Resources</h3>
          <ul>
            <li><strong>Security Documentation:</strong> Comprehensive security implementation guides</li>
            <li><strong>Best Practices:</strong> Security best practices and recommendations</li>
            <li><strong>Security Training:</strong> Educational resources for secure development</li>
            <li><strong>Security Tools:</strong> Recommended security tools and integrations</li>
            <li><strong>Expert Consultation:</strong> Access to security experts for guidance</li>
          </ul>
          
          <h2>Incident Response</h2>
          
          <h3>Our Response Process</h3>
          <ul>
            <li><strong>Detection:</strong> Rapid detection through automated monitoring and alerts</li>
            <li><strong>Assessment:</strong> Quick assessment of incident scope and impact</li>
            <li><strong>Containment:</strong> Immediate containment to prevent further damage</li>
            <li><strong>Investigation:</strong> Thorough investigation to determine root cause</li>
            <li><strong>Recovery:</strong> Secure recovery and restoration of affected systems</li>
            <li><strong>Communication:</strong> Transparent communication with affected customers</li>
          </ul>
          
          <h3>Customer Notification</h3>
          <ul>
            <li>Security incidents affecting customer data are reported within 72 hours</li>
            <li>Regular updates provided throughout incident resolution</li>
            <li>Post-incident reports with lessons learned and improvements</li>
            <li>Multiple communication channels for critical notifications</li>
          </ul>
          
          <h2>Reporting Security Issues</h2>
          
          <h3>Responsible Disclosure</h3>
          <p>
            We welcome security researchers and encourage responsible disclosure of security vulnerabilities. 
            If you discover a security issue:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:security@metristack.com">security@metristack.com</a></li>
            <li><strong>PGP Key:</strong> Available for encrypted communication</li>
            <li><strong>Bug Bounty:</strong> Eligible issues may qualify for bug bounty rewards</li>
            <li><strong>Coordination:</strong> We'll work with you to understand and resolve the issue</li>
          </ul>
          
          <h3>What to Include</h3>
          <ul>
            <li>Detailed description of the vulnerability</li>
            <li>Steps to reproduce the issue</li>
            <li>Potential impact and risk assessment</li>
            <li>Your contact information for follow-up</li>
            <li>Any supporting materials (screenshots, code, etc.)</li>
          </ul>
          
          <h2>Contact Information</h2>
          <p>
            For security-related questions or concerns:
          </p>
          <ul>
            <li><strong>Security Team:</strong> <a href="mailto:security@metristack.com">security@metristack.com</a></li>
            <li><strong>Chief Security Officer:</strong> <a href="mailto:cso@metristack.com">cso@metristack.com</a></li>
            <li><strong>Security Emergency:</strong> +1-800-[SECURITY-HOTLINE]</li>
            <li><strong>Security Portal:</strong> security.metristack.com</li>
          </ul>
          
          <div class="bg-red-50 rounded-lg p-6 mt-12">
            <h3 class="text-lg font-semibold text-red-900 mb-3">Security Emergency</h3>
            <p class="text-red-800 mb-4">
              If you've discovered a critical security vulnerability or are experiencing an active 
              security incident, please contact our security team immediately.
            </p>
            <p class="text-red-800">
              <strong>Emergency Contact:</strong> <a href="mailto:security-emergency@metristack.com" class="text-red-600 underline">security-emergency@metristack.com</a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Security page
useHead({
  title: 'Security | Metristack',
  meta: [
    { name: 'description', content: 'Learn about Metristack enterprise-grade security measures, certifications, and data protection practices for our unified retail API platform.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>

<style scoped>
.prose {
  color: #374151;
}

.prose h2 {
  color: #111827;
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 3rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #f3f4f6;
  padding-bottom: 0.5rem;
}

.prose h3 {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose p {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

.prose ul {
  margin-bottom: 1.25rem;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
  line-height: 1.75;
}

.prose a {
  color: #3b82f6;
  text-decoration: underline;
}

.prose a:hover {
  color: #1d4ed8;
}

.prose strong {
  font-weight: 600;
  color: #111827;
}
</style>