import { GoChevronDown, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState } from "react";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const handleClick = (nextIndex) => {
        console.log('Valor obsoleto de expandedIndex', expandedIndex);

        // Versão funcional Setter para bug de delay na 
        // atualização de valores com Setter
        setExpandedIndex((currentExpandedIndex) => {
            console.log('Valor atualizado de expandedIndex', currentExpandedIndex);
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });

        // Versão padrão usada 99% das vezes para 
        // funcionalidade toggle:
        //
        // if (expandedIndex === nextIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    };

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
