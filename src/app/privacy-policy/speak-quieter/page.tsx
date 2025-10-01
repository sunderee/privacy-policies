import { ModeToggle } from "@/components/mode-toggle";

export default function SpeakQuieterPrivacyPolicyPage() {
    return (
        <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between border-b px-4">
                <div className="text-lg font-semibold">Privacy Policy | Speak Quieter</div>
                <ModeToggle />
            </div>
            <main className="py-12">
                <div className="px-6">
                    <article className="space-y-8">
                        <p className="text-muted-foreground text-lg">
                            Last Updated: October 1, 2025
                        </p>

                        <p className="text-muted-foreground text-lg">
                            Thank you for using Speak Quieter. We value your privacy and are committed to being
                            transparent about how we handle your information.
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter is a voice monitoring application designed to help you maintain awareness
                                of your speaking volume. The app monitors ambient sound levels using your device&apos;s
                                microphone and provides real-time feedback and notifications when volume levels exceed
                                your configured thresholds.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">2. Privacy First: What We Don&apos;t Do</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter is built with privacy as its foundation. Here&apos;s what we explicitly do NOT do:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Audio Recording</strong>: We never record, save, or store any audio data from your microphone.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Internet Access</strong>: The app does not connect to the internet or transmit any data whatsoever.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Analytics</strong>: We do not use any analytics tools to track user activity or behavior.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No User Accounts</strong>: Speak Quieter does not require or support user accounts.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Third-Party Services</strong>: We do not integrate with any third-party analytics, advertising, or data collection services.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">No Personal Data</strong>: No personal or device information is collected or transmitted.</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">3. How the App Works</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter operates entirely on your device using real-time audio level monitoring:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>The app accesses your microphone to measure ambient sound levels in real-time</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Sound level data is analyzed instantly and immediately discarded</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>No audio is recorded or saved at any point</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Notifications are triggered locally based on your configured thresholds</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Your app settings and preferences are stored only on your device</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">4. Required Permissions</h2>
                            <p className="text-muted-foreground text-lg">
                                To function properly, Speak Quieter requires the following permissions:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Microphone Access</strong>: Required to measure ambient sound levels. The app analyzes audio in real-time but never records or stores audio data.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span><strong className="text-foreground font-semibold">Notification Permission</strong>: Required to alert you when sound levels exceed your configured thresholds, even when the app is running in the background.</span>
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-lg mt-3">
                                These permissions are used solely for the app&apos;s core functionality and no data collected
                                through these permissions is ever transmitted off your device.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">5. Local Storage</h2>
                            <p className="text-muted-foreground text-lg">
                                The only data stored by Speak Quieter is your app preferences and settings, which include:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Volume thresholds for quiet, moderate, and high noise levels</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Alert configuration settings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Notification preferences</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Sampling rate and timing preferences</span>
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-lg mt-3">
                                All settings are stored locally on your device and are never synchronized, backed up to
                                cloud services, or transmitted elsewhere. If you delete the app, all settings are
                                permanently removed from your device.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">6. Data Collection</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter does not collect, store, process, or transmit any data. The app is
                                completely offline and operates entirely on your device without any network connectivity.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">7. Data Sharing</h2>
                            <p className="text-muted-foreground text-lg">
                                Since no data is collected, no data is shared with any third parties, services, or
                                entities for any purpose whatsoever.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">8. Children&apos;s Privacy</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter is suitable for users of all ages as it does not collect any personal
                                information, does not connect to the internet, and operates entirely on-device.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">9. Third-Party Services</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter does not use any third-party services, frameworks, or tools that collect,
                                process, or transmit user data. The app is built using native iOS frameworks and operates
                                completely offline.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">10. Regional Compliance</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter is available globally and adheres to GDPR, CCPA, and all other applicable
                                privacy regulations by design. Since no user data is collected, processed, or transmitted,
                                the app inherently complies with the strictest privacy standards worldwide.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">11. Your Control</h2>
                            <p className="text-muted-foreground text-lg">
                                You maintain complete control over the app at all times:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>You can revoke microphone or notification permissions at any time through iOS settings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>You can delete the app at any time, which removes all settings from your device</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>No account or registration is required, so there&apos;s nothing to cancel or delete elsewhere</span>
                                </li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">12. Changes to This Privacy Policy</h2>
                            <p className="text-muted-foreground text-lg">
                                We may update this policy to reflect changes in legal requirements or app functionality.
                                Any updates will be effective immediately upon posting. Since the app does not collect
                                data or connect to the internet, we cannot notify you of policy changes through the app.
                                We recommend checking this page periodically for updates.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">13. Contact Information</h2>
                            <p className="text-muted-foreground text-lg">
                                If you have questions or concerns about this Privacy Policy, you can contact us at:
                            </p>
                            <div className="pl-4 border-l-2 border-primary py-2 text-muted-foreground text-lg">
                                <p><strong className="text-foreground font-semibold">Peter Aleksander Bizjak s.p.</strong></p>
                                <p><strong className="text-foreground font-semibold">Email</strong>: peter.aleksander@bizjak.dev</p>
                                <p><strong className="text-foreground font-semibold">Location</strong>: Slovenia</p>
                            </div>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-foreground">14. Summary</h2>
                            <p className="text-muted-foreground text-lg">
                                Speak Quieter is designed to be the most privacy-respecting voice monitoring app available:
                            </p>
                            <ul className="space-y-3 pl-6 text-muted-foreground text-lg">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>100% local processing - everything happens on your device</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>Zero data collection - we don&apos;t know who you are or how you use the app</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>No network access - the app never connects to the internet</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>No audio recording - sound levels are analyzed in real-time and immediately discarded</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground"></span>
                                    <span>No third parties - no analytics, no ads, no tracking of any kind</span>
                                </li>
                            </ul>
                            <p className="text-muted-foreground text-lg mt-3">
                                Your privacy is not just protected—it&apos;s guaranteed by design.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
        </div>
    );
}

