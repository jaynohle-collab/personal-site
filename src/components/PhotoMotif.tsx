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
      <rect width="400" height="500" fill="#c8b9a3" />
      <rect x="52" y="60" width="296" height="348" fill="#8fa8a4" />
      <rect x="52" y="60" width="296" height="164" fill="#9bb0a8" />
      <circle cx="274" cy="124" r="32" fill="#f0d7a2" />
      <path
        d="M52 278 C118 248 176 308 224 286 C278 260 318 298 348 272 V408 H52 Z"
        fill="#6f8a72"
      />
      <rect
        x="40"
        y="48"
        width="320"
        height="372"
        fill="none"
        stroke="#3d342c"
        strokeWidth="14"
      />
      <line x1="200" y1="48" x2="200" y2="420" stroke="#3d342c" strokeWidth="10" />
      <line x1="40" y1="234" x2="360" y2="234" stroke="#3d342c" strokeWidth="10" />
      <rect x="40" y="420" width="320" height="18" fill="#4a4036" />
      <path
        d="M286 420 C286 376 316 356 342 350 C338 384 326 406 316 420 Z"
        fill="#4f6a4c"
      />
      <ellipse cx="318" cy="440" rx="26" ry="9" fill="#6b5c4c" />
    </g>
  );
}

function PathScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#8eaaa8" />
      <circle cx="92" cy="108" r="40" fill="#f3d69a" />
      <path
        d="M0 206 C86 172 148 228 210 196 C284 160 330 208 400 184 V500 H0 Z"
        fill="#7a926c"
      />
      <path
        d="M0 304 C96 268 158 324 236 292 C318 260 356 312 400 288 V500 H0 Z"
        fill="#5d734f"
      />
      <path
        d="M164 500 C174 424 146 372 186 320 C218 276 198 236 224 196"
        fill="none"
        stroke="#e8d4b0"
        strokeWidth="34"
        strokeLinecap="round"
      />
      <path
        d="M164 500 C174 424 146 372 186 320 C218 276 198 236 224 196"
        fill="none"
        stroke="#f6ead4"
        strokeWidth="14"
        strokeLinecap="round"
      />
    </g>
  );
}

function KitchenScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#d8c4a8" />
      <rect x="0" y="292" width="400" height="208" fill="#b89a74" />
      <line x1="0" y1="292" x2="400" y2="292" stroke="#8c7354" strokeWidth="5" />
      <ellipse cx="164" cy="314" rx="78" ry="18" fill="#9a7d58" />
      <path
        d="M100 314 C100 258 228 258 228 314"
        fill="#c46a42"
        stroke="#7a3d24"
        strokeWidth="4"
      />
      <ellipse cx="164" cy="266" rx="40" ry="12" fill="#e39a70" />
      <ellipse cx="286" cy="308" rx="38" ry="14" fill="#9a7d58" />
      <path
        d="M254 308 C254 274 318 274 318 308"
        fill="#f7f1e6"
        stroke="#5c4c3a"
        strokeWidth="4"
      />
      <path
        d="M314 278 C342 264 352 286 330 296"
        fill="none"
        stroke="#5c4c3a"
        strokeWidth="4"
      />
      <rect x="52" y="236" width="52" height="56" rx="3" fill="#6b3d28" />
      <rect x="58" y="244" width="40" height="5" fill="#e8c9a0" />
    </g>
  );
}

function DeskScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#cbb79a" />
      <rect x="0" y="268" width="400" height="232" fill="#a88b64" />
      <line x1="0" y1="268" x2="400" y2="268" stroke="#7d6648" strokeWidth="5" />
      <rect
        x="78"
        y="196"
        width="176"
        height="124"
        rx="5"
        fill="#f7f1e6"
        stroke="#5c4c3a"
        strokeWidth="3"
      />
      <line x1="100" y1="230" x2="228" y2="230" stroke="#c4b49a" strokeWidth="4" />
      <line x1="100" y1="252" x2="210" y2="252" stroke="#c4b49a" strokeWidth="4" />
      <line x1="100" y1="274" x2="220" y2="274" stroke="#c4b49a" strokeWidth="4" />
      <rect
        x="268"
        y="214"
        width="12"
        height="96"
        rx="2"
        fill="#7a3d24"
        transform="rotate(-16 274 262)"
      />
      <ellipse cx="318" cy="286" rx="32" ry="13" fill="#8c7354" />
      <path
        d="M290 286 C290 256 346 256 346 286"
        fill="#3d342c"
        stroke="#2a241f"
        strokeWidth="3"
      />
    </g>
  );
}

function PlantScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#c9c0ae" />
      <ellipse cx="200" cy="404" rx="78" ry="18" fill="#8c7a62" />
      <path d="M148 404 L164 310 H236 L252 404 Z" fill="#b55238" />
      <path d="M164 310 H236 L228 294 H172 Z" fill="#8b3d28" />
      <path
        d="M200 294 C200 228 146 198 124 154"
        fill="none"
        stroke="#3f5a3c"
        strokeWidth="6"
      />
      <path
        d="M200 270 C200 218 254 200 286 160"
        fill="none"
        stroke="#3f5a3c"
        strokeWidth="6"
      />
      <path
        d="M200 240 C186 196 200 160 178 122"
        fill="none"
        stroke="#4f6a4c"
        strokeWidth="5"
      />
      <ellipse
        cx="118"
        cy="148"
        rx="40"
        ry="22"
        fill="#5d7a52"
        transform="rotate(-28 118 148)"
      />
      <ellipse
        cx="294"
        cy="154"
        rx="44"
        ry="24"
        fill="#4f6a4c"
        transform="rotate(24 294 154)"
      />
      <ellipse
        cx="170"
        cy="118"
        rx="36"
        ry="20"
        fill="#6f8a60"
        transform="rotate(-8 170 118)"
      />
      <ellipse
        cx="236"
        cy="192"
        rx="30"
        ry="18"
        fill="#5d7a52"
        transform="rotate(16 236 192)"
      />
    </g>
  );
}

function EveningScene() {
  return (
    <g>
      <rect width="400" height="500" fill="#2b2622" />
      <circle cx="286" cy="118" r="30" fill="#f0d7a2" />
      <circle cx="86" cy="84" r="2.4" fill="#f4efe6" opacity="0.85" />
      <circle cx="150" cy="150" r="1.8" fill="#f4efe6" opacity="0.65" />
      <circle cx="344" cy="70" r="1.8" fill="#f4efe6" opacity="0.7" />
      <circle cx="208" cy="96" r="1.4" fill="#f4efe6" opacity="0.5" />
      <path
        d="M0 276 C90 244 154 298 226 264 C308 226 346 274 400 250 V500 H0 Z"
        fill="#1c1815"
      />
      <path
        d="M0 358 C84 336 164 378 254 346 C326 322 364 356 400 342 V500 H0 Z"
        fill="#14110f"
      />
    </g>
  );
}
