

export default function CommonProtectedLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <>
    <br></br>
    Common Protected Layout
     {children}
    </>
  
  );
}
