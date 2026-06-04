import type { ComponentType } from "react";
import { DefaultLibraryBlock } from "@/components/projects/renderers/DefaultLibraryBlock";
import { HorizonBlock } from "@/components/projects/renderers/HorizonBlock";
import { MnemoNoteBlock } from "@/components/projects/renderers/MnemoNoteBlock";
import type { PortfolioProject } from "@/types/project";

export const projectRenderers: Record<
  string,
  ComponentType<{ project: PortfolioProject }>
> = {
  mnemonote: MnemoNoteBlock,
  horizon: HorizonBlock,
  "default-library": DefaultLibraryBlock,
};
