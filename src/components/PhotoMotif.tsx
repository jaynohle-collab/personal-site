import type { PhotoMotif as MotifName } from "@content/site";

type PhotoMotifProps = {
  motif: MotifName;
  title: string;
};

export function PhotoMotif({ motif, title }: PhotoMotifProps) {
  return (
    <svg
      viewBox="0 0 400 500"
      role="img"
      aria-label={title}
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {motif === "window" ? <WindowScene /> : null}
      {motif === "path" ? <PathScene /> : null}
      {motif === "kitchen" ? <KitchenScene /> : null}
      {motif === "desk" ? <DeskScene /> : null}
      {motif === "plant" ? <PlantScene /> : null}
      {motif === "evening" ? <EveningScene /> : null}
    </svg>
  );
}

function WindowScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#d8cfc0" />
      <rect x="48" y="56" width="304" height="360" fill="#c9d4d1" />
      <rect x="48" y="56" width="304" height="168" fill="#c5d0c8" />
      <circle cx="268" cy="118" r="28" fill="#e8d7b8" opacity="0.85" />
      <path d="M48 280 C120 250 180 310 220 290 C270 266 310 300 352 274 V416 H48 Z" fill="#b7c4b6" />
      <rect x="36" y="44" width="328" height="384" fill="none" stroke="#5c5348" strokeWidth="10" />
      <line x1="200" y1="44" x2="200" y2="428" stroke="#5c5348" strokeWidth="8" />
      <line x1="36" y1="236" x2="364" y2="236" stroke="#5c5348" strokeWidth="8" />
      <rect x="36" y="428" width="328" height="16" fill="#6b6258" />
      <path d="M292 428 C292 390 318 372 340 368 C338 396 328 416 318 428 Z" fill="#7d8a6e" />
      <path d="M318 428 C328 400 350 386 364 384 V428 Z" fill="#6f7d62" />
      <ellipse cx="320" cy="444" rx="22" ry="8" fill="#8a7d6c" />
    </g>
  );
}

function PathScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#c9d2c8" />
      <circle cx="86" cy="96" r="36" fill="#ead9b4" />
      <path d="M0 210 C80 180 140 230 200 200 C270 166 320 210 400 186 V500 H0 Z" fill="#b7c2ae" />
      <path d="M0 300 C90 270 150 320 230 292 C310 264 350 310 400 290 V500 H0 Z" fill="#9eae93" />
      <path
        d="M168 500 C176 430 150 380 186 330 C214 290 198 250 220 210"
        fill="none"
        stroke="#cfc3ae"
        strokeWidth="28"
        strokeLinecap="round"
      />
      <path
        d="M168 500 C176 430 150 380 186 330 C214 290 198 250 220 210"
        fill="none"
        stroke="#e4d8c4"
        strokeWidth="12"
        strokeLinecap="round"
      />
    </g>
  );
}

function KitchenScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#e6dccb" />
      <rect x="0" y="300" width="400" height="200" fill="#d4c7b0" />
      <line x1="0" y1="300" x2="400" y2="300" stroke="#b9ab93" strokeWidth="4" />
      <ellipse cx="168" cy="318" rx="72" ry="16" fill="#c4b59c" />
      <path
        d="M108 318 C108 270 228 270 228 318"
        fill="#c4896a"
        stroke="#8b5e3c"
        strokeWidth="3"
      />
      <ellipse cx="168" cy="274" rx="36" ry="10" fill="#d9a888" />
      <ellipse cx="280" cy="312" rx="34" ry="12" fill="#cfc3ae" />
      <path
        d="M252 312 C252 284 308 284 308 312"
        fill="#faf7f1"
        stroke="#8f857a"
        strokeWidth="3"
      />
      <path d="M304 286 C328 274 336 292 318 300" fill="none" stroke="#8f857a" strokeWidth="3" />
      <rect x="56" y="248" width="48" height="52" rx="3" fill="#8b5e3c" />
      <rect x="62" y="254" width="36" height="4" fill="#e8d3bc" />
    </g>
  );
}

function DeskScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#ddd2c1" />
      <rect x="0" y="280" width="400" height="220" fill="#cbbfaa" />
      <line x1="0" y1="280" x2="400" y2="280" stroke="#b3a48d" strokeWidth="4" />
      <rect x="88" y="214" width="160" height="112" rx="4" fill="#faf7f1" stroke="#8f857a" strokeWidth="2" />
      <line x1="108" y1="244" x2="224" y2="244" stroke="#d8cfc0" strokeWidth="3" />
      <line x1="108" y1="264" x2="208" y2="264" stroke="#d8cfc0" strokeWidth="3" />
      <line x1="108" y1="284" x2="216" y2="284" stroke="#d8cfc0" strokeWidth="3" />
      <rect x="268" y="236" width="10" height="88" rx="2" fill="#8b5e3c" transform="rotate(-18 273 280)" />
      <ellipse cx="310" cy="292" rx="28" ry="11" fill="#c4b59c" />
      <path
        d="M286 292 C286 268 334 268 334 292"
        fill="#6b6258"
        stroke="#2c2620"
        strokeWidth="2"
      />
    </g>
  );
}

function PlantScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#d7d0c2" />
      <ellipse cx="200" cy="400" rx="70" ry="16" fill="#c2b6a2" />
      <path d="M154 400 L168 318 H232 L246 400 Z" fill="#a65d45" />
      <path d="M168 318 H232 L226 304 H174 Z" fill="#8b5e3c" />
      <path d="M200 304 C200 240 150 210 132 168" fill="none" stroke="#6f7d62" strokeWidth="5" />
      <path d="M200 280 C200 230 248 214 278 176" fill="none" stroke="#6f7d62" strokeWidth="5" />
      <path d="M200 250 C188 210 200 176 186 140" fill="none" stroke="#7d8a6e" strokeWidth="4" />
      <ellipse cx="128" cy="160" rx="36" ry="20" fill="#8a9a7b" transform="rotate(-28 128 160)" />
      <ellipse cx="286" cy="168" rx="40" ry="22" fill="#7d8a6e" transform="rotate(24 286 168)" />
      <ellipse cx="178" cy="132" rx="32" ry="18" fill="#9eae93" transform="rotate(-8 178 132)" />
      <ellipse cx="232" cy="200" rx="28" ry="16" fill="#8a9a7b" transform="rotate(16 232 200)" />
    </g>
  );
}

function EveningScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#3f3a36" />
      <rect width="400" height="500" fill="#4a433c" />
      <circle cx="286" cy="120" r="26" fill="#e8d7b8" />
      <circle cx="92" cy="88" r="2" fill="#f4efe6" opacity="0.7" />
      <circle cx="148" cy="148" r="1.5" fill="#f4efe6" opacity="0.55" />
      <circle cx="340" cy="72" r="1.5" fill="#f4efe6" opacity="0.6" />
      <path d="M0 280 C90 250 150 300 220 268 C300 232 340 276 400 254 V500 H0 Z" fill="#2c2620" />
      <path d="M0 360 C80 340 160 380 250 350 C320 328 360 360 400 346 V500 H0 Z" fill="#241f1b" />
    </g>
  );
}
