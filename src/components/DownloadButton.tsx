"use client";
type DownloadButtonProps = {
  text: string;
  document: string;
  className?: string;
  downloadName: string;
};
const DownloadButton = ({
  text,
  document,
  className,
  downloadName,
}: DownloadButtonProps) => {
  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!window.confirm("Herunterladen/Download?")) {
      e.preventDefault();
    }
  };
  return (
    <a
      href={`/${document}`}
      download={downloadName}
      onClick={handleDownload}
      className={`${className} p-4 m-4 rounded bg-white text-[var(--ankerBlue)] cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out shadow-lg hover:shadow-xl`}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
