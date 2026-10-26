// Product cover illustrations: simplified mock screens of each product, drawn in the
// site palette so every card shares one visual language. Inline SVG — no image requests.

const C = {
  paper: "#F2EDE4",
  line: "#DDD6C8",
  soft: "#E6E0D4",
  ink: "#2E3B25",
  olive: "#4A5E3A",
  sage: "#7A9063",
  gold: "#C9A96E",
};

type CoverProps = { className?: string };

const Svg = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 400 200" className={className} preserveAspectRatio="xMidYMax meet" aria-hidden>
    {children}
  </svg>
);

// Browser window frame with the content area starting at (x, y + 18).
const Browser = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill={C.paper} />
    <rect x={x} y={y} width={w} height="16" rx="8" fill={C.soft} />
    <rect x={x} y={y + 8} width={w} height="8" fill={C.soft} />
    {[0, 1, 2].map((i) => <circle key={i} cx={x + 10 + i * 9} cy={y + 8} r="2.5" fill={C.line} />)}
    <rect x={x + 42} y={y + 5} width={Math.min(120, w - 60)} height="6" rx="3" fill={C.paper} />
  </g>
);

const Phone = ({ x, y, w = 74, h = 150 }: { x: number; y: number; w?: number; h?: number }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" fill={C.ink} />
    <rect x={x + 4} y={y + 4} width={w - 8} height={h - 8} rx="9" fill={C.paper} />
    <rect x={x + w / 2 - 10} y={y + 7} width="20" height="4" rx="2" fill={C.ink} />
  </g>
);

const Bar = ({ x, y, w, h = 5, fill = C.line }: { x: number; y: number; w: number; h?: number; fill?: string }) => (
  <rect x={x} y={y} width={w} height={h} rx={h / 2} fill={fill} />
);

export const FabtoryxCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    {/* Staff app: sales wizard with barcode */}
    <Phone x={110} y={30} />
    <Bar x={120} y={50} w={40} fill={C.olive} />
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={120} y={64 + i * 26} width="54" height="20" rx="4" fill={C.soft} />
        <rect x={124} y={68 + i * 26} width="12" height="12" rx="2" fill={C.sage} />
        <Bar x={140} y={70 + i * 26} w={26} h={4} />
        <Bar x={140} y={77 + i * 26} w={16} h={3} fill={C.gold} />
      </g>
    ))}
    <g transform="translate(124 146)">
      {[0, 3, 5, 9, 11, 14, 18, 20, 24, 27, 30, 34, 37, 40, 43].map((x) => (
        <rect key={x} x={x} y="0" width={x % 2 ? 1.5 : 2.5} height="14" fill={C.ink} />
      ))}
    </g>
    <rect x={120} y={164} width="54" height="8" rx="4" fill={C.olive} />

    {/* Customer shop */}
    <Phone x={216} y={18} />
    <rect x={224} y={36} width="58" height="34" rx="5" fill={C.sage} />
    <Bar x={230} y={58} w={26} h={4} fill={C.paper} />
    {[0, 1].map((r) => [0, 1].map((c) => (
      <g key={`${r}${c}`}>
        <rect x={224 + c * 30} y={76 + r * 42} width="27" height="28" rx="4" fill={c === r ? C.soft : C.line} />
        <Bar x={224 + c * 30} y={107 + r * 42} w={20} h={3} />
        <Bar x={224 + c * 30} y={112 + r * 42} w={12} h={3} fill={C.olive} />
      </g>
    )))}
    <circle cx={270} cy={156} r="2" fill={C.olive} />
    <circle cx={248} cy={156} r="2" fill={C.line} />
    <circle cx={259} cy={156} r="2" fill={C.line} />
  </Svg>
);

