import { ModeToggle } from "@/components/mode-toggle";

export default function NewsYPrivacyPolicyPage() {
    return (
        <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between border-b px-4">
                <div className="text-lg font-semibold">Privacy Policy | NewsY</div>
                <ModeToggle />
            </div>
            <main className="py-12">
                <div className="px-6">
                    <article className="space-y-8">
                        <p className="text-muted-foreground text-lg">
                            Last Updated: November 27, 2024
                        </p>

                        <p className="text-muted-foreground text-lg">
                            Thank you for using NewsY. We value your privacy and are committed to being
                            transparent about how we handle your information.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                            <p className="text-muted-foreground text-lg">
                                NewsY is a news application that provides you with the latest updates and articles
                                from various sources.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">2. Data Collection</h2>
                            <p className="text-muted-foreground text-lg">
                                NewsY collects limited data to improve app performance and user experience.
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Analytics Data</strong>: We use Firebase Analytics to collect anonymous usage data such as app opens, feature usage, and general user behavior patterns.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Crash Reports</strong>: Firebase Crashlytics collects anonymous crash reports to help us identify and fix app issues.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Device Information</strong>: Limited device information such as device type, operating system version, and app version may be collected to improve compatibility.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">3. Data Usage</h2>
                            <p className="text-muted-foreground text-lg">
                                The data we collect is used solely for the following purposes:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>To improve app performance and reliability</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>To understand user behavior and preferences</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>To identify and fix technical issues</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">4. Data Sharing</h2>
                            <p className="text-muted-foreground text-lg">
                                We do not sell or share your data with third parties except as described below:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Firebase</strong>: Data collected is processed by Firebase (Google) according to their privacy policy.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Legal Requirements</strong>: We may disclose data if required by law or to protect our rights.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">5. Children&apos;s Privacy</h2>
                            <p className="text-muted-foreground text-lg">
                                NewsY is not intended for use by individuals under the age of 13. We do not knowingly
                                collect data from children under 13.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">6. Third-Party Services</h2>
                            <p className="text-muted-foreground text-lg">
                                NewsY uses the following third-party services:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Firebase Analytics</strong>: Collects anonymous usage data to help us understand how users interact with the app.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Firebase Crashlytics</strong>: Collects crash reports to help identify and fix app issues.</span>
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-lg mt-3">
                                These services are subject to their own privacy policies. For more information, please
                                visit <a href="https://firebase.google.com/support/privacy" className="text-primary hover:underline">Firebase Privacy Policy</a>.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">7. Your Choices</h2>
                            <p className="text-muted-foreground text-lg">
                                You can control data collection through the following options:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Analytics Opt-Out</strong>: You can disable analytics collection in the app settings.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Device Settings</strong>: You can use your device settings to limit tracking and data collection.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">8. Regional Compliance</h2>
                            <p className="text-muted-foreground text-lg">
                                NewsY adheres to GDPR, CCPA, and other applicable privacy regulations. We process
                                data in accordance with these laws and provide users with rights as required.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground text-lg">
                                We may update this policy to reflect changes in legal requirements or app functionality.
                                Any updates will be effective immediately upon posting.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">10. Contact Information</h2>
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
