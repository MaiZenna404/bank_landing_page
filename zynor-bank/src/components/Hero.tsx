import { Button } from "@/components/ui/button";

export function Hero() {

    interface transactionLog {
        description: string;
        amount: string;
    }

    const transactionLogs: transactionLog[] = [
        { description: "Grocery Store", amount: "-$52.40" },
        { description: "Salary Deposit", amount: "+$2,400.00" },
        { description: "Online Shopping", amount: "-$86.22" },
    ]

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 -right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl opacity-60" />
          <div className="absolute top-20 -left-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                      
            {/* Text Content */}
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-600 font-medium text-sm mb-6">
                Banking Simplified
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Modern Banking for the{" "}
                <span className="text-emerald-500">Digital Age</span>
              </h1>
              <p className="text-lg text-green-400 mb-8 max-w-lg">
                Open a secure bank account in minutes with no hidden fees,
                high-interest returns, and 24/7 customer support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-green-700 hover:bg-green-800 text-base px-8 py-6">
                  Open Your Account
                  <i className="pi pi-arrow-right ml-2" />
                </Button>
                <Button variant="outline" className="text-base px-8 py-6">
                  See How It Works
                </Button>
              </div>
              {/* User Profile Photos */}
              <div className="mt-8 flex items-center">
                              <div className="flex -space-x-2 mr-4">
                                 
                {/* User profile photos à ajouter*/}
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-700"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-white/95">
                  <span className="font-semibold text-white">5,000+</span> users
                  joined this month
                </div>
              </div>
            </div>

            {/* Card Mockup */}
            <div className="animate-fade-in relative">
              <div className="relative text-gray-950 ">
                <div className="absolute -inset-0.5 bg-emerald-400 from-accent-blue to-accent-purple rounded-3xl blur opacity-50 animate-float"></div>
                <div className="relative bg-green-700 rounded-3xl shadow-xl overflow-hidden">
                  <div className="gradient-bg p-6">
                    <div className="flex justify-between items-center mb-10">
                      <span className="text-lg font-semibold text-gray-950">
                        FinanceHub
                      </span>
                      <span className="text-lg font-medium text-gray-950">
                        VISA
                      </span>
                    </div>
                    <div className="mb-6">
                      <div className="text-sm opacity-85 mb-1">Card Number</div>
                      <div className="flex space-x-4 font-mono text-xl">
                        <span>****</span>
                        <span>****</span>
                        <span>****</span>
                        <span>5678</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-sm opacity-85 mb-1">
                          Card Holder
                        </div>
                        <div className="text-md">Jodie Smith</div>
                      </div>
                      <div>
                        <div className="text-sm opacity-80 mb-1">Expires</div>
                        <div>09/28</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-5 transform -rotate-12">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-teal to-accent-green rounded-3xl blur opacity-30"></div>
                  <div className="relative bg-white rounded-3xl shadow-lg p-6 w-72">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-950 font-semibold">
                        Daily Summary
                      </span>
                      <span className="text-xs text-gray-950">Today</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      {transactionLogs.map((transaction, name) => (
                        <div key={name} className="flex justify-between text-sm text-gray-950">
                          <span>{transaction.description}</span>
                          <span
                            className={
                              transaction.amount.startsWith("+")
                                ? "text-green-600"
                                : "text-red-500"
                            }
                          >
                            {transaction.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
