export function ServicesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 2H11V11H2V2ZM4 4V9H9V4H4Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 2H22V11H13V2ZM15 4V9H20V4H15Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2 13H11V22H2V13ZM4 15V20H9V15H4Z"
        fill="black"
      />
      <path
        d="M18.5 13V16.5H22V18.5H18.5V22H16.5V18.5H13V16.5H16.5V13H18.5Z"
        fill="black"
      />
    </svg>
  );
}
