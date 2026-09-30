import { Link } from "react-router-dom";
import { X } from "lucide-react";
export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#F8F5F0] py-20 px-6">
      <div className="max-w-5xl mx-auto relative bg-white text-black shadow-lg rounded-lg p-10">

        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#2b0620] text-white flex items-center justify-center hover:bg-[#c9a46b] hover:text-black transition-all duration-300"
        >
          <X size={20} />
        </Link>

        <h1 className="text-4xl font-bold text-center mb-10">
          Privacy Policy
        </h1>

        <p className="mb-8">
          <strong>Effective Date:</strong> July 2026
        </p>

        <p className="mb-8 leading-8">
          Welcome to <strong>Mira Silver Jewellery & Giftings</strong>. We value
          your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>

        <p className="mb-4">
          We may collect the following information when you interact with our
          website:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Shipping/Billing Address</li>
          <li>Order Details</li>
          <li>Messages or Enquiries submitted through our Contact Form</li>
        </ul>

        <p className="mt-5">
          We do not collect sensitive financial information directly through our
          website.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          2. How We Use Your Information
        </h2>

        <p className="mb-4">
          Your information is used to:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Process your enquiries</li>
          <li>Respond to customer support requests</li>
          <li>Provide product information</li>
          <li>Improve our website and services</li>
          <li>Send order updates (if applicable)</li>
          <li>Contact you regarding your purchase or enquiry</li>
        </ul>

        <p className="mt-5">
          We never sell your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          3. Cookies
        </h2>

        <p className="mb-4">
          Our website may use cookies to:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Improve browsing experience</li>
          <li>Remember your preferences</li>
          <li>Analyze website traffic</li>
        </ul>

        <p className="mt-5">
          You can disable cookies anytime from your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          4. Data Protection
        </h2>

        <p className="leading-8">
          We implement appropriate security measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction.
        </p>

        <p className="mt-5 leading-8">
          Although we strive to protect your data, no internet transmission is
          completely secure.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          5. Third-Party Services
        </h2>

        <p className="mb-4">
          Our website may contain links to third-party websites such as:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Instagram</li>
          <li>Facebook</li>
          <li>WhatsApp</li>
          <li>Google Maps</li>
        </ul>

        <p className="mt-5">
          We are not responsible for the privacy practices of these external
          websites.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          6. Sharing of Information
        </h2>

        <p className="mb-4">
          We do not sell, rent, or trade your personal information.
        </p>

        <p className="mb-4">
          Your information may only be shared when:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Required by law</li>
          <li>Necessary to complete your request</li>
          <li>Protecting our legal rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          7. Children's Privacy
        </h2>

        <p className="leading-8">
          Our website is not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          8. Your Rights
        </h2>

        <p className="mb-4">
          You have the right to:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Request access to your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for communication</li>
        </ul>

        <p className="mt-5">
          To make such requests, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          9. Changes to this Privacy Policy
        </h2>

        <p className="leading-8">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the updated effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Contact Us
        </h2>

        <p><strong>Mira Silver Jewellery & Giftings</strong></p>

        <p className="mt-2">📍 Hubli, Karnataka, India</p>

        <p className="mt-2">📞 +91 8296256920</p>

        <p>📞 +91 9535480021</p>

        <p className="mt-2">✉️ info@mirasilver.com</p>

        <div className="border-t mt-10 pt-6">
          <p className="text-gray-600">
            <strong>Last Updated:</strong> July 2026
          </p>
        </div>

      </div>
    </section>
  );
}