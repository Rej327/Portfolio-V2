import ClyBlog from "./ClyBlog";
import PopularBooks from "./PopularBooks";
import Regavana from "./Regavana";
import Solar from "./Solar";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

export default function MyWorks() {
  const items = [
    {
      uuid: 1,
      heading: "SIDEREAL SOLAR WEBSITE",
      content: <Solar />,
    },
    {
      uuid: 2,
      heading: "CLY BLOG WEB APPLICATION",
      content: <ClyBlog />,
    },
    {
      uuid: 3,
      heading: "REGAVANA BAND WEB APPLICATION",
      content: <Regavana />,
    },
    {
      uuid: 4,
      heading: "POPULAR BOOKS WEB APPLICATION",
      content: <PopularBooks />,
    },
  ];

  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className="w-full pt-28"
      id="works"
    >
      <p className="header">MY WORKS</p>
      <Accordion allowZeroExpanded={true} className="mt-10">
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="text-2xl md:text-3xl text-center py-5 text-gray-500 hover:text-black duration-300">
                  {item.heading}
                </h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="pb-10 max-w-[1600px] mx-auto">
              {item.content}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
