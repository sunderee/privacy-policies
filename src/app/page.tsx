import { ModeToggle } from '@/components/mode-toggle';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex h-16 items-center justify-between border-b px-4">
        <div className="text-lg font-semibold">Privacy Policies</div>
        <ModeToggle />
      </div>

      <div className="px-4 py-8 max-w-3xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Legal Documentation Repository</h2>
          <p className="text-muted-foreground">
            This platform serves as the authoritative source for legal
            documentation, including but not limited to privacy policies, terms
            of service, and related legal instruments, applicable to projects
            and services operated under Peter Aleksander Bizjak s.p.
          </p>
          <p className="text-muted-foreground">
            All documents contained herein constitute legally binding
            instruments and are maintained under strict version control
            protocols to ensure transparency and auditability. Each modification
            is documented with appropriate timestamps and change descriptions in
            accordance with applicable regulations and best practices in data
            protection and privacy.
          </p>
        </section>

        <section className="space-y-4 border-t pt-8">
          <h2 className="text-xl font-semibold">Official Communications</h2>
          <p className="text-muted-foreground">
            For inquiries, clarifications, or matters pertaining to the contents
            herein, interested parties may initiate contact through the
            following official channels:
          </p>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="font-medium">Legal Entity:</span> Peter
              Aleksander Bizjak s.p.
            </p>
            <p className="text-sm">
              <span className="font-medium">Repository:</span>{' '}
              <a
                href="https://github.com/sunderee/privacy-policies"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sunderee/privacy-policies
              </a>
            </p>
            <p className="text-sm">
              <span className="font-medium">Official Website:</span>{' '}
              <a
                href="https://peter-aleksander.bizjak.dev"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                peter-aleksander.bizjak.dev
              </a>
            </p>
          </div>
        </section>

        <footer className="text-xs text-muted-foreground border-t pt-8">
          All rights reserved. The contents of this repository are proprietary
          and confidential, subject to viewing permissions for verification and
          transparency purposes only.
        </footer>
      </div>
    </div>
  );
}
