import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Next MUI integration
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spark Tutoring | Team Management",
  description: "A tool for managing team tasks and task assignments",
};

// Components
import MainMenu from "@/app/containers/MainMenu";

// Contexts
import AppProvider from "./AppContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppProvider>
          <AppRouterCacheProvider>
            <MainMenu />
            {children}
          </AppRouterCacheProvider>
        </AppProvider>
      </body>
    </html>
  );
}
