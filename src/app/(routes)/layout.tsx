const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <nav>sidebar</nav>
            {children}
        </div>
    )
}

export default RootLayout