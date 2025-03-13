
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [sectionRef, isSectionInView] = useInView<HTMLElement>({ threshold: 0.1 });
  
  const steps = [
    {
      number: "01",
      title: "Import Funder Files",
      description: "Upload Excel, CSV, or PDF files containing loan and commission data. Our system automatically extracts all relevant information.",
      image: "https://as1.ftcdn.net/v2/jpg/04/52/69/80/1000_F_452698025_wgttQ1n7B83WrYPYvxvj5k3DXtR7ZfzL.jpg"
    },
    {
      number: "02",
      title: "Process & Calculate",
      description: "The system processes the data, calculates commissions, and assigns loans to the appropriate brokers based on split percentages.",
      image: "https://as2.ftcdn.net/v2/jpg/01/67/30/25/1000_F_167302503_qMpkg3LcSVmZCpA2XZjnNEpzdnZsXRDe.jpg"
    },
    {
      number: "03",
      title: "Generate & Distribute",
      description: "Generate invoices and ABA files with a single click. Distribute documents to brokers and process payments efficiently.",
      image: "https://as1.ftcdn.net/v2/jpg/04/94/08/34/1000_F_494083457_5osBvVZMQxb23v9clyGCZ8Tj3O4d6vIW.jpg"
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="section relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-lg text-gray-600">
              Our streamlined process makes mortgage management simple and efficient.
            </p>
          </div>
        </div>
        
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const [stepRef, isStepInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                ref={stepRef}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div 
                  className={`transition-all duration-1000 transform ${
                    isStepInView 
                      ? 'opacity-100 translate-x-0' 
                      : isEven 
                        ? 'opacity-0 -translate-x-20' 
                        : 'opacity-0 translate-x-20'
                  }`}
                >
                  <div className="bg-primary/10 inline-block px-3 py-1 rounded-full text-primary font-medium text-sm mb-4">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="hidden md:block">
                      <ArrowRight 
                        size={24} 
                        className={`text-primary transform ${isEven ? '' : 'rotate-180'}`}
                      />
                    </div>
                  )}
                </div>
                
                <div 
                  className={`transition-all duration-1000 delay-300 transform ${
                    isStepInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-20'
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-70"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
