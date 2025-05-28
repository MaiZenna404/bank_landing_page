import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface QADatas {
  question: string;
  answer: string;
}

const questionsAnswers: QADatas[] = [
  {
    question: "How do I open an account with FinanceHub?",
    answer:
      "Opening an account is simple and takes just a few minutes. Download our app or visit our website, click on 'Get Started', and follow the step-by-step instructions. You'll need to provide some basic personal information and verify your identity with a government-issued ID.",
  },
  {
    question: "Are there any fees associated with my account?",
    answer:
      "Our Standard account has no monthly fees, no minimum balance requirements, and no overdraft fees. Premium and Business accounts have a monthly subscription fee but come with additional features and benefits. For details, please see our pricing section.",
  },
  {
    question: "How does FinanceHub protect my money and personal information?",
    answer:
      "Security is our top priority. We use bank-level encryption, multi-factor authentication, and real-time fraud monitoring. Additionally, deposits are FDIC-insured up to $250,000 through our partner banks, ensuring your money is always safe.",
  },
  {
    question: "Can I use my FinanceHub card internationally?",
    answer:
      "Yes! Our Standard account allows international transactions with competitive exchange rates. Premium and Business accounts offer additional benefits including no foreign transaction fees and emergency card replacement when traveling.",
  },
  {
    question: "How do I deposit cash into my FinanceHub account?",
    answer:
      "While we're primarily digital, you can deposit cash at over 90,000 retail locations nationwide through our retail network partners. Simply bring your cash and FinanceHub app with its unique deposit code to any participating location.",
  },
  {
    question: "What is the interest rate on savings accounts?",
    answer:
      "Our savings interest rates are significantly higher than traditional banks. Standard accounts earn up to 2.5% APY, while Premium accounts earn up to 4.5% APY. Rates are variable and may change based on market conditions.",
  },
];

export default function QASection() {
  return (
    <>
      <section className="mt-8 pb-10 pt-15 text-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* FAQ Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-600/75 text-white font-medium text-sm mb-6">
              FAQ
            </div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </p>
            <p className="text-lg text-green-400 mb-8 max-w-3xl">
              Everything you need to know about FinanceHub. Can't find the
              answer you're looking for ? Contact our support team.
            </p>
          </div>
          {/* FAQ Section Accordion */}
          {questionsAnswers.map((Item, index) => (
            <Accordion type="single" collapsible key={index} className="w-2/3">
              <AccordionItem
                value={`item-${index}`}
                className="p-2 rounded-2xl mb-5 border-t border-emerald-500/50 shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="cursor-pointer text-left text-md ml-4 font-medium py-3 text-emerald-500/95 hover:no-underline hover:text-emerald-700">
                  {Item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-4 ml-4 pb-8 text-emerald-100">
                  {Item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </>
  );
}
