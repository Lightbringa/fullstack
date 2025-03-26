export const metadata = {
  title: "My First React Application",
  description: "A Simple Application with React and Nextjs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
