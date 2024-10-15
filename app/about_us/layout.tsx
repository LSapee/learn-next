export const metadata = {
    title: "about_us"
}

export default function RootLayout({children}:{children:React.ReactElement}) {
    return (
        <div>
            {children}
            &copy; NextJS is Great!
        </div>
    )
}