import LeftBar from '@/components/LeftBar';
import './globals.css';
import RightBar from '@/components/RightBar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <section className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </section>
          <section className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </section>
          <section className="hidden lg:flex ml-4 md:ml-8  flex-1">
            <RightBar />
          </section>
        </main>
      </body>
    </html>
  );
}