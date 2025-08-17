import { FC } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const TermsPage: FC = () => {
  return (
    <>
      <Navigation />
      <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 py-8 pt-28 sm:pt-32">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          <p className="mb-4">Last updated: August 17, 2025</p>
          <p className="mb-4">Please read these terms and conditions carefully before using Our Service.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Interpretation and Definitions</h2>

          <h3 className="text-xl font-bold mt-4 mb-2">Interpretation</h3>
          <p className="mb-4">The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

          <h3 className="text-xl font-bold mt-4 mb-2">Definitions</h3>
          <p className="mb-4">For the purposes of these Terms and Conditions:</p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to AllergenAI.</li>
            <li><strong>Country</strong> refers to: the country</li>
            <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
            <li><strong>Service</strong> refers to the AllergenAI mobile application.</li>
            <li><strong>Terms and Conditions</strong> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
            <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6 mb-2">Acknowledgment</h2>
          <p className="mb-4">These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>
          <p className="mb-4">Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
          <p className="mb-4">By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>
          <p className="mb-4">You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
          <p className="mb-4">Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Links to Other Websites</h2>
          <p className="mb-4">Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>
          <p className="mb-4">The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
          <p className="mb-4">We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Termination</h2>
          <p className="mb-4">We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
          <p className="mb-4">Upon termination, Your right to use the Service will cease immediately.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Limitation of Liability</h2>
          <p className="mb-4">To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service).</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
          <p className="mb-4">The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Allergen and Ingredient Information Disclaimer</h2>
          <p className="mb-4">AllergenAI is designed to provide high-accuracy allergen and ingredient information to help you make informed decisions. However, it is intended for informational purposes only.</p>
          <p className="mb-4">While we strive for accuracy, product formulations can change, and data may occasionally be incomplete. Therefore, it is essential that you always double-check the product's official packaging and ingredient list before consumption, especially if you have a severe allergy or dietary restriction. Your health and safety are your responsibility.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Governing Law</h2>
          <p className="mb-4">The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Disputes Resolution</h2>
          <p className="mb-4">If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Severability and Waiver</h2>

          <h3 className="text-xl font-bold mt-4 mb-2">Severability</h3>
          <p className="mb-4">If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>

          <h3 className="text-xl font-bold mt-4 mb-2">Waiver</h3>
          <p className="mb-4">Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Changes to These Terms and Conditions</h2>
          <p className="mb-4">We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>
          <p className="mb-4">By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>

          <h2 className="text-2xl font-bold mt-6 mb-2">Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms and Conditions, You can contact us:</p>
          <ul className="list-disc list-inside mb-4">
            <li>By email: support@allergenai.app</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
