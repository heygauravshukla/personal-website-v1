import { Wrapper } from "@/components/wrapper";
import { Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t py-4">
      <Wrapper>
        <p className="text-muted-foreground text-center text-sm text-pretty">
          Built with love <Heart className="fill-primary mx-1 inline size-4" />{" "}
          by Gaurav Shukla
        </p>
      </Wrapper>
    </footer>
  );
}
