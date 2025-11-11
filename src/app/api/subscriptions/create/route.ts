import { createCryptomusSubscription, generateOrderId } from "@/lib/cryptomus";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, amount } = body;

    if (!plan || !amount) {
      return NextResponse.json(
        { error: "Missing required fields: plan, amount" },
        { status: 400 }
      );
    }

    const successUrl = process.env.NEXT_PUBLIC_SUCCESS_URL;
    const cancelUrl = process.env.NEXT_PUBLIC_CANCEL_URL;

    if (!successUrl || !cancelUrl) {
      console.error("Missing redirect URLs:", { successUrl, cancelUrl });
      return NextResponse.json(
        { error: "Missing redirect URLs in environment variables" },
        { status: 500 }
      );
    }

    const orderId = generateOrderId();

    const subscriptionPayload = {
      amount: amount.toString(),
      currency: "USD",
      order_id: orderId,
      name: `${plan} Subscription`,
      url_return_success: successUrl,
      url_return_cancel: cancelUrl,
      is_payment_multiple: true,
      lifetime: 3600, // 1 hour to complete payment
    };

    console.log("Sending to Cryptomus:", subscriptionPayload);

    const result = await createCryptomusSubscription(subscriptionPayload);

    console.log("Cryptomus response:", result);

    if (!result.result?.url) {
      console.error(
        "No checkout URL in response:",
        JSON.stringify(result, null, 2)
      );
      return NextResponse.json(
        { error: "Failed to generate checkout URL" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        checkoutUrl: result.result.url,
        uuid: result.result.uuid,
        orderId: orderId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscription creation error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
