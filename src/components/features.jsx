import React from "react";
import { Trophy, BarChart3, Scan, Gift, Users2, GraduationCap, MapPin, ShoppingCart } from "lucide-react";
import SpotlightCard from './spotlightcard';

// Utility function for class merge
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Badge component
const badgeVariants = {
  default: "border-transparent bg-primary text-white hover:bg-primary/80",
  secondary: "border-transparent bg-gray-800 text-gray-200 hover:bg-gray-700",
};

const Badge = ({ className, variant = "default", children, ...props }) => (
  <div
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
      badgeVariants[variant],
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Trophy,
      title: "Reputation Tracker",
      description:
        "Build your eco-reputation with every responsible action. Track your environmental impact and climb the green leaderboard.",
      category: "Gamification",
      color: "from-yellow-400 to-orange-500",
      spotlightColor: "rgba(255, 193, 7, 0.15)",
    },
    {
      icon: BarChart3,
      title: "Waste Dashboard",
      description:
        "Comprehensive analytics of your waste generation, recycling rates, and environmental contributions in real-time.",
      category: "Analytics",
      color: "from-blue-400 to-blue-600",
      spotlightColor: "rgba(59, 130, 246, 0.15)",
    },
    {
      icon: Scan,
      title: "AI Scanner",
      description:
        "Advanced AI-powered waste recognition technology identifies materials and provides proper disposal guidance instantly.",
      category: "AI Technology",
      color: "from-purple-400 to-purple-600",
      spotlightColor: "rgba(147, 51, 234, 0.15)",
    },
    {
      icon: Gift,
      title: "Rewards & Penalties",
      description:
        "Earn points, discounts, and rewards for good practices. Smart penalty system encourages better waste habits.",
      category: "Incentives",
      color: "from-green-400 to-green-600",
      spotlightColor: "rgba(34, 197, 94, 0.15)",
    },
    {
      icon: Users2,
      title: "Community Leaderboard",
      description:
        "Compete with neighbors and friends. See who's making the biggest positive impact in your community.",
      category: "Social",
      color: "from-pink-400 to-rose-500",
      spotlightColor: "rgba(244, 63, 94, 0.15)",
    },
    {
      icon: GraduationCap,
      title: "Worker Training",
      description:
        "Comprehensive training modules for waste management workers with certification and skill development programs.",
      category: "Education",
      color: "from-indigo-400 to-indigo-600",
      spotlightColor: "rgba(99, 102, 241, 0.15)",
    },
    {
      icon: MapPin,
      title: "Vehicle Tracking",
      description:
        "Real-time GPS tracking and route optimization for waste collection vehicles to improve efficiency and reduce costs.",
      category: "Logistics",
      color: "from-teal-400 to-teal-600",
      spotlightColor: "rgba(20, 184, 166, 0.15)",
    },
    {
      icon: ShoppingCart,
      title: "Factory E-commerce",
      description:
        "Integrated marketplace for recycled materials, connecting factories with suppliers for sustainable business operations.",
      category: "Commerce",
      color: "from-orange-400 to-red-500",
      spotlightColor: "rgba(249, 115, 22, 0.15)",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Gamification: "bg-yellow-700 text-yellow-200",
      Analytics: "bg-blue-700 text-blue-200",
      "AI Technology": "bg-purple-700 text-purple-200",
      Incentives: "bg-green-700 text-green-200",
      Social: "bg-pink-700 text-pink-200",
      Education: "bg-indigo-700 text-indigo-200",
      Logistics: "bg-teal-700 text-teal-200",
      Commerce: "bg-orange-700 text-orange-200",
    };
    return colors[category] || "bg-gray-800 text-gray-200";
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
            Powerful Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Smart Waste Management
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Discover the comprehensive features that make SwachhSathi the ultimate solution for sustainable waste management
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <SpotlightCard 
              key={index}
              className="h-full group cursor-pointer"
              spotlightColor={feature.spotlightColor}
            >
              <div className="p-6 h-full flex flex-col">
                {/* Category Badge */}
                <div className="mb-4">
                  <Badge variant="secondary" className={getCategoryColor(feature.category)}>
                    {feature.category}
                  </Badge>
                </div>

                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transform transition-transform duration-300`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 h-1 w-full bg-gradient-to-r from-green-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 rounded-full"></div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mb-6">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Community?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join thousands of users already making a difference with SwachhSathi's innovative features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;