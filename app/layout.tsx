import "../styles/globals.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Noted",
  description: "Share Notes",
};
const RootLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <html lang="eng" dir="ltr">
      <body>
        <Provider session={""}>
          <>
            <div className="main gradient" />
            <div className="app">
              <Nav />
              {children}
            </div>
          </>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