export const TextileCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    <Browser x={50} y={22} w={250} h={160} />
    {/* sidebar */}
    <rect x={50} y={38} width="46" height="144" fill={C.soft} />
    {[0, 1, 2, 3, 4, 5].map((i) => <Bar key={i} x={58} y={50 + i * 14} w={i === 1 ? 30 : 24} h={4} fill={i === 1 ? C.olive : C.line} />)}
    {/* stat tiles */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={106 + i * 63} y={48} width="56" height="30" rx="5" fill={C.soft} />
        <Bar x={112 + i * 63} y={55} w={22} h={3} />
        <Bar x={112 + i * 63} y={64} w={34} h={7} fill={[C.olive, C.sage, C.gold][i]} />
      </g>
    ))}
    {/* order table */}
    {[0, 1, 2, 3, 4].map((i) => (
      <g key={i}>
        <rect x={106} y={88 + i * 17} width="182" height="13" rx="3" fill={i % 2 ? C.paper : C.soft} />
        <Bar x={112} y={92 + i * 17} w={40} h={4} />
        <Bar x={170} y={92 + i * 17} w={30} h={4} />
        <rect x={250} y={91 + i * 17} width="30" height="6" rx="3" fill={i === 0 ? C.gold : C.sage} />
      </g>
    ))}
    {/* tablet */}
    <rect x={272} y={86} width="84" height="104" rx="10" fill={C.ink} />
    <rect x={277} y={91} width="74" height="94" rx="6" fill={C.paper} />
    {[0, 1].map((r) => [0, 1].map((c) => (
      <rect key={`${r}${c}`} x={283 + c * 33} y={98 + r * 34} width="29" height="29" rx="4" fill={r === c ? C.sage : C.soft} />
    )))}
    <rect x={283} y={168} width="62" height="10" rx="5" fill={C.olive} />
  </Svg>
);

export const LoomCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    <Browser x={60} y={20} w={280} h={170} />
    {/* nav */}
    <Bar x={72} y={44} w={36} h={6} fill={C.ink} />
    {[0, 1, 2].map((i) => <Bar key={i} x={170 + i * 30} y={45} w={22} h={4} />)}
    <circle cx={322} cy={47} r="6" fill={C.olive} />
    <text x={322} y={49.5} fontSize="7" textAnchor="middle" fill={C.paper} fontFamily="sans-serif">2</text>
    {/* hero */}
    <rect x={72} y={58} width="256" height="42" rx="6" fill={C.sage} />
    <Bar x={84} y={70} w={70} h={7} fill={C.paper} />
    <Bar x={84} y={82} w={46} h={4} fill={C.soft} />
    <rect x={260} y={66} width="54" height="26" rx="4" fill={C.olive} />
    {/* product grid */}
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x={72 + i * 65} y={108} width="58" height="56" rx="5" fill={i % 2 ? C.soft : C.line} />
        <path d={`M${92 + i * 65} 122 l9 -6 l9 6 l-3 4 v18 h-12 v-18 z`} fill={i % 2 ? C.sage : C.olive} opacity="0.75" />
        <Bar x={72 + i * 65} y={169} w={40} h={4} />
        <Bar x={72 + i * 65} y={177} w={22} h={4} fill={C.olive} />
      </g>
    ))}
  </Svg>
);

export const EmailCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    <Browser x={60} y={22} w={280} h={160} />
    <rect x={60} y={38} width="70" height="144" fill={C.soft} />
    {[0, 1, 2, 3, 4].map((i) => <Bar key={i} x={70} y={50 + i * 14} w={i === 0 ? 46 : 36} h={4} fill={i === 0 ? C.olive : C.line} />)}
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <g key={i}>
        <rect x={140} y={46 + i * 22} width="190" height="18" rx="4" fill={i % 2 ? C.paper : C.soft} />
        <circle cx={150} cy={55 + i * 22} r="4" fill={C.line} />
        <Bar x={160} y={50 + i * 22} w={70} h={4} />
        <Bar x={160} y={57 + i * 22} w={50} h={3} fill={C.line} />
        <rect x={276} y={50 + i * 22} width="46" height="9" rx="4.5" fill={[C.olive, C.gold, C.sage][i % 3]} />
      </g>
    ))}
    {/* AI badge */}
    <g transform="translate(300 150)">
      <circle r="18" fill={C.ink} />
      <path d="M0 -9 L2.5 -2.5 L9 0 L2.5 2.5 L0 9 L-2.5 2.5 L-9 0 L-2.5 -2.5 Z" fill={C.gold} />
    </g>
  </Svg>
);

