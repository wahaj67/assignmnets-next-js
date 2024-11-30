import { SessionWrapper } from "@/components/SessionWrapper";
import SignInComponents from "@/components/login/loginComponents";
import SignOutComponents from "@/components/login/signOutComponents";
import { auth } from "@/lib/auth";

export default async function Home(){
  const session = await auth()
  const isAuthenticated = !!session?.user
 return (
  <div>
    <SessionWrapper>
      {isAuthenticated ? <SignOutComponents/> : <SignInComponents/>}
      {/* <SignInComponents/>
      <SignOutComponents/> */}
    </SessionWrapper>
  </div>
 )
}