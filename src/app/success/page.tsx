import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SubscriptionSuccess() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white px-8">
            <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
                <div className="flex justify-center">
                    <CheckCircle className="size-16 text-green-500" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Subscription Confirmed!
                    </h1>
                    <p className="text-foreground/70 text-base md:text-lg">
                        Your subscription has been successfully activated. You can now access all premium features.
                    </p>
                </div>

                <div className="bg-secondary border rounded-lg p-4 w-full text-left">
                    <p className="text-sm text-foreground/70 mb-2">What&apos;s next?</p>
                    <ul className="text-sm text-foreground/70 space-y-2">
                        <li>✓ Check your email for subscription confirmation</li>
                        <li>✓ Access your dashboard to get started</li>
                        <li>✓ Contact support if you have any questions</li>
                    </ul>
                </div>

                <Link href="/" className="w-full">
                    <button className="w-full bg-foreground text-background font-medium py-3 rounded-lg hover:opacity-90 transition-opacity">
                        Return to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
