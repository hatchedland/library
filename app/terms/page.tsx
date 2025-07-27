import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";

const TermsPage = () => {
  return (
    <PageLayout>
      <SectionLayout>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Library Rules & Regulations</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Maintain complete silence in the study areas</li>
                <li>Mobile phones must be kept on silent mode</li>
                <li>Food and beverages are not allowed in study areas</li>
                <li>Smoking and tobacco use are strictly prohibited</li>
                <li>Respect other users and maintain decorum</li>
                <li>Follow the designated quiet hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Booking & Payment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Advance booking is required via WhatsApp</li>
                <li>Payment must be made as per the selected plan</li>
                <li>Cancellations must be made at least 2 hours in advance</li>
                <li>No refund for no-shows without prior notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Keep personal belongings secure</li>
                <li>Report any issues to the management immediately</li>
                <li>Use facilities responsibly and avoid damage</li>
                <li>Follow all safety guidelines and instructions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Liability</h2>
              <p className="text-gray-600 mb-4">
                Chhaya Digital Library is not responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Loss or theft of personal belongings</li>
                <li>Any personal injury or health issues</li>
                <li>Interruption of services due to unforeseen circumstances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600">
                The management reserves the right to refuse service or terminate 
                access to any user who violates these terms or disrupts the peaceful 
                environment of the library.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-600">
                For any questions regarding these terms, please contact us via 
                WhatsApp at +91 77809 57407.
              </p>
            </section>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default TermsPage;