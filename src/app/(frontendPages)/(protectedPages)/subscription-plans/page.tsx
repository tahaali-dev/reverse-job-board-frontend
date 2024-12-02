import { Check } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-semibold">
        <main className="container mx-auto px-4 py-12 md:px-6 ">
          <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Choose Your Subscription Plan
          </h1>

          {/* Subscription Card */}
          <div className="mx-auto max-w-2xl ">
            <div className="mb-12 border shadow-lg rounded-md bg-white">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-2">Premium Plan</h2>
                <p className="text-gray-600 mb-6">
                  Unlock the full potential of ObjectiveDataScienceDevs
                </p>

                {/* Price */}
                <div className="mb-8 ">
                  <span className="text-4xl font-bold md:text-5xl">$149</span>
                  <span className="text-gray-600">/month</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8 ">
                  {[
                    "Access to top-tier data science talent",
                    "Detailed profiles with verified skills",
                    "Direct communication with candidates",
                    "Customizable search filters",
                    "Regular profile updates",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-blue-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 text-lg text-white bg-blue-500 rounded-lg hover:shadow-xl hover:bg-blue-600">
                  Make Payment
                </button>
              </div>
            </div>

            {/* Why Choose Section */}
            <section className="text-center bg-gray-50">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Why Choose ObjectiveDataScienceDevs?
              </h2>
              <p className="mx-auto max-w-3xl text-gray-600">
                ObjectiveDataScienceDevs is the leading platform for connecting
                top-tier data science talent with innovative companies. Our
                detailed profiles and verification process guarantee the quality
                of candidates. With direct communication channels and
                customizable search filters, you&apos;ll streamline your hiring
                process and build your dream data science team faster than ever
                before.
              </p>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
