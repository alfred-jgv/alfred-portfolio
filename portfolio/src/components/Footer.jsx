import { Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 py-10 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Copyright */}
        <p className="text-stone-500 text-sm font-light tracking-wide">
          © 2025 Jan Alfred G. Violanta · Crafted with{" "}
          <span className="font-medium text-stone-700">React</span> &{" "}
          <span className="font-medium text-stone-700">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
