import PageLayout from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/Titles";
import Card from "@/components/ui/Card";
import Image from "next/image";
import SectionLayout from "@/components/layout/SectionLayout";

const studySpaceImages = [
  {
    src: "/study-spaces/1.png",
    alt: "Reading Area View 1",
    title: "Reading Area - Main View",
    description:
      "Spacious reading area with comfortable seating and natural lighting",
  },
  {
    src: "/study-spaces/2.png",
    alt: "Reading Area View 2",
    title: "Reading Area - Study Tables",
    description:
      "Individual study tables with proper lighting for focused reading",
  },
];

const StudySpacesPage = () => {
  return (
    <PageLayout>
      <SectionLayout>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Study Spaces
          </h1>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Quiet Environment
              </h4>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Proper Lighting
              </h4>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🪑</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Comfortable Seating
              </h4>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌡️</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Climate Control
              </h4>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🔌</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Power Outlets
              </h4>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📖</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Resource Access
              </h4>
            </div>
          </div>
        </div>
      </SectionLayout>
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle title="Reading Area Gallery" />
        <div className="grid gap-6 md:grid-cols-2">
          {studySpaceImages.map((space, index) => (
            <div key={index} className="space-y-4">
              <div className="relative min-h-[50vh] h-full w-full rounded-lg overflow-hidden">
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default StudySpacesPage;
