"use client";

import { useLang } from "@/lib/i18n";
import { LogoIcon } from "@/components/LogoIcon";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <>
<main className="pt-32">

<section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-section-gap">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-4 block">{t("about.story")}</span>
<h1 className="font-display-lg text-display-lg text-gradient mb-6 lg:leading-tight">
                        {t("about.title")}
                    </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        {t("about.desc")}
                    </p>
</div>
<div className="lg:col-span-5 relative h-[400px] rounded-xl overflow-hidden shadow-xl">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="glass-panel p-8 rounded-xl text-center max-w-[80%] transform -rotate-2">
<div className="flex justify-center mb-4">
  <LogoIcon size={48} />
</div>
<div className="font-headline-md text-headline-md font-bold mb-2">350k+</div>
<div className="text-body-md text-on-surface-variant">{t("about.stat")}</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface-container-low py-section-gap">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">{t("about.vision")}</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                        We are building a future where artificial intelligence amplifies human potential in every learning environment.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[320px] group transition-all hover:shadow-lg">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
  <LogoIcon size={40} />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Empowering Pedagogy</h3>
<p className="text-body-md text-on-surface-variant">
                            We design tools that respect the art of teaching while automating the science of administration. Our focus is on enabling educators to spend more time with their students.
                        </p>
</div>

<div className="glass-panel p-10 rounded-xl flex flex-col items-center text-center justify-center transition-all hover:shadow-lg border-secondary/20">
<div className="mb-6">
  <LogoIcon size={48} />
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">AI Ethics</h3>
<p className="text-body-md text-on-surface-variant">
                            Commitment to transparent, unbiased, and safe AI integration in EdTech environments.
                        </p>
</div>

<div className="glass-panel p-10 rounded-xl flex flex-col justify-center transition-all hover:shadow-lg">
<h3 className="font-headline-md text-headline-md text-primary mb-3">Future Proof</h3>
<p className="text-body-md text-on-surface-variant">
                            Keeping education systems agile in a rapidly evolving technological landscape.
                        </p>
</div>

<div className="md:col-span-2 relative rounded-xl overflow-hidden h-[300px] shadow-sm">
<div className="bg-cover bg-center w-full h-full" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSxxcajSqeei8CTyDWLHkw3Q35w5syk0yueqEm4poNryvdz3LegDThvr6-peBDYeHTra6_JI5w9bB2lCkgubNXSemKttZ2f9hX6RAXn-xYMj1x-4xZDaXGzg7mh-WdaLo8N5L7Gg4NaniQC79SSYCqVQI7Si-lPsfVVuajLX9WUrO4HD07Ei-1naPpkeTuypg_VNDHspYydEKWKHxCwjqFrJDI0LuPmJ_5-m-mziNKDjodxDhdjvnl1Q')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-10">
<p className="text-white font-headline-md italic">"Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important."</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-gap">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Meet the Minds</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                        A diverse collective of former educators, data scientists, and UX designers united by a single mission.
                    </p>
</div>
<button className="flex items-center gap-2 text-secondary font-semibold hover:gap-4 transition-all">
                    Careers at Growth Log <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Portrait of a female executive with a confident smile, wearing professional modern attire in a brigh" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCo5RNhW13TyvC2EhoCwBGgplVMS_rSPLgT7Gx1cgUTpHYxh1baTrcqHrIj79H2QDdn-EAy4qNUq9fYVbMth0R8kW0Z0C_QumE-eWKmjyaZdRsoQVEeR8oNzR5kKU5xk3DKIkOaYnzx3LHCi19h9HcvryT-d249niCN3YyxdReNyyzRwR7LCFKeeBTIJpNWoi4J11IdNzyahmh7VlHkModL9ZMiSoRhn0-obOBwbBEcQ_4cdmgLAiEYA" />
</div>
<h4 className="font-headline-md text-headline-md text-primary">Dr. Elena Vance</h4>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Founder &amp; CEO</p>
</div>

