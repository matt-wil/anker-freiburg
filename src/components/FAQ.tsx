"use client"

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionItem from "@/components/AccordionItem";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FAQ = () => {
    const t = useTranslations();
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const handleToggle = (index: string) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useGSAP(() => {
        const split = SplitText.create(".header", {
            type: "chars",
        });

        document.fonts.ready.then(() => {
            gsap.from(split.chars, {
                y: 100,
                autoAlpha: 0,
                stagger: {
                    amount: 0.5,
                    from: "random"
                },
            });
        });
    }, []);

    const faqCategories = [
        { headerKeyPart: '1', prefix: 'General', count: 5 },
        { headerKeyPart: '2', prefix: 'Tattoo', count: 7 },
        { headerKeyPart: '3', prefix: 'TattooCare', count: 5 },
        { headerKeyPart: '4', prefix: 'Piercing', count: 6 },
        { headerKeyPart: '5', prefix: 'PiercingCare', count: 5 },
        { headerKeyPart: '6', prefix: 'Jewellery', count: 2 },
        { headerKeyPart: '7', prefix: 'Safety', count: 1 },
        { headerKeyPart: '8', prefix: 'Specials', count: 1 }
    ];

    return (
        <div className='flex flex-col justify-center items-center text-center m-4'>
            <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl mb-8 font-bold header'>{t('faq.header')}</h1>

            {faqCategories.map((category, catIndex) => (
                <div className='md:max-w-[50dvw] w-auto' key={catIndex}>
                    <h2 className='text-2xl md:text-4xl xl:text-7xl mt-10 mb-6 font-bold'>
                        {t(`faq.subHeader${category.headerKeyPart}`)}
                    </h2>
                    {[...Array(category.count)].map((_, questionIndex) => {
                        const questionNum = questionIndex + 1; 
                        const questionKey = `faq.question${category.prefix}${questionNum}`;
                        const answerKey = `faq.answer${category.prefix}${questionNum}`;
                        const combinedIndex = `${category.prefix}-${questionNum}`; 
                        const questionText = t(questionKey);
                        const answerText = t(answerKey);

                        if (!questionText || questionText === questionKey) {
                            return null;
                        }

                        return (
                            <AccordionItem
                                key={combinedIndex}
                                question={questionText}
                                answer={answerText}
                                isOpen={openIndex === combinedIndex}
                                onClick={() => handleToggle(combinedIndex)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}

export default FAQ;
