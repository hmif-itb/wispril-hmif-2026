import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 right-0 ">
      <div
        className="flex items-center gap-10 bg-[#3E00CF] text-[#EAEA00] px-12 py-4 shadow-xl"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 40px 100%, 0 calc(100% - 40px))",
        }}
      >
        <ul className="flex gap-8 items-center text-xl font-semibold tracking-wide">
          <li>
            <Link
              href="/visi-misi"
              className="hover:text-white transition-colors duration-200"
            >
              Visi dan Misi
            </Link>
          </li>
          <li>
            <Link
              href="/wisnight"
              className="hover:text-white transition-colors duration-200"
            >
              Wisnight
            </Link>
          </li>
          <li>
            <Link
              href="/arak-arakan"
              className="hover:text-white transition-colors duration-200"
            >
              Arak-arakan
            </Link>
          </li>
        </ul>

        <div className="w-14 h-14 ml-2">
          <img
            src="/logo.svg"
            alt="Logo Placeholder"
            className="w-full h-full object-contain drop-shadow-md"
          />
        </div>
      </div>
    </nav>
  );
}