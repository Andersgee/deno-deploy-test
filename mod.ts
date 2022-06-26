import { serve } from "https://deno.land/std@0.142.0/http/server.ts";
import { somefunc } from "./thing.ts";

serve((_req: Request) => new Response(`Hello A World ${somefunc(3)}`));
