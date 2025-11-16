import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";
import { useTranslations } from "next-intl";

const Faq = () => {
  const t = useTranslations("faq");

  // Array of FAQ keys to map through
  const faqKeys = ["1", "2", "3", "4", "5"];

  return (
    <section className="w-full mt-20 md:mt-16" id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{t("title")}</h2>
      <Accordion type="single" collapsible>
        {faqKeys.map((key) => (
          <AccordionItem key={key} value={`item-${key}`}>
            <AccordionTrigger>{t(`items.${key}.question`)}</AccordionTrigger>
            <AccordionContent>{t(`items.${key}.answer`)}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
