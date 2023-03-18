import ClyBlog from "./ClyBlog";
import PopularBooks from "./PopularBooks";
import Regavana from "./Regavana";
import Solar from "./solar";
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
      heading: "REGAVANA BAND WEB APPLICAITON",
      content: <Regavana />,
    },
    {
      uuid: 4,
      heading: "POPULAR BOOKS WEB APPLICATION",
      content: <PopularBooks />,
    },
  ];

  return (
    <div className="w-full mt-10">
      <p className="header">MY WORKS</p>
      <Accordion allowZeroExpanded={true} className="my-5">
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h1 className="text-2xl md:text-3xl text-center py-5 text-gray-500 hover:text-black duration-300">
                  {item.heading}
                </h1>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="pb-10">
              {item.content}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
