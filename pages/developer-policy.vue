<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6 font-mono">
            Developer Policy
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Guidelines and requirements for developers building with Metristack APIs
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
          
          <h2>Overview</h2>
          <p>
            This Developer Policy governs your use of Metristack's APIs, developer tools, and platform services. 
            By accessing or using our developer services, you agree to comply with these policies and all 
            applicable laws and regulations.
          </p>
          
          <h2>Developer Account Requirements</h2>
          
          <h3>Account Creation</h3>
          <ul>
            <li>Provide accurate and complete registration information</li>
            <li>Maintain up-to-date contact and billing information</li>
            <li>Use a valid business email address for verification</li>
            <li>Complete identity verification as required</li>
            <li>Accept responsibility for all activity under your account</li>
          </ul>
          
          <h3>Account Security</h3>
          <ul>
            <li><strong>API Keys:</strong> Keep API keys secure and never share them publicly</li>
            <li><strong>Access Control:</strong> Implement proper authentication in your applications</li>
            <li><strong>Monitoring:</strong> Monitor your API usage and report suspicious activity</li>
            <li><strong>Rotation:</strong> Regularly rotate API keys and access tokens</li>
          </ul>
          
          <h2>Acceptable Use</h2>
          
          <h3>Permitted Uses</h3>
          <ul>
            <li>Build legitimate business applications using retail data</li>
            <li>Create analytics and reporting tools for merchants</li>
            <li>Develop inventory management and optimization solutions</li>
            <li>Build customer relationship management systems</li>
            <li>Create financial services and lending applications</li>
            <li>Develop marketing automation and personalization tools</li>
          </ul>
          
          <h3>Prohibited Uses</h3>
          <ul>
            <li><strong>Illegal Activities:</strong> Any unlawful or fraudulent purposes</li>
            <li><strong>Data Scraping:</strong> Automated collection beyond API limits</li>
            <li><strong>Reverse Engineering:</strong> Attempting to reverse engineer our services</li>
            <li><strong>Competition:</strong> Building direct competitors to Metristack</li>
            <li><strong>Spam/Abuse:</strong> Sending unsolicited communications or abusing systems</li>
            <li><strong>Data Misuse:</strong> Using data for unauthorized or harmful purposes</li>
            <li><strong>Security Testing:</strong> Unauthorized penetration testing or vulnerability scanning</li>
          </ul>
          
          <h2>API Usage Guidelines</h2>
          
          <h3>Rate Limits and Quotas</h3>
          <ul>
            <li><strong>Respect Rate Limits:</strong> Stay within published API rate limits</li>
            <li><strong>Efficient Usage:</strong> Implement caching and optimize API calls</li>
            <li><strong>Bulk Operations:</strong> Use batch endpoints for multiple operations</li>
            <li><strong>Error Handling:</strong> Implement proper error handling and retry logic</li>
          </ul>
          
          <h3>Data Handling Requirements</h3>
          <ul>
            <li><strong>Data Accuracy:</strong> Use data responsibly and maintain accuracy</li>
            <li><strong>Real-time Updates:</strong> Process webhooks and real-time data appropriately</li>
            <li><strong>Data Retention:</strong> Follow data retention guidelines and user preferences</li>
            <li><strong>Data Deletion:</strong> Implement data deletion upon user request</li>
          </ul>
          
          <h2>Application Requirements</h2>
          
          <h3>User Experience Standards</h3>
          <ul>
            <li>Provide clear and accurate descriptions of your application</li>
            <li>Implement intuitive user interfaces and workflows</li>
            <li>Ensure responsive design across devices and platforms</li>
            <li>Maintain high performance and reliability standards</li>
            <li>Provide adequate user support and documentation</li>
          </ul>
          
          <h3>Security Requirements</h3>
          <ul>
            <li><strong>HTTPS Only:</strong> Use HTTPS for all communications</li>
            <li><strong>Data Encryption:</strong> Encrypt sensitive data at rest and in transit</li>
            <li><strong>Access Controls:</strong> Implement proper user authentication and authorization</li>
            <li><strong>Vulnerability Management:</strong> Regularly scan and patch security vulnerabilities</li>
            <li><strong>Incident Response:</strong> Have procedures for handling security incidents</li>
          </ul>
          
          <h2>Data Privacy and Protection</h2>
          
          <h3>Privacy Compliance</h3>
          <ul>
            <li><strong>Privacy Policies:</strong> Maintain clear, comprehensive privacy policies</li>
            <li><strong>User Consent:</strong> Obtain proper consent for data collection and processing</li>
            <li><strong>GDPR Compliance:</strong> Comply with GDPR requirements where applicable</li>
            <li><strong>CCPA Compliance:</strong> Comply with CCPA requirements for California users</li>
            <li><strong>Data Rights:</strong> Honor user requests for data access, deletion, and portability</li>
          </ul>
          
          <h3>Data Minimization</h3>
          <ul>
            <li>Only request access to data necessary for your application</li>
            <li>Implement data retention policies aligned with business needs</li>
            <li>Delete or anonymize data when no longer needed</li>
            <li>Provide users with control over their data</li>
          </ul>
          
          <h2>Compliance and Monitoring</h2>
          
          <h3>Application Review</h3>
          <ul>
            <li>Metristack may review applications for policy compliance</li>
            <li>Provide access to applications and documentation upon request</li>
            <li>Implement changes requested during compliance reviews</li>
            <li>Maintain compliance throughout your application lifecycle</li>
          </ul>
          
          <h3>Monitoring and Reporting</h3>
          <ul>
            <li><strong>Usage Monitoring:</strong> We monitor API usage for compliance and abuse</li>
            <li><strong>Reporting Violations:</strong> Report suspected policy violations to our team</li>
            <li><strong>Incident Reporting:</strong> Report security incidents within 24 hours</li>
            <li><strong>Transparency:</strong> Provide information about your data practices</li>
          </ul>
          
          <h2>Platform Integration</h2>
          
          <h3>OAuth and Authentication</h3>
          <ul>
            <li>Implement OAuth flows correctly and securely</li>
            <li>Store tokens securely and follow token refresh procedures</li>
            <li>Respect user authorization and permission scopes</li>
            <li>Handle authentication errors gracefully</li>
          </ul>
          
          <h3>Webhook Handling</h3>
          <ul>
            <li>Implement webhook endpoints with proper security measures</li>
            <li>Validate webhook signatures and payloads</li>
            <li>Handle webhook delivery failures appropriately</li>
            <li>Process webhooks in a timely manner</li>
          </ul>
          
          <h2>Commercial Terms</h2>
          
          <h3>Billing and Payment</h3>
          <ul>
            <li>Pay all fees according to your service plan</li>
            <li>Maintain valid payment methods on file</li>
            <li>Monitor usage to avoid unexpected charges</li>
            <li>Contact support for billing questions or disputes</li>
          </ul>
          
          <h3>Service Level Agreements</h3>
          <ul>
            <li>Understand the SLA terms for your service tier</li>
            <li>Plan for maintenance windows and scheduled downtime</li>
            <li>Report service issues through proper channels</li>
            <li>Follow escalation procedures for critical issues</li>
          </ul>
          
          <h2>Intellectual Property</h2>
          
          <h3>Your Content and Applications</h3>
          <ul>
            <li>You retain ownership of your applications and content</li>
            <li>You grant Metristack necessary licenses to provide services</li>
            <li>Ensure you have rights to all content in your applications</li>
            <li>Respect third-party intellectual property rights</li>
          </ul>
          
          <h3>Metristack IP</h3>
          <ul>
            <li>Metristack retains all rights to our platform and services</li>
            <li>You may not use our trademarks without permission</li>
            <li>Follow brand guidelines when referencing Metristack</li>
            <li>Do not copy or imitate our platform design or functionality</li>
          </ul>
          
          <h2>Violation and Enforcement</h2>
          
          <h3>Policy Violations</h3>
          <p>Violations of this policy may result in:</p>
          <ul>
            <li>Warning notifications and required corrective actions</li>
            <li>Temporary suspension of API access</li>
            <li>Permanent termination of developer account</li>
            <li>Legal action for severe violations</li>
          </ul>
          
          <h3>Appeal Process</h3>
          <ul>
            <li>You may appeal enforcement actions through our support system</li>
            <li>Provide detailed information about corrective measures</li>
            <li>Work with our team to resolve policy violations</li>
            <li>Appeals are reviewed within 5 business days</li>
          </ul>
          
          <h2>Support and Resources</h2>
          
          <h3>Developer Support</h3>
          <ul>
            <li><strong>Documentation:</strong> Comprehensive API documentation and guides</li>
            <li><strong>Code Examples:</strong> Sample code and implementation examples</li>
            <li><strong>Community:</strong> Developer community forums and discussions</li>
            <li><strong>Direct Support:</strong> Technical support through multiple channels</li>
          </ul>
          
          <h3>Best Practices Resources</h3>
          <ul>
            <li>Security implementation guides</li>
            <li>Privacy compliance checklists</li>
            <li>Performance optimization tips</li>
            <li>User experience recommendations</li>
          </ul>
          
          <h2>Policy Updates</h2>
          <p>
            We may update this Developer Policy periodically. Material changes will be communicated through:
          </p>
          <ul>
            <li>Email notifications to registered developers</li>
            <li>Prominent notices in the developer dashboard</li>
            <li>Documentation updates and changelogs</li>
            <li>Developer community announcements</li>
          </ul>
          
          <h2>Contact Information</h2>
          <p>
            For developer policy questions or support:
          </p>
          <ul>
            <li><strong>Developer Support:</strong> <a href="mailto:developers@metristack.com">developers@metristack.com</a></li>
            <li><strong>Policy Questions:</strong> <a href="mailto:policy@metristack.com">policy@metristack.com</a></li>
            <li><strong>Security Issues:</strong> <a href="mailto:security@metristack.com">security@metristack.com</a></li>
            <li><strong>Compliance:</strong> <a href="mailto:compliance@metristack.com">compliance@metristack.com</a></li>
          </ul>
          
          <div class="bg-green-50 rounded-lg p-6 mt-12">
            <h3 class="text-lg font-semibold text-green-900 mb-3">Developer Success</h3>
            <p class="text-green-800 mb-4">
              Our developer success team is here to help you build amazing applications with Metristack. 
              We provide guidance on best practices, policy compliance, and technical implementation.
            </p>
            <p class="text-green-800">
              <strong>Get Started:</strong> <a href="mailto:success@metristack.com" class="text-green-600 underline">success@metristack.com</a>
            </p>
          </div>
          
        </div>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for Developer Policy page
useHead({
  title: 'Developer Policy | Metristack',
  meta: [
    { name: 'description', content: 'Guidelines and requirements for developers building applications with Metristack APIs and platform services.' },
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
  font-family: 'Azeret Mono', monospace;
}

.prose h3 {
  color: #1f2937;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Azeret Mono', monospace;
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