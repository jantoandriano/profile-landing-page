import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PHOTO = "/portrait.png";
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", PHOTO));

const HEX = "polygon(25% 0%, 75% 0%, 100% 30%, 100% 70%, 75% 100%, 25% 100%, 0% 70%, 0% 30%)";

function Fill() {
  return hasPhoto ? (
    <Image src={PHOTO} alt="Janto Motulo" fill sizes="(min-width: 768px) 360px, 70vw" className="object-cover grayscale" priority />
  ) : (
    <span className="flex h-full w-full items-center justify-center text-[clamp(64px,9vw,120px)] font-extrabold tracking-[-0.04em]">
      JM
    </span>
  );
}

export default function Portrait({ variant }: { variant: "hex" | "arch" }) {
  if (variant === "hex") {
    // Stacked clip-paths fake a bordered, hard-shadowed hexagon (clip-path would cut a real border).
    return (
      <div className="relative aspect-square w-full">
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] bg-ink" style={{ clipPath: HEX }} />
        <div className="absolute inset-0 bg-ink" style={{ clipPath: HEX }} />
        <div className="absolute inset-[3px] overflow-hidden bg-sky" style={{ clipPath: HEX }}>
          <Fill />
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[3/4] w-full rounded-t-full border-[1.5px] border-ink bg-blue p-3 shadow-brutal-lg">
      <div className="h-full w-full rounded-t-full border-[1.5px] border-ink bg-sky p-3">
        <div className="relative h-full w-full overflow-hidden rounded-t-full border-[1.5px] border-ink bg-pink">
          <Fill />
        </div>
      </div>
    </div>
  );
}
