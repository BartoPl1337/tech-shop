import { create } from "zustand";
type RefetchStore = {
  refetchValue: boolean;
  refetch: () => void;
};
export const refetchStore = create<RefetchStore>((set) => ({
  refetchValue: false,
  refetch: () => set((prev) => ({ refetchValue: !prev.refetchValue })),
}));
