"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";

interface BookingContextType {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) throw new Error("useBooking must be used within a BookingProvider");
  return context;
};

export function Providers({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BookingContext.Provider value={{ isOpen: isBookingOpen, openBooking, closeBooking }}>
        {children}
      </BookingContext.Provider>
    </ThemeProvider>
  );
}
