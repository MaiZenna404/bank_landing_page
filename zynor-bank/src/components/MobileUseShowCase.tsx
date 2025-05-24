import { Button } from "@/components/ui/button";

export function MobileUseShowCase() {
  // Features data
  type Feature = string[];
  {
    /* Permet de personnaliser un type */
  }
  const features: Feature = [
    "View balances and transactions in real-time",
    "Send money instantly to friends and family",
    "Lock and unlock your cards with a tap",
    "Set and track savings goals automatically",
    "Get instant notifications for all transactions",
    "Categorize expenses with AI-powered insights",
  ];

  return (
    <section className="section overflow-hidden pb-10 pt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Mobile App Mockups */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            {/* Phones Mockup */}
            <div className="relative z-10 flex justify-center">
              {/* Main Phone */}
              <div className="relative w-64 h-auto mr-[-50px] mt-10 z-10">
                <div className="bg-gray-100 rounded-[40px] p-2 shadow-xl border-8 border-black/95">
                  <div className="relative rounded-[32px] overflow-hidden w-full pb-[200%] bg-primary-50">
                    {/* App Screenshot Content */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="p-2">
                        <div className="bg-gray-900 p-4 rounded-2xl mb-3 shadow-sm">
                          <div className="flex items-center mb-3">
                            <div>
                              <div className="text-xs text-white/90 mb-1 flex w-full justify-between items-center">
                                Balance
                                <span className="text-xs text-center bg-green-100 text-green-800 px-2 py-1 ml-2 rounded-full justify-between">
                                  +2.4% today
                                </span>
                              </div>

                              <div className="text-xl font-semibold">
                                12,345.67€
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              className="text-xs h-8 bg-emerald-600 text-white flex-1 rounded-lg"
                              size="sm"
                            >
                              Send
                            </Button>
                            <Button
                              className="text-xs h-8 bg-emerald-700 text-white flex-1 rounded-lg"
                              size="sm"
                            >
                              Request
                            </Button>
                          </div>
                        </div>

                        <div className="text-sm font-medium m-3 text-gray-950">
                          Recent Transactions
                        </div>
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="p-3 rounded-xl mb-2 shadow-sm flex items-center justify-between text-white bg-gray-900/95"
                          >
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-primary-100 mr-3"></div>
                              <div>
                                <div className="text-xs font-medium">
                                  Netflix
                                </div>
                                <div className="text-[10px] text-green-400">
                                  Entertainment
                                </div>
                              </div>
                            </div>
                            <div className="text-xs font-medium text-red-500">
                              -$15.99
                            </div>
                          </div>
                        ))}
                        <div>
                          <Button
                            className="text-xs h-8 bg-emerald-700 text-white flex-1 rounded-lg flex justify-center mx-auto mt-4"
                            variant="secondary"
                            size="sm"
                          >
                            {" "}
                            Show More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Phone */}
              <div className="relative w-64 h-auto z-0">
                <div className="bg-gray-900 rounded-[40px] p-2 shadow-xl border-8 border-gray-800">
                  <div className="relative rounded-[32px] overflow-hidden w-full pb-[200%] bg-gradient-bg text-white">
                    {/* App Screenshot Content */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="p-2">
                        <div className="p-4">
                          <div className="text-xs text-white/85 mb-1">
                            Card Details
                          </div>
                          <div className="text-lg font-semibold mb-4">
                            Virtual Card
                          </div>

                          <div className="bg-green-800/85 backdrop-blur-sm rounded-xl p-4 mb-4">
                            <div className="flex justify-between mb-4">
                              <div className="text-xs text-white/70">
                                Zynor Bank
                              </div>
                              <div className="text-xs font-semibold">VISA</div>
                            </div>
                            <div className="text-xs text-white/85 mb-1">
                              Card Number
                            </div>
                            <div className="font-mono mb-3">
                              •••• •••• •••• 4567
                            </div>
                            <div className="flex justify-between">
                              <div>
                                <div className="text-xs text-white/85 mb-1">
                                  Name
                                </div>
                                <div className="text-sm">Alex Morgan</div>
                              </div>
                              <div>
                                <div className="text-xs text-white/70 mb-1">
                                  Expiry
                                </div>
                                <div className="text-sm">05/26</div>
                              </div>
                            </div>
                          </div>

                          <div className="flex space-x-2 mb-4">
                            <Button
                              variant="secondary"
                              size="sm"
                              className="text-xs h-8 bg-emerald-600 text-white flex-1"
                            >
                              Freeze Card
                            </Button>
                            <Button
                              size="sm"
                              className="text-xs h-8 bg-emerald-700 flex-1"
                            >
                              Show Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-600/75 text-white font-medium text-sm mb-6">
              Mobile Banking
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Banking at your fingertips with our powerful app
            </h2>
            <p className="text-green-400 mb-8">
              Stay in control of your finances with real-time insights, smart
              tools, and seamless transactions — all from your smartphone.
            </p>

            <ul className="space-y-4 mb-8 inline-flex flex-col">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <i className="pi pi-check-circle p-1 h-6 w-10 mr-4 flex-shrink-0 text-green-700" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-700 hover:bg-emerald-900">
                Download for iOS
              </Button>
              <Button className="bg-emerald-700 hover:bg-emerald-900">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
