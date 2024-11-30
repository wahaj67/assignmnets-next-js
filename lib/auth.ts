import NextAuth from "next-auth"
import Github from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google"

export const {handlers,signIn,signOut,auth} = NextAuth({
    providers:[
        Github({
            clientId:process.env.GIHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET
        },
    
    )
    ]
})
// GoogleProvider({
//     clientId:process.env.GOOGLE_CLIENT_ID,
//     clientSecret:process.env.GOOGLE_CLIENT_SECRET
// })

