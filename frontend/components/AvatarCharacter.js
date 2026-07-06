export default function AvatarCharacter({ talking = false }) {
  return (
    <div className="css-avatar" aria-hidden="true">
      <div className={`avatar-character${talking ? ' is-talking' : ''}`}>
        <div className="hair-back"></div>

        <div className="head">
          <div className="ear ear-left"></div>
          <div className="ear ear-right"></div>
          <div className="blush blush-left"></div>
          <div className="blush blush-right"></div>
          <div className="eyebrow eyebrow-left"></div>
          <div className="eyebrow eyebrow-right"></div>
          <div className="eye eye-left"><div className="eye-shine"></div></div>
          <div className="eye eye-right"><div className="eye-shine"></div></div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>

        <div className="hair-front"></div>
        <div className="hair-strand strand-left"></div>
        <div className="hair-strand strand-right"></div>

        <div className="neck"></div>

        <div className="body">
          <div className="collar"></div>
          <div className="zip"></div>
        </div>

        <div className="arm arm-left"><div className="hand hand-left"></div></div>
        <div className="arm arm-right"><div className="hand hand-right"></div></div>

        <div className="laptop">
          <div className="laptop-screen"><div className="laptop-logo"></div></div>
          <div className="laptop-base"></div>
        </div>

        <div className="leg leg-left"><div className="cuff"></div><div className="shoe shoe-left"></div></div>
        <div className="leg leg-right"><div className="cuff"></div><div className="shoe shoe-right"></div></div>
      </div>

      <svg className="doodle-arrow" viewBox="0 0 100 90" aria-hidden="true">
        <path
          d="M6 8 C 34 4, 56 18, 58 34 C 60 48, 46 46, 48 34 C 50 24, 66 22, 70 34"
          fill="none"
          stroke="#e9e4ff"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M60 46 L58 34 L72 38"
          fill="none"
          stroke="#e9e4ff"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}