export const ManufacturingCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    <Browser x={40} y={22} w={250} h={160} />
    {/* CRM pipeline kanban */}
    {[0, 1, 2, 3].map((col) => (
      <g key={col}>
        <Bar x={50 + col * 59} y={46} w={34} h={4} fill={C.olive} />
        {[0, 1, 2].slice(0, 3 - (col % 2)).map((r) => (
          <g key={r}>
            <rect x={50 + col * 59} y={56 + r * 38} width="52" height="32" rx="4" fill={C.soft} />
            <Bar x={55 + col * 59} y={62 + r * 38} w={34} h={4} />
            <Bar x={55 + col * 59} y={70 + r * 38} w={22} h={3} fill={C.line} />
            <rect x={55 + col * 59} y={77 + r * 38} width="18" height="6" rx="3" fill={[C.sage, C.gold, C.olive][r]} />
          </g>
        ))}
      </g>
    ))}
    {/* RFID reader + card */}
    <rect x={292} y={70} width="66" height="96" rx="10" fill={C.ink} />
    <rect x={300} y={78} width="50" height="34" rx="4" fill={C.paper} />
    <Bar x={306} y={86} w={30} h={4} fill={C.olive} />
    <Bar x={306} y={96} w={20} h={4} />
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M${315 - i * 6} ${138 - i * 6} a${10 + i * 6} ${10 + i * 6} 0 0 1 ${20 + i * 12} 0`} stroke={C.sage} strokeWidth="2" fill="none" />
    ))}
    <rect x={318} y={140} width="14" height="14" rx="3" fill={C.gold} />
  </Svg>
);

export const MultiCompanyCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    {/* Two companies */}
    {[0, 1].map((i) => {
      const x = i === 0 ? 70 : 250;
      return (
        <g key={i}>
          <rect x={x} y={52} width="80" height="96" rx="8" fill={C.paper} />
          <rect x={x} y={52} width="80" height="22" rx="8" fill={i === 0 ? C.olive : C.sage} />
          <rect x={x} y={66} width="80" height="8" fill={i === 0 ? C.olive : C.sage} />
          <Bar x={x + 10} y={60} w={40} h={5} fill={C.paper} />
          {[0, 1, 2, 3].map((r) => (
            <g key={r}>
              <Bar x={x + 10} y={84 + r * 14} w={34} h={4} />
              <Bar x={x + 52} y={84 + r * 14} w={18} h={4} fill={r === 3 ? C.gold : C.line} />
            </g>
          ))}
        </g>
      );
    })}
    {/* PO -> SO flow */}
    <path d="M150 86 H250" stroke={C.paper} strokeWidth="2.5" strokeDasharray="5 4" />
    <path d="M244 81 l7 5 l-7 5" stroke={C.paper} strokeWidth="2.5" fill="none" />
    <path d="M250 116 H150" stroke={C.paper} strokeWidth="2.5" strokeDasharray="5 4" />
    <path d="M156 111 l-7 5 l7 5" stroke={C.paper} strokeWidth="2.5" fill="none" />
    <rect x={180} y={76} width="40" height="18" rx="9" fill={C.ink} />
    <text x={200} y={88} fontSize="8" textAnchor="middle" fill={C.paper} fontFamily="sans-serif">PO → SO</text>
    <rect x={180} y={107} width="40" height="18" rx="9" fill={C.ink} />
    <text x={200} y={119} fontSize="8" textAnchor="middle" fill={C.paper} fontFamily="sans-serif">VAT</text>
    {/* warehouse steps */}
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <rect x={150 + i * 36} y={150} width="28" height="20" rx="4" fill={C.paper} opacity={0.6 + i * 0.2} />
        <rect x={156 + i * 36} y={156} width="16" height="8" rx="2" fill={C.gold} />
      </g>
    ))}
  </Svg>
);

export const AppDeckCover = ({ className }: CoverProps) => (
  <Svg className={className}>
    <Browser x={70} y={20} w={260} h={170} />
    <rect x={150} y={44} width="100" height="12" rx="6" fill={C.soft} />
    <circle cx={160} cy={50} r="3" fill={C.olive} />
    {[0, 1].map((g) => (
      <g key={g}>
        <Bar x={86} y={68 + g * 58} w={40} h={4} fill={C.olive} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x={86 + i * 39} y={78 + g * 58} width="30" height="30" rx="8" fill={[C.olive, C.sage, C.gold, C.ink, C.sage, C.olive][(i + g) % 6]} opacity={i === 5 ? 0.35 : 0.9} />
            <rect x={95 + i * 39} y={87 + g * 58} width="12" height="12" rx="3" fill={C.paper} opacity="0.85" />
          </g>
        ))}
      </g>
    ))}
    {/* keyboard hint */}
    <rect x={280} y={168} width="18" height="14" rx="3" fill={C.ink} />
    <text x={289} y={178} fontSize="8" textAnchor="middle" fill={C.paper} fontFamily="sans-serif">⌘</text>
    <rect x={302} y={168} width="18" height="14" rx="3" fill={C.ink} />
    <text x={311} y={178} fontSize="8" textAnchor="middle" fill={C.paper} fontFamily="sans-serif">K</text>
  </Svg>
);
