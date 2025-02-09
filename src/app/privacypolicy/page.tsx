import React from 'react';

// export default function PrivacyPolicy() {
//   return (
//     <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-start py-6 px-4">
//       {/* Heading */}
//       <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-6">
//         Privacy Policy:
//       </h1>

//       {/* Paragraph */}
//       <p className="text-sm sm:text-base md:text-xl text-justify max-w-3xl">
//         This Privacy Policy outlines how we collect, use, and protect your
//         personal information when you visit or use our website. Your privacy is
//         essential to us, and we are committed to safeguarding any data you
//         share. Please take a moment to review our policy to understand our
//         practices and your rights regarding your personal data.
//       </p>
//     </div>
//   );
// }

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">Privacy Policy</h1>
        
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We collect personal information such as your name, email, and usage data when you use our website.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">Your data is used to improve user experience, provide customer support, and enhance our services.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">3. Third-Party Services</h2>
        <p className="mb-4">We may share your data with trusted third-party services for analytics and security purposes.</p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">4. Contact Us</h2>
        <p className="mb-4">If you have any questions about our privacy policy, please contact us at support@example.com.</p>
      </div>
    </div>
  );
}
