"use client";

import { CategoryBar } from "@/components/CategoryBar";

export default function HomePage() {
  return (
    <>
<main className="pt-24 pb-section-gap">

<section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mb-10">
  <CategoryBar active="all" variant="home" />
</section>

<section className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
<div className="bento-grid">

<div className="bento-item-large group cursor-pointer overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm border border-outline-variant/30 flex flex-col">
<div className="aspect-[16/9] w-full overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="A cinematic, high-resolution shot of a modern workspace with a holographic interface displaying comp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_uiyU9hs4jlu2RCwTWUR30_XbUi9t4yyftBayDFv7c2ARqUJI6p5lrGVQGVD8iuGzW_4mdvaaBOO7H5DpizGMofIzlWwtY4rN5qqwdTyITe9jjkpVVChybzLljNnjAHLRi9hWqB4w0JbMsQuXDhZiSW8tH_WbUG31q_aUvu3ZBGLSQwC7BcEfpgJUAqB9K7uqiK2oBvnqwzqF-AkJ8_pVg5Q5NKnUvpMfp8phBUlicu9Xy0WPOyDRYA" />
<div className="absolute top-6 left-6">
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg">AI</span>
</div>
</div>
<div className="p-8">
<div className="flex items-center gap-4 mb-4 text-on-surface-variant font-label-sm">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> May 14, 2024</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 12 min read</span>
</div>
<h2 className="font-headline-lg text-headline-lg mb-4 group-hover:text-secondary transition-colors">The Algorithmic Classroom: How Generative AI is Rewriting Curriculum Development</h2>
<p className="text-on-surface-variant font-body-lg text-body-lg mb-6 line-clamp-2">
                            Traditional lesson planning is being disrupted by large language models. Explore how educators are leveraging prompt engineering to create deeply personalized learning trajectories at scale.
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-dim overflow-hidden">
<img className="w-full h-full object-cover" alt="Close up portrait of a professional female researcher in a bright, modern studio. She has a thoughtf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBujF9CCoj5yVPNM3nKIcVED1XUoIshYLIitTMTd9oUJbY2SYUmj9vRbWXBA3jbx1EjmkbUQ3GvH6uEkaq4tG8-kmjSpNFqOCvxU2aV_ScxRxq8P4KvSA3wxT5rISCZpFvcSW94StCHJ8PrYfy-cVUq_1nO_rTrOvyXkeWyPoSvFbAmjvVlCISaQ1OOZcPQ2oRTx7HnW2G0R4w9_eXlNipLeZedVwIjwoUZLjJc0XwTv64ivaL1e_jnaw" />
</div>
<div>
<div className="font-bold">Dr. Elena Vance</div>
<div className="text-on-tertiary-container text-label-sm">Chief of AI Research</div>
</div>
</div>
</div>
</div>

<div className="bento-item-side group cursor-pointer bg-surface-container-high rounded-xl p-8 flex flex-col justify-between border border-transparent hover:border-secondary/30 transition-all">
<div>
<span className="text-secondary-fixed-dim bg-secondary/10 px-3 py-1 rounded-md font-label-sm inline-block mb-4">기업교육</span>
<h3 className="font-headline-md text-headline-md mb-4 group-hover:text-secondary transition-colors">Basics of Neural Networks for Teachers</h3>
<p className="text-on-surface-variant mb-6 line-clamp-3">Understanding the fundamental architecture of LLMs without needing a degree in mathematics.</p>
</div>
<div className="flex justify-between items-center mt-4">
<span className="font-label-sm text-on-surface-variant">4 min read</span>
<span className="material-symbols-outlined text-secondary transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>

<div className="bento-item-side group cursor-pointer bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden flex flex-col shadow-sm">
<div className="h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="An abstract visualization of digital neural networks merging with traditional organic brain patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADPX-bScjKDCEcCH8tyotA5rEGWEShwzxqoKRrQS6HbPXdUr7YXnjM2ovIt4H4vl7m-XOoQsNEU2HxA_414AfCeb9bcfbnXRy1TeZ1R3wB_ogx2pAVuSshvRlefHyGHHWUAPwCjb4_tXQ9W4D9XT1v1V_vhD3Iel_nwbSNq14ijGv3ieTh-lC2IVJRyVwLqHkK0AheAoPvDYEQiObBPIdm4_DTYv8vFZqWz5j1BiGA3GWM-3K1MhPHpg" />
</div>
<div className="p-6">
<span className="text-on-tertiary-fixed-variant font-label-sm mb-2 block uppercase tracking-widest">조직문화</span>
<h3 className="font-headline-md text-[20px] mb-2 group-hover:text-secondary transition-colors">The 2024 Remote Learning Report</h3>
<p className="text-on-surface-variant text-body-md line-clamp-2">How global connectivity and edge computing are making high-quality AI tutoring available in low-bandwidth regions.</p>
</div>
</div>

<div className="bento-item-normal group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-surface-container-low border border-outline-variant/20">
<img className="w-full h-full object-cover" alt="A brightly lit modern university laboratory where students are wearing sleek AR headsets. The room i" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHa3Gb8n-akvx2qETUZ0IN---i1kryIixH7IV16ptw7Z_lgG1GGIiO1aGk48WHHi0CN2tlrXI231QUIOP3BnfhiwzYXNbKDM29HDMb88ZW90B05Uh4e0k14ABokmU7FscaYjt29goAmB3hsg2CecwhZa2faLRBuB1rWyImWv9GdSR2LTplBAFkb4eQl7a1vMl-d5ZXpwWfWPPDOCwAcncjY_SIvvcw8IrWzm6Wq6a3Id98eRzNoqOfLA" />
</div>
<h4 className="font-headline-md text-[18px] mb-2 group-hover:text-secondary">AI in the Primary Classroom: Success Stories</h4>
<p className="text-on-surface-variant text-body-md">Small-scale implementations that saw massive gains in literacy and numeracy.</p>
</div>
<div className="bento-item-normal group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-surface-container-low border border-outline-variant/20">
<img className="w-full h-full object-cover" alt="An artistic representation of data streaming like waterfalls into a glowing book. The style is surre" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZTEuF6ocoMTRJa4SGC0_Upo0ZV0mbelAfvDuOPfJbJRDVnIPpuhMiW7T8tGqccJdxtFyDQHSp2zDuWNsfQyPk9Ohe_G7k2kEvp1f8THkCmtyw-7nSRAE3bJ3snlUFEyu-dRau6ZRQAm0t-te1MNFRgsWb-hQ9mMhjifveXI3b6NfXw5cQ0lR5PYMl75915wKy5YjsQJufFGdhhaheTXt9FVmhTQlfBNRoMs3yz7VJbSyqZUEs0gSNLg" />
</div>
<h4 className="font-headline-md text-[18px] mb-2 group-hover:text-secondary">Rethinking Academic Honesty in the Age of LLMs</h4>
<p className="text-on-surface-variant text-body-md">Moving from detection to collaboration: A new framework for evaluation.</p>
</div>
<div className="bento-item-normal group cursor-pointer">
<div className="aspect-video rounded-lg overflow-hidden mb-4 bg-surface-container-low border border-outline-variant/20">
<img className="w-full h-full object-cover" alt="A workspace featuring a very clean, minimalist desk with a single laptop and a high-end microphone. " src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_Eo2pe3boIzRInEEarBxS6STUGJnREVFU_mJLoIH0eIqLW5xn-0-T0OCcE2Ioc2tT1bzqLOd0w4tj7JHDmFEbXTYuUYTbekib8s28PKQZnbNUJ4a5Ji-j5WwmRUtFLDi3H5230AgElHpSjPY1bqd5UTZ8HO6pgcotdRmMcSeYAAMN_jtz34SlgT9M9XmNrcRE_zdYnKoKRE9fYGTBSEBhOdOeLrTEvpM-YgfzcdJVznLPxFqa-VHGyA" />
</div>
<h4 className="font-headline-md text-[18px] mb-2 group-hover:text-secondary">Micro-Learning: Why Your Brain Prefers 5-Minute Lessons</h4>
<p className="text-on-surface-variant text-body-md">Cognitive science behind the rise of bite-sized educational content.</p>
</div>
</div>
</section>
</main>
    </>
  );
}
