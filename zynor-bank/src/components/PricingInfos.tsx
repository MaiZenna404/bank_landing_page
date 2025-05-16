import { Button } from "@/components/ui/button";

export function PricingInfos() {
    // Pricings data
    interface pricing { 
        name: string;
        price: string;
        description: string;
        features: string[];
        cta: string;
        popular: boolean;
    }

    const pricingpricings: pricing[] = [
      {
        name: "Standard",
        price: "0",
        description: "Everything you need to start managing your finances",
        features: [
          "No monthly fees",
          "Free debit card",
          "Up to 2.5% APY on savings",
          "Mobile banking app",
          "Fee-free ATM network",
          "24/7 customer support",
        ],
        cta: "Get Started",
        popular: false,
      },
      {
        name: "Premium",
        price: "9.99",
        description:
          "Advanced features for those who want more from their banking",
        features: [
          "All Standard features",
          "Up to 4.5% APY on savings",
          "Priority customer support",
          "Advanced budgeting tools",
          "Multiple virtual cards",
          "1% cashback on purchases",
          "No foreign transaction fees",
          "Investment accounts",
        ],
        cta: "Get Premium",
        popular: true,
      },
      {
        name: "Business",
        price: "29.99",
        description:
          "Complete financial solution for small businesses and startups",
        features: [
          "All Premium features",
          "Multiple business accounts",
          "Team member cards",
          "Expense management tools",
          "Accounting software integration",
          "Vendor payment system",
          "Business loans and credit",
          "Dedicated account manager",
        ],
        cta: "Contact Sales",
        popular: false,
      },
    ];

    return (
      <section id="pricing" className="section mb-5 mt-5">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-green-400 text-lg max-w-2xl mx-auto">
              Choose the pricing that fits your needs. No hidden fees, no
              surprises.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingpricings.map((pricing, index) => (
              <div
                key={index}
                className={`bg-black/15 rounded-2xl overflow-hidden shadow-lg border border-emerald-400/50 transition-all ${
                  pricing.popular
                    ? "shadow-lg shadow-green-700 md:pb-4"
                    : ""
                }`}
              >
                {pricing.popular && (
                  <div className="bg-emerald-500 text-white py-2 px-4 text-center text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pricing.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${pricing.price}</span>
                    <span className="text-white">/month</span>
                  </div>
                  <p className="text-white mb-8">{pricing.description}</p>

                  <Button
                    className={`w-full mb-8 ${
                      pricing.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-emerald-700 hover:bg-emerald-800"
                    }`}
                  >
                    {pricing.cta}
                  </Button>

                  <div className="space-y-4">
                    {pricing.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <i className="pi pi-check-circle h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}