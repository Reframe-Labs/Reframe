import Link from "next/link";
import { XCircle } from "lucide-react";

export default function SubscriptionCanceled() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white px-8">
            <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
                <div className="flex justify-center">
                    <XCircle className="size-16 text-red-500" strokeWidth={1.5} />
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-semibold">
                        Subscription Canceled
                    </h1>
                    <p className="text-foreground/70 text-base md:text-lg">
                        Your subscription checkout was canceled. No charges have been made to your account.
                    </p>
                </div>

                <div className="bg-secondary border rounded-lg p-4 w-full text-left">
                    <p className="text-sm text-foreground/70 mb-2">Need help?</p>
                    <ul className="text-sm text-foreground/70 space-y-2">
                        <li>✓ Review the pricing plans and features</li>
                        <li>✓ Contact us for custom solutions</li>
                        <li>✓ Chat with our support team</li>
                    </ul>
                </div>

                <div className="flex gap-3 w-full">
                    <Link href="/pricing" className="flex-1">
                        <button className="w-full bg-foreground text-background font-medium py-3 rounded-lg hover:opacity-90 transition-opacity">
                            View Pricing
                        </button>
                    </Link>
                    <Link href="/contact" className="flex-1">
                        <button className="w-full border border-foreground text-foreground font-medium py-3 rounded-lg hover:bg-foreground/5 transition-colors">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
