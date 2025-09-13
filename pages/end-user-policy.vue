<template>
  <div>
    <HeaderSection />
    
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold text-gray-900 mb-6">
            End-User Policy
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding how Metristack handles end-user data in applications built by our developers
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
            This End-User Policy explains how Metristack handles data when end-users interact with applications 
            built by developers using our API infrastructure. This policy applies to all applications that 
            integrate with Metristack's unified retail data API.
          </p>
          
          <h2>Data Flow and Responsibilities</h2>
          
          <h3>What We Collect</h3>
          <p>When end-users interact with applications using Metristack:</p>
          <ul>
            <li><strong>Authentication Data:</strong> OAuth tokens and session information for platform connections</li>
            <li><strong>Usage Analytics:</strong> API call metrics and performance data</li>
            <li><strong>System Logs:</strong> Technical logs for security and debugging purposes</li>
            <li><strong>Connection Metadata:</strong> Information about connected platforms and data sources</li>
          </ul>
          
          <h3>What We Don't Collect</h3>
          <ul>
            <li>Personal information about end-users (names, addresses, phone numbers)</li>
            <li>Financial data or payment information</li>
            <li>Business-specific content or customer data</li>
            <li>Any data outside the scope of our API services</li>
          </ul>
          
          <h2>Developer Responsibilities</h2>
          
          <h3>Data Handling Requirements</h3>
          <p>Developers using Metristack must:</p>
          <ul>
            <li>Implement their own privacy policies for their applications</li>
            <li>Obtain necessary consents from end-users for data processing</li>
            <li>Ensure secure handling of data retrieved through our API</li>
            <li>Comply with applicable data protection regulations (GDPR, CCPA, etc.)</li>
            <li>Implement appropriate data retention and deletion policies</li>
          </ul>
          
          <h3>User Consent</h3>
          <p>
            Developers must clearly inform end-users about:
          </p>
          <ul>
            <li>What data will be accessed through platform connections</li>
            <li>How the data will be used within the application</li>
            <li>Data sharing practices and third-party integrations</li>
            <li>Users' rights regarding their data</li>
          </ul>
          
          <h2>Data Security</h2>
          
          <h3>Our Security Measures</h3>
          <ul>
            <li><strong>Encryption:</strong> All data in transit and at rest is encrypted</li>
            <li><strong>Access Controls:</strong> Strict authentication and authorization protocols</li>
            <li><strong>Monitoring:</strong> 24/7 security monitoring and incident response</li>
            <li><strong>Compliance:</strong> SOC 2 Type II and ISO 27001 certified infrastructure</li>
          </ul>
          
          <h3>Developer Security Requirements</h3>
          <p>Applications using Metristack must:</p>
          <ul>
            <li>Securely store and transmit API keys and tokens</li>
            <li>Implement proper authentication and session management</li>
            <li>Regularly update dependencies and security patches</li>
            <li>Report security incidents to Metristack within 24 hours</li>
          </ul>
          
          <h2>Data Subject Rights</h2>
          
          <h3>End-User Rights</h3>
          <p>End-users have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request information about data processed by Metristack</li>
            <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request deletion of their data from our systems</li>
            <li><strong>Portability:</strong> Receive their data in a machine-readable format</li>
            <li><strong>Objection:</strong> Object to certain types of data processing</li>
          </ul>
          
          <h3>Exercising Rights</h3>
          <p>
            End-users can exercise their rights by:
          </p>
          <ul>
            <li>Contacting the developer of the application directly</li>
            <li>Reaching out to Metristack at <a href="mailto:privacy@metristack.com">privacy@metristack.com</a></li>
            <li>Disconnecting their accounts from integrated platforms</li>
          </ul>
          
          <h2>Data Retention</h2>
          
          <h3>Our Retention Policy</h3>
          <ul>
            <li><strong>Authentication Data:</strong> Retained for the duration of the connection</li>
            <li><strong>Usage Analytics:</strong> Aggregated and anonymized after 24 months</li>
            <li><strong>System Logs:</strong> Retained for 90 days for security purposes</li>
            <li><strong>Connection Metadata:</strong> Deleted within 30 days of disconnection</li>
          </ul>
          
          <h2>International Transfers</h2>
          <p>
            Metristack operates primarily within secure cloud infrastructure. When data is transferred 
            internationally, we ensure appropriate safeguards are in place, including:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) for EU transfers</li>
            <li>Adequate jurisdiction determinations where applicable</li>
            <li>Additional security measures for high-risk transfers</li>
          </ul>
          
          <h2>Changes to This Policy</h2>
          <p>
            We may update this End-User Policy from time to time. Material changes will be communicated to 
            developers through our developer portal and documentation. Continued use of Metristack services 
            after policy updates constitutes acceptance of the changes.
          </p>
          
          <h2>Contact Information</h2>
          <p>
            For questions about this End-User Policy or data handling practices:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:privacy@metristack.com">privacy@metristack.com</a></li>
            <li><strong>Developer Support:</strong> <a href="mailto:support@metristack.com">support@metristack.com</a></li>
            <li><strong>Security Issues:</strong> <a href="mailto:security@metristack.com">security@metristack.com</a></li>
          </ul>
          
          <div class="bg-gray-50 rounded-lg p-6 mt-12">
            <p class="text-sm text-gray-600 mb-4">
              <strong>Note for Developers:</strong> This policy outlines Metristack's data handling practices. 
              You are responsible for creating and maintaining your own privacy policy for your application that 
              covers how you collect, use, and protect end-user data beyond what Metristack processes.
            </p>
            <p class="text-sm text-gray-600">
              Need help implementing privacy best practices? Contact our developer support team for guidance.
            </p>
          </div>
          
        </div>
      </div>
    </section>
    
    <FooterSection />
  </div>
</template>

<script setup>
// SEO for End-User Policy page
useHead({
  title: 'End-User Policy | Metristack',
  meta: [
    { name: 'description', content: 'Learn how Metristack handles end-user data in applications built by developers using our unified retail API infrastructure.' },
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