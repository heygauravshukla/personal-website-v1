import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <main className="bg-background fixed inset-0 z-50 grid place-items-center">
      <LoaderCircle className="text-primary size-12 animate-spin" />
    </main>
  );
}
