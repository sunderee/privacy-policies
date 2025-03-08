import { ModeToggle } from "@/components/mode-toggle";

export default function DiskursPrivacyPolicyPage() {
    return (
        <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between border-b px-4">
                <div className="text-lg font-semibold">Privacy Policy | Diskurs</div>
                <ModeToggle />
            </div>
            <main className="py-12">
                <div className="px-6">
                    <article className="space-y-8">
                        <p className="text-muted-foreground text-lg">
                            Last Updated: November 27, 2024
                        </p>

                        <p className="text-muted-foreground text-lg">
                            Thank you for using Diskurs. We value your privacy and are committed to being
                            transparent about how we handle your information.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                            <p className="text-muted-foreground text-lg">
                                Diskurs is a thesaurus application designed for Slovenian, Croatian, and Serbian
                                languages, powered by kontekst.io. The app provides word and phrase suggestions
                                using contemporary language corpora.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">2. Data Collection</h2>
                            <p className="text-muted-foreground text-lg">
                                Diskurs does not collect, store, or process any personal data.
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Accounts</strong>: Diskurs does not require or support user accounts.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Analytics</strong>: We do not use analytics tools to track user activity.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No User Information</strong>: No personal or device information is collected or transmitted.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">3. Data Usage</h2>
                            <p className="text-muted-foreground text-lg">
                                Since no user data is collected, no data is processed, used, or shared for any purpose.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">4. Children&apos;s Privacy</h2>
                            <p className="text-muted-foreground text-lg">
                                Diskurs is not intended for use by individuals under the age of 18. The app may display
                                language that is not suitable for minors.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">5. Third-Party Services</h2>
                            <p className="text-muted-foreground text-lg">
                                Diskurs uses kontekst.io to fetch related words and phrases. This service processes
                                language data independently and does not involve user information.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">6. Regional Compliance</h2>
                            <p className="text-muted-foreground text-lg">
                                Diskurs is available globally and adheres to GDPR and other applicable privacy
                                regulations by design, as no user data is collected or processed.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">7. Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground text-lg">
                                We may update this policy to reflect changes in legal requirements or app functionality.
                                Any updates will be effective immediately upon posting.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">8. Contact Information</h2>
                            <p className="text-muted-foreground text-lg">
                                If you have questions or concerns about this Privacy Policy, you can contact us at:
                            </p>
                            <div className="pl-4 border-l-2 border-primary py-2 text-muted-foreground text-lg">
                                <p><strong className="text-foreground font-semibold">Peter Aleksander Bizjak s.p.</strong></p>
                                <p><strong className="text-foreground font-semibold">Email</strong>: peter.aleksander@bizjak.dev</p>
                                <p><strong className="text-foreground font-semibold">Location</strong>: Slovenia</p>
                            </div>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
} 