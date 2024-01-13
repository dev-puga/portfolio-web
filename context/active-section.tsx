"use client";
import React, { ReactNode, createContext, useState } from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionProps = {
  children: ReactNode;
};

type ActiveSectionContext = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeLastClick: number;
  setTimeLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContext | null>(
  null
);

export default function ActiveSectionProvider({
  children,
}: ActiveSectionProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeLastClick, setTimeLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeLastClick,
        setTimeLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
