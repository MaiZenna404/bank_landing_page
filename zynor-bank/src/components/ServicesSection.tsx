import type { JSX } from "react";

{
  /* Data Bank Services */
}

interface BankService {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: BankService[] = [
  {
    icon: <i className="pi pi-wallet text-3xl text-green-700" />,
    title: "No Hidden Fees",
    description:
      "Transparent banking with no monthly fees, minimum balances, or overdraft charges.",
  },
  {
    icon: <i className="pi pi-money-bill text-3xl text-[#00e9ae]" />,
    title: "Bank-Grade Security",
    description:
      "End-to-end encryption and multi-factor authentication keeps your money safe.",
  },
  {
    icon: <i className="pi pi-shield text-3xl text-[#00d5e9]" />,
    title: "High-Yield Returns",
    description:
      "Earn up to 4.5% APY on your deposits, 50x the national average.",
  },
  {
    icon: <i className="pi pi-credit-card text-3xl text-green-700" />,
    title: "Smart Cards",
    description:
      "Physical and virtual cards with instant notifications and spending controls.",
  },
  {
    icon: <i className="pi pi-mobile text-3xl text-[#00e9ae]" />,
    title: "Mobile Banking",
    description:
      "Manage your money on the go with our user-friendly mobile app.",
  },
  {
    icon: <i className="pi pi-dollar text-3xl text-[#00d5e9]" />,
    title: "Instant Transfers",
    description:
      "Send and receive money instantly with zero fees to any bank account.",
  },
];

export function ServicesSection() {
  return (
    <>
      <section id="features" className="section pb-10 pt-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-4">
              Key Features
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Banking that works{" "}
              <span className="text-primary-600">for you</span>
            </h2>
            <p className="text-emerald-600 text-lg max-w-2xl mx-auto">
              Experience banking reimagined with features designed to help you
              manage, save, and grow your money effortlessly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow-emerald-700 hover:shadow-md transition-shadow border-gray-400/25 border-1 flex flex-col"
              >
                <div className="p-3 mb-4 inline-flex">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p
                  className={`pt-2 
                  ${
                    feature.title === "Mobile Banking" ||
                    feature.title === "Bank-Grade Security"
                      ? "text-[#00e9ae]"
                      : feature.title === "High-Yield Returns" ||
                        feature.title === "Instant Transfers"
                      ? "text-[#00d5e9]"
                      : "text-green-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
