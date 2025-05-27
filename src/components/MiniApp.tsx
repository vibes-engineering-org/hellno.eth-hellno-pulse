"use client";

import { useFrameSDK } from "~/hooks/useFrameSDK";
import { Button } from "~/components/ui/button";
import { AddMiniappButton } from "~/components/add-miniapp-button";
import { ShareCastButton } from "~/components/share-cast-button";

export default function MiniApp() {
  const { isSDKLoaded, notificationDetails } = useFrameSDK();
  // determine current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-4">
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-600 rounded-full filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600 rounded-full filter blur-2xl opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="relative flex flex-col items-center justify-center z-10">
        <h1 className="animate-pulse text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">
          hellno home
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 text-center max-w-md">
          Stay up to date with my latest streams and shenanigans. Subscribe for Farcaster notifications and follow me on Twitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <AddMiniappButton
            text="Subscribe"
            textDone="Subscribed"
            variant="default"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-[0_0_10px_rgba(219,39,119,0.6)] hover:from-pink-400 hover:to-purple-400"
          />
          <Button
            asChild
            variant="ghost"
            className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white shadow-[0_0_8px_rgba(6,182,212,0.6)]"
          >
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
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <ShareCastButton
            text="🚀 Check out hellno home – a cyberpunk vibey mini app!"
            url={currentUrl}
            variant="default"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_0_10px_rgba(131,58,180,0.6)] hover:from-purple-400 hover:to-cyan-400"
          />
        </div>
      </div>
    </div>
  );
}
