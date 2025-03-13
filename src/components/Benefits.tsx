
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import AnimatedNumber from './ui/AnimatedNumber';
import { Clock, FileCheck, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const [sectionRef, isSectionInView] = useInView<HTMLElement>({ threshold: 0.1 });
  
  const benefits = [
    {
      icon: <Clock size={28} className="text-primary" />,
      title: "Save Time",
      description: "Automate repetitive tasks and reduce manual data entry, freeing your team to focus on growing your business.",
      stats: [
        { value: 50, suffix: "%", text: "Reduction in processing time" },
        { value: 20, suffix: "", text: "Hours saved per week" }
      ]
    },
    {
      icon: <FileCheck size={28} className="text-primary" />,
      title: "Reduce Errors",
      description: "Eliminate manual calculation errors and ensure accurate commission payments and record-keeping.",
      stats: [
        { value: 99, suffix: "%", text: "Data accuracy" },
        { value: 95, suffix: "%", text: "Reduction in payment disputes" }
      ]
    },
    {
      icon: <ShieldCheck size={28} className="text-primary" />,
      title: "Simplify Compliance",
      description: "Maintain detailed audit trails and ensure regulatory compliance with automated record-keeping.",
      stats: [
        { value: 100, suffix: "%", text: "Audit-ready documentation" },
        { value: 30, suffix: "%", text: "Less time spent on compliance tasks" }
      ]
    }
  ];

  return (
    <section 
      id="benefits" 
      className="section bg-gray-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits That Make a Difference
            </h2>
            <p className="text-lg text-gray-600">
              Our system transforms your mortgage operations with measurable improvements.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const [benefitRef, isBenefitInView] = useInView<HTMLDivElement>({ threshold: 0.1 });
            
            return (
              <div 
                key={index}
                ref={benefitRef}
                className={`feature-card transition-all duration-700 transform ${
                  isBenefitInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-8">{benefit.description}</p>
                
                <div className="space-y-6">
                  {benefit.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="flex flex-col">
                      <div className="flex items-end mb-1">
                        <div className="text-3xl font-bold text-primary">
                          {isBenefitInView && (
                            <AnimatedNumber
                              value={stat.value}
                              duration={2000}
                              formatter={(val) => `${val}${stat.suffix}`}
                            />
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">{stat.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
