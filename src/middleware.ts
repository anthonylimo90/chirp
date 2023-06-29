import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    debug: true,
});

console.log(`Hello middleware`);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};