
import { useRef } from 'react';
import { useInView } from '@/hooks/useInView';
import { 
  FileText, 
  Percent, 
  Users, 
  Shield,
  ArrowRight,
  Lock,
  DollarSign
} from 'lucide-react';

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const Feature = ({ icon, title, description, delay }: FeatureProps) => {
  const [ref, isInView] = useInView<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`feature-card transition-all duration-700 ${
        isInView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const [sectionRef, isSectionInView] = useInView<HTMLElement>({ threshold: 0.1 });
  
  const features = [
    {
      icon: <FileText size={28} className="text-primary" />,
      title: "Funder File Processing",
      description: "Automatically extract and process loan and commission details from Excel, CSV, and PDF files."
    },
    {
      icon: <Percent size={28} className="text-primary" />,
      title: "Commission Calculation",
      description: "Calculate broker commissions based on trail and upfront split percentages with precision."
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: "Lender Management",
      description: "Efficiently manage lenders and payers in one centralized system with detailed records."
    },
    {
      icon: <FileText size={28} className="text-primary" />,
      title: "Invoice Generation",
      description: "Generate monthly RCTI invoices for brokers automatically with detailed breakdowns."
    },
    {
      icon: <ArrowRight size={28} className="text-primary" />,
      title: "ABA File Generation",
      description: "Create ABA files for direct file entry to streamline payment processing."
    },
    {
      icon: <Lock size={28} className="text-primary" />,
      title: "Role-Based Access",
      description: "Secure your system with role-based authentication and permissions."
    }
  ];

  return (
    <section 
      id="features" 
      className="section bg-gray-50 py-20 md:py-28"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Features for Mortgage Management
            </h2>
            <p className="text-lg text-gray-600">
              Our system brings together all the tools you need to streamline your mortgage operations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