<div className="group">
<div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Portrait of a male lead developer with glasses, looking thoughtful, in a tech-forward workspace with" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCO6Dy4ufXR30jwlxGSnIfBOFz3tOYCSDDHUv34Rx1nGysBZVwvcTi_FL7swyp4szg_McCOB89yj5hU3FBdy0BbDZrbguDfSQb4yeEMKwAH4e46QUrGRJSfh5YivTXPJYbS2ZJT27oCetSi1wJpQJu_Hs4xbWDqtSU6cSyydOPd2Qqhj_jeMA8698doFvtA5qMQw6QmQPFHSV1QL6MKMmazsz4olYKLsoyrzbRuze2_LVAtzdeMW-7qA" />
</div>
<h4 className="font-headline-md text-headline-md text-primary">Marcus Thorne</h4>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Head of AI Research</p>
</div>

<div className="group">
<div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Portrait of a female product designer with a bright and approachable look, minimalist office backgro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9MGXLmXhTbqI97yCfThZ_yjWkJSi4oym1Rnc9wVU4pHMxViD0xb28SfpnyJktYpyYhZTN_RuBt9vWFH7GuLvw-47AUwOjIkiWasA7UR93nzOk8jvu3So-dMRKm_-xHLv6WnfDmN3R7RIfVHRGL-s2eoMHz6uvyPJQEutUaIEFiABA_s_FC4qsk6IiP02FVjk6Qw753nHCzI21IP-Txs_xM8GK3TxavkoYNcCGr-HQfD3bEFtIBaHtPw" />
</div>
<h4 className="font-headline-md text-headline-md text-primary">Sarah Chen</h4>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Director of Design</p>
</div>

<div className="group">
<div className="relative mb-4 rounded-xl overflow-hidden aspect-square">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Portrait of a male education consultant in a modern academic setting, smiling warmly. Professional l" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMSfpbxh2oam3vQSPxyq4iMHZH--EAG2kiNEoP3NGJWo4JckgX11IAAlG3-o_KstUc5__lU6YzGgV_2pidgc8XlEY-ys-No9ZkZe7BVkV26vBpyrdmqaKPYyspKs3EjBKQeGw2ftsC4rnOxqFIdX2fXEbcbgCyN6jK4gQAFDkw7Kp1LYvS9O8NlwFQPvHu_wxmM9rJYmWIKVwDQg9gZWPzPuY4KMpUVVZ37f8rzibDMx0wu2iNpYzzvg" />
</div>
<h4 className="font-headline-md text-headline-md text-primary">Julian Ross</h4>
<p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Lead Pedagogy Advisor</p>
</div>
</div>
</section>

<section className="relative py-section-gap overflow-hidden">
<div className="absolute inset-0 -z-10 bg-primary-container">

</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display-lg text-display-lg text-white mb-6">Let's shape the future of learning.</h2>
<p className="font-body-lg text-body-lg text-on-primary-container/80 mb-10">
                            Whether you're an educator, a researcher, or a potential partner, we'd love to hear how you're envisioning the role of AI in education.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined">mail</span>
</div>
<span className="font-body-md">hello@growthlog.ai</span>
</div>
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined">location_on</span>
</div>
<span className="font-body-md">Silicon Valley, CA • remote-first</span>
</div>
</div>
</div>
<div className="glass-panel p-8 md:p-12 rounded-xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Full Name</label>
<input className="w-full bg-surface-container-lowest/80 border-outline-variant focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 outline-none transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Email Address</label>
<input className="w-full bg-surface-container-lowest/80 border-outline-variant focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 outline-none transition-all" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Subject</label>
<select className="w-full bg-surface-container-lowest/80 border-outline-variant focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 outline-none transition-all">
<option>Partnership Inquiry</option>
<option>Press &amp; Media</option>
<option>Support</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="font-label-sm text-label-sm text-on-surface-variant">Message</label>
<textarea className="w-full bg-surface-container-lowest/80 border-outline-variant focus:border-secondary focus:ring-secondary rounded-lg px-4 py-3 outline-none transition-all" placeholder="Tell us how we can help..." rows={4}></textarea>
</div>
<button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-secondary transition-all active:scale-95 shadow-md" type="submit">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
