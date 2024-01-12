
import { ActiveSectionContext } from '@/context/active-section';
import React, { useContext } from 'react'

export default function useActiveSection() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error('useActiveSectionContext must be used within a ActionContextProvider')
    }
  return context
}
