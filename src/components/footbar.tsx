

export default function Footbar() {
    return (
      <div className="fixed bottom-0 right-0 w-full bg-[#000000] pt-5 font-[family-name:var(--font-geist-mono)]">
          <div className="mb-3 flex gap-6 flex-wrap items-center justify-center text-xs">
              <a className="text-sm hover:underline" href="https://www.linkedin.com/in/williamwu277/" target="_blank">LinkedIn</a>
              <a className="text-sm hover:underline" href="https://github.com/Williamwu277" target="_blank">Github</a>
              <a className="text-sm hover:underline" href="/ResumeWilliamE.pdf" target="_blank">Resume</a>
              <a className="text-sm hover:underline" href="/ResumeWilliamE.pdf" target="_blank">Contacts</a>
          </div>
          <div className="mb-1 flex flex-wrap items-center justify-center">
            <p className="text-gray-500 text-xs">© 2025 William Wu</p>
          </div>
      </div>
    );
  }
  