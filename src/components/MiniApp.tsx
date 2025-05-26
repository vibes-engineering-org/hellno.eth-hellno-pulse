"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";
import { Button } from "~/components/ui/button";

export default function MiniApp() {
  const { isSDKLoaded, pinFrame, notificationDetails } = useFrameSDK();

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
        hellno home
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 mb-8 text-center">
        Stay up to date with my latest streams and shenanigans. Subscribe for Farcaster notifications and follow me on Twitch.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={pinFrame} variant="secondary">
          {notificationDetails ? 'Subscribed' : 'Subscribe'}
        </Button>
        <Button asChild variant="outline">
          <a
            href="https://twitch.tv/hellnoTV"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on Twitch
          </a>
        </Button>
      </div>
      {notificationDetails && (
        <p className="mt-4 text-green-400 text-sm">
          You are subscribed to notifications!
        </p>
      )}
    </div>
  );
}
