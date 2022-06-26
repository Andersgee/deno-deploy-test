import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import { randomAvatarSvgString } from "./lib/generator/index.ts";

serve((_req: Request) => {
  const svgString = randomAvatarSvgString();
  return new Response(svgString, {
    headers: {
      "content-type": "image/svg+xml",
    },
  });
});
