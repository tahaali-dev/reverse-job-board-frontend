import { Check } from "lucide-react";

export default function SubscriptionPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-semibold">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <h1 className="mb-8 text-center text-3xl font-bold">
            Your Subscription
          </h1>

          {/* Current Plan Card */}
          <div className="mb-8 p-6 border shadow-lg rounded-md bg-white">
            <h2 className="text-2xl font-bold">Current Plan: Premium Plan</h2>
            <p className="mt-2 text-gray-600">Your subscription is active</p>

            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold">Subscription Details</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Price: $149/month</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    Next billing date: June 15, 2024
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">
                    Payment method: **** **** **** 1234
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="p-6 border shadow-lg rounded-md bg-white">
            <h2 className="mb-6 text-2xl font-bold">Your Plan Benefits</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Access to top-tier data science talent",
                "Direct communication with candidates",
                "Regular profile updates",
                "Detailed profiles with verified skills",
                "Customizable search filters",
                "Priority support",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
