import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '1',
      label: 'Label 1',
      content: 'Conteúdo 1'
    },
    {
      id: '2',
      label: 'Label 2',
      content: 'Conteudo 2'
    },
    {
      id: '3',
      label: 'Label 3',
      content: 'Conteúdo 3'
    },
  ];
  
  return <Accordion items={items} />
}

export default AccordionPage;
