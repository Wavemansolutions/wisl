export default function BrandMark() {
  return (
    <span className="brand-lockup" aria-hidden="true">
      <svg className="brand-wave" viewBox="0 0 64 42" fill="none">
        <path d="M4 7h12l9 25H14L4 7Z" fill="currentColor" opacity=".95"/>
        <path d="M23 7h12l9 25H33L23 7Z" fill="currentColor" opacity=".72"/>
        <path d="M42 7h12L44 32H33L42 7Z" fill="currentColor"/>
      </svg>
      <span className="brand-words"><strong>WAVEMAN</strong><small>INTEGRATED SOLUTIONS</small></span>
    </span>
  );
}
