import PageLayout from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/Titles";
import Card from "@/components/ui/Card";
import SectionLayout from "@/components/layout/SectionLayout";

const AboutPage = () => {
  return (
    <PageLayout>
      <SectionLayout>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chhaya Digital Library is committed to providing a peaceful and conducive 
                environment for students and professionals to pursue their educational goals. 
                We believe in fostering a culture of learning and intellectual growth within 
                our community.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the premier digital library in the region, offering modern facilities 
                and resources that empower individuals to achieve their academic and 
                professional aspirations through dedicated study and research.
              </p>
            </div>
          </Card>
        </div>

        <Card className="mb-12">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🎖️</div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                Meet Our Founder
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Dinesh Kumar Yadav
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-6">
                Retired Honorary Captain, Indian Army
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                With a distinguished career serving our nation in the Indian Army, 
                Honorary Captain Dinesh Kumar Yadav has dedicated his post-retirement 
                life to education and community service. His vision of creating a space 
                where knowledge thrives has materialized in the form of Chhaya Digital Library.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Drawing from his military experience of discipline, dedication, and 
                service to others, he ensures that our library maintains the highest 
                standards of organization and provides an environment where every 
                visitor can focus on their studies and achieve their goals.
              </p>
            </div>
          </div>
        </Card>

        <div className="bg-gray-50 rounded-lg p-8">
          <SectionTitle title="Our Values" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                Striving for the highest standards in all our services
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Service</h4>
              <p className="text-gray-600 text-sm">
                Dedicated to serving our community's educational needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💪</div>
              <h4 className="font-semibold text-gray-900 mb-2">Discipline</h4>
              <p className="text-gray-600 text-sm">
                Maintaining order and respect in our learning environment
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌟</div>
              <h4 className="font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">
                Embracing modern technology and methods for better learning
              </p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </PageLayout>
  );
};

export default AboutPage;