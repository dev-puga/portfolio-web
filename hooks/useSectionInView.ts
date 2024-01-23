import { useInView } from "react-intersection-observer";
import useActiveSection from "./useActiveSection";
import { useEffect } from "react";
import { SectionName } from "@/lib/types";

export default function useSectionInView(sectionName: SectionName) {
    const { ref, inView } = useInView({ threshold: 0.80 });
    const { setActiveSection, timeLastClick } = useActiveSection();

    useEffect(() => {
      if (inView && Date.now() - timeLastClick > 1000) {
        setActiveSection(sectionName);
      }
    }, [inView, timeLastClick, setActiveSection, sectionName]);

    return {
        ref,

    }
}
