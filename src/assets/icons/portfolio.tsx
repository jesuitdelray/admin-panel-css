export function PortfolioIcon({ className }: { className?: string }) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6C17 8.76142 14.7614 11 12 11C9.23858 11 7 8.76142 7 6ZM12 3C10.3431 3 9 4.34315 9 6C9 7.65685 10.3431 9 12 9C13.6569 9 15 7.65685 15 6C15 4.34315 13.6569 3 12 3Z"
      />
      <path d="M4.06189 21C4.55399 17.0537 7.92038 14 12 14C12.8952 14 13.7541 14.1467 14.5553 14.4165L15.503 14.7357L16.1413 12.8403L15.1936 12.5211C14.1895 12.1829 13.1151 12 12 12C6.47715 12 2 16.4772 2 22V23H11V21H4.06189Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 12.5858L23.4142 16L16.4142 23H13V19.5858L20 12.5858ZM15 20.4142V21H15.5858L20.5858 16L20 15.4142L15 20.4142Z"
      />
    </svg>
  );
}
